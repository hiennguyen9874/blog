import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';

import ContextProvider from '../Context';

import '@styles/main.scss';
import 'typeface-open-sans';
import 'typeface-merriweather';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ThemeProvider defaultTheme="system" enableSystem attribute="class">
    <ContextProvider>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ContextProvider>
  </ThemeProvider>
);

export default MyApp;
