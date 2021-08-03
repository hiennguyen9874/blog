import { useEffect } from 'react';
import * as React from 'react';
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
      <div className={clsx('min-h-screen', onSearching ? 'opacity-30' : '')}>
        <header className="bg-white dark:bg-header-dark">
          <div className="container px-5 lg:px-8 xl:px-20">
            <Header />
          </div>
        </header>
        <main className="bg-body-light dark:bg-body-dark h-full">
          <div className="container px-5 lg:px-8 xl:px-20">{children}</div>
        </main>
        <footer className="bg-white dark:bg-header-dark">
          <div className="container px-5 lg:px-8 xl:px-20">
            <Footer />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
