import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import area1 from "../assets/area1.jpg";
import area2 from "../assets/area2.jpg";
import area3 from "../assets/area3.jpg";
import aboutimage from '../assets/about1.jpg';
import { 
  FaUsers, 
  FaHome, 
  FaTrophy, 
  FaArrowRight,
  FaCheckCircle,
  FaBuilding,
  FaHandshake,
  FaChartLine,
  FaQuoteLeft,
  FaMapMarkerAlt,
  FaStar,
  FaHeart,
  FaShieldAlt,
  FaClock,
  FaAward,
  FaGem,
  FaRegBuilding
} from 'react-icons/fa';
import { GiHouseKeys, GiGoldBar, GiTakeMyMoney, GiPriceTag } from 'react-icons/gi';
import { MdVerified, MdLocationCity, MdRealEstateAgent } from 'react-icons/md';
import { IoMdTrendingUp } from 'react-icons/io';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function About() {
  const [activeTab, setActiveTab] = useState('mission');
  const [statsRef, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 100,
      once: false,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

  const stats = [
    { icon: <FaHome />, value: 5000, label: 'Properties Sold', suffix: '+', color: 'from-blue-500 to-cyan-500', prefix: '' },
    { icon: <FaUsers />, value: 3500, label: 'Happy Clients', suffix: '+', color: 'from-green-500 to-emerald-500', prefix: '' },
    { icon: <FaTrophy />, value: 125, label: 'Awards Won', suffix: '+', color: 'from-yellow-500 to-orange-500', prefix: '' },
    { icon: <GiGoldBar />, value: 2.5, label: 'Sales Volume', suffix: 'B+', color: 'from-purple-500 to-pink-500', prefix: '$' },
  ];

  const areaStats = [
    { value: 5000, label: 'ACTIVE LISTINGS', suffix: '+', icon: <FaBuilding /> },
    { value: 9000, label: 'SOLD LISTINGS', suffix: '+', icon: <GiHouseKeys /> },
    { value: 6000, label: 'CLIENTS SERVED', suffix: '+', icon: <FaUsers /> },
  ];

  const popularAreas = [
    {
      name: 'Summerlin',
      image: area1,
      price: '$850K - $2.5M',
      features: ['Family-friendly', 'Golf Courses', 'Top Schools'],
      rating: 4.9,
      properties: 234
    },
    {
      name: 'Henderson',
      image: area2,
      price: '$650K - $1.8M',
      features: ['Safe Community', 'Parks', 'Shopping'],
      rating: 4.8,
      properties: 189
    },
    {
      name: 'Downtown LV',
      image: area3,
      price: '$400K - $1.2M',
      features: ['Nightlife', 'Arts District', 'Restaurants'],
      rating: 4.7,
      properties: 156
    }
  ];

  const achievements = [
    'Top Real Estate Agency 2023',
    'Best Customer Service Award',
    'Luxury Property Specialists',
    '24/7 Client Support',
  ];

  const teamMembers = [
    { name: 'Sarah Johnson', role: 'CEO & Founder', years: 25 },
    { name: 'Michael Chen', role: 'Head of Sales', years: 18 },
    { name: 'Jessica Williams', role: 'Senior Agent', years: 15 },
  ];

  const features = [
    { icon: <FaClock />, title: 'Fast Response', desc: 'Within 24 hours' },
    { icon: <FaShieldAlt />, title: 'Secure Process', desc: '100% protected' },
    { icon: <FaHeart />, title: 'Client First', desc: 'Your priorities matter' },
    { icon: <FaAward />, title: 'Award Winning', desc: 'Industry recognition' },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: Company Introduction */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center mb-32">
          
          {/* Left Side - Image Gallery */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 group-hover:scale-105">
              <img
                data-aos="zoom-in"
                src={aboutimage}
                alt="About Us"
                className="w-full h-auto lg:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Floating Badges */}
            <div data-aos="fade-right" className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-4 backdrop-blur-sm border border-gray-200">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-full p-3">
                  <MdVerified className="text-white text-2xl" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800">35+ Years</div>
                  <div className="text-sm text-gray-600">Of Excellence</div>
                </div>
              </div>
            </div>

            <div data-aos="fade-left" className="absolute -top-6 -left-6 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-2xl p-4">
              <div className="text-white text-center">
                <div className="text-3xl font-bold">1989</div>
                <div className="text-sm">Established</div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div data-aos="fade-up" className="inline-flex items-center gap-2 bg-red-600/10 rounded-full px-4 py-2">
              <FaQuoteLeft className="text-red-600 text-sm" />
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Who We Are</span>
            </div>

            <h1 data-aos="fade-up" data-aos-delay="100" className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              We help clients buy and sell houses since{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">1989</span>
            </h1>

            <p data-aos="fade-up" data-aos-delay="200" className="text-lg text-gray-600 leading-relaxed">
              With over three decades of experience in the Las Vegas real estate market, 
              we've built a reputation for excellence, integrity, and unparalleled client service. 
              Our team of dedicated professionals is committed to making your property journey 
              seamless and successful.
            </p>

            {/* Stats Grid */}
            <div ref={statsRef} data-aos="fade-up" data-aos-delay="300" className="grid grid-cols-2 lg:grid-cols-4 gap-4 py-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className={`bg-gradient-to-br ${stat.color} rounded-2xl p-4 mb-3 transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}>
                    <div className="text-white text-3xl flex justify-center">{stat.icon}</div>
                  </div>
                  <div className="text-2xl font-bold text-gray-800">
                    {inView ? (
                      <CountUp start={0} end={stat.value} duration={2.5} suffix={stat.suffix} prefix={stat.prefix} />
                    ) : (
                      '0'
                    )}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Tabs Section */}
            <div data-aos="fade-up" data-aos-delay="400">
              <div className="flex gap-4 border-b border-gray-200">
                {['mission', 'vision', 'values'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 px-4 font-semibold transition-all duration-300 relative capitalize ${
                      activeTab === tab ? 'text-red-600' : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Our {tab}
                    {activeTab === tab && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-red-600 to-red-800 rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>

              <div className="mt-6 p-6 bg-white rounded-xl shadow-lg">
                {activeTab === 'mission' && (
                  <div className="space-y-3">
                    <p className="text-gray-700 leading-relaxed">
                      To provide exceptional real estate services that exceed client expectations, 
                      leveraging our expertise, integrity, and innovative approach to create lasting 
                      value for every property transaction.
                    </p>
                    <div className="flex items-center gap-2 text-red-600">
                      <FaCheckCircle />
                      <span className="font-semibold">Client-First Approach</span>
                    </div>
                  </div>
                )}
                {activeTab === 'vision' && (
                  <div className="space-y-3">
                    <p className="text-gray-700 leading-relaxed">
                      To be the most trusted and innovative real estate partner in Las Vegas, 
                      setting new standards of excellence and transforming the way people 
                      experience property transactions.
                    </p>
                    <div className="flex items-center gap-2 text-red-600">
                      <FaChartLine />
                      <span className="font-semibold">Industry Leadership</span>
                    </div>
                  </div>
                )}
                {activeTab === 'values' && (
                  <div className="space-y-3">
                    <p className="text-gray-700 leading-relaxed">
                      Integrity, excellence, innovation, and community focus drive everything 
                      we do. We believe in building lasting relationships based on trust and 
                      mutual success.
                    </p>
                    <div className="flex items-center gap-2 text-red-600">
                      <FaHandshake />
                      <span className="font-semibold">Trust & Transparency</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <button data-aos="fade-up" data-aos-delay="600" className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-3">
              Learn More About Us
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Section 2: Popular Areas */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <div data-aos="fade-up" className="inline-flex items-center gap-2 bg-red-600/10 rounded-full px-4 py-2 mb-4">
              <FaMapMarkerAlt className="text-red-600" />
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Discover</span>
            </div>
            <h2 data-aos="fade-up" data-aos-delay="100" className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Explore Most <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">Popular Areas</span>
            </h2>
            <p data-aos="fade-up" data-aos-delay="200" className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the most sought-after neighborhoods in Las Vegas, each offering unique lifestyle experiences
            </p>
          </div>

          <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
            {popularAreas.map((area, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={400 + index * 200}
                className="group relative h-[500px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${area.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-0 transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold">{area.name}</h3>
                    <div className="flex items-center gap-1 bg-yellow-500 px-2 py-1 rounded-lg">
                      <FaStar className="text-white text-sm" />
                      <span className="text-white font-semibold text-sm">{area.rating}</span>
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-red-400 mb-3">{area.price}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {area.features.map((feature, idx) => (
                      <span key={idx} className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{area.properties} properties</span>
                    <button className="bg-red-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors">
                      Explore Area
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Area Statistics */}
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 mb-32">
          {areaStats.map((stat, index) => (
            <div
              key={index}
              data-aos="slide-up"
              data-aos-delay={200 + index * 200}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="text-6xl text-red-600 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-5xl font-bold text-gray-800">
                  {inView ? <CountUp start={0} end={stat.value} duration={2.5} suffix={stat.suffix} /> : '0'}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{stat.label}</h3>
              <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet consectetur</p>
            </div>
          ))}
        </div>

        {/* Section 4: Features & Team */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-16">
          {/* Features */}
          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-2 bg-red-600/10 rounded-full px-4 py-2 mb-6">
              <FaGem className="text-red-600" />
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">We're the most trusted real estate agency in Las Vegas</h3>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="text-red-600 text-2xl">{feature.icon}</div>
                  <div>
                    <div className="font-semibold text-gray-800">{feature.title}</div>
                    <div className="text-sm text-gray-500">{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Members */}
          <div data-aos="fade-left">
            <div className="inline-flex items-center gap-2 bg-red-600/10 rounded-full px-4 py-2 mb-6">
              <FaUsers className="text-red-600" />
              <span className="text-red-600 font-semibold text-sm uppercase tracking-wider">Leadership</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Meet our experienced team</h3>
            <div className="space-y-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-r from-red-600 to-red-700 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800 text-lg">{member.name}</div>
                    <div className="text-red-600 text-sm">{member.role}</div>
                    <div className="text-gray-500 text-sm">{member.years}+ years experience</div>
                  </div>
                  <button className="text-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaArrowRight />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Banner */}
        <div data-aos="zoom-in" className="mt-20 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 text-center">
          <div className="flex flex-wrap justify-center gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-2 text-white">
                <FaTrophy />
                <span className="font-semibold">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}

export default About;