import clsx from 'clsx';
import Image from 'next/image';
import styles from './SlideCard.module.scss';

type SlideCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  className?: string;
};

export default function SlideCard({ title, description, imageSrc, className }: SlideCardProps) {
  return (
    <div className={clsx(styles.card, className)}>
      <div className={styles.card_image_box}>
        <Image src={imageSrc} alt={title} fill />
      </div>
      <div className={styles.card_info_box}>
        <h3 className={styles.card_info_title}>{title}</h3>
        <p className={styles.card_info_description}>{description}</p>
      </div>
    </div>
  );
}
