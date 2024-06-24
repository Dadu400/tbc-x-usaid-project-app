import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import { Product } from "../../../components/products/Cart";
import { Client } from "pg";
import { sql } from "@vercel/postgres";

const getActiveProductsInStripe = async () => {
  const checkoutProducts = await stripe.products.list();
  const availableProducts = checkoutProducts.data.filter(
    (product: any) => product.active === true
  );
  return availableProducts;
};

const createOrder = async (products: Product[], user: any) => {
  const client = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    await client.connect();
    await client.query("BEGIN");

    const {
      rows: [order],
    } = await client.query(
      `INSERT INTO orders (name, surname, phone, address, status, user_id)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id`,
      [user.name, user.surname, user.phone, user.address, "pending", user.id]
    );

    const productQuantityMap = products.reduce(
      (acc: { [key: string]: number }, product: Product) => {
        acc[product.id] = product.quantity;
        return acc;
      },
      {}
    );

    for (const productId in productQuantityMap) {
      await client.query(
        `INSERT INTO order_products (order_id, product_id, quantity)
         VALUES ($1, $2, $3)`,
        [order.id, productId, productQuantityMap[productId]]
      );
    }

    await client.query("COMMIT");
    return order.id;
  } catch (error) {
    await client.query("ROLLBACK");
    throw error;
  } finally {
    await client.end();
  }
};

const clearCart = (userId: number) => {
  return sql`UPDATE carts SET products = '{}' WHERE user_id = ${userId}`;
};

export const POST = async (request: any) => {
  try {
    const { products, user } = await request.json();
    const data: Product[] = products;

    const orderId = await createOrder(products, user);
    clearCart(user.id);

    let activeProducts = await getActiveProductsInStripe();
    for (let product of data) {
      const stripeProduct = activeProducts.find(
        (stripeProduct: any) =>
          stripeProduct?.name?.toLowerCase() === product.title.toLowerCase()
      );

      if (!stripeProduct) {
        await stripe.products.create({
          name: product.title,
          default_price_data: {
            unit_amount: product.price * 100,
            currency: "usd",
          },
        });
      }
    }

    activeProducts = await getActiveProductsInStripe();
    let stripeItems: any = [];
    for (let product of data) {
      const stripeProduct = activeProducts.find(
        (prod: any) => prod?.name?.toLowerCase() === product.title.toLowerCase()
      );

      if (stripeProduct) {
        stripeItems.push({
          price: stripeProduct.default_price,
          quantity: product?.quantity,
        });
      }
    }
    const session = await stripe.checkout.sessions.create({
      line_items: stripeItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/success?orderId=${orderId}`,
      cancel_url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/cancel`,
    });

    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (error) {
    console.error("Error processing products:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
