import React, { useState } from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

const links = [
    "Home",
    "About us",
    "Timeline",
    "FAQ's",
    "Contact"
];

const values = ['100','69','52','12','0']

const Footer = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
      window.location.reload();
    }, 3000);
  };

  const scrollUpByPercent = (percent) => {
    const amount = (percent / 100) * document.body.scrollHeight;
    window.scrollBy({
      top: -amount,
      behavior: 'smooth',
    });
  };

  return (
    <>
        <div className='bg-white mt-7'>
        <div className="flex flex-col md:flex-row gap-5 pb-5 pt-7 p-6 border-b border-black">
            <div className="mt-3 flex flex-col items-center md:items-start">
                <img 
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5dDtOLoIc0sROvtOS0o_NMb9jJxCghvg1Tw&s' 
                    alt=''
                    className='w-20 h-20 md:w-48 md:h-48'
                />
                <h1 className='text-[#24100c] text-2xl md:text-3xl font-bold'>E-Summit'25</h1>
            </div>
            
            <div className="flex-1 mt-3 ml-[5%]">
                <h2 className='font-bold text-lg'>Quick Links</h2>
                {links.map((com, index) => (
                    <p key={index} onClick={() => scrollUpByPercent(values[index])} className='text-[#7b7b7b] hover:text-[#101656] hover:cursor-pointer font-semibold pt-2'>{com}</p>
                ))}
                <h2 className='font-bold text-lg mt-6'>Social</h2>
                <div className='flex gap-2 pt-5 text-[#101656]'>
                    <FaLinkedin size={25} className='hover:scale-105' />
                    <FaInstagram size={25} className='hover:scale-105'/>
                    <FaSquareXTwitter size={25} className='hover:scale-105' />
                </div>
            </div>

            <div className="flex-1 mt-3 mr-[10%]">
{/* contact form start */}
              <div className="p-6 pt-0 bg-white rounded-lg">
                <h2 className="text-2xl font-bold mb-3 text-center">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-2">
                <div>
                  <label className="block mb-1 font-medium">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Your Full Name"
                    className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-950"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Your Email Address"
                    className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-950"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-medium">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows="3"
                    placeholder="Your message..."
                    className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-950"
                  ></textarea>
                </div>

                {showToast && (
                  <div className="p-2 text-green-500">
                    Your message has been sent successfully!
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-blue-950 border-2 border-blue-950 hover:bg-white hover:text-blue-950 hover:border-blue-950 text-white py-2 px-4 rounded transition"
                >
                  Send Message
                </button>
                </form>

              </div>
{/* contact form end */}
            </div>

            <div className='flex-1 mt-3 text-[#7b7b7b]'>
                <h2 className='font-bold text-2xl text-black'>Our Location</h2>
                <p className='text-sm p-1 pt-3'><strong>Address:</strong> UIT RGPV, India 462023</p>
                <p className='text-sm p-1'><strong>Email:</strong> ecell.rgpv@gmail.com</p>
                <div className="mt-8">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3981.6652036575856!2d77.36158884929672!3d23.308927584571965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1726556441205!5m2!1sen!2sin"
                    className='w-full md:w-2/3 lg:w-3/4 h-[40vh] rounded-md'
                    title='Google Maps'
                    loading="lazy"
                ></iframe>
                </div>
            </div>
        </div>
        <div className='bg-[#101656] p-1'>
            <p className='font-semibold text-white text-center text-sm'>All Rights Reserved ©2025 E-CELL<sup>®</sup></p>
        </div>
    </div>
    </>
  )
}

export default Footer