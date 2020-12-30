import React from 'react';

interface TableRowProps {
  children: any;
}

const TableRow: React.FunctionComponent<TableRowProps> = ({
  children,
}: TableRowProps) => <tr className="even:bg-gray-100">{children}</tr>;

export default TableRow;
