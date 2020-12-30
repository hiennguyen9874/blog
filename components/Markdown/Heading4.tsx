import React from 'react';

interface Heading4Props {
  children: any;
}

const Heading4: React.FunctionComponent<Heading4Props> = ({
  children,
}: Heading4Props) => <h4 className="font-bold text-xl text-gray-700 dark:text-gray-200">{children}</h4>;

export default Heading4;
