import Card from '@/components/Card/Card';
import SectionTitleBox from '@/components/SectionTitleBox/SectionTitleBox';
import { BREAKPOINT_SM } from '@/constants/breakpoints';
import useDebounceWindowWidth from '@/hooks/useDebounceWindowWidth';
import clsx from 'clsx';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './CardSlideSection.module.scss';

const CARD_SLIDE_CONTENT = [
  {
    id: 1,
    title: '과제용 카드',
    description: `인터렉션, 코드 구조등을 
 자유롭게 구현하세요.`,
    imageSrc: '/images/slide_image.png',
  },
  {
    id: 2,
    title: '과제용 카드',
    description: `이 카드는 콘텐츠가 길어졌을 경우 확인하기 위한 
긴 텍스트의 예시입니다. 
 모든 내용은 테스트 목적의 더미 데이터입니다. `,
    imageSrc: '/images/slide_image.png',
  },
  {
    id: 3,
    title: `과제용 카드의 제목이 길어졌을 경우 
 이렇게 됩니다.`,
    description: '이 카드는 콘텐츠가 길어졌을 경우 확인하기 위한 긴 텍스트의 예시입니다',
    imageSrc: '/images/slide_image.png',
  },
  {
    id: 4,
    title: `과제용 카드의 제목이 길어졌을 경우 
 이렇게 됩니다.`,
    description: '이 카드는 콘텐츠가 길어졌을 경우 확인하기 위한 긴 텍스트의 예시입니다',
    imageSrc: '/images/slide_image.png',
  },
  {
    id: 5,
    title: `과제용 카드의 제목이 길어졌을 경우 
 이렇게 됩니다.`,
    description: '이 카드는 콘텐츠가 길어졌을 경우 확인하기 위한 긴 텍스트의 예시입니다',
    imageSrc: '/images/slide_image.png',
  },
];

export default function CardSlideSection() {
  const windowWidth = useDebounceWindowWidth();
  const isMobile = windowWidth < BREAKPOINT_SM;
  const slidesOffsetBefore = isMobile ? 46 : 240;

  return (
    <section className={clsx(styles.section, styles.card_slide_section)}>
      <div className='container'>
        <div className={styles.section_container_inner}>
          <SectionTitleBox
            title='테스트용 이미지 카드 단락입니다'
            titleTag='h2'
            titleColor='text-color-caption'
            paragraphColor='text-color-caption'
            paragraph={`면접 과제용으로 제작된 샘플 단락입니다. 
 인터렉션, 코드 구조등을 자유롭게 구현하세요. `}
          />
        </div>
        <div className={styles.card_slide_wrap}>
          <Swiper
            slidesOffsetBefore={slidesOffsetBefore}
            spaceBetween={16}
            slidesPerView={'auto'}
            className={styles.card_swiper}
            modules={[Pagination]}
            pagination={{
              el: `.${styles.card_swiper_pagination}`,
              clickable: true,
            }}
          >
            {CARD_SLIDE_CONTENT.map((card) => (
              <SwiperSlide key={card.id} style={{ width: 'auto', height: 'auto' }}>
                <Card title={card.title} description={card.description} imageSrc={card.imageSrc} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.card_swiper_pagination} />
        </div>
      </div>
    </section>
  );
}
