import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Header: React.FunctionComponent = () => {
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
    <nav className="bg-white px-6 py-4 shadow dark:border-gray-700 dark:bg-gray-700">
      <div className="max-w-screen-xl px-24 mx-auto antialiased font-body">
        <div className="flex flex-col container mx-auto md:flex-row md:items-center md:justify-between">
          <div className="">
            <h1>
              <Link href="/">
                <a className="text-3xl font-bold md:text-4xl text-gray-800 dark:text-gray-200 hover:no-underline">
                  Next.Js Starter Blog
                </a>
              </Link>
            </h1>
          </div>

          <div className="md:flex flex-col md:flex-row md:-mx-4 hidden">
            <div className="my-1md:mx-4 md:my-0">
              <h1>
                <Link href="#">
                  <a className="text-gray-800 font-semibold hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-500 hover:no-underline">
                    Home
                  </a>
                </Link>
              </h1>
            </div>
            <div className="my-1 md:mx-4 md:my-0">
              <h1>
                <Link href="#">
                  <a className="text-gray-800 font-semibold hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-500 hover:no-underline">
                    About Me
                  </a>
                </Link>
              </h1>
            </div>
            <div className="my-1 md:mx-4 md:my-0">
              <h1>
                <Link href="#">
                  <a className="text-gray-800 font-semibold hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-500 hover:no-underline">
                    Contact
                  </a>
                </Link>
              </h1>
            </div>
            {mounted && (
              <div>
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