import React from 'react';

import clsx from 'clsx';

import { Image } from '@components/common/Image';
import { getSiteMetaData } from '@utils/helpers';

interface BioProps {
  className: string;
}

export const Bio: React.FunctionComponent<BioProps> = ({
  className,
}: BioProps) => {
  const { author, social } = getSiteMetaData();

  return (
    <div className={clsx(`flex items-center`, className)}>
      <Image
        className="flex-shrink-0 mb-0 mr-3 rounded-full w-14 h-14"
        src={require('public/assets/profile.png')}
        webpSrc={require('public/assets/profile.png?webp')}
        previewSrc={require('public/assets/profile.png?lqip')}
        alt="Profile"
      />

      <p className="text-base leading-7">
        Written by <b className="font-semibold">{author.name}</b>{' '}
        {author.summary}{' '}
        <a href={`https://twitter.com/${social.twitter}`}>
          Follow him on twitter
        </a>
      </p>
    </div>
  );
};