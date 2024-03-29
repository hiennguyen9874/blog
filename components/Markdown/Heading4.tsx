interface Heading4Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const Heading4 = ({ children }: Heading4Props): JSX.Element => (
  <h4 className="font-bold text-xl text-gray-700 dark:text-gray-200 mb-5">
    {children}
  </h4>
);

export default Heading4;
