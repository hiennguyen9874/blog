import React from 'react';

import Image from '@components/common/Image';

interface CustomImageProps {
  src: string;
  alt: string;
}

const CustomImage: React.FunctionComponent<CustomImageProps> = ({
  src,
  alt,
}: CustomImageProps) => (
  <div className="flex justify-center py-4">
    <img src={src} alt={alt} className="relative rounded-xl shadow-md" />
  </div>
);

export default CustomImage;
