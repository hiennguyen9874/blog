/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import Image from 'next/image';

interface CustomImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const CustomImage: React.FunctionComponent<CustomImageProps> = ({
  src,
  alt,
  width,
  height,
}: CustomImageProps) => (
  <div className="flex justify-center py-4">
    <Image
      className="relative rounded-xl border shadow-md"
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  </div>
);

export default CustomImage;
