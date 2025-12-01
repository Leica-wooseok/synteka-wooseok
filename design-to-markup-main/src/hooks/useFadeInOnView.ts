import { useEffect, useRef, useState } from 'react';

type UseFadeInOnViewOptions = {
  threshold?: number;
  rootMargin?: string;
};

export default function useFadeInOnView(options: UseFadeInOnViewOptions = {}) {
  const { threshold = 0.2, rootMargin = '0px' } = options;

  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, isVisible]);

  return { elementRef, isVisible };
}
