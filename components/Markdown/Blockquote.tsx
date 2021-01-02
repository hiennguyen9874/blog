import React from 'react';

interface BlockquoteProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const Blockquote: React.FunctionComponent<BlockquoteProps> = ({
  children,
}: BlockquoteProps) => (
  <blockquote className="font-san italic text-3xl border-l-4 pl-8 ml-8 border-blue-200 text-gray-700 dark:border-blue-400 dark:text-gray-200">
    {children}
  </blockquote>
);

export default Blockquote;
