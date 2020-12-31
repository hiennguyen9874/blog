import React from 'react';

interface InlineCodeProps {
  children: any;
}

const InlineCode: React.FunctionComponent<InlineCodeProps> = ({
  children,
}: InlineCodeProps) => (
  <code className="border px-2 py-1 rounded-md bg-gray-300 dark:text-gray-700">
    {children}
  </code>
);

export default InlineCode;
