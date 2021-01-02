/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';

import Image from '@components/common/Image';

interface CustomImage2Props {
  src: string;
  alt: string;
}

const CustomImage2: React.FunctionComponent<CustomImage2Props> = ({
  src,
  alt,
}: CustomImage2Props) => {
  const srcFormatted = src[0] === '/' ? src.slice(1) : src;
  return (
    <div className="flex justify-center py-4">
      <Image
        className="relative rounded-xl border shadow-md"
        src={require(`public/${srcFormatted}`)}
        webpSrc={require(`public/${srcFormatted}?webp`)}
        previewSrc={require(`public/${srcFormatted}?lqip`)}
        alt={alt}
      />
    </div>
  );
};

export default CustomImage2;
