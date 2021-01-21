import React from 'react';

interface TableProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const Table: React.FunctionComponent<TableProps> = ({
  children,
}: TableProps) => (
  <table className="table rounded-md mx-auto">{children}</table>
);

export default Table;
