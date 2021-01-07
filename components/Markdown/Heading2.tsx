import React from 'react';

interface Heading2Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const Heading2: React.FunctionComponent<Heading2Props> = ({
  children,
}: Heading2Props) => (
  <h2 className="font-bold text-3xl mt-6 mb-4 pb-2 border-b text-gray-700 border-gray-200 dark:border-gray-500 dark:text-gray-200">
    {children}
  </h2>
);

export default Heading2;
