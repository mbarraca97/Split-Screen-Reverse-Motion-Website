import { useState, useEffect } from 'react';
import RightNavbar from '../RightNavbar';
import { getProjectsForSlides } from '../../data/projects';

const Slide8 = ({ selectedProject, onProjectClick, onMenuClick }) => {
  const defaultProject = getProjectsForSlides()[0];
  const project = selectedProject || defaultProject;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project.id]);

  const handleBackgroundClick = () => {
    // Cycle to next image
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % project.images.length
    );
  };

  const handleNavigationClick = (e) => {
    e.stopPropagation();
    if (onProjectClick) {
      onProjectClick(project.href);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <RightNavbar onMenuClick={onMenuClick} />
      <div 
        className="flex-1 bg-cover bg-center bg-no-repeat cursor-pointer relative group"
        style={{
          backgroundImage: `url("${project.images[currentImageIndex]}")`
        }}
        onClick={handleBackgroundClick}
      >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
      
      {/* Plus sign with hover effect - 40px above labels */}
      <div className="absolute bottom-[100px] left-8 flex items-center group-plus">
        <div 
          className="w-[65px] h-[65px] bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-opacity-90 transition-all duration-300 z-20 group"
          onClick={handleNavigationClick}
        >
          <svg className="w-[65px] h-[65px] text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path  strokeWidth={1} d="M12 4v16m8-8H4" />
          </svg>
        </div>
        
        {/* Typewriter "ver mais" text on hover of plus button only */}
        <div className="ml-4 overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-700 ease-out">
          <span 
            className="text-white font-josefin-sans text-[30px] whitespace-nowrap inline-block cursor-pointer hover:underline"
            onClick={handleNavigationClick}
          >
            ver mais
          </span>
        </div>
      </div>

      {/* Bottom labels with 20px margin and space-between */}
      <div className="absolute bottom-2 left-8 right-8 flex justify-between text-white font-josefin-sans text-[16px] uppercase tracking-wide">
        <div className="mb-[0px]">
          <span>{(project.location || 'Portugal').toUpperCase()}</span>
        </div>
        <div className="mb-[20px]">
          <span>{(project.type || '—').toUpperCase()}</span>
        </div>
        <div className="mb-[20px]">
          <span>{(project.category || '—').toUpperCase()}</span>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Slide8;
