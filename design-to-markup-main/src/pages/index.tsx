import Header from '@/components/Header/Header';
import CardSlideSection from '@/sections/CardSlideSection/CardSlideSection';
import HeroSection from '@/sections/HeroSection/HeroSection';
import TabSection from '@/sections/TabSection/TabSection';
import VideoSection from '@/sections/VideoSection/VideoSection';
import styles from './index.module.scss';

export default function Home() {
  return (
    <div className={styles.wrap}>
      <Header />

      <main className={styles.main}>
        <HeroSection />
        <VideoSection />
        <TabSection />
        <CardSlideSection />
      </main>
    </div>
  );
}
