import React from 'react';

interface TableHeadProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const TableHead = ({ children }: TableHeadProps): JSX.Element => (
  <thead>{children}</thead>
);

export default TableHead;
