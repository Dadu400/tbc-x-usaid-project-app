import localFont from '@next/font/local'
import PersonIcon from '@mui/icons-material/Person';
import PlaceIcon from '@mui/icons-material/Place';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

const mtavruli = localFont({ src: '../../public/fonts/mtavruli.ttf' })

function Payment() {

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10">
      <div className="flex flex-col lg:flex-row gap-[25px] justify-between border-[1px] border-gray-300 p-4 rounded-xl">
        <div className="flex flex-col gap-y-4">
          <div className='flex items-center gap-1'>
            <PersonIcon fontSize='small' />
            <span className={`text-gray-700 font-semibold text-sm items-center ${mtavruli.className}`}>
              შეკვეთის მიმღები
            </span>
          </div>
          <span className="text-gray-500 text-sm">დადუკა ხუხუნაშვილი +995558632021</span>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className='flex items-center gap-1'>
            <PlaceIcon fontSize='small' />
            <span className={`text-gray-700 font-semibold text-sm ${mtavruli.className}`}>
              მისამართი
            </span>
          </div>
          <span className="text-gray-500 text-sm">გიორგი ათონელის ქუჩა 31</span>
        </div>
        <div className="flex flex-col gap-y-4">
          <div className='flex items-center gap-1'>
            <LocalShippingIcon fontSize='small' />
            <span className={`text-gray-700 font-semibold text-sm ${mtavruli.className}`}>
              მიწოდების დრო
            </span>
          </div>
          <span className="text-gray-500 text-sm">დღეს  09:00 - 12:00</span>
        </div>
      </div>
      <div className='flex flex-col gap-y-4 my-4'>
        <span className={`text-gray-700 font-semibold text-sm items-center ${mtavruli.className}`}>ბარათის მონაცემების დამატება</span>
        <form>
          <div className="space-y-4">
            <div className='w-[50%]'>
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium mb-2">
                ბარათის ნომერი
              </label>
              <input
                id="cardNumber"
                type="text"
                placeholder="0000 0000 0000 0000 0000"
                required
                className='w-full px-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-red focus:border-red focus:outline-none' />
            </div>
            <div className="grid grid-cols-2 justify-start items-start">
              <div>
                <label
                  htmlFor="expirationDate"
                  className="block text-sm font-medium mb-1">
                  ვადა
                </label>
                <input
                  id="expirationDate"
                  type="text"
                  placeholder="MM/YY"
                  required
                  className='w-[28%] px-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-red focus:border-red focus:outline-none' />
              </div>
              <div>
                <label htmlFor="cvv" className="block text-sm font-medium mb-1">
                  CVV
                </label>
                <input id="cvv" type="text" placeholder="123" required className='w-[28%] px-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-red focus:border-red focus:outline-none' />
              </div>
            </div>
            <div>
              <label
                htmlFor="nameOnCard"
                className="block text-sm font-medium mb-1">
                ბარათის მფლობელი
              </label>
              <input
                id="nameOnCard"
                type="text"
                required
                className='w-[50%] px-3 py-2 bg-white border border-gray-300 rounded-xl shadow-sm focus:ring-red focus:border-red focus:outline-none' />
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="saveCard" />
              <label
                htmlFor="saveCard"
                className="text-sm font-medium text-gray-500 dark:text-gray-400">
                ბარათის დამახსოვრება
              </label>
            </div>
            <div className='flex self-center'>
              <button type="submit" className="w-[40%] bg-[#EC6652] py-2 text-white rounded-xl mt-4">
                შეკვეთის გაფორმება
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Payment;
