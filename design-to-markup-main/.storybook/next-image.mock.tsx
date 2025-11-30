import React from 'react';

// Mock Next.js Image component for Storybook
const MockNextImage = ({ src, alt, width, height, sizes, ...props }: any) => {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      style={{ 
        maxWidth: '100%', 
        height: 'auto',
        display: 'block'
      }}
      {...props}
    />
  );
};

export default MockNextImage;
