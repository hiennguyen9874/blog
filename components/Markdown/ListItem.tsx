import React from 'react';

interface ListItemProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const ListItem: React.FunctionComponent<ListItemProps> = ({
  children,
}: ListItemProps) => <li>{children}</li>;

export default ListItem;
