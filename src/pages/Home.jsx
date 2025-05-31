import React from "react";
import HeroBanner from "../components/home/HeroBanner";
import AboutShort from "../components/home/AboutShort";
import ProductShowcase from "../components/home/ProductShowcase";
import ProcessFlow from "../components/home/ProcessFlow";
import ValueProposition from "../components/home/ValueProposition";
import CTASection from "../components/CTASection";
import GalleryPreview from "../components/home/GalleryPreview";

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Banner Section */}
      <HeroBanner />
      
      {/* About Company (Short Version) */}
      <AboutShort />
      
      {/* Featured Products */}
      <ProductShowcase />
      
      {/* Production Process */}
      <ProcessFlow />
      
      {/* Value Proposition */}
      <ValueProposition />
      
      {/* Testimonials (Conditional) */}
      {/* <Testimonials /> */}
      
      {/* Gallery Preview */}
      <GalleryPreview />
      
      {/* Partners/Client Logos */}
      {/* <PartnersLogos /> */}
      
      {/* Call to Action */}
      <CTASection />
    </div>
  );
};

export default Home;