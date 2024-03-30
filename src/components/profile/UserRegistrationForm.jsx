import { useState } from "react";

const UserRegistrationForm = () => {
  const [userData, setUserData] = useState({
    userName: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let formErrors = {};

    if (userData.password !== userData.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    if (!emailPattern.test(userData.email)) {
      formErrors.email = "Invalid email format";
    }

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log("Form submitted:", userData);
      setUserData({
        userName: "",
        surname: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[40%] p-8 bg-white shadow-lg rounded-lg gap-2"
      >
        <label htmlFor="userName">Current Username:</label>
        <input
          type="text"
          name="userName"
          id="userName"
          className="focus:outline-none focus:ring w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border rounded shadow outline-none"
          value={userData.userName}
          onChange={handleChange}
          required
        />

        <label htmlFor="surname">Current Surname:</label>
        <input
          type="text"
          name="surname"
          id="surname"
          className="focus:outline-none focus:ring w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border rounded shadow outline-none"
          value={userData.surname}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={userData.email}
          onChange={handleChange}
          className="focus:outline-none focus:ring w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border rounded shadow outline-none"
          required
        />

        {errors.email && <p className="text-red-500">{errors.email}</p>}

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
        {errors.confirmPassword && (
          <span className="text-red-500">{errors.confirmPassword}</span>
        )}

        <button
          type="submit"
          className="mt-4 inline-flex justify-center py-3 border border-transparent shadow-sm text-sm font-semibold rounded-md text-white bg-[#FD8024] hover:bg-transparent hover:text-[#FD8024] focus:outline-none transition duration-150 ease-in-out"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default UserRegistrationForm;
