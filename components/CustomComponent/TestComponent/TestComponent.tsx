import React from 'react';

interface TestComponentProps {
  name?: string;
}

const TestComponent: React.FunctionComponent<TestComponentProps> = ({
  name = 'world',
}: TestComponentProps) => (
  <>
    <div>Hello, {name}!</div>
  </>
);

export default TestComponent;
