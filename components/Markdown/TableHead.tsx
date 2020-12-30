import React from 'react';

interface TableHeadProps {
  children: any;
}

const TableHead: React.FunctionComponent<TableHeadProps> = ({
  children,
}: TableHeadProps) => <thead>{children}</thead>;

export default TableHead;
