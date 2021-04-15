import React from 'react';

interface Heading3Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const Heading3 = ({ children }: Heading3Props): JSX.Element => (
  <h3 className="font-bold text-2xl text-gray-700 dark:text-gray-200 mb-6">
    {children}
  </h3>
);

export default Heading3;
