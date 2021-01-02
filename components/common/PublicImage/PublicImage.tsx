import React from 'react';
import Image from 'next/image';
import 'lazysizes';

interface PublicImageProps {
  alt: string;
  src: string;
  width: number;
  height: number;
  className: string;
}

const PublicImage: React.FunctionComponent<PublicImageProps> = ({
  alt,
  src,
  width,
  height,
  className,
}: PublicImageProps) => {
  const srcFormatted = src[0] === '/' ? src.slice(1) : src;
  return (
    <Image
      className={`lazyload blur ${className}`}
      src={`/${srcFormatted}`}
      alt={alt}
      width={width}
      height={height}
    />
  );
};

export default PublicImage;
