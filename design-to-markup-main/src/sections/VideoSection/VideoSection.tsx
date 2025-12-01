import SectionTitleBox from '@/components/SectionTitleBox/SectionTitleBox';
import useVideoAutoplay from '@/hooks/useVideoAutoplay';
import clsx from 'clsx';

import styles from './VideoSection.module.scss';

const VIDEO_SECTION_CONTENT = {
  title: '테스트용 영상 단락',
  paragraph: `면접 과제용으로 제작된 샘플 영상 단락입니다. 
 사용자가 해당 단락이 화면에 보일 경우 영상이 재생되게 구현하세요.`,
  videoSrc: '/video/main.mp4',
} as const;

export default function VideoSection() {
  const videoRef = useVideoAutoplay({ threshold: 0.5, playOnce: true });

  return (
    <section className={clsx(styles.section, styles.video_section)}>
      <div className='container'>
        <div className={styles.section_container_inner}>
          <SectionTitleBox
            titleVariant='heading1'
            titleComponent='h2'
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
