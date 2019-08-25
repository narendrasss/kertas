import React from 'react'
import OL from './style'

function OrderedList({ attributes, children, node }) {
  console.log(node.data.get('symbol'))
  return <OL {...attributes}>{children}</OL>
}

export default OrderedList
