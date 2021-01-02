import React, {
  useCallback,
  useRef,
  useState,
  KeyboardEvent,
  useEffect,
} from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import axios from 'axios';

import type { getAllSearchPost } from '@utils/posts';
import { useSearch, SET_ON_SEARCH } from '@Context/Search';

const SearchDialog: React.FunctionComponent = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<ReturnType<typeof getAllSearchPost>>(
    [],
  );
  const [searchState, searchDispatch] = useSearch();

  useEffect(() => {
    inputRef.current.focus();
  });

  const onChange = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(query);
      if (query.length) {
        const response = await axios.get(`/api/search?q=${event.target.value}`);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        setResults(response.data.result);
      } else {
        setResults([]);
      }
    },
    [query],
  );

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>): void => {
    const key = event.keyCode ? event.keyCode : event.which;
    if (key === 27) {
      event.preventDefault();
      event.stopPropagation();
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
          <input
            type="search"
            name="search"
            placeholder="Search"
            className="block w-full h-14 px-4 pr-10 text-lg focus:outline-none shadow-lg rounded-xl bg-gray-400 text-white placeholder-white dark:bg-gray-500"
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
          <div className="grid grid-cols-1 w-full mt-2 rounded-xl px-4 py-2 whitespace-no-wrap overflow-visible divide-y divide-yellow-500 bg-gray-200 dark:bg-gray-600 dark:text-white">
            {results.length === 0 && <p>What are you looking for?</p>}
            {results.length > 0 &&
              results.map(({ frontmatter: { title, description }, slug }) => (
                <div className="mx-4 py-2" key={slug}>
                  <Link href="/post/[slug]" as={`/post/${slug}`} passHref>
                    <button
                      type="button"
                      onClick={(): void => {
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
