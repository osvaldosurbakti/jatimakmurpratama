import React, { useState } from "react";
import GalleryHero from "../components/gallery/GalleryHero";
import PhotoGrid from "../components/gallery/PhotoGrid";
import VideoSection from "../components/gallery/VideoSection";
import ImageModal from "../components/gallery/ImageModal";
import CTASection from "../components/CTASection";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentCategory, setCurrentCategory] = useState("all");

  const galleryData = {
    categories: [
      { id: "all", name: "All" },
      { id: "flooring", name: "Flooring" },
      { id: "decking", name: "Decking" },
      { id: "process", name: "Production Process" },
      { id: "facility", name: "Facility" }
    ],
    photos: [
      {
        id: 1,
        src: "/gallery/flooring-1.jpg",
        category: "flooring",
        caption: "Teak Flooring Grade A"
      },
      // Tambahkan 11 gambar lainnya dengan struktur yang sama
      {
        id: 13,
        src: "/gallery/process-1.jpg",
        category: "process",
        caption: "12-Day Drying Process"
      }
    ],
    videos: [
      {
        id: 1,
        thumbnail: "/gallery/video-thumb-1.jpg",
        title: "Wood Molding Process",
        youtubeId: "abc123"
      }
    ]
  };

  const filteredPhotos = currentCategory === "all" 
    ? galleryData.photos 
    : galleryData.photos.filter(photo => photo.category === currentCategory);

  return (
    <div className="overflow-x-hidden">
      <GalleryHero 
        title="Our Wood Gallery" 
        subtitle="Capturing the Beauty of Quality Craftsmanship"
      />
      
      <div className="container mx-auto px-4 py-12">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {galleryData.categories.map(category => (
            <button
              key={category.id}
              onClick={() => setCurrentCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors ${
                currentCategory === category.id
                  ? "bg-amber-700 text-white"
                  : "bg-amber-100 text-amber-800 hover:bg-amber-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <PhotoGrid 
          photos={filteredPhotos} 
          onImageClick={setSelectedImage} 
        />

        {/* Video Section */}
        <VideoSection videos={galleryData.videos} />
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal 
          image={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      )}

      <CTASection 
        title="Interested in Our Products?"
        subtitle="Contact us for more information about our wood products"
        primaryButton="Request Catalog"
        secondaryButton="+62 812-5958-3942"
      />
    </div>
  );
};

export default GalleryPage;