import React from 'react'
import styled from 'styled-components'

function HeadingOne({ attributes, children }) {
  return <Element {...attributes}>{children}</Element>
}

export default HeadingOne

const Element = styled.h1`
  font-size: 32px;
  font-weight: 600;
  margin-top: 12px;
  margin-bottom: 16px;
`
