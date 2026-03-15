import React, { useEffect } from "react";
import restaurant from "../assets/DFC-IMAGE.png";
import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseUs = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <section id="about" className="relative py-24 bg-[#d4d5cc] overflow-hidden">
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


      {/* Animated Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-200/20 via-transparent to-green-200/20 animate-pulse"></div>

      {/* Floating Shapes */}
      <div className="absolute top-16 left-10 w-6 h-6 bg-yellow-400 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-24 w-12 h-12 border-4 border-white rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-4 h-4 bg-yellow-400 rounded-full animate-float"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Image */}
          <div className="relative" data-aos="fade-right">

            <img
              src={restaurant}
              alt="restaurant"
              className="rounded-lg shadow-xl w-full object-cover"
            />

            {/* Glass Experience Card */}
            <div className="absolute bottom-[-40px] right-[-20px] backdrop-blur-lg bg-white/60 border border-white/40 shadow-xl p-8 rounded-xl text-center w-44">

              <h2 className="text-5xl font-extrabold text-[#5f9920]">
                17
              </h2>

              <p className="text-gray-700 mt-2 font-medium">
                Years Experience
              </p>

            </div>

          </div>


          {/* Text Content */}
          <div data-aos="fade-left">

            <h2 className="text-4xl font-extrabold text-gray-800 leading-tight">
              We are doing more than
              <br />
              you expect
            </h2>

            <p className="text-gray-600 mt-6 leading-relaxed text-sm">
              Our vegetarian restaurant focuses on fresh ingredients,
              authentic Indian flavors and exceptional dining experience.
              Every dish is carefully prepared to bring the best taste
              and quality to our customers.
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed text-sm">
              From delicious paneer dishes to healthy thalis,
              we combine traditional recipes with modern presentation
              to deliver a memorable dining experience.
            </p>

            <div className="mt-6 italic text-gray-700">
              — Restaurant Founder
            </div>

          </div>

        </div>


        {/* Features */}
        <div className="grid lg:grid-cols-3 gap-12 mt-24">

          {[
            {
              num: "01",
              title: "We are located in the city center",
              text: "Easy to reach location for a comfortable dining experience."
            },
            {
              num: "02",
              title: "Fresh ingredients from organic farms",
              text: "We use only fresh vegetables and natural ingredients."
            },
            {
              num: "03",
              title: "Own fast delivery. 30 min Maximum",
              text: "Enjoy quick delivery of your favorite vegetarian meals."
            },
            {
              num: "04",
              title: "Professional, experienced chefs",
              text: "Our chefs prepare every dish with skill and passion."
            },
            {
              num: "05",
              title: "The highest standards of service",
              text: "Friendly staff and excellent service every time."
            },
          ].map((item, index) => (

            <div
              key={index}
              className="flex gap-4"
              data-aos="fade-up"
            >

              {/* Number */}
              <div className="text-yellow-500 font-extrabold text-4xl tracking-widest">
                {item.num}
              </div>

              {/* Text */}
              <div>
                <h4 className="font-semibold text-gray-800 text-lg">
                  {item.title}
                </h4>

                <p className="text-gray-600 text-sm mt-1">
                  {item.text}
                </p>
              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;