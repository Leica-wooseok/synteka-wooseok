import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './FilledButton.module.scss';

type FilledButtonProps = {
  size?: 'xl' | 'lg' | 'md' | 'sm';
  color?: 'primary' | 'gray';
  children: ReactNode;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function FilledButton({
  size = 'md',
  color = 'primary',
  children,
  startAdornment,
  endAdornment,
  className,
  style,
  ...props
}: FilledButtonProps) {
  return (
    <button
      className={clsx(styles.filled_button, styles[color], styles[`size_${size}`], className)}
      style={style}
      {...props}
    >
      {startAdornment && <span className={styles.button_icon}>{startAdornment}</span>}
      {children}
      {endAdornment && <span className={styles.button_icon}>{endAdornment}</span>}
    </button>
  );
}
