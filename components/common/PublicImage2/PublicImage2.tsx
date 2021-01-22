/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import clsx from 'clsx';
import 'lazysizes';

interface PublicImage2Props {
  alt: string;
  src: string;
  className: string;
}

const PublicImage2 = ({
  alt,
  src,
  className,
}: PublicImage2Props): JSX.Element => {
  const srcFormatted = src[0] === '/' ? src.slice(1) : src;
  return (
    <picture>
      <source
        type="image/webp"
        srcSet={require(`public/${srcFormatted}?webp`)}
      />
      <source type="image/png" srcSet={require(`public/${srcFormatted}`)} />
      <img
        className={clsx('lazyload blur', className)}
        alt={alt}
        src={require(`public/${srcFormatted}?lqip`)}
      />
    </picture>
  );
};

export default PublicImage2;
