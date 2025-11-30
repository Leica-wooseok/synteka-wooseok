import React from 'react';

// Next.js Link 컴포넌트를 Storybook에서 사용할 수 있도록 모킹
interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  target?: string;
  rel?: string;
  'aria-label'?: string;
  'aria-current'?: 'page' | 'step' | 'location' | 'date' | 'time' | 'true' | 'false' | boolean;
  role?: string;
  [key: string]: any;
}

const Link: React.FC<LinkProps> = ({ 
  href, 
  children, 
  className, 
  style, 
  onClick,
  target,
  rel,
  ...props 
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Storybook 환경에서는 기본 링크 동작을 방지하고 콘솔에 로그 출력
    if (process.env.NODE_ENV === 'development' && window.location.href.includes('storybook')) {
      e.preventDefault();
      console.log(`Storybook Link clicked: ${href}`);
      return;
    }
    
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a
      href={href}
      className={className}
      style={style}
      onClick={handleClick}
      target={target}
      rel={rel}
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;
