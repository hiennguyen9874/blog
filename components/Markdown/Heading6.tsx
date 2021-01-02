import React from 'react';

interface Heading6Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const Heading6: React.FunctionComponent<Heading6Props> = ({
  children,
}: Heading6Props) => (
  <h6 className="font-bold text-base text-gray-700 dark:text-gray-200 mb-3">
    {children}
  </h6>
);

export default Heading6;
