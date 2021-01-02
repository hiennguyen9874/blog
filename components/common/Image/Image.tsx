import React from 'react';
import 'lazysizes';

interface ImageProps {
  alt: string;
  src: string;
  previewSrc: string;
  webpSrc: string;
  className: string;
}

const Image: React.FunctionComponent<ImageProps> = ({
  alt,
  src,
  previewSrc,
  webpSrc,
  className,
}: ImageProps) => (
  <picture className={className}>
    <source type="image/webp" srcSet={webpSrc} />
    <source type="image/png" srcSet={src} />
    <img className={`lazyload blur ${className}`} alt={alt} src={previewSrc} />
  </picture>
);

export default Image;
