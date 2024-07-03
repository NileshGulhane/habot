import React from 'react';
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-sky-950 text-white py-6">
      <div className="container mx-auto">
      <br/>
        <hr className="border-gray-300 mb-6"/>
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/5 mb-6 md:mb-0 text-center md:text-left">
            <img src="logofooters.png" alt="HABOT Logo" className="mx-auto md:mx-0 w-36 h-14 mb-4"/>
            <p className="text-gray-400">© R Singhania</p>
          </div>
          <div className="w-full md:w-1/5 mb-6 md:mb-0 text-center md:text-left">
            <h5 className="font-bold mb-4">Company</h5>
            <ul className="">
            <p className='mr-4'>About</p>
            <p  className='mr-6'>FAQ</p>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-6 md:mb-0 text-center md:text-left">
            <h5 className="font-bold  mr-2 mb-4">Terms</h5>
            <ul className="list-none">
              <li  className='ml-8'>Data privacy</li>
              <li  className='mr-4'>Terms</li>
              <li  className='ml-8'>Accessibility</li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 mb-6 md:mb-0 text-center md:text-left">
            <h5 className="font-bold mb-4 mr-4">Related</h5>
            <ul className="list-none">
              <li>Find Buyer</li>
              <li  className='mr-2'>Feedback</li>
            </ul>
          </div>
          <div className="w-full md:w-1/5 text-center md:text-left">
            <div className="flex justify-center md:justify-start space-x-5 mt-10 ">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn size={24} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebookF size={24} />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <hr className="border-gray-300 mt-6"/>
        <br/>
      </div>
    </footer>
  );
};

export default Footer;
