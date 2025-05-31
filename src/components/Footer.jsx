import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="border-b-2 border-amber-400 pb-1">JATI MAKMUR PRATAMA</span>
            </h3>
            <p className="text-amber-200 mb-4">WOOD WORKING - WOOD TRADING</p>
            <p className="mb-4">Specialized in high-quality teak wood products for export and local markets.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-300 hover:text-white text-xl"><FaFacebook /></a>
              <a href="#" className="text-amber-300 hover:text-white text-xl"><FaInstagram /></a>
              <a href="#" className="text-amber-300 hover:text-white text-xl"><FaLinkedin /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-amber-400 pb-1">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Products', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-amber-300 transition-colors duration-300">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4 border-b-2 border-amber-400 pb-1">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-amber-300" />
                <p>JL. Gayungsari Timur No. 36, Kel. Menanggal, Surabaya, Jawa Timur</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-3 text-amber-300" />
                <a href="tel:+6281259583942" className="hover:text-amber-300">+62 8125 9583 942</a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-3 text-amber-300" />
                <a href="mailto:jatimakmurpratama@gmail.com" className="hover:text-amber-300">jatimakmurpratama@gmail.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-amber-800 pt-6 mt-6 text-center text-sm text-amber-200">
          <p>© {new Date().getFullYear()} PT. Jati Makmur Pratama. All Rights Reserved.</p>
          <p className="mt-1">Registered at KEMENHUKUM DAN HAM NO. AHU-076640.AH.01.30 Tahun 2023</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;