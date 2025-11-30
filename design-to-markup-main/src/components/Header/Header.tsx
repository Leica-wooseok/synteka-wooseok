import FilledButton from '@/components/Buttons/FilledButton';
import LanguageButton from '@/components/Buttons/LanguageButton';
import { BREAKPOINT_LG } from '@/constants/breakpoints';
import useDebounceWindowWidth from '@/hooks/useDebounceWindowWidth';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.scss';
import CloseIcon from '/public/images/icons/icon-close.svg';
import MenuIcon from '/public/images/icons/icon-menu.svg';

type NavItem = { href: string; label: string };

export default function Header() {
  const windowWidth = useDebounceWindowWidth();
  const isMobileView = windowWidth < BREAKPOINT_LG;
  const [mobilePopoverOpen, setMobilePopoverOpen] = useState(false);

  const defaultNavList: NavItem[] = [
    { href: '', label: 'Service menu 1' },
    { href: '', label: 'Service menu 2' },
    { href: '', label: 'Service menu 3' },
    { href: '', label: 'Service menu 4' },
  ];

  const renderLogo = () => {
    return (
      <h1>
        <Link href={'/'}>
          <Image
            src={'/images/commons/logo.svg'}
            width={109}
            height={22}
            alt='신테카 바이오 로고'
          />
        </Link>
      </h1>
    );
  };

  const renderLoginButton = () => {
    return (
      <FilledButton
        style={{ minWidth: isMobileView ? '100%' : 80 }}
        size={isMobileView ? 'lg' : 'md'}
        color='primary'
      >
        Login
      </FilledButton>
    );
  };
  const renderNav = () => {
    return (
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          {defaultNavList.map((item, idx) => (
            <li className={styles.nav_list_item} key={idx}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  const renderButtonGroup = () => {
    return (
      <div className={styles.header_button_group}>
        <LanguageButton />
        {renderLoginButton()}
      </div>
    );
  };

  const renderHambuerButton = () => {
    return (
      <button
        className={styles.mobile_menu_button}
        onClick={() => setMobilePopoverOpen((prev) => !prev)}
      >
        {mobilePopoverOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
    );
  };

  const renderMobilePopover = () => {
    if (!mobilePopoverOpen) return null;
    return (
      <div className={styles.mobile_nav_popover}>
        <nav className={styles.mobile_nav}>
          <ul className={styles.mobile_nav_list}>
            <li className={styles.mobile_nav_item}>
              <Link
                className={styles.mobile_gnb_menu}
                href={'/'}
                onClick={() => setMobilePopoverOpen(false)}
              >
                HOME
              </Link>
            </li>
            <li className={styles.mobile_nav_item}>
              <div className={styles.mobile_gnb_menu}>SERVICE</div>
              <ul className={styles.mobile_nav_sub_list}>
                {defaultNavList.map((item, idx) => (
                  <li className={styles.mobile_nav_sub_item} key={idx}>
                    <Link
                      href={item.href}
                      onClick={() => {
                        setMobilePopoverOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
          <LanguageButton />
        </nav>
        {renderLoginButton()}
      </div>
    );
  };

  const renderDesktopHeader = () => {
    return (
      <>
        {renderLogo()}
        {renderNav()}
        {renderButtonGroup()}
      </>
    );
  };

  const renderMobileHeader = () => {
    return (
      <>
        {renderLogo()}
        {renderHambuerButton()}
        {renderMobilePopover()}
      </>
    );
  };

  return (
    <header className={clsx(styles.header, mobilePopoverOpen ? styles.header_open : '')}>
      {!isMobileView ? renderDesktopHeader() : renderMobileHeader()}
    </header>
  );
}
