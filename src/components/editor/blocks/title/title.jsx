import React from 'react'
import H1 from './style'

function Title({ attributes, children }) {
  return <H1 {...attributes}>{children}</H1>
}

export default Title
