import React from "react";
import swiggy from "../assets/swiggy.png";
import zomato from "../assets/zomato.png";
import magicpin from "../assets/magicpin.png";
import chowman from "../assets/Chowman-Logo.png";

const Partners = () => {

  const partners = [
    swiggy,
    zomato,
    magicpin,
    chowman
  ];

  return (
    <section className="py-20 bg-gradient-to-b bg-[#d4d5cc] overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#5f9920]">
            Our Delivery Partners
          </h2>

          <p className="text-gray-600 mt-3 text-lg">
            Order your favorite vegetarian meals through our trusted partners
          </p>
        </div>

        {/* Logo Slider */}
        <div className="relative overflow-hidden group">

          <div className="flex gap-10 animate-slide group-hover:[animation-play-state:paused]">

            {[...partners, ...partners].map((logo, index) => (
              <div
                key={index}
                className="min-w-[300px] backdrop-blur-lg bg-white/70 rounded-2xl p-6 shadow-md hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col items-center relative"
              >
                <img
                  src={logo}
                  alt="partner"
                  className="h-18 object-contain transition"
                />
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Partners;