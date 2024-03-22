import LegoEcho from "../components/icons/LegoEcho.png";
import LegoEchoSophia from "../components/icons/LegoEchoSophia.png";

function Contacts() {
  return (
    <main>
      <section className="flex flex-col gap-[20px] w-full px-16 py-10">
        <h1 className="text-[32px] font-bold self-center mb-10">
          Get in touch with a LEGO expert
        </h1>
        <div className="flex">
          <div className="flex flex-1 flex-col gap-[10px] border-r-2 pl-16">
            <h2 className="text-[22px] font-bold">Call us</h2>
            <div className="flex flex-col gap-[6px]">
              <h6 className="text-[18px]">LEGO® Customer Service in English</h6>
              <a href="/">1-844-903-5346</a>
              <p className="text-[18px]">Monday to Friday 8am - 10pm ET</p>
              <p className="text-[18px]">Saturday to Sunday 10am - 6pm ET</p>
            </div>
            <div className="flex flex-col gap-[6px]">
              <h6 className="text-[18px]">LEGO® Customer Service in Spanish</h6>
              <a href="/">1-833-692-5346</a>
              <p className="text-[18px]">Monday to Friday 8am - 10pm ET</p>
            </div>
            <div className="flex flex-col gap-[6px]">
              <h6 className="text-[18px]">LEGO® Education Tech Support</h6>
              <a href="/">1-866-349-5346</a>
              <p className="text-[18px]">Monday to Friday 8am - 10pm ET</p>
            </div>
            <p className="text-[18px] w-4/5">
              Our free number might be blocked by some providers. You may be
              charged when calling from a mobile phone. Please contact your
              provider for more details.
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-[6px] pl-16">
            <h2 className="text-[22px] font-bold">Write to us</h2>
            <div className="flex flex-col gap-[4px]">
              <h6 className="text-[18px]">LEGO® Customer Service</h6>
              <p className="text-[18px]">PO Box 1138</p>
              <p className="text-[18px]">Enfield</p>
              <p className="text-[18px]">CT 06083-1138</p>
              <p className="text-[18px]">USA</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#78BFEA] min-h-[400px]">
        <div className="flex justify-center items-center">
          <div className="flex flex-col flex-1 items-center  gap-[10px]">
            <h2 className="text-[32px] font-bold">Contact Us</h2>
            <p className="text-[28px]">Sophia can help with lots of topics</p>
          </div>
          <div className="flex flex-1 items-center justify-center">
            <img src={LegoEcho} alt="Sophia" />
          </div>
        </div>
      </section>

      <section className="w-full bg-[#00AF4D] min-h-[400px] py-6">
        <div className="flex">
          <div className="flex flex-1 items-center justify-center">
            <img src={LegoEchoSophia} alt="Sophia" />
          </div>
          <div className="flex flex-1 items-center justify-center">
            <form action="#" className=" flex flex-col w-[40%]">
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="focus:outline-none focus:ring w-full px-3 py-4 text-sm text-gray-600 placeholder-gray-400 bg-white border rounded shadow outline-none"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Surname"
                  className="focus:outline-none focus:ring w-full px-3 py-4 text-sm text-gray-600 placeholder-gray-400 bg-white border rounded shadow outline-none"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="focus:outline-none focus:ring w-full px-3 py-4 text-sm text-gray-600 placeholder-gray-400 bg-white border rounded shadow outline-none"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  onkeydown="return false"
                  onwheel="return false"
                  type="number"
                  placeholder="Mobile"
                  className="focus:outline-none focus:ring w-full px-3 py-4 text-sm text-gray-600 placeholder-gray-400 bg-white border rounded shadow outline-none appearance-none"
                  style={{
                    WebkitAppearance: "none",
                    MozAppearance: "textfield",
                  }}
                  required
                />
              </div>

              <div className="mb-6">
                <textarea
                  rows="5"
                  placeholder="Write your problem"
                  className="focus:outline-none focus:ring w-full px-3 py-4 text-sm text-gray-600 placeholder-gray-400 bg-white border rounded shadow resize-none  h-40"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-[40%] py-2 bg-black self-center text-white font-large hover:bg-white hover:text-black rounded"
                required
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contacts;
