import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { getSiteMetaData } from '@utils/helpers';

const Footer: React.FunctionComponent = () => {
  const { social } = getSiteMetaData();
  return (
    <footer className="mt-10 bg-white px-6 py-4 shadow dark:border-gray-700 dark:bg-gray-700">
      <div className="max-w-screen-xl px-24 mx-auto antialiased font-body">
        <div className="flex flex-col container mx-auto md:flex-row md:items-center md:justify-between">
          <div className="text-lg font-light">
            © {new Date().getFullYear()}, Built with{' '}
            <a
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-500 hover:no-underline"
              href="https://nextjs.org/"
            >
              Next.js
            </a>
            &#128293;
          </div>
          <div className="items-center">
            <div className="space-y-3">
              <p className="block font-bold">Quick Links</p>
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
                <div className="block" key={url}>
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
          </div>

          <div className="items-center">
            <div className="space-y-3">
              <p className="block font-bold">Legal Stuff</p>
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
                <div className="block" key={url}>
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
          </div>

          <div className="space-y-3">
            <p className="block font-bold">Social Media</p>
            {[
              {
                label: 'Facebook',
                src: '/assets/img/facebook.svg',
                url: social.facebook.link,
              },
              {
                label: 'Github',
                src: '/assets/img/github.svg',
                url: social.github.link,
              },
              {
                label: 'Linkedin',
                src: '/assets/img/linkedin.svg',
                url: social.linkedin.link,
              },
            ].map(({ label, src, url }) => (
              <div className="block" key={url}>
                <h1>
                  <Link href={url}>
                    <a className="flex text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-500 hover:no-underline">
                      <div className="flex space-x-1">
                        <Image
                          className="inline-block"
                          src={src}
                          width={20}
                          height={20}
                        />
                        <div className="inline-block">{label}</div>
                      </div>
                    </a>
                  </Link>
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
