function ContactForm() {

  return (
    <form autoComplete='off' className="flex flex-col space-y-4 mt-[10px]">
      <input
        type="name"
        id="name"
        name="name"
        placeholder="სახელი"
        required
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none focus:red"
      />
      <input
        type="email"
        id="email"
        placeholder="ელ.ფოსტა"
        required
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none focus:red"
      />
      <input
        type="text"
        id="phone"
        placeholder="ტელეფონი"
        required
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none focus:red"
      />
      <textarea name="message" id="message" rows={5} cols={30} placeholder="ჩაწერე ტექსტი" className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none focus:red"></textarea>
      <button
        type="submit"
        className="w-full px-4 py-2 text-md font-medium text-white bg-[#404978] rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2">
        გაგზავნა
      </button>
    </form>
  );
}

export default ContactForm;
