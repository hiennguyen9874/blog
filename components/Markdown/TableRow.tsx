import React from 'react';

interface TableRowProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const TableRow = ({ children }: TableRowProps): JSX.Element => (
  <tr className="even:bg-gray-100">{children}</tr>
);

export default TableRow;
