import React from 'react';

interface InlineCodeProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const InlineCode: React.FunctionComponent<InlineCodeProps> = ({
  children,
}: InlineCodeProps) => (
  <code className="font-mono border px-2 py-0.5 rounded-md bg-gray-300 dark:text-gray-800 dar:bg-gray-200">
    {children}
  </code>
);

export default InlineCode;
