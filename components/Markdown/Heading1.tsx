import React from 'react';

interface Heading1Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const Heading1 = ({ children }: Heading1Props): JSX.Element => (
  <h1 className="font-bold text-4xl mt-6 mb-4 pb-2 border-b text-gray-700 border-gray-200 dark:border-gray-500 dark:text-gray-200">
    {children}
  </h1>
);

export default Heading1;
