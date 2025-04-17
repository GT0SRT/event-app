import React, { useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';

export default function RegistrationPage({toggleReg}) {
  const [showToast, setShowToast] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false); 
      window.location.reload();
    }, 4000);
  };

  return (
    <div className="App-bg min-h-screen flex items-center justify-center p-4 relative">
      <button onClick={toggleReg} 
      className="absolute top-4 left-4 bg-white text-[#0d1b2a] rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-100 transition">
      <IoArrowBack/></button>

      <div className="bg-white w-full max-w-md rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-[#0d1b2a] mb-6">Registration</h2>
        <form onSubmit={handleSubmit} className="space-y-2">
                <div>
                  <label className="block mb-2 font-medium">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Your Full Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-950"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Your Email Address"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-950"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Institution Name</label>
                  <input
                    type="text"
                    name="institute"
                    id="institute"
                    required
                    placeholder="Your Institution Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-950"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">City</label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    required
                    placeholder="Your City Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-950"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium">Phone Number</label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    required
                    placeholder="Your phone number"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-950"
                  />
                </div>

                {showToast && (
                  <div className="mt-4 p-3 text-center text-green-500">
                    Registered successfully!
                  </div>
                )}

                <button type="submit" className="w-full bg-blue-950 border-2 border-blue-950
                mt-11 hover:bg-white hover:text-blue-950 hover:border-blue-950 text-white py-2 px-4 rounded transition">Register</button>
                </form>
      </div>
    </div>
  );
}