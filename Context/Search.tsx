import React, {
  ReactChildren,
  ReactChild,
  createContext,
  FunctionComponent,
  useReducer,
  useContext,
  Dispatch,
} from 'react';

export const SET_ON_SEARCH = 'SET_ON_SEARCH';

export interface InitialSearchType {
  onSearching: boolean;
}

export interface SearchActionTypes {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}

const initialSearch: InitialSearchType = {
  onSearching: false,
};

const SearchStateContext = createContext<InitialSearchType | null>(null);
const SearchDispatchContext = createContext<Dispatch<SearchActionTypes> | null>(
  null,
);

function searchReducer(
  state = initialSearch,
  action: SearchActionTypes,
): InitialSearchType {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { type, payload } = action;

  switch (type) {
    case SET_ON_SEARCH: {
      return {
        ...state,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        onSearching: payload,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${type}`);
    }
  }
}

interface PropsSearchProvider {
  children: ReactChild | ReactChildren;
}

const SearchProvider: FunctionComponent<PropsSearchProvider> = ({
  children,
}: PropsSearchProvider) => {
  const [state, dispatch] = useReducer(searchReducer, initialSearch);

  return (
    <SearchStateContext.Provider value={state}>
      <SearchDispatchContext.Provider value={dispatch}>
        {children}
      </SearchDispatchContext.Provider>
    </SearchStateContext.Provider>
  );
};

function useSearchState(): InitialSearchType {
  const context = useContext(SearchStateContext);
  if (context === undefined || context === null) {
    throw new Error('useSearchState must be used within a searchProvider');
  }
  return context;
}

function useSearchDispatch(): Dispatch<SearchActionTypes> {
  const context = useContext(SearchDispatchContext);
  if (context === undefined || context === null) {
    throw new Error('useSearchDispatch must be used within a searchProvider');
  }
  return context;
}

function useSearch(): [InitialSearchType, Dispatch<SearchActionTypes>] {
  return [useSearchState(), useSearchDispatch()];
}

export { SearchProvider, useSearchState, useSearchDispatch, useSearch };
