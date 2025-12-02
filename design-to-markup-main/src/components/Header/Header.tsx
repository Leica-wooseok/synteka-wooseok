import { BREAKPOINT_LG } from '@/constants/breakpoints';
import useDebounceWindowWidth from '@/hooks/useDebounceWindowWidth';
import clsx from 'clsx';
import { throttle } from 'lodash';
import { useLayoutEffect, useState } from 'react';
import DesktopNav from './DesktopNav';
import Logo from './Logo';
import MobileNav from './MobileNav';
import styles from './Header.module.scss';

export default function Header() {
  const windowWidth = useDebounceWindowWidth();
  const [mounted, setMounted] = useState(false);
  const isMobileView = windowWidth < BREAKPOINT_LG;
  const [mobilePopoverOpen, setMobilePopoverOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const throttledHandleScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledHandleScroll);
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, []);

  const handleToggleMobileMenu = () => setMobilePopoverOpen((prev) => !prev);
  const handleCloseMobileMenu = () => setMobilePopoverOpen(false);

  return (
    <header
      className={clsx(
        styles.header,
        mobilePopoverOpen && styles.header_open,
        scrolled && !mobilePopoverOpen && styles.scroll_blur,
      )}
    >
      <Logo />

      {!mounted ? (
        // SSR 및 초기 렌더링: Desktop Nav 렌더링
        <DesktopNav />
      ) : isMobileView ? (
        // 클라이언트 마운트 후: Mobile View
        <MobileNav
          isOpen={mobilePopoverOpen}
          onToggle={handleToggleMobileMenu}
          onClose={handleCloseMobileMenu}
        />
      ) : (
        // 클라이언트 마운트 후: Desktop View
        <DesktopNav />
      )}
    </header>
  );
}
