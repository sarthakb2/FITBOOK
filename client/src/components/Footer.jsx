import React from 'react';
import Cookies from 'js-cookie';


const Footer = () => {
  return (
    <footer className="bg-gray-200 fixed bottom-0 w-full py-4">
      <div className="container mx-auto p-4">
        <p className="text-sm text-center text-gray-600">&copy; 2024 FitBook</p>
        <ul className="flex justify-center mb-4">
          <li className="mr-4">
            <a href="#" target="_blank">
              <i className="fab fa-facebook-f text-lg text-gray-600 hover:text-gray-800"></i>
            </a>
          </li>
          <li className="mr-4">
            <a href="#" target="_blank">
              <i className="fab fa-twitter text-lg text-gray-600 hover:text-gray-800"></i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <i className="fab fa-instagram text-lg text-gray-600 hover:text-gray-800"></i>
            </a>
          </li>
        </ul>
        <p className="text-sm text-center text-gray-600">Terms and Conditions | Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;