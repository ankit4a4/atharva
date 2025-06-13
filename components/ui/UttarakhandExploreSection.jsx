"use client"; // This directive is necessary for Next.js 13+ App Router to mark a component as a Client Component.

import React from "react";
import { motion } from "framer-motion"; // For declarative animations.
// Lucide-React icons for thematic representation. Ensure 'lucide-react' is installed.
import { Mountain, Sprout, Landmark, PawPrint, ArrowRight } from "lucide-react";
import Image from "next/image";
import img4 from "../../public/images/home/3.jpg";
import img5 from "../../public/images/home/5.jpg";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';




const UttarakhandExploreSection = () => {
  // Data for the highlights of Uttarakhand's natural beauty and attractions.
  const highlights = [
    {
      icon: Mountain, // Represents the resort's mountain setting.
      title: "Nestled in Pristine Nature",
      description:
        "Our resort offers a serene escape, surrounded by lush Himalayan forests and majestic peaks, providing unparalleled tranquility and fresh mountain air.",
      image: img4, // Placeholder image for natural surroundings
    },
    {
      icon: Sprout, // Represents spirituality and growth, suitable for Rishikesh.
      title: "Rishikesh: Yoga & Adventure",
      description:
        "Just a short drive away, Rishikesh is a renowned spiritual hub for yoga, meditation, and thrilling adventure sports like river rafting and bungee jumping.",
      image:
        "https://images.unsplash.com/photo-1570804485046-b5b8d795dc5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmlzaGlrZXNoJTJDJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D", // Placeholder image for Rishikesh
    },
    {
      icon: Landmark, // Represents historical and spiritual significance, suitable for Haridwar.
      title: "Haridwar: The Holy City",
      description:
        "Explore the ancient city of Haridwar, a significant Hindu pilgrimage site known for its vibrant Ganga Aarti ceremony on the sacred Ganges River banks.",
      image:
        "https://images.unsplash.com/photo-1641107699881-faab3a70b6fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D", // Placeholder image for Haridwar
    },
    {
      icon: PawPrint, // Represents wildlife and safaris.
      title: "Jungle Safari: Wildlife Encounters",
      description:
        "Embark on an exhilarating jungle safari in nearby national parks to witness diverse wildlife, including elusive tigers, majestic elephants, and exotic birds.",
      image: img5, // Placeholder image for Jungle Safari
    },
  ];

  return (
    // Section container with responsive padding and a subtle gradient background.
    <section className="pt-20 md:pt-32 pb-5 bg-gradient-to-br from-indigo-50 to-blue-50 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title and Description */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} // Animation plays only once when element enters viewport.
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-indigo-200 text-indigo-800 rounded-full text-sm font-medium mb-4">
            Our Enchanting Location
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Discover the Heart of Uttarakhand
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Atharva Resort is strategically located amidst the breathtaking
            beauty of Uttarakhand, offering a perfect blend of serene nature and
            exciting adventures.
          </p>
        </motion.div>
        <div className="md:hidden">
          <Swiper
            spaceBetween={16}
            slidesPerView={1.1}
            pagination={{ clickable: true }}
            style={{ paddingBottom: "2rem" }}
          >
            {highlights.map((item, index) => (
              <SwiperSlide key={item.title}>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-md overflow-hidden group transition-all duration-300 transform-gpu"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://placehold.co/600x400/E0F2F7/000000?text=Image+Error`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4">
                      <item.icon
                        size={36}
                        className="text-white drop-shadow-lg"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-playfair text-xl md:text-2xl font-bold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm mb-4">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Highlights Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title} // Unique key for each highlight card.
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }} // Staggered animation effect.
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }} // Lift and shadow on hover.
              className="bg-white rounded-2xl shadow-md overflow-hidden group transition-all duration-300 transform-gpu" // GPU acceleration for smooth animation.
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  width={10}
                  height={14}
                  src={item.image}
                  alt={item.title}
                  // Responsive image handling, covers the area.
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback for broken images.
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/600x400/E0F2F7/000000?text=Image+Error`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-4">
                  <item.icon size={36} className="text-white drop-shadow-lg" />{" "}
                  {/* Icon overlay */}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl md:text-2xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  {item.description}
                </p>
                {/* <a 
                  href={`/explore/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} // Example dynamic link structure.
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
                >
                  Learn More <ArrowRight size={16} className="ml-2" />
                </a> */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action (Optional) */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <p className="text-xl text-gray-700 mb-6">
            Ready to embark on your adventure?
          </p>
          <a href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded text-lg font-medium transition-all duration-300 shadow-xl"
            >
              Book Your Stay
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default UttarakhandExploreSection;
