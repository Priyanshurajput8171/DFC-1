import React from "react";
import { Utensils, Leaf, HeartHandshake } from "lucide-react";

function About() {
  return (
    <section id="about" className="py-24 bg-[#d4d5cc] px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#5f9920]">
            Our Story
          </h2>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            A place where flavor meets passion. Our restaurant was created to
            bring people together through delicious food, warm hospitality, and
            unforgettable dining experiences.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="relative group">
            <img
              src="/images/DFC-IMAGE.png"
              alt="Restaurant"
              className="rounded-2xl shadow-xl object-cover w-full h-[420px]"
            />

            <div className="absolute inset-0 rounded-2xl bg-[#5f9920]/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">

            <h3 className="text-3xl font-bold text-gray-900">
              Crafted With Passion
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Our chefs believe food is more than just a meal — it is an
              experience. Every dish we serve is prepared with carefully
              selected ingredients, authentic recipes, and a touch of love.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Whether you're visiting for a family dinner, a celebration, or a
              casual lunch with friends, we strive to create moments that stay
              with you long after the meal ends.
            </p>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-3 gap-6 pt-6">

              <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition">
                <Utensils className="mx-auto text-[#5f9920] mb-3" size={32} />
                <h4 className="font-semibold">Fresh Food</h4>
                <p className="text-sm text-gray-600">
                  Made daily with the finest ingredients.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition">
                <Leaf className="mx-auto text-[#5f9920] mb-3" size={32} />
                <h4 className="font-semibold">Healthy</h4>
                <p className="text-sm text-gray-600">
                  Balanced meals full of natural goodness.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition">
                <HeartHandshake className="mx-auto text-[#5f9920] mb-3" size={32} />
                <h4 className="font-semibold">Hospitality</h4>
                <p className="text-sm text-gray-600">
                  Friendly service that feels like home.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;