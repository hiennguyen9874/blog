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
    <nav className="py-8 flex flex-col md:flex-row md:items-center md:justify-between">
      <Link href="/">
        <a className="text-3xl font-bold md:text-4xl hover:no-underline text-gray-800 dark:text-gray-200">
          Blog
        </a>
      </Link>

      <div className="hidden lg:block">
        <Search />
      </div>

      <div className="hidden md:flex flex-row items-center font-semibold text-omega-dark dark:text-gray-200">
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
                <a className="hover:no-underline hover:text-blue-500 dark:hover:text-blue-500 ">
                  {label}
                </a>
              </Link>
            </h1>
          </div>
        ))}

        {mounted && (
          <DarkModeSwitch
            checked={isDarkMode}
            onChange={toggleDarkMode}
            className={isRoot ? '28' : '24'}
            size={20}
            sunColor="#718096"
            moonColor="#fff"
          />
        )}
      </div>
    </nav>
  );
};

export default Header;
