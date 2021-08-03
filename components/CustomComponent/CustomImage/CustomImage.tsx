/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from 'next/image';

interface CustomImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const CustomImage = ({
  src,
  alt,
  width,
  height,
}: CustomImageProps): JSX.Element => {
  const srcFormatted = src[0] === '/' ? src.slice(1) : src;
  return (
    <div className="flex justify-center py-4">
      <Image
        className="relative rounded-xl shadow-md"
        src={`/${srcFormatted}`}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  );
};

export default CustomImage;
