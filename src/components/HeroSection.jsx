
import React from "react";
import { ArrowDown } from "lucide-react";

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 bg-[#d4d5cc]"
    >
      <div className="container max-w-5xl mx-auto text-center z-10">
        <div className="space-y-8">

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="block text-[#5f9920]">
              DFC Roorkee
            </span>
            <span className="block text-gray-800">
              Made With Love
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Welcome to our restaurant where taste meets tradition. 
            We serve freshly prepared dishes made from the finest ingredients. 
            Experience a warm atmosphere, great service, and unforgettable flavors.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center pt-4">
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
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-600 mb-2">Scroll</span>
        <ArrowDown className="w-6 h-6 text-[#5f9920]" />
      </div>
    </section>
  );
}

export default HeroSection;
