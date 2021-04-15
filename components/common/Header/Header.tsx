import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

import Search from '../Search/Search';

const Header = (): JSX.Element => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { pathname } = useRouter();

  useEffect(() => setMounted(true), []);

  const toggleDarkMode = (checked: boolean): void => {
    const isDarkMode = checked;

    if (isDarkMode) setTheme('dark');
    else setTheme('light');
  };

  const isRoot = pathname === '/';
  const isDarkMode = resolvedTheme === 'dark';

  return (
    <nav className=" px-6 py-4 shadow bg-white dark:border-blueGray-700 dark:bg-blueGray-600">
      <div className="max-w-screen-xl md:px-24 mx-auto antialiased font-body">
        <div className="flex flex-col container mx-auto md:flex-row md:items-center md:justify-between">
          <div className="">
            <h1>
              <Link href="/">
                <a className="text-3xl font-bold md:text-4xl hover:no-underline text-gray-800 dark:text-gray-200 ">
                  Blog
                </a>
              </Link>
            </h1>
          </div>

          <div>
            <Search />
          </div>

          <div className="flex-col md:flex md:flex-row md:-mx-4 hidden">
            {[
              {
                label: 'Home',
                url: '/',
              },
              {
                label: 'About Me',
                url: '/aboutme',
              },
              {
                label: 'Contact',
                url: '#',
              },
            ].map(({ label, url }) => (
              <div className="my-1 md:mx-4 md:my-0" key={url}>
                <h1>
                  <Link href={url}>
                    <a className="text-gray-800 font-semibold hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-500 hover:no-underline">
                      {label}
                    </a>
                  </Link>
                </h1>
              </div>
            ))}

            {mounted && (
              <div className="my-1 md:mx-4 md:my-0">
                <DarkModeSwitch
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                  className={isRoot ? '28' : '24'}
                  size={20}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
