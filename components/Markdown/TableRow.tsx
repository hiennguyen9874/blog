import React from 'react';

interface TableRowProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const TableRow: React.FunctionComponent<TableRowProps> = ({
  children,
}: TableRowProps) => <tr className="even:bg-gray-100">{children}</tr>;

export default TableRow;
