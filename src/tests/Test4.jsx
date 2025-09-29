import React, { useState, useRef } from 'react';

const Test4 = ({ 
  title = "Your Learning List",
  videos = []
}) => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Default video data if none provided
  const defaultVideos = [
    {
      id: 1,
      title: "Waste Segregation Basics",
      image: "https://images.indianexpress.com/2021/03/CNL-garbage-3col.jpg?w=640",
      credits: 140,
      duration: "12:45",
      status: "1",
      category: "Tutorial"
    },
    {
      id: 2,
      title: "Composting at Home",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400",
      credits: 120,
      duration: "08:30",
      status: "2",
      category: "Tutorial"
    },
    {
      id: 3,
      title: "Recycling Techniques",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400",
      credits: 160,
      duration: "15:20",
      status: "3",
      category: "Advanced"
    },
    {
      id: 4,
      title: "E-Waste Management",
      image: "",
      credits: 180,
      duration: "18:45",
      status: "4",
      category: "Tutorial"
    },
    {
      id: 5,
      title: "Organic Waste Solutions",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400",
      credits: 150,
      duration: "14:10",
      status: "5",
      category: "Beginner"
    },
    {
      id: 6,
      title: "Industrial Waste Processing",
      image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?w=400",
      credits: 200,
      duration: "22:15",
      status: "6",
      category: "Advanced"
    }
  ];

  const videoList = videos.length > 0 ? videos : defaultVideos;

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 320; // Card width + gap
    const newScrollPosition = direction === 'left' 
      ? container.scrollLeft - scrollAmount 
      : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollPosition,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );
  };

  const getStatusBadge = (status) => {
    const badges = {
      'new': { text: 'New', color: 'bg-red-600' },
      'popular': { text: 'Popular', color: 'bg-orange-600' },
      'recently-added': { text: 'Recently Added', color: 'bg-red-600' },
      'trending': { text: 'Trending', color: 'bg-yellow-600' },
      'premium': { text: 'Premium', color: 'bg-purple-600' }
    };
    return badges[status] || null;
  };

  return (
    <div className="bg-black text-white py-8">
      <div className="px-4 md:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {title}
          </h2>
          <div className="text-gray-400 text-sm">
            {videoList.length} videos
          </div>
        </div>

        {/* Scrollable Video Cards Container */}
        <div className="relative group">
          {/* Left Scroll Button */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Right Scroll Button */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-80 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Video Cards Scroll Container */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {videoList.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Individual Video Card Component
const VideoCard = ({ video }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const statusBadge = getStatusBadge(video.status);

  function getStatusBadge(status) {
    const badges = {
      'new': { text: 'New Season', color: 'bg-red-600' },
      'popular': { text: 'Popular', color: 'bg-orange-600' },
      'recently-added': { text: 'Recently Added', color: 'bg-red-600' },
      'trending': { text: 'Trending', color: 'bg-yellow-600' },
      'premium': { text: 'Premium', color: 'bg-purple-600' }
    };
    return badges[status] || null;
  }

  return (
    <div
      className="relative flex-shrink-0 w-80 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Container */}
      <div className="relative bg-gray-900 rounded-lg overflow-hidden transition-all duration-300 transform group-hover:scale-105 group-hover:z-10">
        
        {/* Video Thumbnail */}
        <div className="relative aspect-video bg-gray-800">
          <img
            src={video.image}
            alt={video.title}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-700 animate-pulse" />
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Credits Badge - Top Right */}
          <div className="absolute top-3 right-3 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.41 15.09L7 13.5l1.41-1.41L10 13.67l5.59-5.59L17 9.5l-6.41 6.59z"/>
            </svg>
            <span>{video.credits}</span>
          </div>

          {/* Status Badge - Top Left */}
          {statusBadge && (
            <div className={`absolute top-3 left-3 ${statusBadge.color} text-white px-2 py-1 rounded text-xs font-semibold`}>
              {statusBadge.text}
            </div>
          )}

          {/* Duration Badge - Bottom Right */}
          <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
            {video.duration}
          </div>

          {/* Play Button Overlay */}
          <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
            {video.title}
          </h3>
          
          <div className="flex items-center justify-between text-sm text-gray-400">
            <span className="bg-gray-800 px-2 py-1 rounded">
              {video.category}
            </span>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400">⭐</span>
              <span>4.8</span>
            </div>
          </div>

          {/* Hover Actions */}
          <div className={`mt-4 flex space-x-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}>
            <button className="flex-1 bg-white text-black py-2 px-4 rounded font-semibold hover:bg-gray-200 transition-colors">
              Start
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
};


export default Test4;
