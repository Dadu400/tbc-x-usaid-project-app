'use client';

import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;
    const subject = `პრობლემის შეტყობინება ${name}-სგან`;
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:contact@superweb.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="flex flex-col space-y-4 mt-[10px]">
      <input
        type="text"
        id="name"
        name="name"
        placeholder="სახელი"
        required
        value={formData.name}
        onChange={handleChange}
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none focus:red"
      />
      <input
        type="email"
        id="email"
        name="email"
        placeholder="ელ.ფოსტა"
        required
        value={formData.email}
        onChange={handleChange}
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none focus:red"
      />
      <input
        type="number"
        id="phone"
        name="phone"
        placeholder="ტელეფონი"
        required
        value={formData.phone}
        onChange={handleChange}
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none focus:red [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      />
      <textarea
        name="message"
        id="message"
        rows={5}
        cols={30}
        placeholder="ჩაწერე ტექსტი"
        required
        value={formData.message}
        onChange={handleChange}
        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-red focus:border-red focus:outline-none focus:red"
      />
      <button
        type="submit"
        className="w-full px-4 py-2 text-md font-medium text-white bg-[#404978] rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2">
        გაგზავნა
      </button>
    </form>
  );
}

export default ContactForm;
