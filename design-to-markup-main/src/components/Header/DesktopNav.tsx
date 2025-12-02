import LanguageButton from '@/components/Buttons/LanguageButton';
import Link from 'next/link';
import LoginButton from './LoginButton';
import { NAV_ITEMS } from './navItems';
import styles from './Header.module.scss';

export default function DesktopNav() {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          {NAV_ITEMS.map((item, idx) => (
            <li className={styles.nav_list_item} key={idx}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.header_button_group}>
        <LanguageButton />
        <LoginButton isMobile={false} />
      </div>
    </>
  );
}
