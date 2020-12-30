import React from 'react';

interface CustomImageProps {
  src: string;
  alt: string;
}

const CustomImage: React.FunctionComponent<CustomImageProps> = ({
  src,
  alt,
}: CustomImageProps) => {
  return (
    <div className="flex justify-center py-4">
      <img src={src} alt={alt} className="rounded-md border shadow-md" width="70%" />
    </div>
  );
};

export default CustomImage;
