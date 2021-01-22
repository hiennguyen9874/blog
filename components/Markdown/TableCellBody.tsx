import React from 'react';

interface TableCellBodyProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const TableCellBody = ({ children }: TableCellBodyProps): JSX.Element => (
  <td className="border px-4 py-2 border-gray-600">{children}</td>
);

export default TableCellBody;
