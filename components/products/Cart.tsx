import Image from "next/image";
import { getUserCart } from "../../helpers/axios";
import { getProducts } from "../../helpers/axiosProduct";
import CounterButton from "./CounterButton";
import EmptyCartButton from "./EmptyCartButton";
import RemoveProductButton from "./RemoveProductButton";
import { getTranslations } from "next-intl/server";
import CartComponent from "../checkout/CartComponent";
import localFont from "@next/font/local";
import { Product } from "./ProductList";

export interface CartProduct extends Product {
  quantity: number;
  totalPrice: number;
}

export const revalidate = 0;

const mtavruli = localFont({ src: '../../public/fonts/mtavruli.ttf' })

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
  const cartProductsArray = cart.products === undefined ? [] : Object.entries(cart.products as CartProduct);
  const cartProducts = await getProducts() as CartProduct[];

  const cartProductMap = new Map(cartProductsArray);

  const filteredProducts = cartProducts
    .filter((product: CartProduct) => cartProductMap.has(product.id.toString()))
    .map((product: CartProduct) => ({
      ...product,
      quantity: cartProductMap.get(product.id.toString()),
      totalPrice: product.price * cartProductMap.get(product.id.toString())
    }));

  const totalQuantity = filteredProducts.reduce((sum: number, product: CartProduct) => sum + product.quantity, 0);
  const totalAmount = filteredProducts.reduce((sum: number, product: CartProduct) => sum + product.totalPrice, 0);

  return (
    <div className="w-[60vw] m-auto mt-[20px] mb-[40px]">
      {totalQuantity > 0 ? (
        <>
          <h2 className={`text-xl font-bold mt-8 ${mtavruli.className}`}>{t("header", { totalQuantity })}</h2>
          <EmptyCartButton />
          <div className="flex flex-col md:flex-row justify-between">
            <div className="dark:bg-[#1D2024] justify-center border-gray-200 dark:border-[#ffffff1f] border-[1px] rounded-md p-[24px] flex flex-col gap-4 basis-3/4">
              {filteredProducts.map((product: CartProduct) => (
                <div key={product.id} className="flex items-center justify-start gap-10 px-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={150}
                    height={150}
                    className="w-32 h-32"
                  />
                  <div className="flex flex-col justify-center items-start gap-y-2 flex-1">
                    <h4 className="text-lg font-bold">{product.title}</h4>
                    <RemoveProductButton id={product.id.toString()} />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-y-1">
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
