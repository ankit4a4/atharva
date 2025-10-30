"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function LifestyleExperience() {
  const mediaItems = [
    { type: "video", src: "/videos/1.mp4" },
    { type: "video", src: "/videos/2.mp4" },
    { type: "video", src: "/videos/3.mp4" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* ====================== Lifestyle Section ====================== */}
      <section className="relative py-24 bg-gradient-to-br from-[#fff9f4] via-[#f8f3ec] to-[#fff] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-14">
          
          {/* Content Section */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-5 py-2 bg-[#bfa052]/10 text-[#bfa052] border border-[#bfa052]/20 rounded-full text-sm font-medium mb-5">
              Lifestyle & Living
            </span>

            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-5 leading-tight">
              Live Where Luxury Meets Nature
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Discover a serene escape nestled amidst lush greenery and mountain views.{" "}
              <span className="text-[#bfa052] font-semibold">
                The Atharva Retreat & Spa
              </span>{" "}
              isn’t just a stay — it’s a lifestyle where modern comfort and natural beauty
              blend seamlessly. Explore elegant flats designed for peace, privacy, and pleasure.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#bfa052] hover:bg-[#a88e45] text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg transition-all duration-300"
              >
                Book a Flat
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="border-2 border-[#bfa052] text-[#bfa052] hover:bg-[#bfa052]/10 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300"
              >
                Watch Full Tour
              </motion.button>
            </div>
          </motion.div>

          {/* Visual Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group"
          >
            {/* Main Display (Video) */}
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <motion.video
                key={mediaItems[activeIndex].src}
                src={mediaItems[activeIndex].src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-contain transition-all duration-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
            </div>

            {/* Thumbnails — All visible + scrollable */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-md overflow-x-auto scrollbar-hide">
              <div className="flex justify-center gap-4 px-4 py-3 bg-white/70 rounded-2xl backdrop-blur-sm shadow-lg w-max mx-auto">
                {mediaItems.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-20 h-16 sm:w-28 sm:h-20 rounded-xl overflow-hidden shadow-md border-2 transition-all duration-300 cursor-pointer ${
                      activeIndex === index
                        ? "border-[#bfa052] scale-105"
                        : "border-white hover:scale-105"
                    }`}
                  >
                    <video
                      src={item.src}
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Glow */}
        <div className="absolute top-20 w-40 h-40 right-20 sm:right-40 bg-[#bfa052]/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      </section>
    </>
  );
}
