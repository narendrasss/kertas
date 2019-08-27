import React from 'react'
import styled from 'styled-components'

function UnorderedList({ attributes, children }) {
  return <Element {...attributes}>{children}</Element>
}

export default UnorderedList

const Element = styled.ul`
  list-style-position: inside;
  margin: 8px 0;
`
