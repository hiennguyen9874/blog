interface ListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const List = ({ children }: ListProps): JSX.Element => (
  <ul className="mt-2 list-disc list-inside px-8 space-y-1">{children}</ul>
);

export default List;
