import { motion, AnimatePresence } from 'framer-motion';
import { slides } from './slides';

const SlideContainer = ({ slideComponents, currentSlide, side, selectedProject, onProjectSelect, onProjectClick, onMenuClick }) => {

  const getSlideIndex = () => {
    if (side === 'left') {
      // Left side: shows odd slides (0, 2, 4, ...)
      return currentSlide * 2;
    } else {
      // Right side: shows even slides (1, 3, 5, ...)
      return currentSlide * 2 + 1;
    }
  };

  const getCurrentSlideComponent = () => {
    const slideIndex = getSlideIndex();
    // Return the slide component if it exists, otherwise return the last slide component
    return slideComponents[Math.min(slideIndex, slideComponents.length - 1)];
  };


  const slideVariants = {
    enter: (direction) => ({
      y: direction > 0 ? '100%' : '-100%',
      opacity: 1
    }),
    center: {
      y: 0,
      opacity: 1
    },
    exit: (direction) => ({
      y: direction > 0 ? '-100%' : '100%',
      opacity: 1
    })
  };

  const direction = side === 'left' ? -1 : 1;
  const slideIndex = getSlideIndex();
  const SlideComponent = getCurrentSlideComponent();

  // Check if we're showing Slide7 or Slide8 to pass special props
  const isSlide7 = slideIndex === 6; // Slide7 is at index 6
  const isSlide8 = slideIndex === 7; // Slide8 is at index 7

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={`${side}-${slideIndex}`}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            type: "tween",
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="absolute inset-0"
        >
          {isSlide7 ? (
            <SlideComponent 
              onProjectSelect={onProjectSelect}
              selectedProject={selectedProject}
              onMenuClick={onMenuClick}
            />
          ) : isSlide8 ? (
            <SlideComponent 
              selectedProject={selectedProject}
              onProjectClick={onProjectClick}
              onMenuClick={onMenuClick}
            />
          ) : (
            <SlideComponent 
              onMenuClick={onMenuClick}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SlideContainer;
