import { useEffect } from 'react';

/**
 * Custom hook to scroll to top of page when component mounts
 * and optionally when dependencies change
 * 
 * @param {Array} dependencies - Optional array of dependencies to watch for changes
 * @param {boolean} smooth - Whether to use smooth scrolling (default: false for instant)
 */
export const useScrollToTop = (dependencies = [], smooth = false) => {
  useEffect(() => {
    const scrollToTop = () => {
      if (smooth) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      } else {
        window.scrollTo(0, 0);
      }
    };

    scrollToTop();
  }, dependencies);

  // Always scroll to top on mount (unless there's a hash)
  useEffect(() => {
    // Don't scroll to top if there's a hash in the URL (for section navigation)
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);
};

export default useScrollToTop;
