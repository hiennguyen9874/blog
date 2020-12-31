import React from 'react';

interface StrongProps {
  children: any;
}

const Strong: React.FunctionComponent<StrongProps> = ({
  children,
}: StrongProps) => <strong className="font-bold font-san">{children}</strong>;

export default Strong;
