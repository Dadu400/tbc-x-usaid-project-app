import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(request: NextRequest) {
  const user_id = request.nextUrl.pathname.replace("/api/orders/", "");

  try {
    const response = await sql`SELECT * FROM orders WHERE user_id = ${user_id}`;
    const orders = response.rows;

    for (const order of orders) {
      const productIdAndQuantities =
        await sql`SELECT * FROM order_products WHERE order_id = ${order.id}`;
      order.products = [];

      for (const productIdAndQuantity of productIdAndQuantities.rows) {
        const productDetails =
          await sql`SELECT * FROM products WHERE id = ${productIdAndQuantity.product_id}`;
        order.products.push({
          productDetails: productDetails.rows[0],
          quantity: productIdAndQuantity.quantity,
        });
      }
    }

    return NextResponse.json({ orders }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const orderId = request.nextUrl.pathname.replace("/api/orders/", "");

  try {
    await sql`UPDATE orders SET status = 'უარყოფილია' WHERE id = ${orderId}`;
    return NextResponse.json({ message: "Order canceled" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
