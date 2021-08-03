interface OrderedListProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const OrderedList = ({ children }: OrderedListProps): JSX.Element => (
  <ol className="list-decimal list-inside px-8 space-y-1">{children}</ol>
);

export default OrderedList;
