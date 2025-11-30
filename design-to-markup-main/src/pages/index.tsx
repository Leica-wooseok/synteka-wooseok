import FilledButton from '@/components/Buttons/FilledButton';
import LanguageButton from '@/components/Buttons/LanguageButton';
import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.scss';

export default function Home() {
  type NavItem = { href: string; label: string };
  const navListArray: NavItem[] = [
    { href: '', label: 'Service menu 1' },
    { href: '', label: 'Service menu 2' },
    { href: '', label: 'Service menu 3' },
    { href: '', label: 'Service menu 4' },
  ];

  return (
    <div className={styles.wrap}>
      <header className={styles.header}>
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
        <nav className={styles.nav}>
          <ul className={styles.nav_list}>
            {navListArray.map((item, idx) => (
              <li className={styles.nav_list_item} key={idx}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.header_button_group}>
          <LanguageButton />
          <FilledButton style={{ minWidth: 80 }} size='md' color='primary'>
            Login
          </FilledButton>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.section}>
          <div className='container'>hero</div>
        </section>
        <section className={styles.section}>
          <div className='container'>vider</div>
        </section>
        <section className={styles.section}>
          <div className='container'>image tab</div>
        </section>
        <section className={styles.section}>
          <div className='container'>image slide</div>
        </section>
      </main>
    </div>
  );
}
