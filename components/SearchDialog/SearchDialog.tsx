import React, { useRef, useState, KeyboardEvent, useEffect } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import axios from 'axios';
import debounce from 'lodash/debounce';

import type { getAllSearchPost } from '@utils/posts';
import { useSearch, SET_ON_SEARCH } from '@Context/Search';

const SearchDialog = (): JSX.Element => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ReturnType<typeof getAllSearchPost>>(
    [],
  );
  const [searchState, searchDispatch] = useSearch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    inputRef.current.focus();
  });

  const getResultSearch = async (searchStr: string) => {
    const response = await axios.get(`/api/search?q=${searchStr}`);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    setResults(response.data.result);
    setLoading(false);
  };

  const debounceSearch = useRef(
    debounce((nextValue) => getResultSearch(nextValue), 500),
  ).current;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setLoading(true);
    if (event.target.value.length) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      debounceSearch(event.target.value);
    } else {
      setResults([]);
    }
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
    const key = event.keyCode ? event.keyCode : event.which;
    if (key === 27) {
      event.preventDefault();
      event.stopPropagation();
      setResults([]);
      searchDispatch({
        type: SET_ON_SEARCH,
        payload: false,
      });
    }
  };

  return (
    <div
      className={clsx(
        'modal fixed w-full h-full top-0 left-0 flex justify-center z-50 items-start',
        searchState.onSearching
          ? 'pointer-events-auto'
          : 'opacity-0 pointer-events-none',
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div
        className="modal-overlay absolute w-full h-full bg-gray-900 bg-opacity-20 dark:bg-opacity-70"
        role="presentation"
        onKeyDown={onKeyDown}
        onClick={(event): void => {
          event.preventDefault();
          event.stopPropagation();
          setResults([]);
          searchDispatch({
            type: SET_ON_SEARCH,
            payload: false,
          });
        }}
      />

      <div className="z-50 w-11/12 md:max-w-xl">
        <div className="absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 dark:text-white text-sm z-50">
          <button
            className="bg-gray-800 rounded-full px-2 py-2"
            type="button"
            onClick={(event): void => {
              event.preventDefault();
              event.stopPropagation();
              setResults([]);
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
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
            </svg>
          </button>
          <p>Esc</p>
        </div>

        <div className="flex flex-col items-center mt-4">
          <div className="w-full flex flex-row justify-between items-center rounded-xl">
            <input
              type="search"
              name="search"
              placeholder="Search"
              className="block w-full -mr-10 h-14 px-4 pr-10 text-lg focus:outline-none shadow-lg rounded-xl bg-gray-400 text-white placeholder-white "
              autoComplete="off"
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
              ref={inputRef}
              value={query}
              onChange={onChange}
              onClick={(event): void => {
                event.preventDefault();
                event.stopPropagation();
              }}
            />
            <span className="left-0 flex items-center pl-2 w-10 z-10">
              <button type="submit">
                {!loading && (
                  <svg
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 56.966 56.966"
                    enableBackground="new 0 0 56.966 56.966"
                    xmlSpace="preserve"
                    width="512px"
                    height="512px"
                  >
                    <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                  </svg>
                )}
                {loading && (
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                )}
              </button>
            </span>
          </div>
          <div className="grid grid-cols-1 w-full mt-2 rounded-xl px-4 py-2 whitespace-no-wrap overflow-visible divide-y divide-yellow-500 bg-gray-200 dark:bg-gray-600 dark:text-white">
            {results.length === 0 && <p>What are you looking for?</p>}
            {results.length > 0 &&
              results.map(({ frontmatter: { title, description }, slug }) => (
                <div className="mx-4 py-2" key={slug}>
                  <Link href="/post/[slug]" as={`/post/${slug}`} passHref>
                    <button
                      type="button"
                      onClick={(): void => {
                        setResults([]);
                        searchDispatch({
                          type: SET_ON_SEARCH,
                          payload: false,
                        });
                      }}
                    >
                      <a className="text-xl text-blue-700 hover:text-blue-300 dark:text-blue-500 dark:hover:text-blue-300">
                        {title}
                      </a>
                    </button>
                  </Link>
                  <p>{description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDialog;
