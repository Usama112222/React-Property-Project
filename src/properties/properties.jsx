import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  FaMapMarkerAlt, 
  FaBed, 
  FaBath, 
  FaRulerCombined,
  FaUser,
  FaShareAlt,
  FaHeart,
  FaRegHeart,
  FaPhone,
  FaEnvelope,
  FaStar,
  FaFire,
  FaTag,
  FaArrowRight
} from 'react-icons/fa';
import { GiHouseKeys, GiFamilyHouse } from 'react-icons/gi';
import { MdVerified, MdLocationOn } from 'react-icons/md';
import pic1 from "../assets/prop1.webp";
import pic2 from "../assets/prop2.webp";
import pic3 from "../assets/prop3.webp";
import pic4 from "../assets/prop4.webp";
import pic5 from "../assets/prop5.webp";
import pic6 from "../assets/prop6.webp";

function Properties() {
  const [visibleProperties, setVisibleProperties] = useState(6);
  const [likedProperties, setLikedProperties] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 100,
      once: false,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

  const properties = [
    {
      id: 1,
      title: "Villa with Amazing View",
      price: 213230,
      location: "Downtown, Las Vegas",
      beds: 3,
      baths: 4,
      area: 250,
      type: "Villa",
      status: "For Sale",
      featured: true,
      agent: "Alice Adams",
      image: pic1,
      rating: 4.8,
      year: 2022
    },
    {
      id: 2,
      title: "Townhouse for Sale",
      price: 345180,
      location: "Meadows Village, Las Vegas",
      beds: 3,
      baths: 4,
      area: 450,
      type: "Townhouse",
      status: "For Sale",
      featured: true,
      agent: "Drew Alice",
      image: pic2,
      rating: 4.9,
      year: 2021
    },
    {
      id: 3,
      title: "Duplex Sea Facing",
      price: 652180,
      location: "49 DC Townhall Alex",
      beds: 3,
      baths: 4,
      area: 129,
      type: "Duplex",
      status: "For Rent",
      featured: true,
      agent: "Fursi Bam",
      image: pic3,
      rating: 4.7,
      year: 2023
    },
    {
      id: 4,
      title: "Villa with Side View",
      price: 876130,
      location: "Underground Street 20, Texas",
      beds: 3,
      baths: 4,
      area: 453,
      type: "Villa",
      status: "For Sale",
      featured: false,
      agent: "Neon Alice",
      image: pic4,
      rating: 4.9,
      year: 2022
    },
    {
      id: 5,
      title: "Awesome Villa for Rent",
      price: 341830,
      location: "Rubari London Hills",
      beds: 3,
      baths: 4,
      area: 320,
      type: "Villa",
      status: "For Rent",
      featured: false,
      agent: "Firari Alice",
      image: pic5,
      rating: 4.6,
      year: 2021
    },
    {
      id: 6,
      title: "Street Farm for Sale",
      price: 675230,
      location: "Northean Fersh Alice",
      beds: 3,
      baths: 4,
      area: 340,
      type: "Farm",
      status: "For Sale",
      featured: false,
      agent: "Jordan Bram",
      image: pic6,
      rating: 4.8,
      year: 2023
    }
  ];

  const toggleLike = (id) => {
    if (likedProperties.includes(id)) {
      setLikedProperties(likedProperties.filter(propId => propId !== id));
    } else {
      setLikedProperties([...likedProperties, id]);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const loadMore = () => {
    setVisibleProperties(prev => prev + 3);
  };

  const displayedProperties = properties.slice(0, visibleProperties);

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div data-aos="fade-up" className="inline-flex items-center gap-2 bg-red-600/10 rounded-full px-4 py-2 mb-4">
            <GiHouseKeys className="text-red-600" />
            <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Properties</span>
          </div>
          <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Explore the Latest{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Properties Available</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="200" className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover your dream home from our curated collection of premium properties
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mb-12">
          {displayedProperties.map((property, index) => (
            <div
              key={property.id}
              data-aos="zoom-in"
              data-aos-delay={200 + index * 100}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {property.featured && (
                    <span className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">
                      <FaFire className="text-xs" />
                      Featured
                    </span>
                  )}
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                    {property.status}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button 
                    onClick={() => toggleLike(property.id)}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                  >
                    {likedProperties.includes(property.id) ? 
                      <FaHeart className="text-red-600" /> : 
                      <FaRegHeart />
                    }
                  </button>
                  <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-110">
                    <FaShareAlt />
                  </button>
                </div>

                {/* Location */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white text-sm">
                    <MdLocationOn />
                    <span>{property.location}</span>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Title & Price */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">
                    {property.title}
                  </h3>
                  <p className="text-2xl font-bold text-red-600">
                    {formatPrice(property.price)}
                  </p>
                </div>

                {/* Features */}
                <div className="flex items-center justify-between py-4 border-y border-gray-100 mb-4">
                  <div className="flex items-center gap-2">
                    <FaBed className="text-red-500" />
                    <span className="text-gray-600">{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaBath className="text-red-500" />
                    <span className="text-gray-600">{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaRulerCombined className="text-red-500" />
                    <span className="text-gray-600">{property.area} sq ft</span>
                  </div>
                </div>

                {/* Agent Info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-600 to-red-700 flex items-center justify-center text-white font-bold">
                      {property.agent.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Listed by</p>
                      <p className="font-semibold text-gray-800">{property.agent}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span className="font-semibold text-gray-800">{property.rating}</span>
                  </div>
                </div>

                {/* Year & Type */}
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <GiFamilyHouse className="text-red-500" />
                    <span className="text-gray-600">{property.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaTag className="text-red-500" />
                    <span className="text-gray-600">Year: {property.year}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    View Details
                  </button>
                  <button className="p-2 border-2 border-gray-200 rounded-lg hover:border-red-600 hover:text-red-600 transition-all duration-300">
                    <FaPhone />
                  </button>
                  <button className="p-2 border-2 border-gray-200 rounded-lg hover:border-red-600 hover:text-red-600 transition-all duration-300">
                    <FaEnvelope />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProperties < properties.length && (
          <div className="text-center">
            <button
              data-aos="zoom-in"
              onClick={loadMore}
              className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
            >
              Load More Properties
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

        {/* Stats Banner */}
        <div data-aos="fade-up" className="mt-20 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8">
          <div className="grid lg:grid-cols-4 grid-cols-2 gap-8">
            <div className="text-center text-white">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm">Properties Sold</div>
            </div>
            <div className="text-center text-white">
              <div className="text-3xl font-bold mb-2">350+</div>
              <div className="text-sm">Happy Clients</div>
            </div>
            <div className="text-center text-white">
              <div className="text-3xl font-bold mb-2">125+</div>
              <div className="text-sm">Awards Won</div>
            </div>
            <div className="text-center text-white">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-sm">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Properties;