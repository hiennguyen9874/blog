import React from 'react';

interface EmphasisProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const Emphasis: React.FunctionComponent<EmphasisProps> = ({
  children,
}: EmphasisProps) => <em className="italic">{children}</em>;

export default Emphasis;
