import Typography, { TypographyColor, TypographyVariant } from '@/components/Typography/Typography';
import styles from './SectionTitleBox.module.scss';

type SectionTitleBoxProps = {
  title: string;
  paragraph: string;
  titleComponent?: React.ElementType;
  titleVariant?: TypographyVariant;
  titleColor?: TypographyColor;
  paragraphColor?: TypographyColor;
};

export default function SectionTitleBox({
  title,
  paragraph,
  titleVariant = 'heading1',
  titleColor,
  titleComponent,
  paragraphColor,
}: SectionTitleBoxProps) {
  return (
    <div className={styles.section_title_box}>
      <Typography
        variant={titleVariant}
        color={titleColor || 'headline'}
        component={titleComponent}
      >
        {title}
      </Typography>
      <Typography variant='paragraph' color={paragraphColor || 'paragraph'}>
        {paragraph}
      </Typography>
      {/* <p className={clsx('typo-paragraph', paragraphColor || 'text-color-paragraph')}>
        {paragraph}
      </p> */}
    </div>
  );
}
