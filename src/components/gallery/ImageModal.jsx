import React, { useEffect } from "react";

const ImageModal = ({ image, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-4xl z-10 hover:text-amber-400"
      >
        &times;
      </button>
      
      <div className="relative max-w-4xl w-full max-h-[90vh]">
        <img
          src={image.src}
          alt={image.caption}
          className="w-full h-full object-contain max-h-[80vh]"
        />
        {image.caption && (
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4 text-center">
            {image.caption}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageModal;