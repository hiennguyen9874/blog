/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

// interface PaginationProps {
//   page: number;
//   onChangePage: (page: number) => void;
// }

const Pagination: React.FunctionComponent = () => {
  return (
    <div className="flex">
      <a
        href="#"
        className="mx-1 px-3 py-2 font-medium rounded-md cursor-not-allowed bg-gray-400 text-gray-100 dark:bg-gray-600 dark:text-white hover:no-underline"
      >
        previous
      </a>

      <a
        href="#"
        className="mx-1 px-3 py-2 rounded-md bg-gray-400 text-gray-100 hover:bg-gray-600 dark:hover:bg-gray-400 dark:bg-gray-600 dark:text-white hover:no-underline"
      >
        1
      </a>

      <a
        href="#"
        className="mx-1 px-3 py-2 rounded-md bg-gray-400 text-gray-100 hover:bg-gray-600 dark:hover:bg-gray-400 dark:bg-gray-600 dark:text-white hover:no-underline"
      >
        2
      </a>

      <a
        href="#"
        className="mx-1 px-3 py-2 rounded-md bg-gray-400 text-gray-100 hover:bg-gray-600 dark:hover:bg-gray-400 dark:bg-gray-600 dark:text-white hover:no-underline"
      >
        3
      </a>

      <a
        href="#"
        className="mx-1 px-3 py-2 rounded-md bg-gray-400 text-gray-100 hover:bg-gray-600 dark:hover:bg-gray-400 dark:bg-gray-600 dark:text-white hover:no-underline"
      >
        Next
      </a>
    </div>
  );
};

export default Pagination;
