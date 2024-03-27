import { useState } from 'react';

const UserRegistrationForm = () => {
  const [userData, setUserData] = useState({
    userName: 'User',
    surname: 'User Surname',
    email: 'user@example.com',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (userData.password !== userData.confirmPassword) {
      console.error('Passwords do not match');
      return; 
    }
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(userData.email)) {
      console.error('Invalid email format');
      return; 
    }

    console.log('Form submitted:', userData);
  
    setUserData({
      userName: '',
      surname: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div className='flex w-[60%] justify-center m-auto align-center p-4 shadow-md'>
    <form onSubmit={handleSubmit} className='flex flex-col w-[50%] gap-2'>
      <label htmlFor="userName">Current Username:</label>
      <input
        type="text"
        name="userName"
        id="userName"
        className="focus:outline-none focus:ring w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border rounded shadow outline-none"
        value={userData.userName}
        onChange={handleChange}
        readOnly={true}
        required
      />

      <label htmlFor="surname">Current Surname:</label>
      <input
        type="text"
        name="surname"
        id="surname"
        className="focus:outline-none focus:ring w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border rounded shadow outline-none"
        value={userData.surname}
        readOnly={true}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        className="focus:outline-none focus:ring w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border rounded shadow outline-none"
        value={userData.email}
        readOnly={true}
        required
      />

      <label htmlFor="password">Create new password:</label>
      <input
        type="password"
        name="password"
        id="password"
        className="focus:outline-none focus:ring w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border rounded shadow outline-none"
        value={userData.password}
        onChange={handleChange}
        required
      />

      <label htmlFor="confirmPassword">Confirm new Password:</label>
      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        className="focus:outline-none focus:ring w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border rounded shadow outline-none"
        value={userData.confirmPassword}
        onChange={handleChange}
        required
      />
      <button type="submit" className="my-6 w-[60%] py-2 bg-[#FD8024] self-center text-white font-large hover:bg-white hover:border-[#FD8024] hover:text-black rounded transition-colors duration-300 ease-in-out ">Save Changes</button>
    </form>
    </div>
  );
};

export default UserRegistrationForm;