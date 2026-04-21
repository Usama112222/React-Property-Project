import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaEnvelope, 
  FaUser, 
  FaPhone, 
  FaPaperPlane,
  FaClock,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebookMessenger,
  FaArrowRight,
  FaCheckCircle
} from "react-icons/fa";
import { MdEmail, MdMessage, MdCall } from "react-icons/md";

function Message() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: false,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    { icon: <FaClock />, title: "Working Hours", details: "Mon - Sat: 9:00 AM - 8:00 PM" },
    { icon: <FaMapMarkerAlt />, title: "Visit Us", details: "123 Las Vegas Blvd, NV 89109" },
    { icon: <MdCall />, title: "Call Us", details: "+1 (888) 908-9102" },
    { icon: <MdEmail />, title: "Email Us", details: "info@realestate.com" },
  ];

  // High-quality real estate background images
  const backgroundImage = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80";

  return (
    <div className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/80 to-red-900/30"></div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div data-aos="fade-up" className="inline-flex items-center gap-2 bg-red-600/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <FaEnvelope className="text-red-500" />
            <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          </div>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Conversation</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-lg text-gray-300 max-w-2xl mx-auto">
            Whether you're looking to buy, sell, or invest in property, our team is here to help you every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
          
          {/* Contact Form */}
          <div
            data-aos="zoom-in"
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Send us a message</h3>
              <p className="text-gray-300">Fill out the form below and we'll get back to you within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div className="relative group">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors">
                  <FaUser />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all duration-300"
                />
              </div>

              {/* Email Field */}
              <div className="relative group">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors">
                  <MdEmail />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Your email address"
                  className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all duration-300"
                />
              </div>

              {/* Phone Field */}
              <div className="relative group">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-red-500 transition-colors">
                  <FaPhone />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Your phone number"
                  className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all duration-300"
                />
              </div>

              {/* Message Field */}
              <div className="relative group">
                <div className="absolute left-4 top-4 text-gray-400 group-focus-within:text-red-500 transition-colors">
                  <MdMessage />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Your message..."
                  className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="relative w-full group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitted ? (
                    <>
                      <FaCheckCircle className="animate-bounce" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </button>
            </form>

            {/* Success Message */}
            {isSubmitted && (
              <div className="mt-4 p-3 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center animate-fade-in">
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {/* Alternative Contact Methods */}
            <div className="mt-8 pt-6 border-t border-white/20">
              <p className="text-gray-300 text-center mb-4">Or reach us through</p>
              <div className="flex justify-center gap-4">
                <button className="p-3 bg-green-600/20 hover:bg-green-600 rounded-full transition-all duration-300 group">
                  <FaWhatsapp className="text-green-500 text-xl group-hover:scale-110 transition-transform" />
                </button>
                <button className="p-3 bg-blue-600/20 hover:bg-blue-600 rounded-full transition-all duration-300 group">
                  <FaFacebookMessenger className="text-blue-500 text-xl group-hover:scale-110 transition-transform" />
                </button>
                <button className="p-3 bg-red-600/20 hover:bg-red-600 rounded-full transition-all duration-300 group">
                  <MdEmail className="text-red-500 text-xl group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center space-y-8">
            <div data-aos="fade-left" data-aos-delay="200">
              <div className="inline-flex items-center gap-2 bg-red-600/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">Reach Us</span>
              </div>
              <h3 data-aos="fade-left" data-aos-delay="300" className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                Get in touch with us today and our team will assist you
              </h3>
              <p data-aos="fade-left" data-aos-delay="400" className="text-lg text-gray-300 mb-8">
                Our experts would love to contribute their expertise and insights to help you plan your next transaction, whether buying or selling a home.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 gap-4">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  data-aos="fade-left"
                  data-aos-delay={500 + index * 100}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:border-red-500/50 transition-all duration-300 hover:transform hover:translate-x-2 cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-red-500 text-3xl group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{info.title}</h4>
                      <p className="text-gray-300 text-sm">{info.details}</p>
                    </div>
                    <FaArrowRight className="ml-auto text-gray-500 group-hover:text-red-500 group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" />
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency Contact */}
            <div 
              data-aos="fade-left"
              data-aos-delay="900"
              className="bg-gradient-to-r from-red-600/20 to-red-800/20 backdrop-blur-sm rounded-xl p-6 border border-red-500/30"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-300 text-sm">Emergency Support</p>
                  <p className="text-white text-2xl font-bold">24/7 Hotline</p>
                </div>
                <button className="bg-red-600 px-6 py-2 rounded-lg text-white font-semibold hover:bg-red-700 transition-colors">
                  Call Now
                </button>
              </div>
            </div>

            {/* CTA Button */}
            <button
              data-aos="fade-left"
              data-aos-delay="1000"
              className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3 w-full lg:w-auto"
            >
              Schedule a Consultation
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Map Section */}
        <div 
          data-aos="fade-up"
          data-aos-delay="1100"
          className="mt-20 bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20"
        >
          <div className="h-[300px] rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206252.81077346016!2d-115.27996843171117!3d36.12412357196495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6d5b379a3!2sLas%20Vegas%2C%20NV!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Message;