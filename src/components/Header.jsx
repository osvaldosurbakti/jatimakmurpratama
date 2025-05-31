import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About Us" },
    { path: "/products", name: "Products"},
    { path: "/gallery", name: "Gallery" },
    { path: "/contact", name: "Contact" }
  ];

  return (
    <header className={`${scrolled ? "bg-amber-900 shadow-lg" : "bg-amber-900/95 backdrop-blur-sm"} text-white sticky top-0 z-50 transition-all duration-300`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 z-50">
            <img 
              src={logo} 
              alt="Jati Makmur Pratama" 
              className="h-12 object-contain"
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold">JATI MAKMUR PRATAMA</h1>
              <p className="text-xs text-amber-200">WOOD WORKING - WOOD TRADING</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-4 xl:space-x-6">
              {navItems.map((item) => (
                <li key={item.name} className="group relative">
                  <Link 
                    to={item.path} 
                    className="px-2 py-1 font-medium hover:text-amber-300 transition-colors duration-300 flex items-center"
                  >
                    {item.name}
                    {item.subItems && (
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                  
                  {item.subItems && (
                    <div className="absolute left-0 mt-0 w-48 bg-white text-amber-900 rounded-md shadow-lg py-1 z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto">
                      {item.subItems.map((subItem) => (
                        <Link 
                          key={subItem.name}
                          to={subItem.path} 
                          className="block px-4 py-2 hover:bg-amber-100 transition-colors duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 focus:outline-none z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 flex flex-col items-end transition-all duration-300 ${isMenuOpen ? "space-y-0" : "space-y-1.5"}`}>
              <span className={`h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? "w-6 rotate-45 translate-y-0.5" : "w-6"}`}></span>
              <span className={`h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? "opacity-0 w-0" : "w-5 opacity-100"}`}></span>
              <span className={`h-0.5 bg-white rounded-full transition-all duration-300 ${isMenuOpen ? "w-6 -rotate-45 -translate-y-0.5" : "w-4"}`}></span>
            </div>
          </button>

          {/* Mobile Menu - Sidebar Style */}
          <div className={`
            md:hidden fixed inset-y-0 right-0 w-64 bg-amber-800 shadow-2xl z-40 transition-transform duration-300 ease-in-out
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
            flex flex-col
          `}>
            <div className="p-4 border-b border-amber-700">
              <Link to="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                <img 
                  src={logo} 
                  alt="Jati Makmur Pratama" 
                  className="h-10 object-contain"
                />
                <div>
                  <h1 className="text-lg font-bold">JATI MAKMUR</h1>
                  <p className="text-xs text-amber-200">WOOD PROCESSING</p>
                </div>
              </Link>
            </div>
            
            <nav className="flex-1 overflow-y-auto">
              <ul className="py-4 space-y-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    {item.subItems ? (
                      <details className="group">
                        <summary className="flex justify-between items-center px-6 py-3 font-medium hover:bg-amber-700/50 transition-colors cursor-pointer">
                          <span>{item.name}</span>
                          <svg className="w-4 h-4 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <ul className="bg-amber-900/50">
                          {item.subItems.map((subItem) => (
                            <li key={subItem.name}>
                              <Link 
                                to={subItem.path} 
                                className="block px-8 py-3 text-sm hover:bg-amber-700/30 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    ) : (
                      <Link 
                        to={item.path} 
                        className="block px-6 py-3 font-medium hover:bg-amber-700/50 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="p-4 border-t border-amber-700">
              <div className="flex space-x-4 justify-center">
                <a href="tel:+123456789" className="text-amber-200 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </a>
                <a href="mailto:info@jati-makmur.com" className="text-amber-200 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
                <a href="#" className="text-amber-200 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Overlay when mobile menu is open */}
          {isMenuOpen && (
            <div 
              className="md:hidden fixed inset-0 bg-black/50 z-30"
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;