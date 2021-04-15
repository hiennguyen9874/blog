import React, { useEffect } from 'react';
import clsx from 'clsx';

import { useSearchState } from '@Context/Search';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import SearchDialog from '@components/SearchDialog/SearchDialog';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const { onSearching } = useSearchState();

  useEffect(() => {
    if (onSearching) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [onSearching]);

  return (
    <div>
      <SearchDialog />
      <div className={clsx('', onSearching ? 'opacity-30' : '')}>
        <div className="w-full min-h-screen bg-gray-100 dark:bg-blueGray-800 dark:text-white">
          <Header />
          <div className="max-w-screen-xl px-4 md:px-24 mx-auto antialiased font-body">
            <main>{children}</main>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
