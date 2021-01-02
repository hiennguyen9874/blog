import React from 'react';

interface DeleteProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const Delete: React.FunctionComponent<DeleteProps> = ({
  children,
}: DeleteProps) => <del className="font-san">{children}</del>;

export default Delete;
