import search from 'pages/api/search';
import React, { ReactChild, ReactChildren, FunctionComponent } from 'react';

import { SearchProvider } from './Search';

interface ContextProviderProps {
  children: ReactChild | ReactChildren;
}

const ContextProvider: FunctionComponent<ContextProviderProps> = ({
  children,
}: ContextProviderProps) => <SearchProvider>{children}</SearchProvider>;

export default ContextProvider;
