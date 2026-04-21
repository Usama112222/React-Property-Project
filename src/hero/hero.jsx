import React, { useEffect, useState } from 'react';
import './hero.css';
import heroImage from '../assets/hero1.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  FaMapMarkerAlt, 
  FaBuilding, 
  FaTag, 
  FaSearch, 
  FaArrowRight,
  FaHome,
  FaChartLine,
  FaShieldAlt,
  FaStar
} from 'react-icons/fa';
import { MdLocationOn, MdCategory } from 'react-icons/md';
import { GiModernCity, GiHouseKeys } from 'react-icons/gi';

function Hero() {
  const [formData, setFormData] = useState({
    location: '',
    type: '',
    category: ''
  });

  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 100,
      once: false,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Searching for:', formData);
    // Add your search logic here
  };

  return (
    <div className="hero-container relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative w-[95%] h-[85vh] min-h-[600px] m-auto rounded-3xl overflow-hidden shadow-2xl"
      >
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-10000"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        
        {/* Content */}
        <div className="relative h-full flex flex-col justify-center lg:px-20 px-6 z-10">
          <div className="max-w-4xl">
            

            {/* Main Heading */}
            <h1 
              data-aos="fade-up" 
              data-aos-delay="100"
              className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Find Your Dream
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600 block">
                Home in Las Vegas
              </span>
            </h1>

            {/* Description */}
            <p 
              data-aos="fade-up" 
              data-aos-delay="200"
              className="text-white/90 text-lg lg:text-xl mb-8 max-w-2xl"
            >
              Experience luxury living with our curated collection of premium properties. 
              Your perfect home awaits in the entertainment capital of the world.
            </p>

            {/* Stats */}
            <div 
              data-aos="fade-up" 
              data-aos-delay="300"
              className="flex flex-wrap gap-8 mb-12"
            >
              <div className="flex items-center gap-3">
                <div className="bg-red-600/20 p-3 rounded-full backdrop-blur-sm">
                  <FaHome className="text-red-500 text-xl" />
                </div>
                <div>
                  <div className="text-white font-bold text-2xl">500+</div>
                  <div className="text-white/70 text-sm">Properties</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-red-600/20 p-3 rounded-full backdrop-blur-sm">
                  <FaChartLine className="text-red-500 text-xl" />
                </div>
                <div>
                  <div className="text-white font-bold text-2xl">98%</div>
                  <div className="text-white/70 text-sm">Satisfaction</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-red-600/20 p-3 rounded-full backdrop-blur-sm">
                  <FaShieldAlt className="text-red-500 text-xl" />
                </div>
                <div>
                  <div className="text-white font-bold text-2xl">24/7</div>
                  <div className="text-white/70 text-sm">Support</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button 
              data-aos="fade-up" 
              data-aos-delay="400"
              className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
            >
              Explore Properties
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* Search Form */}
      <div className="relative z-20 px-4 lg:px-20 -mt-20 mb-20">
        <div 
          data-aos="zoom-in-up"
          className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/20"
        >
          <form onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-1">
              {/* Location Field */}
              <div className="relative group p-6 hover:bg-gray-50/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-red-600 group-hover:scale-110 transition-transform">
                    <MdLocationOn className="text-2xl" />
                  </div>
                  <label className="text-gray-700 font-semibold text-sm uppercase tracking-wide">
                    Location
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="location"
                    placeholder="Enter address, city or ZIP"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full p-3 border-b-2 border-gray-200 focus:border-red-500 outline-none transition-all text-gray-800 bg-transparent"
                  />
                  <FaMapMarkerAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                </div>
              </div>

              {/* Property Type */}
              <div className="relative group p-6 hover:bg-gray-50/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-red-600 group-hover:scale-110 transition-transform">
                    <FaBuilding className="text-2xl" />
                  </div>
                  <label className="text-gray-700 font-semibold text-sm uppercase tracking-wide">
                    Property Type
                  </label>
                </div>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleInputChange}
                  className="w-full p-3 border-b-2 border-gray-200 focus:border-red-500 outline-none text-gray-800 bg-transparent cursor-pointer"
                >
                  <option value="" disabled>Select Type</option>
                  <option value="rent">For Rent</option>
                  <option value="sale">For Sale</option>
                  <option value="commercial">Commercial</option>
                  <option value="luxury">Luxury</option>
                </select>
              </div>

              {/* Category */}
              <div className="relative group p-6 hover:bg-gray-50/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-red-600 group-hover:scale-110 transition-transform">
                    <MdCategory className="text-2xl" />
                  </div>
                  <label className="text-gray-700 font-semibold text-sm uppercase tracking-wide">
                    Category
                  </label>
                </div>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full p-3 border-b-2 border-gray-200 focus:border-red-500 outline-none text-gray-800 bg-transparent cursor-pointer"
                >
                  <option value="" disabled>Select Category</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="villa">Villa</option>
                  <option value="condo">Condo</option>
                  <option value="duplex">Duplex</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="p-6 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 transition-all duration-300">
                <button
                  type="submit"
                  className="w-full h-full flex items-center justify-center gap-3 text-white font-bold text-lg group"
                >
                  <FaSearch className="text-xl group-hover:scale-110 transition-transform" />
                  Search Properties
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </form>

          {/* Popular Searches */}
          <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm text-gray-500">Popular Searches:</span>
              <button className="text-sm px-3 py-1 rounded-full bg-white hover:bg-red-600 hover:text-white transition-all duration-300 shadow-sm">
                Luxury Villas
              </button>
              <button className="text-sm px-3 py-1 rounded-full bg-white hover:bg-red-600 hover:text-white transition-all duration-300 shadow-sm">
                Downtown Condos
              </button>
              <button className="text-sm px-3 py-1 rounded-full bg-white hover:bg-red-600 hover:text-white transition-all duration-300 shadow-sm">
                Beachfront
              </button>
              <button className="text-sm px-3 py-1 rounded-full bg-white hover:bg-red-600 hover:text-white transition-all duration-300 shadow-sm">
                Gated Communities
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.5; }
        }
        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
        .hero-container {
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }
      `}</style>
    </div>
  );
}

export default Hero;