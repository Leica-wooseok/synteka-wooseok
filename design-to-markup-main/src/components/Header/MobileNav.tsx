import LanguageButton from '@/components/Buttons/LanguageButton';
import Link from 'next/link';
import { useLayoutEffect, useState } from 'react';
import LoginButton from './LoginButton';
import { NAV_ITEMS } from './navItems';
import styles from './Header.module.scss';
import CloseIcon from '/public/images/icons/icon-close.svg';
import MenuIcon from '/public/images/icons/icon-menu.svg';

type MobileNavProps = {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
};

export default function MobileNav({ isOpen, onToggle, onClose }: MobileNavProps) {
  useLayoutEffect(() => {
    if (isOpen) {
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
  }, [isOpen]);

  return (
    <>
      <button className={styles.mobile_menu_button} onClick={onToggle}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {isOpen && (
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
      )}
    </>
  );
}
