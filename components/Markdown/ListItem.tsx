import React from 'react';

interface ListItemProps {
  children: any;
}

const ListItem: React.FunctionComponent<ListItemProps> = ({
  children,
}: ListItemProps) => <li>{children}</li>;

export default ListItem;
