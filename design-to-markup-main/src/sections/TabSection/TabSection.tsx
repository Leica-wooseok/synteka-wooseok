import SectionTitleBox from '@/components/SectionTitleBox/SectionTitleBox';
import TabButtonGroup from '@/components/TabButtonGroup/TabButtonGroup';
import useFadeInOnView from '@/hooks/useFadeInOnView';
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
  isActive,
}: {
  content: (typeof TAB_CONTENT)[number];
  isActive: boolean;
}) {
  return (
    <div
      className={clsx(styles.tab_content, {
        [styles.hidden]: !isActive,
      })}
    >
      <div className={styles.tab_content_image_box}>
        <Image
          src={content.image.desktop.src}
          alt={content.alt}
          width={content.image.desktop.width}
          height={content.image.desktop.height}
          className={clsx(styles.tab_content_image, styles.desktop_image)}
          priority={isActive}
        />
        <Image
          src={content.image.mobile.src}
          alt={content.alt}
          width={content.image.mobile.width}
          height={content.image.mobile.height}
          className={clsx(styles.tab_content_image, styles.mobile_image)}
          priority={isActive}
        />
      </div>
    </div>
  );
}

export default function TabSection() {
  const [activeTab, setActiveTab] = useState(1);
  const { elementRef, isVisible } = useFadeInOnView({ threshold: 0.2 });

  return (
    <section className={clsx(styles.section, styles.image_tab_section)}>
      <div className='container'>
        <div className={clsx(styles.section_container_inner)}>
          <SectionTitleBox
            title='테스트용 탭 영역 단락 입니다'
            titleVariant='heading1'
            titleComponent='h2'
            paragraph={`면접 과제용으로 제작된 샘플 탭 단락입니다.
 인터렉션, 코드 구조등을 자유롭게 구현하세요.`}
          />
          <div
            className={clsx(styles.image_tab_wrap, 'fade-in-container', {
              'is-visible': isVisible,
            })}
          >
            <TabButtonGroup
              tabs={TAB_CONTENT}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              className={styles.tab_button_group_width}
            />

            <div ref={elementRef} className={styles.tab_content_container}>
              {TAB_CONTENT.map((content) => (
                <TabImage
                  key={content.id}
                  content={content}
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
