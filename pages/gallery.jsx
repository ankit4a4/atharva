"use client";
import React, { useState } from "react";
import img1 from "@/public/images/gallery/1.jpeg";
import img2 from "@/public/images/gallery/2.jpeg";
import img3 from "@/public/images/gallery/3.jpeg";
import img4 from "@/public/images/gallery/4.jpeg";
import img5 from "@/public/images/gallery/5.jpeg";
import img6 from "@/public/images/gallery/6.jpeg";
import img7 from "@/public/images/gallery/7.jpeg";
import img8 from "@/public/images/gallery/8.jpeg";
import img9 from "@/public/images/gallery/9.jpeg";
import img10 from "@/public/images/gallery/10.jpeg";
import img11 from "@/public/images/gallery/11.jpeg";
import img12 from "@/public/images/gallery/12.jpeg";
import img13 from "@/public/images/gallery/13.jpeg";
import img14 from "@/public/images/gallery/14.jpeg";
import img15 from "@/public/images/gallery/15.jpeg";
import img16 from "@/public/images/gallery/16.jpeg";
import img17 from "@/public/images/gallery/17.jpeg";
import img18 from "@/public/images/gallery/18.jpeg";
import img19 from "@/public/images/gallery/19.jpeg";
import img20 from "@/public/images/gallery/20.jpeg";
import img21 from "@/public/images/gallery/21.jpeg";
import img22 from "@/public/images/gallery/22.jpeg";
import img23 from "@/public/images/gallery/23.jpeg";
import img24 from "@/public/images/gallery/24.jpeg";
import img25 from "@/public/images/gallery/25.jpeg";
import img26 from "@/public/images/gallery/26.jpeg";
import img27 from "@/public/images/gallery/27.jpeg";
import img28 from "@/public/images/gallery/28.jpeg";
import img29 from "@/public/images/gallery/29.jpeg";
import img39 from "@/public/images/gallery/39.jpg";
import img40 from "@/public/images/gallery/40.jpg";
import img41 from "@/public/images/gallery/41.jpg";
import img42 from "@/public/images/gallery/42.jpg";
import img43 from "@/public/images/gallery/43.jpg";
import img44 from "@/public/images/gallery/44.jpg";
import img45 from "@/public/images/gallery/45.jpg";
import img46 from "@/public/images/gallery/46.jpg";
import img47 from "@/public/images/gallery/47.jpg";
import bg from "@/public/images/gallery/gallery-bg.jpg";

const images = [
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
  img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  img21, img22, img23, img24, img25, img26, img27, img28, img29,
  img39, img40, img41, img42, img43, img44, img45, img46, img47
];

const videos = [
  { src: "/videos/video1.mp4" },
  { src: "/videos/video2.mp4" },
  { src: "/videos/video3.mp4" },
];

const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  const nextImage = () =>
    setLightboxIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* ================= Hero Section ================= */}
      <section
        className="relative flex items-center justify-center h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Welcome to Our Gallery
          </h1>
          <p className="text-white mt-4 text-lg md:text-2xl">
            Explore our collection of amazing photos and videos
          </p>
        </div>
      </section>

      {/* ================= Photo Gallery ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Photo Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg bg-white aspect-[3/4] cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <img
                src={img.src ? img.src : img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================= Lightbox ================= */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:opacity-70"
          >
            &times;
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 md:left-10 text-white text-4xl font-bold hover:opacity-70"
          >
            &#10094;
          </button>

          <img
            src={images[lightboxIndex].src}
            alt="Full size"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg object-contain"
          />

          <button
            onClick={nextImage}
            className="absolute right-4 md:right-10 text-white text-4xl font-bold hover:opacity-70"
          >
            &#10095;
          </button>
        </div>
      )}

      {/* ================= Video Gallery ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-gray-300">
        <h2 className="text-3xl font-bold text-center mb-12">Video Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {videos.map((video, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg bg-white aspect-[3/4]"
            >
              <video
                src={video.src}
                className="w-full h-full object-cover"
                controls
                playsInline
                preload="metadata"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
