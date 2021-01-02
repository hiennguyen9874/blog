import React from 'react';

interface Heading1Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const Heading1: React.FunctionComponent<Heading1Props> = ({
  children,
}: Heading1Props) => (
  <h1 className="font-bold text-4xl text-gray-700 dark:text-gray-200">
    {children}
    <hr className="mt-4 mb-8" />
  </h1>
);

export default Heading1;
