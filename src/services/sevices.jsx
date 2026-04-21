import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  FaHome, 
  FaHandHoldingUsd, 
  FaBuilding, 
  FaSearch, 
  FaClipboardList, 
  FaCamera,
  FaArrowRight,
  FaChartLine,
  FaGavel,
  FaShieldAlt,
  FaUserTie,
  FaClock,
  FaPhoneAlt
} from 'react-icons/fa';
import { GiReceiveMoney, GiHouseKeys } from 'react-icons/gi';
import { MdVerified, MdRealEstateAgent } from 'react-icons/md';

function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: false,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

  const services = [
    {
      id: 1,
      title: "Sell Your Home",
      description: "We sell your home at the best market price with maximum exposure",
      icon: <FaHome />,
      color: "from-red-500 to-red-600",
      features: ["Fast Sale", "Best Price", "No Commission"],
      delay: 200
    },
    {
      id: 2,
      title: "Home Loans",
      description: "We offer you free consultancy to get the best loan options available",
      icon: <FaHandHoldingUsd />,
      color: "from-blue-500 to-blue-600",
      features: ["Low Interest", "Quick Approval", "Flexible Terms"],
      delay: 400
    },
    {
      id: 3,
      title: "Property Management",
      description: "Best property management services for all types of properties",
      icon: <FaBuilding />,
      color: "from-green-500 to-green-600",
      features: ["24/7 Support", "Maintenance", "Tenant Management"],
      delay: 600
    },
    {
      id: 4,
      title: "Property Evaluation",
      description: "Professional property evaluation to determine accurate market value",
      icon: <FaChartLine />,
      color: "from-purple-500 to-purple-600",
      features: ["Free Quote", "Expert Analysis", "Market Report"],
      delay: 200
    },
    {
      id: 5,
      title: "Home Inspection",
      description: "Thorough home inspection to ensure you get what you were promised",
      icon: <FaClipboardList />,
      color: "from-yellow-500 to-orange-500",
      features: ["Certified Inspectors", "Detailed Report", "Fast Service"],
      delay: 400
    },
    {
      id: 6,
      title: "Professional Photoshoot",
      description: "We prepare your home's visual presentation with professional photography",
      icon: <FaCamera />,
      color: "from-pink-500 to-rose-500",
      features: ["HD Quality", "Virtual Tours", "Drone Shots"],
      delay: 600
    },
    {
      id: 7,
      title: "Legal Services",
      description: "Expert legal help for all property-related legal matters",
      icon: <FaGavel />,
      color: "from-indigo-500 to-indigo-600",
      features: ["Documentation", "Contract Review", "Legal Advice"],
      delay: 200
    },
    {
      id: 8,
      title: "Mortgage Advisory",
      description: "Professional guidance to secure the best mortgage deals",
      icon: <GiReceiveMoney />,
      color: "from-teal-500 to-teal-600",
      features: ["Free Consultation", "Multiple Options", "Best Rates"],
      delay: 400
    },
    {
      id: 9,
      title: "Investment Consulting",
      description: "Strategic advice for real estate investment opportunities",
      icon: <FaUserTie />,
      color: "from-cyan-500 to-cyan-600",
      features: ["Market Analysis", "ROI Calculator", "Portfolio Management"],
      delay: 600
    }
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div data-aos="fade-up" className="inline-flex items-center gap-2 bg-red-600/10 rounded-full px-4 py-2 mb-4">
            <GiHouseKeys className="text-red-600" />
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">What We Offer</span>
          </div>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Top Real Estate{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Services Available</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive real estate solutions tailored to meet all your property needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              data-aos="zoom-in"
              data-aos-delay={service.delay}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
            >
              {/* Animated Border Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} style={{ padding: '2px', borderRadius: '1rem', mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude' }}></div>
              
              <div className="relative p-8 bg-white rounded-2xl transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-gray-50 group-hover:to-white">
                
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <div className={`relative w-20 h-20 flex items-center justify-center bg-gradient-to-r ${service.color} rounded-2xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                    <div className="text-white text-3xl">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                      <MdVerified className="text-green-500 text-xs" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Read More Button */}
                <button className={`group/btn inline-flex items-center gap-2 font-semibold transition-all duration-300 ${hoveredCard === service.id ? 'text-red-600 gap-3' : 'text-gray-600'}`}>
                  <span>Learn More</span>
                  <FaArrowRight className={`text-sm transition-all duration-300 ${hoveredCard === service.id ? 'translate-x-1' : ''}`} />
                </button>

                {/* Decorative Number */}
                <div className="absolute bottom-4 right-4 text-6xl font-bold text-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {String(service.id).padStart(2, '0')}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div data-aos="fade-up" className="mt-20 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-12">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 mb-4">
                <FaShieldAlt className="text-white" />
                <span className="text-white font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                We're the most trusted real estate agency in Las Vegas
              </h3>
              <p className="text-white/90 text-lg mb-6">
                With over 35 years of experience and thousands of satisfied clients, 
                we've built a reputation for excellence, integrity, and results.
              </p>
              <button className="bg-white text-red-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
                Learn More About Us
                <FaArrowRight />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center text-white">
                <div className="text-4xl font-bold mb-2">35+</div>
                <div className="text-sm">Years of Experience</div>
              </div>
              <div className="text-center text-white">
                <div className="text-4xl font-bold mb-2">5000+</div>
                <div className="text-sm">Properties Sold</div>
              </div>
              <div className="text-center text-white">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center text-white">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <div className="text-sm">Customer Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div data-aos="fade-up" className="mt-12 bg-gray-900 rounded-2xl p-8 text-center">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h4 className="text-2xl font-bold text-white mb-2">Ready to get started?</h4>
              <p className="text-gray-400">Contact us today for a free consultation</p>
            </div>
            <div className="flex gap-4">
              <button className="bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2">
                <FaPhoneAlt />
                Call Now
              </button>
              <button className="border-2 border-white/20 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;