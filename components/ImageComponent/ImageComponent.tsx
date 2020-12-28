import React from 'react';

import { ImageProps } from 'next/image';

import { Image } from '@components/common/Image';

const ImageComponent: React.FunctionComponent<ImageProps> = ({
  src,
}: ImageProps) => (
  <Image
    className="flex-shrink-0 mb-0 mr-3 rounded-full w-14 h-14"
    src={require(`public/assets/${src}`)}
    webpSrc={require(`public/assets/${src}?webp`)}
    previewSrc={require(`public/assets/${src}?lqip`)}
    alt="Profile"
  />
);

export default ImageComponent;
