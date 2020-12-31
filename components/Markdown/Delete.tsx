import React from 'react';

interface DeleteProps {
  children: any;
}

const Delete: React.FunctionComponent<DeleteProps> = ({
  children,
}: DeleteProps) => <del className="font-san">{children}</del>;

export default Delete;
