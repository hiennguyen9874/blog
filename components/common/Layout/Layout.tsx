import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const LargeTitle: React.FunctionComponent = () => (
  <h1>
    <Link href="/">
      <a
        className={clsx(
          'text-3xl font-black leading-none text-black no-underline font-display',
          'sm:text-5xl',
          'dark:text-white'
        )}
      >
        Next.Js Starter Blog
      </a>
    </Link>
  </h1>
);

const SmallTitle: React.FunctionComponent = () => (
  <h1>
    <Link href="/">
      <a
        className={clsx(
          'text-2xl font-black text-black no-underline font-display',
          'dark:text-white'
        )}
      >
        Next.Js Starter Blog
      </a>
    </Link>
  </h1>
);

const Header: React.FunctionComponent = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { pathname } = useRouter();

  useEffect(() => setMounted(true), []);

  const toggleDarkMode = (checked): void => {
    const isDarkMode = checked;

    if (isDarkMode) setTheme('dark');
    else setTheme('light');
  };

  const isRoot = pathname === '/';
  const isDarkMode = resolvedTheme === 'dark';

  return (
    <header
      className={clsx('flex items-center justify-between ', {
        'mb-8': isRoot,
        'mb-2': !isRoot,
      })}
    >
      <div className={'max-w-md'}>
        {isRoot ? <LargeTitle /> : <SmallTitle />}
      </div>
      {mounted && (
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          className={isRoot ? '28' : '24'}
        />
      )}
    </header>
  );
};

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
}: LayoutProps) => (
  <div className="-full min-h-screen dark:bg-gray-700 dark:text-white">
    <div className="max-w-screen-sm px-4 py-12 mx-auto antialiased font-body">
      <Header />
      <main>{children}</main>
      <footer className="text-lg font-light">
        © {new Date().getFullYear()}, Built with{' '}
        <a href="https://nextjs.org/">Next.js</a>
        &#128293;
      </footer>
    </div>
  </div>
);
