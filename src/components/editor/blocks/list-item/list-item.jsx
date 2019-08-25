import React from 'react'

function ListItem({ attributes, children }) {
  return <li {...attributes}>{children}</li>
}

export default ListItem
