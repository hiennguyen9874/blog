import React from 'react';
import Link from 'next/link';

import PublicImage from '@components/common/PublicImage';
import Tag from '@components/common/Tags/Tag';
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
  // key: Key;
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
}: // key,
CardProps): JSX.Element => {
  const { author } = getSiteMetaData();

  return (
    <div className="relative box-border duration-300 rounded-2xl shadow-sm hover:shadow-lg overflow-hidden bg-white dark:bg-header-dark transform hover:-translate-y-1 active:translate-y-0">
      <article className="flex flex-row items-stretch justify-between w-full h-full">
        {/* Left */}
        <div className="m-2 mr-0 w-2/5 relative">
          <Link href={hrefPost} as={asPost}>
            <a className="block min-h-[8.3rem] max-h-[18rem] h-full w-full relative">
              <PublicImage
                className="rounded-lg object-cover absolute top-0 left-0 right-0"
                src={thumbnail}
                alt="profile"
                layout="fill"
                objectFit="cover"
              />
            </a>
          </Link>
        </div>

        {/* Right */}
        <div className="flex flex-col justify-between p-4 md:p-5 lg:p-8 w-3/5">
          <div className="hidden md:flex flex-row mb-4">
            {tags.map((tag) => (
              <Tag
                content={tag}
                href="/category/[slug]"
                as={`/category/${tag}`}
              />
            ))}
          </div>

          <div className="mb-4">
            <Link href={hrefPost} as={asPost}>
              <a className="text-xl font-bold	 text-heading-light dark:text-heading-dark hover:no-underline">
                {title}
              </a>
            </Link>
          </div>

          <div className="mb-4">
            <p className="text-base font-normal leading-6 text-text-light dark:text-text-dark">
              {description}
            </p>
          </div>

          <div className="md:flex md:flex-row items-center">
            <div className="hidden md:block">
              <Link href="/aboutme">
                <a className="h-10 w-10">
                  <PublicImage
                    className="rounded-full"
                    src="/assets/img/profile.jpg"
                    width={40}
                    height={40}
                    alt="avatar"
                  />
                </a>
              </Link>
            </div>

            <div className="md:ml-4 flex flex-row md:flex-col justify-between md:justify-center md:w-full">
              <div className="">
                <Link href="/aboutme">
                  <a className="text-base leading-6 font-normal text-omega-dark dark:text-omega-light hover:text-blue-500 dark:hover:text-blue-500 hover:no-underline">
                    <strong>{author.name}</strong>
                  </a>
                </Link>
              </div>

              <div className="flex flex-row items-center">
                <span className="text-base leading-5 font-normal text-gray-400 dark:text-gray-300">
                  {date}
                </span>

                <span className="hidden md:block ml-2 w-1 h-1 rounded-full bg-opacity-50 bg-gray-400 dark:bg-gray-300" />

                <div className="hidden md:flex ml-2 flex-row space-x-1 items-center">
                  <div className="flex flex-row text-gray-400 dark:text-gray-300">
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

                  <div className=" ml-2 font-normal text-gray-400 dark:text-gray-300">
                    {timeReading} min
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

Card.defaultProps = {
  timeReading: 2,
};

export default Card;
