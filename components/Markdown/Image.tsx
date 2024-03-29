interface CustomImageProps {
  src: string;
  alt: string;
}

const CustomImage = ({ src, alt }: CustomImageProps): JSX.Element => (
  <div className="flex justify-center py-4">
    <img src={src} alt={alt} className="relative rounded-xl shadow-md" />
  </div>
);

export default CustomImage;
