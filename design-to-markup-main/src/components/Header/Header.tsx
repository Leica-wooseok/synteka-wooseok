import FilledButton from '@/components/Buttons/FilledButton';
import LanguageButton from '@/components/Buttons/LanguageButton';
import { BREAKPOINT_LG } from '@/constants/breakpoints';
import useDebounceWindowWidth from '@/hooks/useDebounceWindowWidth';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import CloseIcon from '/public/images/icons/icon-close.svg';
import MenuIcon from '/public/images/icons/icon-menu.svg';

type NavItem = { href: string; label: string };

const NAV_ITEMS: NavItem[] = [
  { href: '', label: 'Service menu 1' },
  { href: '', label: 'Service menu 2' },
  { href: '', label: 'Service menu 3' },
  { href: '', label: 'Service menu 4' },
];

function Logo() {
  return (
    <Link href='/'>
      <Image src='/images/commons/logo.svg' width={109} height={22} alt='신테카 바이오 로고' />
    </Link>
  );
}

function LoginButton({ isMobile }: { isMobile: boolean }) {
  return (
    <FilledButton
      style={{ minWidth: isMobile ? '100%' : 80 }}
      size={isMobile ? 'lg' : 'md'}
      color='primary'
    >
      Login
    </FilledButton>
  );
}

function DesktopNav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav_list}>
        {NAV_ITEMS.map((item, idx) => (
          <li className={styles.nav_list_item} key={idx}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function DesktopButtonGroup({ isMobile }: { isMobile: boolean }) {
  return (
    <div className={styles.header_button_group}>
      <LanguageButton />
      <LoginButton isMobile={isMobile} />
    </div>
  );
}

function MobileMenuButton({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button className={styles.mobile_menu_button} onClick={onClick}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </button>
  );
}

function MobilePopover({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className={styles.mobile_nav_popover}>
      <nav className={styles.mobile_nav}>
        <ul className={styles.mobile_nav_list}>
          <li className={styles.mobile_nav_item}>
            <Link className={styles.mobile_gnb_menu} href='/' onClick={onClose}>
              HOME
            </Link>
          </li>
          <li className={styles.mobile_nav_item}>
            <div className={styles.mobile_gnb_menu}>SERVICE</div>
            <ul className={styles.mobile_nav_sub_list}>
              {NAV_ITEMS.map((item, idx) => (
                <li className={styles.mobile_nav_sub_item} key={idx}>
                  <Link href={item.href} onClick={onClose}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <LanguageButton />
      </nav>
      <LoginButton isMobile />
    </div>
  );
}

export default function Header() {
  const windowWidth = useDebounceWindowWidth();
  const isMobileView = windowWidth < BREAKPOINT_LG;
  const [mobilePopoverOpen, setMobilePopoverOpen] = useState(false);

  const handleToggleMobileMenu = () => setMobilePopoverOpen((prev) => !prev);
  const handleCloseMobileMenu = () => setMobilePopoverOpen(false);

  useEffect(() => {
    if (mobilePopoverOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [mobilePopoverOpen]);

  return (
    <header className={clsx(styles.header, mobilePopoverOpen && styles.header_open)}>
      <Logo />

      {isMobileView ? (
        <>
          <MobileMenuButton isOpen={mobilePopoverOpen} onClick={handleToggleMobileMenu} />
          <MobilePopover isOpen={mobilePopoverOpen} onClose={handleCloseMobileMenu} />
        </>
      ) : (
        <>
          <DesktopNav />
          <DesktopButtonGroup isMobile={false} />
        </>
      )}
    </header>
  );
}
