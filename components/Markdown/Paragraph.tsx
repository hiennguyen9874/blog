import React from 'react';

interface ParagraphProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const Paragraph: React.FunctionComponent<ParagraphProps> = ({
  children,
}: ParagraphProps) => (
  <p className="mt-4 text-base leading-7 text-justify mb-8">{children}</p>
);

export default Paragraph;
