function ContactForm() {
    return (
        <div className="flex flex-1 items-center justify-center">
        <form action="#" className=" flex flex-col w-[40%]">
          <div className="mb-3">
            <input
              type="text"
              placeholder="Name"
              className="focus:outline-none focus:ring w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border rounded shadow outline-none"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              placeholder="Surname"
              className="focus:outline-none focus:ring w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border rounded shadow outline-none"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              placeholder="Email"
              className="focus:outline-none focus:ring w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border rounded shadow outline-none"
              required
            />
          </div>
          <div className="mb-3">
          <input
  onKeyDown={(e) => {
 e.preventDefault();
  }}
  onWheel={(e) => {
    e.preventDefault();
  }}
  type="number"
  placeholder="Mobile"
  className="focus:outline-none focus:ring w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border rounded shadow outline-none appearance-none"
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
    )
}

export default ContactForm;