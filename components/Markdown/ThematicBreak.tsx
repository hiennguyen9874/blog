import React from 'react';

interface ThematicBreakProps {
  children: any;
}

const ThematicBreakProps: React.FunctionComponent<ThematicBreakProps> = ({
  children,
}: ThematicBreakProps) => <hr>{children}</hr>;

export default ThematicBreakProps;
