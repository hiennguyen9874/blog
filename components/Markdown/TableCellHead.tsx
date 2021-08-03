interface TableCellHeadProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const TableCellHead = ({ children }: TableCellHeadProps): JSX.Element => (
  <th className="px-4 py-2 border border-gray-400 bg-gray-600 text-white dark:bg-white dark:text-gray-600">
    {children}
  </th>
);

export default TableCellHead;
