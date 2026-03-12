import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import paneerButterMasala from "../assets/paneerbutter.jpg";
import masalaDosa from "../assets/masaladosa.jpg";
import vegBiryani from "../assets/vegbiryani.jpg";
import choleBhature from "../assets/chole_bhature.jpg";
import paneerTikka from "../assets/paneertikka.jpg";
import dalTadka from "../assets/daltadka.jpg";
import vegThali from "../assets/vegthali.jpg";
import aaloParatha from "../assets/aaloparatha.jpg";

const PopularDishes = () => {

  const menu = [
    { id:1, name:"Paneer Butter Masala", desc:"Creamy tomato gravy with paneer cubes.", rating:4.8,image:paneerButterMasala},
    { id:2, name:"Masala Dosa", desc:"Crispy dosa stuffed with spiced potato filling.", rating:4.7,image:masalaDosa },
    { id:3, name:"Veg Biryani", desc:"Fragrant basmati rice cooked with vegetables.", rating:4.9,image:vegBiryani },
    { id:4, name:"Chole Bhature", desc:"Spicy chickpeas served with fluffy bhature.", rating:4.6,image:choleBhature},
    { id:5, name:"Paneer Tikka", desc:"Grilled paneer marinated with Indian spices.", rating:4.8,image:paneerTikka },
    { id:6, name:"Dal Tadka", desc:"Yellow lentils tempered with garlic and spices.", rating:4.7,image:dalTadka },
    { id:7, name:"Veg Thali", desc:"Complete Indian meal with roti, sabzi and rice.", rating:4.9,image:vegThali },
    { id:8, name:"Aloo Paratha", desc:"Stuffed paratha served with butter and curd.", rating:4.6,image:aaloParatha }
  ];

  return (
    <section
      className="py-12 bg-gradient-to-b from-[#659040] via-[#6cab33] to-[#5f9920] overflow-hidden relative"
      id="menu"
    >

      {/* Floating Food Icons */}
      <div className="absolute top-20 left-10 text-3xl animate-float text-green-200">🌶️</div>
      <div className="absolute bottom-20 right-20 text-3xl animate-float text-green-200">🥬</div>
      <div className="absolute top-40 right-40 text-3xl animate-float text-green-200">🥕</div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white drop-shadow-md">
            Popular Veg Dishes
          </h2>
          <p className="text-green-100 mt-3 text-lg">
            Fresh • Healthy • 100% Vegetarian
          </p>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >

          {menu.map((item) => (

            <SwiperSlide key={item.id}>

              <div className="backdrop-blur-xl bg-white/90 border border-white/40 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 relative">

                {/* Dish Image */}
                <div className="w-full h-40 rounded-xl overflow-hidden mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition duration-300 hover:scale-105"
                  />
                </div>

                {/* Dish Name */}
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mt-2">
                  {item.desc}
                </p>

                {/* Rating + Button */}
                <div className="flex items-center justify-between mt-4">

                  <span className="text-yellow-500 font-semibold">
                    ⭐ {item.rating}
                  </span>

                  <button className="bg-[#5f9920] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#4d7f19] transition">
                    Order
                  </button>

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
};

export default PopularDishes;