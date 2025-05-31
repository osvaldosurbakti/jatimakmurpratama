import React from 'react';
import ContactForm from '../components/contact/ContactForm';

const ContactPage = () => {
  return (
    <div className="overflow-x-hidden bg-amber-50">
      {/* Hero Section */}
      <section className="relative bg-amber-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-amber-200 max-w-2xl mx-auto">
            Get in touch with our wood processing experts for inquiries, quotes, or collaborations
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-amber-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-600 mb-2">Main Office</p>
              <a href="tel:+6281259583942" className="text-amber-700 hover:text-amber-900 font-medium">
                +62 812-5958-3942
              </a>
            </div>

            {/* Contact Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-amber-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600 mb-2">General Inquiries</p>
              <a href="mailto:info@jatimakmurpratama.com" className="text-amber-700 hover:text-amber-900 font-medium">
                info@jatimakmurpratama.com
              </a>
            </div>

            {/* Contact Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
              <div className="bg-amber-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-600 mb-2">Our Workshop</p>
              <p className="text-amber-700 font-medium">
                Surabaya, East Java, Indonesia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-amber-900">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Map */}
            <div className="h-96 bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <iframe 
                title="Company Location"
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight="0" 
                marginWidth="0" 
                src="https://maps.google.com/maps?q=Surabaya,East%20Java,Indonesia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="filter grayscale-50 hover:grayscale-0 transition-all"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 bg-amber-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-amber-900">Business Hours</h2>
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
            <ul className="space-y-4">
              <li className="flex justify-between border-b pb-2">
                <span className="font-medium">Monday - Friday</span>
                <span>8:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between border-b pb-2">
                <span className="font-medium">Saturday</span>
                <span>9:00 AM - 2:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="font-medium">Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactPage;