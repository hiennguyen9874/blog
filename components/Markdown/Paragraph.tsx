import React from 'react';

interface ParagraphProps {
  children: any;
}

const Paragraph: React.FunctionComponent<ParagraphProps> = ({
  children,
}: ParagraphProps) => {
  return <p className="mt-4 text-base leading-7 text-justify mb-3">{children}</p>;
};

export default Paragraph;
