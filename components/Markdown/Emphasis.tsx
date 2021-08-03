interface EmphasisProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const Emphasis = ({ children }: EmphasisProps): JSX.Element => (
  <em className="italic">{children}</em>
);

export default Emphasis;
