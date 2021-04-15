import React from 'react';

interface ParagraphProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const Paragraph = ({ children }: ParagraphProps): JSX.Element => (
  <p className="mt-4 text-lg font-sans leading-7 text-justify mb-8 text-gray-600 dark:text-gray-200">
    {children}
  </p>
);

export default Paragraph;
