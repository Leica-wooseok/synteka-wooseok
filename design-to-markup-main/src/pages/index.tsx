import Header from '@/components/Header/Header';
import SectionTitleBox from '@/components/SectionTitleBox/SectionTitleBox';
import TabButtonGroup from '@/components/TabButtonGroup/TabButtonGroup';
import Tag from '@/components/Tags/Tag';
import { BREAKPOINT_SM } from '@/constants/breakpoints';
import useDebounceWindowWidth from '@/hooks/useDebounceWindowWidth';
import useVideoAutoplay from '@/hooks/useVideoAutoplay';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import styles from './index.module.scss';

const HERO_CONTENT = {
  tag: 'Syntekabio',
  title: '이 페이지는 테스트 중입니다',
  paragraph: '면접 과제용으로 제작된 샘플 페이지입니다.',
} as const;

const VIDEO_SECTION_CONTENT = {
  title: '테스트용 영상 단락',
  paragraph:
    '면접 과제용으로 제작된 샘플 영상 단락입니다. \n 사용자가 해당 단락이 화면에 보일 경우 영상이 재생되게 구현하세요.',
  videoSrc: '/video/main.mp4',
} as const;

const TAB_CONTENT = [
  {
    id: 1,
    label: '탭 영역 1',
    imageSrc: '/images/tabs/tab_1_desktop.png',
    alt: '탭 영역 1 이미지입니다',
  },
  {
    id: 2,
    label: '탭 영역 2',
    imageSrc: '/images/tabs/tab_2_desktop.png',
    alt: '탭 영역 2 이미지입니다',
  },
  {
    id: 3,
    label: '탭 영역 3',
    imageSrc: '/images/tabs/tab_3_desktop.png',
    alt: '탭 영역 3 이미지입니다',
  },
] as const;

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

function HeroSection() {
  const windowWidth = useDebounceWindowWidth();
  const isMobile = windowWidth < BREAKPOINT_SM;

  return (
    <section className={clsx(styles.section, styles.hero_section)}>
      <div className='container'>
        <div className={styles.section_container_inner}>
          <div className={styles.hero_section_title_box}>
            <Tag>{HERO_CONTENT.tag}</Tag>
            <SectionTitleBox title={HERO_CONTENT.title} paragraph={HERO_CONTENT.paragraph} />
          </div>
          <div className={styles.hero_section_image_box}>
            <HeroImage isMobile={isMobile} />
          </div>
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  const videoRef = useVideoAutoplay({ threshold: 0.5, playOnce: true });

  return (
    <section className={clsx(styles.section, styles.video_section)}>
      <div className='container'>
        <div className={styles.section_container_inner}>
          <SectionTitleBox
            titleTag='h2'
            title={VIDEO_SECTION_CONTENT.title}
            paragraph={VIDEO_SECTION_CONTENT.paragraph}
          />
          <div className={styles.video_box_wrap}>
            <div className={styles.video_box}>
              <video
                ref={videoRef}
                src={VIDEO_SECTION_CONTENT.videoSrc}
                muted
                playsInline
                preload='metadata'
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TabSection() {
  const [activeTab, setActiveTab] = useState(1);
  const windowWidth = useDebounceWindowWidth(); // Use the hook
  const isMobile = windowWidth < BREAKPOINT_SM; // Determine isMobile

  return (
    <section className={clsx(styles.section, styles.image_tab_section)}>
      <div className='container'>
        <div className={styles.section_container_inner}>
          <SectionTitleBox
            title='테스트용 탭 영역 단락 입니다'
            paragraph={`면접 과제용으로 제작된 샘플 탭 단락입니다. \n 인터렉션, 코드 구조등을 자유롭게 구현하세요.`}
          />
          <div className={styles.image_tab_wrap}>
            <TabButtonGroup
              tabs={TAB_CONTENT}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              className={styles.tab_button_group_width}
            />

            <div className={styles.tab_content_container}>
              {TAB_CONTENT.map((content) => {
                const dynamicImageSrc = isMobile
                  ? content.imageSrc.replace('_desktop.png', '_mobile.png')
                  : content.imageSrc;

                const imageWidth = isMobile ? 361 : 892;
                const imageHeight = isMobile ? 385 : 620;

                return (
                  <div
                    key={content.id}
                    className={clsx(styles.tab_content, {
                      [styles.hidden]: activeTab !== content.id,
                    })}
                  >
                    <div className={styles.tab_content_image_box}>
                      <Image
                        src={dynamicImageSrc}
                        alt={content.alt}
                        width={imageWidth}
                        height={imageHeight}
                        className={styles.tab_content_image}
                        priority={activeTab === content.id}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
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
        <VideoSection />
        <TabSection />

        <section className={clsx(styles.section, styles.image_slide_section)}>
          <div className='container'>image slide</div>
        </section>
      </main>
    </div>
  );
}
