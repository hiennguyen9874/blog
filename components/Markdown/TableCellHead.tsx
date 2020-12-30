import React from 'react';

interface TableCellHeadProps {
  children: any;
}

const TableCellHead: React.FunctionComponent<TableCellHeadProps> = ({
  children,
}: TableCellHeadProps) => <th className="px-4 py-2 border border-gray-400 bg-gray-600 text-white dark:bg-white dark:text-gray-600">{children}</th>;

export default TableCellHead;
