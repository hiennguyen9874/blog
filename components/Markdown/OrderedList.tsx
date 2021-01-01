import React from 'react';

interface OrderedListProps {
  children: any;
}

const OrderedList: React.FunctionComponent<OrderedListProps> = ({
  children,
}: OrderedListProps) => (
  <ol className="list-decimal list-inside px-8">{children}</ol>
);

export default OrderedList;
