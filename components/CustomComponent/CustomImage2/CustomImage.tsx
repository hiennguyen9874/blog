/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';

import { PublicImage2 } from '@components/common';

interface CustomImage2Props {
  src: string;
  alt: string;
}

const CustomImage2: React.FunctionComponent<CustomImage2Props> = ({
  src,
  alt,
}: CustomImage2Props) => (
  <div className="flex justify-center py-4">
    <PublicImage2
      className="relative rounded-xl border shadow-md"
      src={src}
      alt={alt}
    />
  </div>
);
export default CustomImage2;
