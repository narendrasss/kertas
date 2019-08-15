import React from 'react'

function CodeBlock({ attributes, children }) {
  return (
    <pre {...attributes}>
      <code>{children}</code>
    </pre>
  )
}

export default CodeBlock
