import React from 'react';

interface OrderedListProps {
  children: any;
}

const OrderedList: React.FunctionComponent<OrderedListProps> = ({
  children,
}: OrderedListProps) => (
  <ol className="list-decimal list-inside">{children}</ol>
);

export default OrderedList;
