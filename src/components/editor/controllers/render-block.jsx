import React from 'react'
import blocks from '../blocks'

export default function renderBlock(props, _, next) {
  const Block = blocks[props.node.type]
  if (Block) return <Block {...props} />
  return next()
}
