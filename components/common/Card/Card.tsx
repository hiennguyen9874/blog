import React, { Key } from 'react';
import Link from 'next/link';

import PublicImage from '@components/common/PublicImage';
import { getSiteMetaData } from '@utils/helpers';

interface CardProps {
  title: string;
  description: string;
  date: string;
  hrefPost: string;
  asPost: string;
  thumbnail: string;
  tags: string[];
  timeReading?: number;
  key: Key;
}

const Card = ({
  title,
  description,
  date,
  hrefPost,
  asPost,
  thumbnail,
  tags,
  timeReading,
  key,
}: CardProps): JSX.Element => {
  const { author } = getSiteMetaData();

  return (
    <div
      key={key}
      className="transform duration-300 group container hover:-translate-y-2 active:translate-y-0 max-w-4xl rounded-xl shadow-sm hover:shadow-lg overflow-hidden md:max-w-4xl bg-white dark:bg-gray-700 active:translate-y-0"
    >
      <div className="flex items-stretch container mx-auto justify-between">
        {/* Left */}
        <div className="w-full md:w-5/12 self-stretch">
          <Link href={hrefPost} as={asPost}>
            <a className="flex flex-col items-center p-1.5">
              <PublicImage
                className="w-full h-full rounded-lg object-cover md:w-96"
                src={thumbnail}
                alt="profile"
                width={360}
                height={280}
              />
            </a>
          </Link>
        </div>

        {/* Right */}
        <div className="md:w-7/12 self-stretch flex flex-col px-4 py-2">
          <div className="h-1/6">
            <div className="mt-2 flex flex-row">
              {tags.map((tag) => (
                <div className="mx-0.5">
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <Link href="/category/[slug]" as={`/category/${tag}`}>
                    <a className="px-1 pb-0.5 pt-0 font-normal text-md items-center rounded-md bg-gray-400 text-gray-100 hover:bg-gray-600 dark:hover:bg-gray-400 dark:bg-gray-600 dark:text-white hover:no-underline">
                      {tag}
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="h-3/6">
            <div className="mt-2">
              <Link href={hrefPost} as={asPost}>
                <a className="text-2xl text-gray-700 font-bold dark:text-white hover:text-blue-500 dark:hover:text-blue-500 hover:no-underline">
                  {title}
                </a>
              </Link>
              <p className="mt-2 text-gray-600 dark:text-white">
                {description}
              </p>
            </div>
          </div>

          <div className="h-2/6">
            <div className="mt-4 mr-2 flex flex-row items-center">
              <div>
                <Link href="/aboutme">
                  <a>
                    <PublicImage
                      className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                      src="assets/img/profile.jpg"
                      width={40}
                      height={40}
                      alt="avatar"
                    />
                  </a>
                </Link>
              </div>

              <div className="ml-3 flex flex-col justify-center">
                <div>
                  <Link href="/aboutme">
                    <a>
                      <h1 className="text-gray-700 font-bold dark:text-white hover:text-blue-500 dark:hover:text-blue-500 hover:no-underline">
                        {author.name}
                      </h1>
                    </a>
                  </Link>
                </div>
                <div className="flex flex-row items-center">
                  <span className="font-normal text-gray-400 dark:text-white">
                    {date}
                  </span>
                  <span className="ml-2 w-1 h-1 bg-gray-400 rounded-full bg-opacity-50" />
                  <div className="ml-2 flex flex-row space-x-1 items-center">
                    <div className="flex flex-row text-gray-400">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
                      </svg>
                    </div>
                    <div className="ml-2 font-normal text-gray-400 dark:text-white">
                      {timeReading} min
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  timeReading: 2,
};

export default Card;
