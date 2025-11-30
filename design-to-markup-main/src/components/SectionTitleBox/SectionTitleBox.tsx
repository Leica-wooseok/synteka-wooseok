import clsx from 'clsx';
import styles from './SectionTitleBox.module.scss';

type SectionTitleBoxProps = {
  title: string;
  paragraph: string;
  titleColor?: string;
  paragraphColor?: string;
};

export default function SectionTitleBox({
  title,
  paragraph,
  titleColor,
  paragraphColor,
}: SectionTitleBoxProps) {
  return (
    <div className={styles.section_title_box}>
      <h1 className={clsx('typo-h1', titleColor || 'text-color-headline')}>{title}</h1>
      <p className={clsx('typo-paragraph', paragraphColor || 'text-color-paragraph')}>
        {paragraph}
      </p>
    </div>
  );
}
