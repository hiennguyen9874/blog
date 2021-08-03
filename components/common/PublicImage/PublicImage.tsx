import React from 'react';
import Image, { ImageProps } from 'next/image';
import clsx from 'clsx';
import 'lazysizes';

type PublicImageProps = ImageProps & {
  alt: string;
  src: string;
  className: string;
};

const PublicImage = ({
  alt,
  src,
  className,
  ...props
}: PublicImageProps): JSX.Element => {
  const srcFormatted = src[0] === '/' ? src.slice(1) : src;

  return (
    <>
      <Image
        className={clsx('lazyload blur', className)}
        src={`/${srcFormatted}`}
        alt={alt}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />
    </>
  );
};

export default PublicImage;
