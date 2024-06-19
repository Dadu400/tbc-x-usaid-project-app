import CheckoutNavigator from "./CheckoutNavigator";

function BillingInfo () {
  return (
    <div className="w-[60vw] m-auto flex flex-col sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <CheckoutNavigator activeStep={2} />
      <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 col-span-1 lg:col-span-2">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Billing & Shipping Information
        </h2>
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium mb-1"
              >
                First Name
              </label>
              <input id="firstName" type="text" placeholder="John" required />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium mb-1"
              >
                Last Name
              </label>
              <input id="lastName" type="text" placeholder="Doe" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="+1 (555) 555-5555"
                required
              />
            </div>
            <div className="col-span-1 sm:col-span-2">
              <label
                htmlFor="address"
                className="block text-sm font-medium mb-1"
              >
                Address
              </label>
              <input
                id="address"
                type="text"
                placeholder="123 Main St"
                required
              />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium mb-1">
                City
              </label>
              <input
                id="city"
                type="text"
                placeholder="San Francisco"
                required
              />
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium mb-1">
                State
              </label>
              <input id="state" type="text" placeholder="CA" required />
            </div>
            <div>
              <label htmlFor="zip" className="block text-sm font-medium mb-1">
                Zip Code
              </label>
              <input id="zip" type="text" placeholder="94103" required />
            </div>
            <div className="col-span-1 sm:col-span-2">
              <div className="flex items-start gap-2">
                <input type="checkbox" id="sameAsShipping" />
                <label
                  htmlFor="sameAsShipping"
                  className="text-sm font-medium text-gray-500 dark:text-gray-400"
                >
                  Billing address is the same as shipping address
                </label>
              </div>
            </div>
          </div>
          <button type="submit" className="mt-6 w-full">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default BillingInfo;
