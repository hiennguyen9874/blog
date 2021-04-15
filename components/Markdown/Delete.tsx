import React from 'react';

interface DeleteProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const Delete = ({ children }: DeleteProps): JSX.Element => (
  <del className="font-san">{children}</del>
);

export default Delete;
