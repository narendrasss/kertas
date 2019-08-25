import React from 'react'
import Pre from './style'

function CodeBlock({ attributes, children }) {
  return (
    <Pre {...attributes}>
      <code>{children}</code>
    </Pre>
  )
}

export default CodeBlock
