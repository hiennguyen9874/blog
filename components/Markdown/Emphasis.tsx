import React from 'react';

interface EmphasisProps {
  children: any;
}

const Emphasis: React.FunctionComponent<EmphasisProps> = ({
  children,
}: EmphasisProps) => <em className="italic">{children}</em>;

export default Emphasis;
