import { useState, useEffect, useCallback } from 'react';
import { useTouchGestures } from './useTouchGestures';

export const useScrollSnap = (totalSlides) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSlide = useCallback((slideIndex) => {
    if (slideIndex >= 0 && slideIndex < totalSlides && !isScrolling) {
      setIsScrolling(true);
      setCurrentSlide(slideIndex);
      
      // Reset scrolling state after animation completes
      setTimeout(() => {
        setIsScrolling(false);
      }, 300);
    }
  }, [totalSlides, isScrolling]);

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) {
      scrollToSlide(currentSlide + 1);
    }
  }, [currentSlide, totalSlides, scrollToSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      scrollToSlide(currentSlide - 1);
    }
  }, [currentSlide, scrollToSlide]);

  useEffect(() => {
    let timeoutId;
    
    const handleWheel = (e) => {
      if (isScrolling) return;
      
      e.preventDefault();
      
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (e.deltaY > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }, 30);
    };

    const handleKeyDown = (e) => {
      if (isScrolling) return;
      
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timeoutId);
    };
  }, [nextSlide, prevSlide, isScrolling]);

  // Add touch gesture support
  useTouchGestures(nextSlide, prevSlide);

  return {
    currentSlide,
    setCurrentSlide: scrollToSlide,
    nextSlide,
    prevSlide,
    isScrolling,
  };
};
