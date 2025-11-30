import Header from '@/components/Header/Header';
import styles from './index.module.scss';

export default function Home() {
  return (
    <div className={styles.wrap}>
      <Header />

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
