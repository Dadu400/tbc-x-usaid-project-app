import React from 'react';
import CheckoutNavigator from "./CheckoutNavigator";

function Payment()  {
  return (
    <div className="w-[60vw] m-auto flex flex-col sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <CheckoutNavigator activeStep={3} />
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 sm:p-8 lg:p-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Payment</h2>
        <form>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium mb-1"
              >
                Card Number
              </label>
              <input
                id="cardNumber"
                type="text"
                placeholder="4111 1111 1111 1111"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="expirationDate"
                  className="block text-sm font-medium mb-1"
                >
                  Expiration Date
                </label>
                <input
                  id="expirationDate"
                  type="text"
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-sm font-medium mb-1">
                  CVV
                </label>
                <input id="cvv" type="text" placeholder="123" required />
              </div>
            </div>
            <div>
              <label
                htmlFor="nameOnCard"
                className="block text-sm font-medium mb-1"
              >
                Name on Card
              </label>
              <input
                id="nameOnCard"
                type="text"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" id="saveCard" />
              <label
                htmlFor="saveCard"
                className="text-sm font-medium text-gray-500 dark:text-gray-400"
              >
                Save this card for future purchases
              </label>
            </div>
            <button type="submit" className="w-full">
              Place Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Payment;
