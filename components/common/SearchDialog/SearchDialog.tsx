import React, { useCallback, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import axios from 'axios';

import { useSearch, SET_ON_SEARCH } from '@Context/Search';

const SearchDialog: React.FunctionComponent = () => {
  const searchRef = useRef(null);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);

  const [searchState, searchDispatch] = useSearch();

  const searchEndpoint = (query) => `/api/search?q=${query}`;

  const onChange = useCallback(async (event) => {
    const query = event.target.value;
    setQuery(query);
    if (query.length) {
      const response = await axios.get(searchEndpoint(query));
      setResults(response.data.result);
      console.log(response.data.result);
    } else {
      setResults([]);
    }
  }, []);

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      window.removeEventListener('click', onClick);
    }
  }, []);

  const onFocus = useCallback(() => {
    setActive(true);
    window.addEventListener('click', onClick);
  }, []);

  return (
    <div
      className={clsx(
        'modal fixed w-full h-full top-0 left-0 flex justify-center z-50 items-start',
        searchState.onSearching
          ? 'pointer-events-auto'
          : 'opacity-0 pointer-events-none'
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div
        className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          console.log('Set in line 26');
          searchDispatch({
            type: SET_ON_SEARCH,
            payload: false,
          });
        }}
      />

      <div className="bg-white rounded shadow-lg z-50 mt-2">
        <div
          className="absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
          role="button"
          onClick={() => {
            event.preventDefault();
            event.stopPropagation();
            searchDispatch({
              type: SET_ON_SEARCH,
              payload: false,
            });
          }}
        >
          <svg
            className="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
          <span className="text-sm">(Esc)</span>
        </div>

        <div className="flex flex-col relative container">
          <input
            type="search"
            name="search"
            placeholder="Search"
            className="h-16 px-5 pr-10 md:max-w-lg rounded-2xl text-4xl focus:outline-none scale-150"
            autoComplete="off"
            value={query}
            onChange={onChange}
            onFocus={onFocus}
            onClick={(): void => {
              event.preventDefault();
              event.stopPropagation();
            }}
          />
          <div className="w-full">
            {active && results.length > 0 && (
              <ul className="dropdown-menu w-full absolute text-gray-700 pt-1">
                {results.map(({ frontmatter: { title }, slug }) => (
                  <li
                    className="rounded-t w-full bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap relative"
                    key={slug}
                  >
                    <Link href={'/post/[slug]'} as={`/post/${slug}`}>
                      <a
                        onClick={() => {
                          searchDispatch({
                            type: SET_ON_SEARCH,
                            payload: false,
                          });
                        }}
                      >
                        {title}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDialog;
