import SectionTitleBox from '@/components/SectionTitleBox/SectionTitleBox';
import Tag from '@/components/Tags/Tag';
import useFadeInOnView from '@/hooks/useFadeInOnView';
import clsx from 'clsx';
import Image from 'next/image';

import styles from './HeroSection.module.scss';

const HERO_CONTENT = {
  tag: 'Syntekabio',
  title: '이 페이지는 테스트 중입니다',
  paragraph: '면접 과제용으로 제작된 샘플 페이지입니다.',
} as const;

const HERO_IMAGE = {
  mobile: {
    src: '/images/hero-image_mobile.png',
    width: 270,
    height: 541,
  },
  desktop: {
    src: '/images/hero-image_desktop.png',
    width: 907,
    height: 644,
  },
  alt: '히어로 섹션 이미지입니다',
} as const;

function HeroImage() {
  return (
    <>
      <Image
        className={styles.hero_section_image_mobile}
        src={HERO_IMAGE.mobile.src}
        width={HERO_IMAGE.mobile.width}
        height={HERO_IMAGE.mobile.height}
        alt={HERO_IMAGE.alt}
        priority
      />
      <Image
        className={styles.hero_section_image_desktop}
        src={HERO_IMAGE.desktop.src}
        width={HERO_IMAGE.desktop.width}
        height={HERO_IMAGE.desktop.height}
        alt={HERO_IMAGE.alt}
        priority
      />
    </>
  );
}

export default function HeroSection() {
  const { elementRef, isVisible } = useFadeInOnView({ threshold: 0.2 });

  return (
    <section className={clsx(styles.section, styles.hero_section)}>
      <div className='container'>
        <div className={clsx(styles.section_container_inner)}>
          <div className={styles.hero_section_title_box}>
            <Tag>{HERO_CONTENT.tag}</Tag>
            <SectionTitleBox
              title={HERO_CONTENT.title}
              paragraph={HERO_CONTENT.paragraph}
              titleVariant='heading1'
              titleComponent='h1'
            />
          </div>
          <div
            className={clsx(styles.hero_section_image_box, 'fade-in-container', {
              'is-visible': isVisible,
            })}
            ref={elementRef}
          >
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}
