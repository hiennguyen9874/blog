import React from 'react';

interface TableProps {
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
