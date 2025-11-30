import Header from '@/components/Header/Header';
import Tag from '@/components/Tags/Tag';
import { BREAKPOINT_LG } from '@/constants/breakpoints';
import useDebounceWindowWidth from '@/hooks/useDebounceWindowWidth';
import clsx from 'clsx';
import Image from 'next/image';
import styles from './index.module.scss';

function HeroSection() {
  const windowWidth = useDebounceWindowWidth();
  const isMobile = windowWidth < BREAKPOINT_LG;

  return (
    <section className={clsx(styles.section, styles.hero_section)}>
      <div className='container'>
        <div className={styles.section_container_inner}>
          <div className={styles.hero_section_title_box}>
            <Tag>Syntekabio</Tag>
            <div className={styles.section_title_box}>
              <h1 className='typo-h1'>이 페이지는 테스트 중입니다</h1>
              <p className={clsx('typo-paragraph', 'text-color-paragraph')}>
                면접 과제용으로 제작된 샘플 페이지입니다.
              </p>
            </div>
          </div>
          <div className={styles.hero_section_image_box}>
            {isMobile ? (
              <Image
                className={styles.hero_section_image}
                src={'/images/hero-image_mobile.png'}
                width={270}
                height={541}
                alt='히어로 섹션 이미지입니다'
              />
            ) : (
              <Image
                className={styles.hero_section_image}
                src={'/images/hero-image_desktop.png'}
                width={907}
                height={644}
                alt='히어로 섹션 이미지입니다'
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className={styles.wrap}>
      <Header />

      <main className={styles.main}>
        <HeroSection />
        <section className={styles.section}>
          <div className='container'>
            <div className={styles.section_container_inner}>Video</div>
          </div>
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
