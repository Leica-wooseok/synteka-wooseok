import { useEffect, useState } from 'react';

type UseDebounceWindowWidthProps = {
  timeoutDuration?: number;
};

export default function useDebounceWindowWidth({
  timeoutDuration = 300,
}: UseDebounceWindowWidthProps = {}): number {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
    }

    let timeoutId: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (typeof window !== 'undefined') {
          setWindowWidth(window.innerWidth);
        }
      }, timeoutDuration);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      clearTimeout(timeoutId);
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [timeoutDuration]);

  return windowWidth;
}
