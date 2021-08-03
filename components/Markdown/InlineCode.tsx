interface InlineCodeProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const InlineCode = ({ children }: InlineCodeProps): JSX.Element => (
  <code className="break-words font-mono border rounded-md bg-gray-300 dark:text-gray-800 dark:bg-gray-200">
    {children}
  </code>
);

export default InlineCode;
