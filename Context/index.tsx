import React, { ReactChild, ReactChildren } from 'react';

import { SearchProvider } from './Search';

interface ContextProviderProps {
  children: ReactChild | ReactChildren;
}

const ContextProvider = ({ children }: ContextProviderProps): JSX.Element => (
  <SearchProvider>{children}</SearchProvider>
);

export default ContextProvider;
