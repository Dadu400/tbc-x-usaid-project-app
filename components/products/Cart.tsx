import Image from "next/image";
import LegoEcho from "../../public/LegoEcho.png";
import { getUserCart } from "../../helpers/axios";
import { getProducts } from "../../helpers/axiosProduct";
import CounterButton from "./CounterButton";
import EmptyCartButton from "./EmptyCartButton";
import RemoveProductButton from "./RemoveProductButton";

interface Product {
  id: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

export const revalidate = 0;

async function CartContainer({ session }) {
  if (session === undefined) {
    return (
      <div className="text-center mt-8">
        <h2 className="text-2xl font-bold mb-4">კალათაში დასამატებლად გთხოვთ გაიაროთ ავტორიზაცია</h2>
      </div>
    )
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
          <h2 className="text-2xl font-bold mt-8 mb-4">შენს კალათაში {totalQuantity} ნივთია</h2>
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
            <div className="flex flex-col items-start gap-y-4 flex-1.5 md:ml-6 border-gray-200 border-[1px] rounded-md p-[24px] h-[260px]">
              <h3 className="text-md font-bold mb-4">გადახდა</h3>
              <div className="flex justify-between">
                <span className="font-regular text-gray-800 text-sm">პროდუქტები ({totalQuantity})</span>
              </div>
              <div className="flex justify-between border-y-[1px] border-gray-200 py-4">
                <span className="font-semibold text-black text-sm mr-8">ჯამური ღირებულება</span>
                <span className="font-semibold text-black text-sm">{totalAmount.toFixed(2)} ₾</span>
              </div>
              <button
                className="w-full px-4 py-2 text-md font-medium mt-2 text-white bg-[#1e90ff] rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                გადახდა
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center mt-8">
          <h2 className="text-2xl font-bold mb-4">კალათა ცარიელია</h2>
        </div>
      )}
    </div>
  );
}

export default CartContainer;
