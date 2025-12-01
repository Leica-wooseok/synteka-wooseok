import { useEffect, useState } from 'react';

type UseDebounceWindowWidthProps = {
  timeoutDuration?: number;
};

export default function useDebounceWindowWidth({
  timeoutDuration = 300,
}: UseDebounceWindowWidthProps = {}): number {
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0,
  );

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let rafId: number;

    const handleResize = () => {
      // 즉시 반응 (requestAnimationFrame 사용)
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      rafId = requestAnimationFrame(() => {
        if (typeof window !== 'undefined') {
          setWindowWidth(window.innerWidth);
        }
      });

      // debounce로 추가 업데이트
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
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [timeoutDuration]);

  return windowWidth;
}
