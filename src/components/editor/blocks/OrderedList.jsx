import React from 'react'
import styled from 'styled-components'

function OrderedList({ attributes, children, node }) {
  return (
    <Element {...attributes} start={node.data.get('start')}>
      {children}
    </Element>
  )
}

export default OrderedList

const Element = styled.ol`
  list-style-position: inside;
`
