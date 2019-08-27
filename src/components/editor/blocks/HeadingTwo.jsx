import React from 'react'
import styled from 'styled-components'

function HeadingTwo({ attributes, children }) {
  return <Element {...attributes}>{children}</Element>
}

export default HeadingTwo

const Element = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-top: 8px;
  margin-bottom: 12px;
`
