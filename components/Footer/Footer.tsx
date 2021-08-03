import React from 'react';
import Link from 'next/link';

// import PublicImage from '@components/common/PublicImage';
// import PublicImage2 from '@components/common/PublicImage2';
import { getSiteMetaData } from '@utils/helpers';

const Footer = (): JSX.Element => {
  const { social } = getSiteMetaData();
  return (
    <div className="py-16 flex flex-col lg:flex-row items-center lg:align-top justify-between">
      <div className="text-lg font-light">
        © {new Date().getFullYear()}, Built with{' '}
        <a
          className="hover:no-underline text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-500"
          href="https://nextjs.org/"
        >
          Next.js
        </a>
        &#128293;
      </div>

      <div className="flex flex-row w-full lg:w-40 px-10 lg:px-0 lg:flex-col justify-evenly">
        <p className="hidden font-bold lg:block">Quick Links</p>
        {[
          {
            label: 'Advertise with us',
            url: '#',
          },
          {
            label: 'About Us',
            url: '#',
          },
          {
            label: 'Contact Us',
            url: '#',
          },
        ].map(({ label, url }) => (
          <div className="" key={`${label}_${url}`}>
            <Link href={url}>
              <a className="flex text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-500 hover:no-underline">
                {label}
              </a>
            </Link>
          </div>
        ))}
      </div>

      <div className="flex flex-row w-full lg:w-40 px-10 lg:px-0 lg:flex-col justify-evenly">
        <p className="hidden font-bold lg:block">Legal Stuff</p>
        {[
          {
            label: 'Privacy Notice',
            url: '#',
          },
          {
            label: 'Cookie Policy',
            url: '#',
          },
          {
            label: 'Terms Of Use',
            url: '#',
          },
        ].map(({ label, url }) => (
          <div className="block" key={`${label}_${url}`}>
            <h1>
              <Link href={url}>
                <a className="flex text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-500 hover:no-underline">
                  {label}
                </a>
              </Link>
            </h1>
          </div>
        ))}
      </div>

      <div className="flex flex-row w-full lg:w-40 px-10 lg:px-0 lg:flex-col justify-evenly">
        <p className="hidden font-bold lg:block">Social Media</p>
        {[
          {
            label: 'Facebook',
            src: '/assets/img/facebook.svg?webp',
            url: social.facebook.link,
            iconComponent: (
              <svg viewBox="0 0 512 512" width="1em" height="1em">
                <path
                  d="M448 0H64C28.704 0 0 28.704 0 64v384c0 35.296 28.704 64 64 64h384c35.296 0 64-28.704 64-64V64c0-35.296-28.704-64-64-64z"
                  fill="#1976d2"
                />
                <path
                  d="M432 256h-80v-64c0-17.664 14.336-16 32-16h32V96h-64c-53.024 0-96 42.976-96 96v64h-64v80h64v176h96V336h48l32-80z"
                  fill="#fafafa"
                />
              </svg>
            ),
          },
          {
            label: 'Github',
            src: '/assets/img/github.svg?webp',
            url: social.github.link,
            iconComponent: (
              <svg height="1em" viewBox="0 0 24 24" width="1em">
                <path
                  d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z"
                  fill="#212121"
                />
              </svg>
            ),
          },
          {
            label: 'Linkedin',
            src: '/assets/img/linkedin.svg?lqip',
            url: social.linkedin.link,
            iconComponent: (
              <svg viewBox="0 0 382 382" width="1em" height="1em">
                <path
                  d="M347.445 0H34.555C15.471 0 0 15.471 0 34.555v312.889C0 366.529 15.471 382 34.555 382h312.889C366.529 382 382 366.529 382 347.444V34.555C382 15.471 366.529 0 347.445 0zM118.207 329.844c0 5.554-4.502 10.056-10.056 10.056H65.345c-5.554 0-10.056-4.502-10.056-10.056V150.403c0-5.554 4.502-10.056 10.056-10.056h42.806c5.554 0 10.056 4.502 10.056 10.056v179.441zM86.748 123.432c-22.459 0-40.666-18.207-40.666-40.666S64.289 42.1 86.748 42.1s40.666 18.207 40.666 40.666-18.206 40.666-40.666 40.666zM341.91 330.654a9.247 9.247 0 01-9.246 9.246H286.73a9.247 9.247 0 01-9.246-9.246v-84.168c0-12.556 3.683-55.021-32.813-55.021-28.309 0-34.051 29.066-35.204 42.11v97.079a9.246 9.246 0 01-9.246 9.246h-44.426a9.247 9.247 0 01-9.246-9.246V149.593a9.247 9.247 0 019.246-9.246h44.426a9.247 9.247 0 019.246 9.246v15.655c10.497-15.753 26.097-27.912 59.312-27.912 73.552 0 73.131 68.716 73.131 106.472v86.846z"
                  fill="#0077b7"
                />
              </svg>
            ),
          },
        ].map(({ label, url, iconComponent }) => (
          <div className="block" key={`${label}_${url}`}>
            <h1>
              <Link href={url}>
                <a className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-500 hover:no-underline">
                  <div className="flex flex-row items-center space-x-2">
                    <div className="">{iconComponent}</div>
                    <div className="inline-block">{label}</div>
                  </div>
                </a>
              </Link>
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
