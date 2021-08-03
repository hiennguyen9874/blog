interface Heading5Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const Heading5 = ({ children }: Heading5Props): JSX.Element => (
  <h5 className="font-bold text-lg text-gray-700 dark:text-gray-200 mb-4">
    {children}
  </h5>
);

export default Heading5;
