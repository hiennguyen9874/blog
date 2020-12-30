import React from 'react';

interface TableBodyProps {
  children: any;
}

const TableBody: React.FunctionComponent<TableBodyProps> = ({
  children,
}: TableBodyProps) => <tbody>{children}</tbody>;

export default TableBody;
