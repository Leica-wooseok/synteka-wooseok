import { useEffect, useRef } from 'react';

type UseVideoAutoplayOptions = {
  threshold?: number;
  playOnce?: boolean;
};

export default function useVideoAutoplay(options: UseVideoAutoplayOptions = {}) {
  const { threshold = 0.5, playOnce = true } = options;

  const videoRef = useRef<HTMLVideoElement>(null);
  const hasPlayedRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !(playOnce && hasPlayedRef.current)) {
          video.play().catch((error) => {
            console.error('Video playback failed:', error);
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold });

    observer.observe(video);

    const handleEnded = () => {
      if (playOnce) {
        hasPlayedRef.current = true;
      }
    };

    video.addEventListener('ended', handleEnded);

    return () => {
      observer.disconnect();
      video.removeEventListener('ended', handleEnded);
    };
  }, [threshold, playOnce]);

  return videoRef;
}
