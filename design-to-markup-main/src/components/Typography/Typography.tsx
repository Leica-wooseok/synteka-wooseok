import React from 'react';
import styles from './Typography.module.scss';

export type TypographyVariant =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'paragraph'
  | 'link'
  | 'caption';

export type TypographyColor = 'link' | 'headline' | 'paragraph' | 'caption';

export type TypographyProps = {
  variant?: TypographyVariant;
  color?: TypographyColor;
  component?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

const Typography: React.FC<TypographyProps> = ({
  variant = 'paragraph',
  color,
  component,
  className = '',
  children,
}) => {
  const getDefaultComponent = (): React.ElementType => {
    switch (variant) {
      case 'heading1':
        return 'h1';
      case 'heading2':
        return 'h2';
      case 'heading3':
        return 'h3';
      case 'link':
        return 'a';
      case 'caption':
        return 'span';
      case 'paragraph':
      default:
        return 'p';
    }
  };

  const Component = component || getDefaultComponent();

  const classNames = [
    styles.typography,
    styles[variant],
    color && styles[`color-${color}`],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <Component className={classNames}>{children}</Component>;
};

export default Typography;
