import React from 'react';

interface Heading3Props {
  children: any;
}

const Heading3: React.FunctionComponent<Heading3Props> = ({
  children,
}: Heading3Props) => (
  <h3 className="font-bold text-2xl text-gray-700 dark:text-gray-200 mb-6">
    {children}
  </h3>
);

export default Heading3;
