import SectionTitleBox from '@/components/SectionTitleBox/SectionTitleBox';
import TabButtonGroup from '@/components/TabButtonGroup/TabButtonGroup';
import { BREAKPOINT_SM } from '@/constants/breakpoints';
import useDebounceWindowWidth from '@/hooks/useDebounceWindowWidth';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';

import styles from './TabSection.module.scss';

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

export default function TabSection() {
  const [activeTab, setActiveTab] = useState(1);
  const windowWidth = useDebounceWindowWidth();
  const isMobile = windowWidth < BREAKPOINT_SM;

  return (
    <section className={clsx(styles.section, styles.image_tab_section)}>
      <div className='container'>
        <div className={styles.section_container_inner}>
          <SectionTitleBox
            title='테스트용 탭 영역 단락 입니다'
            titleVariant='heading1'
            titleComponent='h2'
            paragraph={`면접 과제용으로 제작된 샘플 탭 단락입니다. 
 인터렉션, 코드 구조등을 자유롭게 구현하세요.`}
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
