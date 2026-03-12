import React from "react";
import pizza from "../assets/vegplate.png";
import star from "../assets/star.png";
import starOutline from "../assets/star-outline.png";
import time from "../assets/time.png";
import tomato from "../assets/tomato.png";
import cabbage from "../assets/cabbage.png";
import tomatocut from "../assets/tomatocut.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br bg-[#d4d5cc]">

      {/* Floating Background Blur */}
      <div className="absolute w-[500px] h-[500px] bg-red-200 rounded-full blur-[150px] opacity-40 top-[-150px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-yellow-200 rounded-full blur-[120px] opacity-40 bottom-[-150px] right-[-100px]" />

      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between relative z-10">

        {/* LEFT CONTENT */}
        <div className="lg:w-1/2 space-y-8 text-center lg:text-left">


          {/* NEW HEADING */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="block text-[#5f9920]">
              DFC Roorkee
            </span>
            <span className="block text-gray-800">
              Made With Love
            </span>
          </h1>

          {/* NEW DESCRIPTION */}
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0">
            Welcome to our restaurant where taste meets tradition. We serve
            freshly prepared dishes made from the finest ingredients.
            Experience a warm atmosphere, great service, and unforgettable
            flavors.
          </p>

          {/* NEW BUTTONS */}
          <div className="flex flex-col md:flex-row gap-4 justify-center lg:justify-start pt-4">

            <a
              href="#menu"
              className="px-6 py-3 rounded-lg text-white font-semibold bg-[#5f9920] hover:bg-[#4d7f19] transition"
            >
              View Menu
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border-2 border-[#5f9920] text-[#5f9920] font-semibold hover:bg-[#5f9920] hover:text-white transition"
            >
              Book a Table
            </a>

          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="lg:w-1/2 relative flex justify-center mt-12 lg:mt-0">

          {/* Main Pizza */}
          <img
            src={pizza}
            className="w-[260px] md:w-[340px] lg:w-[420px] animate-spin-slow drop-shadow-2xl"
          />

          {/* Glass Card - Delivery */}
          <div className="absolute bottom-8 right-0 backdrop-blur-lg bg-white/40 border border-white/40 shadow-xl px-4 py-2 rounded-full flex items-center gap-2 animate-float">
            <img src={time} className="w-6" />
            <p className="text-sm font-semibold">
              Super Fast <br /> Delivery
            </p>
          </div>

          {/* Glass Card - Rating */}
          <div className="absolute top-6 left-0 backdrop-blur-lg bg-white/40 border border-white/40 shadow-xl px-4 py-2 rounded-full flex flex-col items-center animate-float">
            <p className="text-xs font-semibold">Good Rating</p>
            <div className="flex">
              <img src={star} width={14} />
              <img src={star} width={14} />
              <img src={star} width={14} />
              <img src={star} width={14} />
              <img src={starOutline} width={14} />
            </div>
          </div>

          {/* Glass Card - Restaurants */}
          <div className="absolute top-28 right-8 backdrop-blur-lg bg-white/40 border border-white/40 shadow-xl px-6 py-3 rounded-full text-center animate-float">
            <h2 className="text-red-500 font-bold text-xl">100+</h2>
            <p className="text-xs font-semibold">Restaurants</p>
          </div>

          {/* Floating Food Icons */}
          <img
            src={tomatocut}
            className="absolute left-10 bottom-10 w-20 animate-float"
          />

          <img
            src={tomato}
            className="absolute top-5 right-16 w-16 animate-float"
          />

          <img
            src={cabbage}
            className="absolute bottom-0 left-0 w-28 animate-float"
          />

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
