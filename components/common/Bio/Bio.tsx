/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import clsx from 'clsx';

import PublicImage from '@components/common/PublicImage';
import { getSiteMetaData } from '@utils/helpers';

interface BioProps {
  className: string;
}

const Bio: React.FunctionComponent<BioProps> = ({ className }: BioProps) => {
  const { author, social } = getSiteMetaData();

  return (
    <div className={clsx(`flex items-center`, className)}>
      <div className="mb-0 mr-3">
        <PublicImage
          className="flex-shrink-0 rounded-full w-14 h-14"
          src="assets/img/profile.jpg"
          width={54}
          height={54}
          alt="Profile"
        />
      </div>

      <p className="text-base leading-7">
        Written by <b className="font-semibold">{author.name}</b>{' '}
        {author.summary} <a href={social.twitter.link}>Follow him on twitter</a>
      </p>
    </div>
  );
};
export default Bio;
