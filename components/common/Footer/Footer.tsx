import React from 'react';
import Link from 'next/link';

// import PublicImage from '@components/common/PublicImage';
// import PublicImage2 from '@components/common/PublicImage2';
import { getSiteMetaData } from '@utils/helpers';

const Footer = (): JSX.Element => {
  const { social } = getSiteMetaData();
  return (
    <footer className="mt-10 md:px-6 md:py-4 shadow bg-white dark:border-blueGray-700 dark:bg-blueGray-600">
      <div className="max-w-screen-xl container flex flex-col mx-auto md:px-24 md:flex-row items-center justify-between">
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

        <div className="flex flex-row md:flex-col">
          <p className="hidden font-bold md:block">Quick Links</p>
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

        <div className="flex flex-row md:flex-col">
          <p className="hidden font-bold md:block">Legal Stuff</p>
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

        <div className="flex flex-row md:flex-col">
          <p className="hidden font-bold md:block">Social Media</p>
          {[
            {
              label: 'Facebook',
              src: '/assets/img/facebook.svg?webp',
              url: social.facebook.link,
            },
            {
              label: 'Github',
              src: '/assets/img/github.svg?webp',
              url: social.github.link,
            },
            {
              label: 'Linkedin',
              src: '/assets/img/linkedin.svg?lqip',
              url: social.linkedin.link,
            },
          ].map(({ label, src, url }) => (
            <div className="block" key={`${label}_${url}`}>
              <h1>
                <Link href={url}>
                  <a className="flex text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-500 hover:no-underline">
                    <div className="flex space-x-1">
                      {/* <PublicImage
                        className="inline-block"
                        src={src}
                        alt={label}
                        width={20}
                        height={20}
                      /> */}
                      <div className="inline-block">{label}</div>
                    </div>
                  </a>
                </Link>
              </h1>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
