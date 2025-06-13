'use client';

import { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setLoading(false);
    setSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      details: ['123 Serenity Lane', 'Paradise Valley, State 12345', 'United States'],
      color: 'text-primary-600'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568 (Spa)', '+1 (555) 123-4569 (Reservations)'],
      color: 'text-sage-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@atharvaresort.com', 'spa@atharvaresort.com', 'reservations@atharvaresort.com'],
      color: 'text-cream-700'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Reception: 24/7', 'Spa: 8:00 AM - 10:00 PM', 'Dining: 6:00 AM - 11:00 PM'],
      color: 'text-primary-600'
    }
  ];

  const departments = [
    'General Inquiry',
    'Room Reservations',
    'Spa Bookings',
    'Event Planning',
    'Guest Services',
    'Dining Reservations'
  ];

  return (
    <>
      <Head>
        <title>Contact Us - Atharva Resort & Spa</title>
        <meta name="description" content="Get in touch with Atharva Resort & Spa. Contact us for reservations, spa bookings, general inquiries, or to plan your perfect mountain retreat experience." />
        <meta name="keywords" content="contact resort, reservations, spa bookings, guest services, mountain resort contact" />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-sage-100 to-cream-100">
        <div className="container-width section-padding">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're here to help you plan your perfect mountain retreat. 
              Reach out to us for reservations, inquiries, or any assistance you need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container-width section-padding">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to connect with our team and start planning your stay
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-cream-50 p-8 rounded-2xl shadow-lg text-center card-hover"
              >
                <div className={`${info.color} mb-4 flex justify-center`}>
                  <info.icon size={48} />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-4">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-sage-50">
        <div className="container-width section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <h3 className="font-playfair text-3xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h3>

              {success ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
                  <h4 className="text-2xl font-semibold text-gray-800 mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-gray-600">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select a department</option>
                        {departments.map((dept) => (
                          <option key={dept} value={dept}>{dept}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="6"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Please provide details about your inquiry..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="loading-spinner" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-sage-200 to-primary-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="text-primary-600 mx-auto mb-4" size={48} />
                    <p className="text-gray-700 font-medium">Interactive Map</p>
                    <p className="text-gray-600 text-sm">Located in Paradise Valley</p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-playfair text-xl font-semibold text-gray-800 mb-2">
                    Visit Our Resort
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Nestled in the heart of Paradise Valley, our resort offers easy access 
                    to hiking trails, scenic drives, and local attractions while providing 
                    a peaceful retreat from city life.
                  </p>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-primary-50 p-6 rounded-2xl border border-primary-100">
                <h4 className="font-playfair text-xl font-semibold text-primary-800 mb-3">
                  Our Response Promise
                </h4>
                <ul className="space-y-2 text-primary-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} />
                    <span className="text-sm">Response within 24 hours</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} />
                    <span className="text-sm">Personalized assistance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} />
                    <span className="text-sm">Multilingual support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle size={16} />
                    <span className="text-sm">Dedicated concierge service</span>
                  </li>
                </ul>
              </div>

              {/* Emergency Contact */}
              <div className="bg-sage-100 p-6 rounded-2xl">
                <h4 className="font-playfair text-xl font-semibold text-sage-800 mb-3">
                  24/7 Guest Services
                </h4>
                <p className="text-sage-700 text-sm mb-4">
                  For urgent matters or if you're currently a guest needing immediate assistance:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Phone size={16} className="text-sage-600" />
                    <span className="font-medium text-sage-800">+1 (555) 123-HELP</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail size={16} className="text-sage-600" />
                    <span className="font-medium text-sage-800">urgent@atharvaresort.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;