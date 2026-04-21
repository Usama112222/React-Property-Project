import './navigation.css'
import logo from "../assets/logo.png"
import { useState } from 'react'
import { 
  FaPhone, 
  FaUser, 
  FaBars, 
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaBuilding,
  FaServicestack,
  FaUsers,
  FaEnvelope
} from 'react-icons/fa'

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '#', icon: <FaHome className="mr-2" /> },
    { name: 'About', href: '#', icon: <FaInfoCircle className="mr-2" /> },
    { name: 'Properties', href: '#', icon: <FaBuilding className="mr-2" /> },
    { name: 'Services', href: '#', icon: <FaServicestack className="mr-2" /> },
    { name: 'Testimonials', href: '#', icon: <FaUsers className="mr-2" /> },
    { name: 'Contact', href: '#', icon: <FaEnvelope className="mr-2" /> }
  ]

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="light bg-white shadow-md flex justify-between items-center gap-4 lg:px-20 px-4 py-3 sticky top-0 z-30 transition-all duration-300">
      
      {/* Logo */}
      <div id="logo" className="flex-shrink-0">
        <img 
          src={logo} 
          alt="Company Logo" 
          className="lg:w-[150px] w-[120px] dark:invert cursor-pointer transition-transform hover:scale-105"
        />
      </div>

      {/* Desktop Navigation */}
      <ul className="lg:flex justify-center items-center gap-2 hidden">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a 
              href={link.href}
              className="text-gray-700 text-[15px] uppercase font-semibold cursor-pointer px-4 py-2 rounded-lg 
                       hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center group"
            >
              <span className="mr-0 group-hover:mr-2 transition-all duration-300">{link.icon}</span>
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="flex justify-center items-center lg:hidden">
        <button 
          onClick={toggleMenu}
          className="text-gray-700 dark:text-white text-2xl cursor-pointer hover:text-red-600 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden fixed top-[72px] left-0 w-full bg-white shadow-lg transition-all duration-300 transform ${
        isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`}>
        <ul className="flex flex-col justify-center items-stretch gap-1 p-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a 
                href={link.href}
                className="text-gray-700 uppercase font-semibold cursor-pointer p-3 rounded-lg 
                         hover:bg-red-600 hover:text-white transition-all duration-300 w-full text-left 
                         flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="mr-3 text-red-600">{link.icon}</span>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Info & User Profile */}
      <div className="flex justify-center items-center lg:gap-6 gap-3">
        {/* Phone Number */}
        <div className="flex justify-center items-center lg:gap-3 gap-2 group">
          <FaPhone className="size-5 text-red-600 group-hover:animate-pulse" />
          <h1 className="lg:text-lg text-sm text-gray-800 dark:text-white font-semibold">
            888-908-9102
          </h1>
        </div>
        
        {/* Divider */}
        <div className="hidden lg:block w-px h-8 bg-gray-300"></div>
        
        {/* User Profile Icon */}
        <div className="flex justify-center items-center">
          <div className="relative group">
            <FaUser className="size-5 text-gray-600 cursor-pointer hover:text-red-600 transition-colors" />
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible 
                          group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="py-2">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-600 hover:text-white">
                  Sign In
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-600 hover:text-white">
                  Register
                </a>
                <hr className="my-1" />
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-600 hover:text-white">
                  Dashboard
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navigation