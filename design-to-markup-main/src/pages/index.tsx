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
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
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
    image: {
      desktop: { src: '/images/tabs/tab_1_desktop.png', width: 892, height: 620 },
      mobile: { src: '/images/tabs/tab_1_mobile.png', width: 361, height: 385 },
    },
    alt: '탭 영역 1 이미지입니다',
  },
  {
    id: 2,
    label: '탭 영역 2',
    image: {
      desktop: { src: '/images/tabs/tab_2_desktop.png', width: 892, height: 620 },
      mobile: { src: '/images/tabs/tab_2_mobile.png', width: 361, height: 385 },
    },
    alt: '탭 영역 2 이미지입니다',
  },
  {
    id: 3,
    label: '탭 영역 3',
    image: {
      desktop: { src: '/images/tabs/tab_3_desktop.png', width: 892, height: 620 },
      mobile: { src: '/images/tabs/tab_3_mobile.png', width: 361, height: 385 },
    },
    alt: '탭 영역 3 이미지입니다',
  },
] as const;

const CARD_SLIDE_CONTENT = [
  {
    id: 1,
    title: '과제용 카드',
    description: `인터렉션, 코드 구조등을 \n 자유롭게 구현하세요.`,
    imageSrc: '/images/slide_image.png',
  },
  {
    id: 2,
    title: '과제용 카드',
    description: `이 카드는 콘텐츠가 길어졌을 경우 확인하기 위한 \n긴 텍스트의 예시입니다. \n 모든 내용은 테스트 목적의 더미 데이터입니다. `,
    imageSrc: '/images/slide_image.png',
  },
  {
    id: 3,
    title: `과제용 카드의 제목이 길어졌을 경우 \n 이렇게 됩니다.`,
    description: '이 카드는 콘텐츠가 길어졌을 경우 확인하기 위한 긴 텍스트의 예시입니다',
    imageSrc: '/images/slide_image.png',
  },
];

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

function TabImage({
  content,
  isMobile,
  isActive,
}: {
  content: (typeof TAB_CONTENT)[number];
  isMobile: boolean;
  isActive: boolean;
}) {
  const image = isMobile ? content.image.mobile : content.image.desktop;
  return (
    <div
      className={clsx(styles.tab_content, {
        [styles.hidden]: !isActive,
      })}
    >
      <div className={styles.tab_content_image_box}>
        <Image
          key={isMobile ? 'mobile' : 'desktop'}
          src={image.src}
          alt={content.alt}
          width={image.width}
          height={image.height}
          className={styles.tab_content_image}
          priority={isActive}
        />
      </div>
    </div>
  );
}

function TabSection() {
  const [activeTab, setActiveTab] = useState(1);
  const windowWidth = useDebounceWindowWidth();
  const isMobile = windowWidth < BREAKPOINT_SM;

  return (
    <section className={clsx(styles.section, styles.image_tab_section)}>
      <div className='container'>
        <div className={styles.section_container_inner}>
          <SectionTitleBox
            title='테스트용 탭 영역 단락 입니다'
            titleTag='h2'
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
              {TAB_CONTENT.map((content) => (
                <TabImage
                  key={content.id}
                  content={content}
                  isMobile={isMobile}
                  isActive={activeTab === content.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CardSlideSection() {
  return (
    <section className={clsx(styles.section, styles.card_slide_section)}>
      <div className='container'>
        <div className={styles.section_container_inner}>
          <SectionTitleBox
            title='테스트용 이미지 카드 단락입니다'
            titleTag='h2'
            titleColor='text-color-caption'
            paragraphColor='text-color-caption'
            paragraph={`면접 과제용으로 제작된 샘플 단락입니다. \n 인터렉션, 코드 구조등을 자유롭게 구현하세요. `}
          />
        </div>
        <div className={styles.card_slide_wrap}>
          <Swiper
            spaceBetween={16}
            slidesPerView={'auto'}
            centeredSlides={true}
            className={styles.card_swiper}
            modules={[Pagination]}
            pagination={{
              el: `.${styles.card_swiper_pagination}`,
              clickable: true,
            }}
          >
            {CARD_SLIDE_CONTENT.map((card) => (
              <SwiperSlide key={card.id} className={styles.card_slide_item}>
                <div className={styles.card_image_box}>
                  <Image src={card.imageSrc} alt={`이미지 슬라이드 ${card.id}`} fill />
                </div>
                <div className={styles.card_info_box}>
                  <h3 className={styles.card_info_title}>{card.title}</h3>
                  <p className={styles.card_info_description}>{card.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.card_swiper_pagination} />
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
        <CardSlideSection />
      </main>
    </div>
  );
}
