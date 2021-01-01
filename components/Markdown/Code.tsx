import React from 'react';
import Highlight, { defaultProps, Prism } from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/dracula';

import clsx from 'clsx';

interface CodeBlockProps {
  children: any;
  className?: string | undefined;
  live: string;
}

const CodeBlock: React.FunctionComponent<CodeBlockProps> = (
  props: CodeBlockProps
) => {
  const className = props.children.props.className || '';
  const matches = className.match(/language-(?<lang>.*)/);

  return (
    <Highlight
      {...defaultProps}
      theme={dracula}
      code={props.children.props.children}
      language={
        matches && matches.groups && matches.groups.lang
          ? matches.groups.lang
          : ''
      }
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={clsx('text-left overflow-auto mx-0 my-4 p-2', className)}
          style={style}
        >
          {tokens.map((line, i) => {
            const { className, ...rest } = getLineProps({ line, key: i });
            return (
              <div key={i} className={clsx('table-row', className)} {...rest}>
                <span className="table-cell text-right pr-4 select-none opacity-50">
                  {i + 1}|
                </span>
                <span className="table-cell">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </span>
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
