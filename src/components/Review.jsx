import React from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Emma Newman",
    role: "Food Blogger",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review:
      "Amazing food and great service. The atmosphere is very cozy and I love coming here every weekend.",
  },
  {
    name: "Paul Trueman",
    role: "Regular Customer",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    review:
      "I have lunch here almost every day. The staff is friendly and the quality is always top-notch.",
  },
  {
    name: "Viktoria Freeman",
    role: "Food Critic",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 4,
    review:
      "One of the best restaurants in the city. Highly recommend trying their signature dishes.",
  },
  {
    name: "Audrey Oldman",
    role: "Traveler",
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 5,
    review:
      "Fantastic place with delicious meals. I will definitely visit again next time I'm in town.",
  },
];

const Review = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-t from-[#d4d5cc] to-transparent animate-gradient-x">

      {/* Heading */}

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          What <span className="text-yellow-500">People Say</span>
        </h2>

        <p className="text-gray-500 mt-4">
          Real experiences from our happy customers
        </p>
      </div>

      {/* Auto scrolling container */}

      <motion.div
        className="flex gap-8 px-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {[...reviews, ...reviews].map((review, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              rotateY: 10,
              rotateX: 5,
            }}
            className="min-w-[320px] p-6 rounded-2xl 
            backdrop-blur-md 
            bg-white/70 
            border border-white/50 
            shadow-lg hover:shadow-yellow-400/40
            transition-all duration-500"
          >
            {/* Avatar */}

            <div className="flex items-center gap-4 mb-4">
              <img
                src={review.img}
                alt="avatar"
                className="w-12 h-12 rounded-full border-2 border-yellow-400"
              />

              <div>
                <h4 className="font-semibold text-gray-800">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.role}</p>
              </div>
            </div>

            {/* Rating */}

            <div className="flex text-yellow-400 mb-3 text-lg">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>

            {/* Review */}

            <p className="text-gray-600 text-sm leading-relaxed">
              {review.review}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Review;