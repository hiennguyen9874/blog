import React from 'react';

interface TableHeadProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const TableHead: React.FunctionComponent<TableHeadProps> = ({
  children,
}: TableHeadProps) => <thead>{children}</thead>;

export default TableHead;
