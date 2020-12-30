import React from 'react';
import Link from 'next/link';
import { getSiteMetaData } from '@utils/helpers';

interface CardProps {
  title: string;
  description: string;
  date: string;
  hrefPost: string;
  asPost: string;
}

const Card: React.FunctionComponent<CardProps> = ({
  title,
  description,
  date,
  hrefPost,
  asPost,
}: CardProps) => {
  const { author, social } = getSiteMetaData();

  return (
    <div className="transform duration-300 group container hover:-translate-y-2 active:translate-y-0 max-w-4xl bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl dark:bg-gray-700 active:translate-y-0">
      <div className="flex container mx-auto items-center justify-between">
        <div className="w-full md:w-5/12 md:flex-shrink-0">
          <img
            className="w-full h-full p-2 rounded-2xl object-cover md:w-96:"
            src="https://images.unsplash.com/photo-1521185496955-15097b20c5fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80"
            alt="Man looking at item at a store"
          />
        </div>

        <div className="md:w-7/12 px-4 py-2">
          <div className="flex flex-col mx-auto">
            <div className="flex justify-between items-center">
              <span className="font-light text-gray-600 dark:text-white">
                {date}
              </span>
              <Link href="#">
                <a className="px-2 py-1 font-bold rounded-lg bg-gray-400 text-gray-100 hover:bg-gray-600 dark:hover:bg-gray-400 dark:bg-gray-600 dark:text-white">
                  Design
                </a>
              </Link>
            </div>

            <div className="mt-4">
              <Link href={hrefPost} as={asPost}>
                <a className="text-2xl text-gray-700 font-bold hover:text-gray-600 dark:text-white hover:no-underline">
                  {title}
                </a>
              </Link>
              <p className="mt-2 text-gray-600 dark:text-white">
                {description}
              </p>
            </div>

            <div className="flex justify-between items-center mt-4">
              <Link href={hrefPost} as={asPost}>
                <a className="ml-2 text-blue-600 hover:underline ">Read more</a>
              </Link>

              <div className="mr-2">
                <Link href="#">
                  <a className="flex items-center">
                    <img
                      className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                      src="assets/img/profile.jpg"
                      alt="avatar"
                    />
                    <h1 className="text-gray-700 font-bold dark:text-white hover:no-underline">
                      {author.name}
                    </h1>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Card };
