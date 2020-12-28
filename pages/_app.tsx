import React from 'react';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';

import '@assets/main.css';

import 'typeface-open-sans';
import 'typeface-merriweather';

const MyApp: React.FunctionComponent<AppProps> = ({
  Component,
  pageProps,
}: AppProps) => (
  <ThemeProvider defaultTheme="system" enableSystem={true} attribute="class">
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;