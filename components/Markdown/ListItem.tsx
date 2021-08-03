interface ListItemProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const ListItem = ({ children }: ListItemProps): JSX.Element => (
  <li>{children}</li>
);

export default ListItem;
