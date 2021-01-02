import React from 'react';

interface CustomImageProps {
  src: string;
  alt: string;
}

const CustomImage: React.FunctionComponent<CustomImageProps> = ({
  src,
  alt,
}: CustomImageProps) => (
  <div className="flex justify-center py-4">
    <img src={src} alt={alt} className="rounded-xl border shadow-md" />
  </div>
);

export default CustomImage;
