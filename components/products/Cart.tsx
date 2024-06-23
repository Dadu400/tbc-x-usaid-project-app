import Image from "next/image";
import LegoEcho from "../../public/LegoEcho.png";
import { getUserCart } from "../../helpers/axios";
import { getProducts } from "../../helpers/axiosProduct";
import CounterButton from "./CounterButton";
import EmptyCartButton from "./EmptyCartButton";
import RemoveProductButton from "./RemoveProductButton";
import { getTranslations } from "next-intl/server";
import CartComponent from "../checkout/CartComponent";

export interface Product {
  id: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

export const revalidate = 0;

async function CartContainer({ session }: any) {
  const t = await getTranslations("Cart");
  if (session === undefined) {
    return (
      <div className="text-center mt-8">
        <h2 className="text-2xl font-bold mb-4">{t("message")}</h2>
      </div>
    );
  }

  const cart = await getUserCart(session.user.id);
  const cartProductsArray = cart.products === undefined ? [] : Object.entries(cart.products as Product);
  const cartProducts = await getProducts();

  const cartProductMap = new Map(cartProductsArray);

  const filteredProducts = cartProducts
    .filter((product: Product) => cartProductMap.has(product.id.toString()))
    .map((product: Product) => ({
      ...product,
      quantity: cartProductMap.get(product.id.toString()),
      totalPrice: product.price * cartProductMap.get(product.id.toString())
    }));

  const totalQuantity = filteredProducts.reduce((sum: number, product: Product) => sum + product.quantity, 0);
  const totalAmount = filteredProducts.reduce((sum: number, product: Product) => sum + product.totalPrice, 0);

  return (
    <div className="w-[60vw] m-auto mt-[20px]">
      {totalQuantity > 0 ? (
        <>
          <h2 className="text-2xl font-bold mt-8 mb-4">{t("header", { totalQuantity })}</h2>
          <EmptyCartButton />
          <div className="flex flex-col md:flex-row justify-evenly">
            <div className="flex-1 justify-center border-gray-200 border-[1px] rounded-md p-[24px] flex flex-col gap-4">
              {filteredProducts.map((product: Product) => (
                <div key={product.id} className="flex items-center justify-between gap-4 px-4">
                  <Image
                    src={LegoEcho}
                    alt={product.title}
                    className="w-32 h-32"
                  />
                  <div className="flex flex-col justify-center items-start gap-y-6">
                    <h4 className="text-lg font-bold">{product.title}</h4>
                    <RemoveProductButton id={product.id} />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-y-6">
                    <p className="text-lg font-semibold">{product.price} ₾</p>
                    <CounterButton id={product.id} quantity={product.quantity} />
                  </div>
                </div>
              ))}
            </div>
            <CartComponent
              totalQuantity={totalQuantity}
              totalAmount={totalAmount}
              showButton={true}
              filteredProducts={filteredProducts}
              session={session}
            />
          </div>
        </>
      ) : (
        <div className="text-center mt-8">
          <h2 className="text-2xl font-bold mb-4">{t("emptyCart")}</h2>
        </div>
      )}
    </div>
  );
}

export default CartContainer;
