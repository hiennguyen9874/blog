import React from 'react';

interface Heading2Props {
  children: any;
}

const Heading2: React.FunctionComponent<Heading2Props> = ({
  children,
}: Heading2Props) => (
  <h2 className="font-bold text-3xl text-gray-700 dark:text-gray-200">
    {children}
  </h2>
);

export default Heading2;
