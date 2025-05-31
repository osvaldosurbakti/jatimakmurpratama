import React from "react";

const VideoSection = ({ videos }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-amber-900 mb-6 border-b pb-2">
        Process Videos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videos.map(video => (
          <div key={video.id} className="relative">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-red-600 text-white rounded-full p-4 hover:bg-red-700 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.8L14.9 10l-8.6 7.2V2.8z"/>
                  </svg>
                </div>
              </div>
            </div>
            <h3 className="mt-3 text-lg font-medium text-gray-900">{video.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoSection;