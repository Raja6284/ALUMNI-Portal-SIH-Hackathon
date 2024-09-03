import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.email === formData.email && user.password === formData.password);

    if (user) {
      // Save the current user's email in localStorage
      localStorage.setItem("currentUser", JSON.stringify(user.email));
      
      // Redirect to the account page
      navigate('/profile');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="bg-gray-100 font-sans min-h-screen flex items-center justify-center mt-20">
      <div className="max-w-md mx-auto my-10 bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Sign In
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          {/* Password Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="block w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {/* Submit Button */}
          <button type="submit" className="w-full bg-blue-500 text-white text-lg font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200">
            Sign In
          </button>
          <p className="text-center text-gray-500 mt-4">
            <a href="/signup" className="text-blue-500 hover:underline">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
