import React from 'react';

interface Heading1Props {
  children: any;
}

const Heading1: React.FunctionComponent<Heading1Props> = ({
  children,
}: Heading1Props) => <h1 className="font-bold text-4xl text-gray-700 dark:text-gray-200">{children}</h1>;

export default Heading1;
