import React from "react";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="w-full  bg-[#d4d5cc] pt-16 pb-6">

      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-10 text-gray-800">

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-red-500 font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li className="hover:text-red-500 cursor-pointer">Home</li>
              <li className="hover:text-red-500 cursor-pointer">Menu</li>
              <li className="hover:text-red-500 cursor-pointer">Reservations</li>
              <li className="hover:text-red-500 cursor-pointer">About Us</li>
              <li className="hover:text-red-500 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-red-500 font-semibold text-lg mb-4">
              Contact Us
            </h3>

            <div className="space-y-4">

              <div className="flex gap-3 items-start">
                <MapPin className="text-red-500 mt-1" size={20}/>
                <p>
                  123 Restaurant Street <br />
                  City, State 12345
                </p>
              </div>

              <div className="flex gap-3 items-center">
                <Phone className="text-red-500" size={20}/>
                <p>Phone: (123) 456-7890</p>
              </div>

              <div className="flex gap-3 items-center">
                <Mail className="text-red-500" size={20}/>
                <p>Email: info@restaurant.com</p>
              </div>

            </div>
          </div>

          {/* OPENING HOURS */}
          <div>
            <h3 className="text-red-500 font-semibold text-lg mb-4">
              Opening Hours
            </h3>

            <p className="mb-2">
              Monday - Friday: 11am - 10pm
            </p>

            <p>
              Saturday - Sunday: 10am - 11pm
            </p>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-red-500 font-semibold text-lg mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <div className="p-2 bg-red-500 rounded-full text-white hover:scale-110 transition cursor-pointer">
                <Facebook size={18}/>
              </div>

              <div className="p-2 bg-red-500 rounded-full text-white hover:scale-110 transition cursor-pointer">
                <Instagram size={18}/>
              </div>

              <div className="p-2 bg-red-500 rounded-full text-white hover:scale-110 transition cursor-pointer">
                <Twitter size={18}/>
              </div>

            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-300 mt-10 pt-6 text-center text-gray-700 text-sm">

          © 2026 <span className="text-green-500">DFC</span>Roorkee. Created by Priyanshu Rajput and Raju Kubhakarç.

        </div>

      </div>
    </footer>
  );
};


