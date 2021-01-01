import React from 'react';

interface Heading5Props {
  children: any;
}

const Heading5: React.FunctionComponent<Heading5Props> = ({
  children,
}: Heading5Props) => (
  <h5 className="font-bold text-lg text-gray-700 dark:text-gray-200 mb-4">
    {children}
  </h5>
);

export default Heading5;
