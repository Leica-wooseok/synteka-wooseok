import SectionTitleBox from '@/components/SectionTitleBox/SectionTitleBox';
import Tag from '@/components/Tags/Tag';
import { BREAKPOINT_SM } from '@/constants/breakpoints';
import useDebounceWindowWidth from '@/hooks/useDebounceWindowWidth';
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

function HeroImage({ isMobile }: { isMobile: boolean }) {
  const image = isMobile ? HERO_IMAGE.mobile : HERO_IMAGE.desktop;

  return (
    <Image
      key={isMobile ? 'mobile' : 'desktop'}
      className={styles.hero_section_image}
      src={image.src}
      width={image.width}
      height={image.height}
      alt={HERO_IMAGE.alt}
      priority
    />
  );
}

export default function HeroSection() {
  const windowWidth = useDebounceWindowWidth();
  const isMobile = windowWidth < BREAKPOINT_SM;

  return (
    <section className={clsx(styles.section, styles.hero_section)}>
      <div className='container'>
        <div className={styles.section_container_inner}>
          <div className={styles.hero_section_title_box}>
            <Tag>{HERO_CONTENT.tag}</Tag>
            <SectionTitleBox
              title={HERO_CONTENT.title}
              paragraph={HERO_CONTENT.paragraph}
              titleVariant='heading1'
              titleComponent='h1'
            />
          </div>
          <div className={styles.hero_section_image_box}>
            <HeroImage isMobile={isMobile} />
          </div>
        </div>
      </div>
    </section>
  );
}
