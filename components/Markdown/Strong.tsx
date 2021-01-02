import React from 'react';

interface StrongProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const Strong: React.FunctionComponent<StrongProps> = ({
  children,
}: StrongProps) => <strong className="font-bold font-san">{children}</strong>;

export default Strong;
