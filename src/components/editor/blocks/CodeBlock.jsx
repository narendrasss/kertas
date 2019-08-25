import React from 'react'
import styled from 'styled-components'

function CodeBlock({ attributes, children }) {
  return (
    <Pre {...attributes}>
      <code>{children}</code>
    </Pre>
  )
}

export default CodeBlock

const Pre = styled.pre`
  background: ${({ theme }) => theme.colors.grays.light};
  padding: 4px;
  line-height: 1.2;
`
