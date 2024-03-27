import { useState } from 'react';

const UserRegistrationForm = () => {
  const [userData, setUserData] = useState({
    userName: '',
    surname: '',
    email: '',
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
    <div className='flex'>
    <form onSubmit={handleSubmit} className='flex flex-col'>
      <label htmlFor="userName">User Name:</label>
      <input
        type="text"
        name="userName"
        id="userName"
        value={userData.userName}
        onChange={handleChange}
        required
      />

      <label htmlFor="surname">Surname:</label>
      <input
        type="text"
        name="surname"
        id="surname"
        value={userData.surname}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        id="email"
        value={userData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        id="password"
        value={userData.password}
        onChange={handleChange}
        required
      />

      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        value={userData.confirmPassword}
        onChange={handleChange}
        required
      />

      <button type="submit">Register</button>
    </form>
    </div>
  );
};

export default UserRegistrationForm;