import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-amber-300 text-gray-800 py-10 px-4 mt-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Brand Logo and Social Icons */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">VET&MEET</h2>
          <p className="text-sm max-w-xs">
            Your one-stop shop for all pet needs. Quality products and expert
            care.
          </p>
          <div className="flex gap-4 text-xl">
            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaTwitter className="hover:text-sky-500 cursor-pointer" />
            <FaYoutube className="hover:text-red-600 cursor-pointer" />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Pets</h4>
            <ul className="space-y-1">
              <li>
                <a href="#">Dogs</a>
              </li>
              <li>
                <a href="#">Cats</a>
              </li>
              <li>
                <a href="#">Small Pets</a>
              </li>
              <li>
                <a href="#">Birds</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Services</h4>
            <ul className="space-y-1">
              <li>
                <a href="#">Vet Care</a>
              </li>
              <li>
                <a href="#">Our Stores</a>
              </li>
              <li>
                <a href="#">Brands</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">More</h4>
            <ul className="space-y-1">
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs text-gray-600 mt-10">
        © {new Date().getFullYear()} PetZone. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
