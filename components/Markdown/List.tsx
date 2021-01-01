import React from 'react';

interface ListProps {
  children: any;
}

const List: React.FunctionComponent<ListProps> = ({ children }: ListProps) => (
  <ul className="mt-4 list-disc list-inside px-8">{children}</ul>
);

export default List;
