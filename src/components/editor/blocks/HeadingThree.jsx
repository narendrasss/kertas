import React from 'react'
import styled from 'styled-components'

function HeadingThree({ attributes, children }) {
  return <Element {...attributes}>{children}</Element>
}

export default HeadingThree

const Element = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 4px 0;
`
