import React from "react";

const PhotoGrid = ({ photos, onImageClick }) => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-amber-900 mb-6 border-b pb-2">
        Photo Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map(photo => (
          <div 
            key={photo.id} 
            className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer aspect-square"
            onClick={() => onImageClick(photo)}
          >
            <img
              src={photo.src}
              alt={photo.caption}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-white">{photo.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGrid;