import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
}: LayoutProps) => (
  <div className="w-full min-h-screen overflow-x-hidden bg-gray-100 dark:bg-gray-800 dark:text-white">
    <Header />
    <div className="max-w-screen-xl px-24 mx-auto antialiased font-body">
      <main>{children}</main>
    </div>
    <Footer />
  </div>
);
