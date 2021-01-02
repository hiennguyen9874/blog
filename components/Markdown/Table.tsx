import React from 'react';

interface TableProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const Table: React.FunctionComponent<TableProps> = ({
  children,
}: TableProps) => (
  <table className="table-auto border-collapse border border-gray-800 mx-auto">
    {children}
  </table>
);

export default Table;
