/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import dracula from 'prism-react-renderer/themes/dracula';
import clsx from 'clsx';

interface CodeBlockProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const CodeBlock = (props: CodeBlockProps): JSX.Element => {
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
          className={clsx(
            'text-left overflow-auto mx-0 my-4 p-2 rounded-md',
            className,
          )}
          style={style}
        >
          {tokens.map((line, i) => {
            if (i < tokens.length - 1) {
              const { className, ...rest } = getLineProps({ line, key: i });
              return (
                // eslint-disable-next-line react/no-array-index-key
                <div key={i} className={clsx('table-row', className)} {...rest}>
                  <span className="table-cell text-right pr-4 select-none opacity-50">
                    {i + 1}|
                  </span>
                  <span className="table-cell">
                    {line.map((token, key) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </span>
                </div>
              );
            }
            const { className, ...rest } = getLineProps({ line, key: i });
            return (
              // eslint-disable-next-line react/no-array-index-key
              <div key={i} className={clsx('table-row', className)} {...rest} />
            );
          })}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
