import clsx from 'clsx';
import styles from './SectionTitleBox.module.scss';

type SectionTitleBoxProps = {
  title: string;
  paragraph: string;
  titleTag?: 'h1' | 'h2';
  titleColor?: string;
  paragraphColor?: string;
};

export default function SectionTitleBox({
  title,
  paragraph,
  titleTag: TitleTag = 'h1',
  titleColor,
  paragraphColor,
}: SectionTitleBoxProps) {
  return (
    <div className={styles.section_title_box}>
      <TitleTag className={clsx('typo-h1', titleColor || 'text-color-headline')}>{title}</TitleTag>
      <p className={clsx('typo-paragraph', paragraphColor || 'text-color-paragraph')}>
        {paragraph}
      </p>
    </div>
  );
}
