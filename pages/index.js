"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  Wifi,
  Car,
  Utensils,
  Dumbbell,
  Waves,
  TreePine,
  Award,
  Users,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ChevronDown,
} from "lucide-react";
import Image from 'next/image'; 

import BookingModal from "../components/ui/BookingModal";
import UttarakhandExploreSection from "../components/ui/UttarakhandExploreSection";
import img1 from "../public/images/home/1.jpg"
import img2 from "../public/images/home/2.jpg"
import img3 from "../public/images/home/3.jpg"
import img4 from "../public/images/home/4.jpg"

const Home = () => {
  const [bookingModal, setBookingModal] = useState({
    isOpen: false,
    title: "",
    type: "",
  });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const features = [
    {
      icon: Wifi,
      title: "Complimentary WiFi",
      description: "High-speed internet throughout the resort",
    },
    {
      icon: Car,
      title: "Valet Parking",
      description: "Complimentary parking with premium valet service",
    },
    {
      icon: Utensils,
      title: "Gourmet Dining",
      description: "Multiple restaurants with world-class cuisine",
    },
    {
      icon: Dumbbell,
      title: "Fitness & Wellness",
      description: "24/7 state-of-the-art fitness facilities",
    },
    {
      icon: Waves,
      title: "Infinity Pool",
      description: "Stunning infinity pool with mountain panoramas",
    },
    {
      icon: TreePine,
      title: "Nature Experiences",
      description: "Guided trails through pristine wilderness",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, NY",
      rating: 5,
      comment:
        "An absolutely transformative experience. The spa treatments were divine, the staff exceeded every expectation, and the mountain views took our breath away. This is luxury redefined.",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=100&h=100&fit=crop",
    },
    {
      name: "Michael Chen",
      location: "San Francisco, CA",
      rating: 5,
      comment:
        "Perfect escape from city life. The rooms are architectural masterpieces and the attention to detail is extraordinary. Every moment felt like a dream.",
      image:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?w=100&h=100&fit=crop",
    },
    {
      name: "Emma Thompson",
      location: "London, UK",
      rating: 5,
      comment:
        "Our honeymoon was absolutely magical here. The romantic atmosphere, exceptional service, and breathtaking surroundings created memories we'll treasure forever.",
      image:
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?w=100&h=100&fit=crop",
    },
  ];

  const roomHighlights = [
    {
      title: "Elite Retreat",
      subtitle: "Mountain View Luxury",
      description:
        "Sophisticated comfort with panoramic mountain vistas and premium amenities",
      image:
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?w=500&h=400&fit=crop",
      price: "From ₹3000",
      features: [
        "King Size Bed",
        "Mountain View",
        "Marble Bathroom",
        "Private Balcony",
      ],
    },
    {
      title: "Royal Premium",
      subtitle: "Elevated Experience",
      description:
        "Spacious suites with separate living areas and personalized butler service",
      image:
        "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?w=500&h=400&fit=crop",
      price: "From ₹4000",
      features: [
        "Separate Living Area",
        "Butler Service",
        "Premium Bathroom",
        "Private Terrace",
      ],
    },
    {
      title: "Platinum Signature Suite",
      subtitle: "Ultimate Luxury",
      description:
        "Expansive suites with 360° views and dedicated concierge service",
      image:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?w=500&h=400&fit=crop",
      price: "From ₹6000",
      features: [
        "360° Views",
        "Master Bedroom",
        "Spa Bathroom",
        "Personal Concierge",
      ],
    },
  ];

  const spaHighlights = [
    {
      title: "Aromatherapy Bliss",
      duration: "90 min",
      price: "₹400",
      description: "Therapeutic journey with healing essential oils",
    },
    {
      title: "Ayurvedic Healing",
      duration: "120 min",
      price: "₹1200",
      description: "Ancient wisdom for modern wellness",
    },
    {
      title: "Couples Retreat",
      duration: "150 min",
      price: "₹1300",
      description: "Intimate spa experience for two",
    },
  ];

  const stats = [
    { number: "10+", label: "Luxury Suites" },
    { number: "15+", label: "Spa Treatments" },
    { number: "100%", label: "Guest Satisfaction" },
    { number: "24/7", label: "Concierge Service" },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>
          Atharva Resort & Spa - Luxury Mountain Retreat & Wellness Sanctuary
        </title>
        <meta
          name="description"
          content="Experience ultimate luxury at Atharva Resort & Spa. Premium mountain accommodations, world-class spa treatments, and breathtaking views await you in our serene wellness sanctuary."
        />
        <meta
          name="keywords"
          content="luxury resort, spa, mountain retreat, vacation, premium accommodation, wellness sanctuary, luxury hotel"
        />
      </Head>

      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?w=1920&h=1080&fit=crop"
            alt="Atharva Resort Mountain Sanctuary"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 text-center text-white container-width section-padding flex flex-col justify-center min-h-screen">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              Welcome to Paradise
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-playfair text-6xl md:text-8xl font-bold mb-6"
          >
            Atharva Resort
            <span className="block text-4xl md:text-5xl text-primary-300 mt-4 font-light">
              & Wellness Sanctuary
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Discover tranquility in our luxury mountain retreat, where every
            detail is crafted to nurture your mind, body, and spirit in nature's
            embrace.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                setBookingModal({
                  isOpen: true,
                  title: "Your Perfect Stay",
                  type: "room",
                })
              }
              className="bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-2xl hover:shadow-primary-500/25 flex items-center space-x-2"
            >
              <span>Reserve Your Escape</span>
              <ArrowRight size={20} />
            </motion.button>

            <Link href="/spa">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 shadow-xl"
              >
                Explore Spa Treatments
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-200 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2"
          >
            <span className="text-sm font-medium">Discover More</span>
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </section>

      {/* Welcome Section */}
      <section className="py-32 bg-white">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
                Welcome to Luxury
              </span>
              <h2 className="font-playfair text-5xl font-bold text-gray-800 mb-6">
                Where Luxury Meets Serenity
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Nestled in the pristine mountains, Atharva Resort & Spa offers
                an unparalleled escape where every moment is designed to restore
                your spirit and rejuvenate your soul. Our commitment to
                excellence ensures that your stay transcends the ordinary.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4">
                  <Award className="text-primary-600 mx-auto mb-2" size={32} />
                  <div className="font-semibold text-gray-800">
                    Award Winning
                  </div>
                  <div className="text-sm text-gray-600">Luxury Resort</div>
                </div>
                <div className="text-center p-4">
                  <Users className="text-primary-600 mx-auto mb-2" size={32} />
                  <div className="font-semibold text-gray-800">Expert Team</div>
                  <div className="text-sm text-gray-600">
                    Personalized Service
                  </div>
                </div>
              </div>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary"
                >
                  Discover Our Story
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src={img3}
                  alt="Resort Meditation Garden"
                  className="rounded-2xl shadow-xl md:h-[25rem] object-cover"
                />
                <Image
                  src={img2}
                  alt="Luxury Spa Treatment"
                  className="rounded-2xl shadow-xl md:h-[25rem] object-cover mt-8"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-1">
                    4+
                  </div>
                  <div className="text-gray-600 text-sm">
                    Years of Excellence
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <UttarakhandExploreSection />

      {/* Rooms Section */}
      <section className="py-32 bg-sage-50">
        <div className="container-width section-padding">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-sage-200 text-sage-800 rounded-full text-sm font-medium mb-6">
              Luxury Accommodations
            </span>
            <h2 className="font-playfair text-5xl font-bold text-gray-800 mb-6">
              Exquisite Rooms & Suites
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each accommodation is a masterpiece of design and comfort,
              offering breathtaking views and premium amenities for an
              unforgettable stay.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {roomHighlights.map((room, index) => (
              <motion.div
                key={room.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden card-hover group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="font-bold text-primary-700">
                      {room.price}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="mb-4">
                    <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-1">
                      {room.title}
                    </h3>
                    <p className="text-primary-600 font-medium">
                      {room.subtitle}
                    </p>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {room.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {room.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() =>
                      setBookingModal({
                        isOpen: true,
                        title: room.title,
                        type: "room",
                      })
                    }
                    className="w-full btn-primary"
                  >
                    Reserve Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link href="/rooms">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary text-lg px-10 py-4"
              >
                View All Accommodations
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Spa Preview Section */}
      <section className="py-32 bg-white">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?w=600&h=500&fit=crop"
                alt="Luxury Spa Experience"
                className="rounded-3xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-8 -right-3 lg:-right-8 bg-primary-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">15+</div>
                  <div className="text-primary-200 text-sm">
                    Signature Treatments
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-2 bg-cream-200 text-cream-800 rounded-full text-sm font-medium mb-6">
                Wellness Sanctuary
              </span>
              <h2 className="font-playfair text-5xl font-bold text-gray-800 mb-6">
                Rejuvenate Your Spirit
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Our world-class spa combines ancient healing traditions with
                modern wellness innovations, creating transformative experiences
                that restore balance and vitality.
              </p>

              <div className="space-y-4 mb-8">
                {spaHighlights.map((treatment, index) => (
                  <div
                    key={treatment.title}
                    className="flex items-center justify-between p-4 bg-cream-50 rounded-xl"
                  >
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {treatment.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {treatment.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-primary-600">
                        {treatment.price}
                      </div>
                      <div className="text-xs text-gray-500">
                        {treatment.duration}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4">
                <Link href="/spa">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary"
                  >
                    Explore Spa Treatments
                  </motion.button>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    setBookingModal({
                      isOpen: true,
                      title: "Spa Treatment",
                      type: "spa",
                    })
                  }
                  className="btn-secondary"
                >
                  Book Treatment
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gradient-to-br from-sage-50 to-cream-50">
        <div className="container-width section-padding">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              Premium Amenities
            </span>
            <h2 className="font-playfair text-5xl font-bold text-gray-800 mb-6">
              Exceptional Experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every detail is thoughtfully designed to exceed your expectations
              and create lasting memories
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="text-primary-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={56} />
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white">
        <div className="container-width section-padding">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block px-4 py-2 bg-cream-200 text-cream-800 rounded-full text-sm font-medium mb-6">
              Guest Stories
            </span>
            <h2 className="font-playfair text-5xl font-bold text-gray-800 mb-6">
              Unforgettable Experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes our guests return time and time again
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-cream-50 p-12 rounded-3xl shadow-xl text-center"
            >
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-current"
                      size={24}
                    />
                  )
                )}
              </div>
              <blockquote className="text-2xl text-gray-700 font-light italic mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].comment}"
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <p className="font-semibold text-gray-800 text-lg">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-primary-600"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="py-32 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-playfair text-5xl font-bold mb-6">
                Plan Your Perfect Escape
              </h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Our dedicated concierge team is ready to help you create an
                unforgettable experience tailored to your desires. Contact us
                today to begin planning your luxury mountain retreat.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-primary-200" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-primary-200" />
                  <span>reservations@atharvaresort.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={20} className="text-primary-200" />
                  <span>Paradise Valley, Mountain Region</span>
                </div>
              </div>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary-700 hover:bg-cream-100 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Get in Touch
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl"
            >
              <h3 className="font-playfair text-2xl font-bold mb-6">
                Quick Reservation
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Check-in
                    </label>
                    <div className="bg-white/20 p-3 rounded-lg flex items-center space-x-2">
                      <Calendar size={16} />
                      <span className="text-sm">Select Date</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Check-out
                    </label>
                    <div className="bg-white/20 p-3 rounded-lg flex items-center space-x-2">
                      <Calendar size={16} />
                      <span className="text-sm">Select Date</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Guests
                  </label>
                  <div className="bg-white/20 p-3 rounded-lg flex items-center space-x-2">
                    <Users size={16} />
                    <span className="text-sm">2 Adults</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() =>
                    setBookingModal({
                      isOpen: true,
                      title: "Your Stay",
                      type: "room",
                    })
                  }
                  className="w-full bg-white text-primary-700 hover:bg-cream-100 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Check Availability
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModal.isOpen}
        onClose={() => setBookingModal({ isOpen: false, title: "", type: "" })}
        title={bookingModal.title}
        type={bookingModal.type}
      />
    </>
  );
};

export default Home;
