import React from 'react';

interface TestComponentProps {
  name?: string;
}

const TestComponent: React.FunctionComponent<TestComponentProps> = ({
  name,
}: TestComponentProps) => (
  <>
    <div>Hello,{name}!</div>
  </>
);

TestComponent.defaultProps = {
  name: 'name',
};

export default TestComponent;
