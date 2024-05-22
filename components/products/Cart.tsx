import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faMinus, faPlus, faShieldHalved } from "@fortawesome/free-solid-svg-icons";
import LegoEcho from "../../public/LegoEcho.png";
import { getUserCart } from "../../helpers/axios";
import { getProducts } from "../../helpers/axiosProduct";

const id = 1;

async function CartContainer() {
  const cart = await getUserCart(id);
  const cartProductsArray = Object.entries(cart?.products); 
  const cartProducts = await getProducts();

  // Create a map of cart product IDs and their quantities
  const cartProductMap = new Map(cartProductsArray);

  // Filter and map the products to include the quantity
  const filteredProducts = cartProducts
    .filter((product: any) => cartProductMap.has(product.id.toString()))
    .map((product: any) => ({
      ...product,
      quantity: cartProductMap.get(product.id.toString()),
    }));

  return (
    <div className="container mx-auto p-6 my-12">
      <h2 className="text-2xl font-bold mb-4">My Bag</h2>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex-1">
          <div className="bg-white shadow-md rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl text-green-600 font-regular">Available now</h3>
              <button className="text-md font-regular text-red-600">Empty Cart</button>
            </div>
            {filteredProducts.map((product: any) => (
              <div key={product.id} className="flex items-center mb-4">
                <Image
                  src={LegoEcho}
                  alt={product.title}
                  className="w-32 h-32"
                />
                <div className="flex flex-col ml-4 w-full">
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-bold">{product.title}</h4>
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      className="w-4 h-6 cursor-pointer text-blue-500"
                    />
                  </div>
                  <div className="flex items-center mt-4 gap-16">
                    <p className="text-lg font-regular text-gray-800">${product.price}</p>
                    <div className="flex items-center border rounded ml-10">
                      <button className="px-3 py-1">
                        <FontAwesomeIcon icon={faMinus} className="cursor-pointer" />
                      </button>
                      <span className="px-3 py-1 border-x">{product.quantity}</span>
                      <button className="px-3 py-1">
                        <FontAwesomeIcon icon={faPlus} className="cursor-pointer" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1.2 md:ml-6">
          <div className="bg-white shadow-md rounded-lg pt-4 pb-8 px-6">
            <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
            <div className="mb-5">
              <div className="flex justify-between">
                <span className="font-regular text-green-600">Order value </span>
              </div>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Order Total</span>
              <span>${cart.total}</span>
            </div>
            <button className="mt-4 w-full px-4 py-2 bg-orange-500 text-white font-bold text-sm rounded-md">
              <FontAwesomeIcon icon={faShieldHalved} className="mr-2" />
              Checkout Securely
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartContainer;
