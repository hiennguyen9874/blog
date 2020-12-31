import React from 'react';

interface ListProps {
  children: any;
}

const List: React.FunctionComponent<ListProps> = ({ children }: ListProps) => (
  <ul className="mt-4 list-disc list-inside">{children}</ul>
);

export default List;
