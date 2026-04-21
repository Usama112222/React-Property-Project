import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  FaStar, 
  FaQuoteLeft, 
  FaQuoteRight,
  FaChevronLeft,
  FaChevronRight,
  FaRegStar,
  FaStarHalfAlt,
  FaUserCircle,
  FaCalendar,
  FaCheckCircle,
  FaLinkedin,
  FaTwitter,
  FaFacebook
} from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';
import pic1 from "../assets/client1.png";
import pic2 from "../assets/client2.png";
import pic3 from "../assets/client3.png";
import pic4 from "../assets/client4.png";
import pic5 from "../assets/client5.png";
import pic6 from "../assets/client6.png";

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: false,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Dana Gilmore",
      role: "First-time Home Buyer",
      location: "Las Vegas, NV",
      image: pic1,
      rating: 5,
      date: "March 15, 2024",
      review: "The WP Estate team did an outstanding job helping me buy my first home. Their high level of service and dedication made the entire process smooth and stress-free. I couldn't be happier with my new home!",
      verified: true,
      category: "buyer",
      social: { linkedin: "#", twitter: "#", facebook: "#" }
    },
    {
      id: 2,
      name: "Ana Anderson",
      role: "Property Investor",
      location: "Summerlin, NV",
      image: pic2,
      rating: 5,
      date: "March 10, 2024",
      review: "Excellent work! They helped me find the perfect investment property with great returns. Their market knowledge and negotiation skills are unmatched. Highly recommended for any real estate needs.",
      verified: true,
      category: "investor",
      social: { linkedin: "#", twitter: "#", facebook: "#" }
    },
    {
      id: 3,
      name: "Michael Roberts",
      role: "Home Seller",
      location: "Henderson, NV",
      image: pic3,
      rating: 5,
      date: "March 5, 2024",
      review: "Sold my house in just 2 weeks at above asking price! Their marketing strategy and professional photography made all the difference. The team was responsive, professional, and truly cared about getting the best result.",
      verified: true,
      category: "seller",
      social: { linkedin: "#", twitter: "#", facebook: "#" }
    },
    {
      id: 4,
      name: "Sarah Johnson",
      role: "Luxury Home Buyer",
      location: "The Strip, NV",
      image: pic4,
      rating: 5,
      date: "February 28, 2024",
      review: "Exceptional service from start to finish. They understood exactly what we were looking for and found our dream home. The attention to detail and personalized approach made us feel valued throughout.",
      verified: true,
      category: "buyer",
      social: { linkedin: "#", twitter: "#", facebook: "#" }
    },
    {
      id: 5,
      name: "David Chen",
      role: "Commercial Client",
      location: "Downtown, NV",
      image: pic5,
      rating: 4.8,
      date: "February 20, 2024",
      review: "Professional, knowledgeable, and always available. They helped us secure a prime commercial space for our business. Their negotiation skills saved us significant money on the lease terms.",
      verified: true,
      category: "commercial",
      social: { linkedin: "#", twitter: "#", facebook: "#" }
    },
    {
      id: 6,
      name: "Emma Williams",
      role: "Property Manager",
      location: "North Las Vegas, NV",
      image: pic6,
      rating: 5,
      date: "February 15, 2024",
      review: "The property management team is outstanding! They've taken care of everything from tenant screening to maintenance. Our properties have never been in better hands.",
      verified: true,
      category: "investor",
      social: { linkedin: "#", twitter: "#", facebook: "#" }
    }
  ];

  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === activeFilter);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    }
    while (stars.length < 5) {
      stars.push(<FaRegStar key={stars.length} className="text-yellow-400" />);
    }
    return stars;
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(filteredTestimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(filteredTestimonials.length / 3)) % Math.ceil(filteredTestimonials.length / 3));
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div data-aos="fade-up" className="inline-flex items-center gap-2 bg-red-600/10 rounded-full px-4 py-2 mb-4">
            <FaQuoteLeft className="text-red-600 text-sm" />
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          </div>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Clients Say</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from real clients who found their dream homes with our help
          </p>
        </div>

        {/* Filter Buttons */}
        <div data-aos="fade-up" data-aos-delay="300" className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'buyer', 'seller', 'investor', 'commercial'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {filteredTestimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              data-aos="zoom-in"
              data-aos-delay={200 + index * 100}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <FaQuoteLeft className="text-red-600/20 text-4xl group-hover:text-red-600/30 transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  "{testimonial.review}"
                </p>

                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {renderStars(testimonial.rating)}
                  <span className="ml-2 text-sm text-gray-500">({testimonial.rating})</span>
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-red-600 p-0.5"
                    />
                    {testimonial.verified && (
                      <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                        <MdVerified className="text-white text-xs" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <FaCalendar className="text-gray-400 text-xs" />
                      <p className="text-xs text-gray-400">{testimonial.date}</p>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <FaUserCircle className="text-red-500" />
                  <span>{testimonial.location}</span>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <a href={testimonial.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                    <FaLinkedin />
                  </a>
                  <a href={testimonial.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                    <FaTwitter />
                  </a>
                  <a href={testimonial.social.facebook} className="text-gray-400 hover:text-blue-700 transition-colors">
                    <FaFacebook />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div data-aos="fade-up" className="mt-20 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-12">
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-8">
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sm">Happy Clients</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-sm">Satisfaction Rate</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">4.9</div>
              <div className="text-sm">Average Rating</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">350+</div>
              <div className="text-sm">5-Star Reviews</div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div data-aos="fade-up" className="mt-12 flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            <span className="text-gray-600">100% Verified Reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            <span className="text-gray-600">Real Client Stories</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCheckCircle className="text-green-500" />
            <span className="text-gray-600">Updated Regularly</span>
          </div>
        </div>

        {/* CTA Section */}
        <div data-aos="fade-up" className="mt-12 text-center">
          <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3">
            Write a Review
            <FaStar />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;