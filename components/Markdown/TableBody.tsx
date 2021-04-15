import React from 'react';

interface TableBodyProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const TableBody = ({ children }: TableBodyProps): JSX.Element => (
  <tbody>{children}</tbody>
);

export default TableBody;
