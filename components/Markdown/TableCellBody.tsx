import React from 'react';

interface TableCellBodyProps {
  children: any;
}

const TableCellBody: React.FunctionComponent<TableCellBodyProps> = ({
  children,
}: TableCellBodyProps) => <td className="border px-4 py-2 border-gray-600">{children}</td>;

export default TableCellBody;
