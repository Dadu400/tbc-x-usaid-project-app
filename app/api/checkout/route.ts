import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
import { Product } from "../../../components/products/Cart";

const getActiveProducts = async () => {
  const checkoutProducts = await stripe.products.list();
  const availableProducts = checkoutProducts.data.filter(
    (product: any) => product.active === true
  );
  return availableProducts;
};

export const POST = async (request: any) => {
  try {
    const { products } = await request.json();
    const data: Product[] = products;

    let activeProducts = await getActiveProducts();

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

    activeProducts = await getActiveProducts();
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
      success_url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/success`,
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
