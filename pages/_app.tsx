import React from 'react';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';

import ContextProvider from '../Context';

import '@styles/main.scss';
import 'typeface-open-sans';
import 'typeface-merriweather';

const MyApp: React.FunctionComponent<AppProps> = ({
  Component,
  pageProps,
}: AppProps) => (
  <ThemeProvider defaultTheme="system" enableSystem attribute="class">
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  </ThemeProvider>
);

export default MyApp;
