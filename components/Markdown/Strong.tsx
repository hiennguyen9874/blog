interface StrongProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const Strong = ({ children }: StrongProps): JSX.Element => (
  <strong className="font-bold font-san">{children}</strong>
);

export default Strong;
