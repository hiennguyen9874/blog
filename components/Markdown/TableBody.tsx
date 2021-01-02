import React from 'react';

interface TableBodyProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const TableBody: React.FunctionComponent<TableBodyProps> = ({
  children,
}: TableBodyProps) => <tbody>{children}</tbody>;

export default TableBody;
