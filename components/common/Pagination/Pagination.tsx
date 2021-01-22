/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx';
import React from 'react';

interface PaginationProps {
  page: number;
  numPage: number;
  onChangePage: (page: number) => void;
}

const Pagination = ({
  page,
  numPage,
  onChangePage,
}: PaginationProps): JSX.Element => {
  return (
    <div className="flex flex-row items-center p-1 rounded-full duration-500 bg-white dark:bg-blueGray-700">
      <div
        className={clsx(
          'w-1/3 flex flex-row items-center px-8 py-3 rounded-full',
          page !== 1
            ? 'bg-gray-200 text-gray-600 hover:bg-blue-600 hover:text-white dark:bg-gray-400 dark:hover:bg-blue-600'
            : '',
        )}
      >
        {page !== 1 && (
          <>
            <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" />
              </svg>
            </div>
            <div className="ml-4">Previous</div>
          </>
        )}
      </div>
      <div className="w-1/3 flex flex-row justify-center">
        <div>
          {'Page '} <strong>{page}</strong> {' of '} <strong>{numPage}</strong>
        </div>
      </div>
      <div
        className={clsx(
          'w-1/3 flex flex-row items-center px-8 py-3 rounded-full',
          page !== numPage
            ? 'bg-gray-500 text-white hover:bg-blue-600 dark:bg-gray-100 dark:hover:bg-blue-600 dark:text-gray-600'
            : '',
        )}
      >
        {page !== numPage && (
          <>
            <div>Next</div>
            <div className="ml-4">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 320 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Pagination;
