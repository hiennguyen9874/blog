interface TestComponentProps {
  name?: string;
}

const TestComponent = ({ name }: TestComponentProps): JSX.Element => (
  <>
    <div>Hello,{name}!</div>
  </>
);

TestComponent.defaultProps = {
  name: 'name',
};

export default TestComponent;
