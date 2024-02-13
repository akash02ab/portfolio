import { useState, useEffect } from 'react';

const SCROLL_UP = 'up';
const SCROLL_DOWN = 'down';

interface PropType {
  initialDirection: string,
  thresholdPixels?: number,
  off?: boolean
};

const useScrollDirection = ({ initialDirection, thresholdPixels, off }: PropType) => {
  const [scrollDirection, setScrollDirection] = useState(initialDirection);

  useEffect(() => {
    const threshold = thresholdPixels || 0;
    const isOff = off || false;
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        // We haven't exceeded the threshold
        ticking = false;
        return;
      }

      setScrollDirection(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    /**
     * Bind the scroll handler if `off` is set to false.
     * If `off` is set to true reset the scroll direction.
     */
    !isOff ? window.addEventListener('scroll', onScroll) : setScrollDirection(initialDirection);

    return () => window.removeEventListener('scroll', onScroll);
  }, [initialDirection, thresholdPixels, off]);

  return scrollDirection;
};

export default useScrollDirection;