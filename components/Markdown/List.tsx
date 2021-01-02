import React from 'react';

interface ListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const List: React.FunctionComponent<ListProps> = ({ children }: ListProps) => (
  <ul className="mt-2 list-disc list-inside px-8 space-y-1">{children}</ul>
);

export default List;
