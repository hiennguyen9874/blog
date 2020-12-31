import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SearchDialog from '../SearchDialog/SearchDialog';

import { useSearchState } from '@Context/Search';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
}: LayoutProps) => {
  const { onSearching } = useSearchState();

  useEffect(() => {
    if (onSearching) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [onSearching]);

  return (
    <>
      <SearchDialog />
      <div className={clsx('', onSearching ? 'opacity-30' : '')}>
        <div className="w-full min-h-screen overflow-x-hidden bg-gray-100 dark:bg-gray-800 dark:text-white">
          <Header />
          <div className="max-w-screen-xl px-4 md:px-24 mx-auto antialiased font-body">
            <main>{children}</main>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};
