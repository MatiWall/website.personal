import React from 'react';

const CodeBlock = ({ children }) => {
  const codeBlockStyles = {
    backgroundColor: '#282c34', // Dark background color
    color: '#abb2bf', // Light text color
    padding: '16px',
    borderRadius: '8px',
    fontFamily: 'Courier New, monospace',
    overflowX: 'auto', // Enable horizontal scrolling for long lines of code
  };

  return (
    <div style={codeBlockStyles}>
      <pre>
        <code>{children}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
