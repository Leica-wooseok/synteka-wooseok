import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './Tag.module.scss';

type TagProps = {
  children?: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export default function Tag({ children, className, ...props }: TagProps) {
  return (
    <div className={clsx(styles.tag_root, className)} {...props}>
      {children}
    </div>
  );
}
