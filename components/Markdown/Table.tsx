interface TableProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const Table = ({ children }: TableProps): JSX.Element => (
  <table className="table rounded-md mx-auto">{children}</table>
);

export default Table;
