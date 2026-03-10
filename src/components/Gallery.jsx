
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const galleryData = [
  {
    image: "/images/food1.png",
    title: "Signature Pasta",
    description:
      "Our handmade pasta prepared with fresh ingredients and authentic spices. A perfect balance of taste and tradition.",
  },
  {
    image: "/images/food2.jpg",
    title: "Woodfire Pizza",
    description:
      "Baked in a traditional woodfire oven, our pizzas are crispy, flavorful, and topped with premium ingredients.",
  },
  {
    image: "/images/food3.jpg",
    title: "Chef Special Dessert",
    description:
      "A delightful dessert crafted by our chef to give you the perfect sweet ending to your meal.",
  },
];

function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="gallery"
      className="min-h-screen flex items-center bg-[#d4d5cc] px-4 md:px-8 py-16"
    >
      <div className="max-w-7xl mx-auto w-full">

        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#5f9920]">
            Our Gallery
          </h2>
          <p className="text-gray-700 mt-3 text-sm md:text-lg">
            Swipe through some of our delicious creations.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Slider */}
          <div className="w-full">

            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              grabCursor={true}
              pagination={{ clickable: true }}
              navigation
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
              {galleryData.map((item, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[280px] sm:h-[350px] md:h-[500px] object-cover rounded-xl md:rounded-2xl shadow-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

          </div>

          {/* Info */}
          <div className="space-y-4 md:space-y-6 text-center md:text-left">

            <h3 className="text-2xl md:text-4xl font-bold text-gray-900">
              {galleryData[activeIndex].title}
            </h3>

            <div className="w-16 md:w-20 h-1 bg-[#5f9920] mx-auto md:mx-0 rounded"></div>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
              {galleryData[activeIndex].description}
            </p>

            <p className="text-gray-600 text-sm md:text-base">
              Swipe the gallery to explore more dishes from our restaurant.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Gallery;

