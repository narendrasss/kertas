import React from 'react'
import { Editor as SlateEditor } from 'slate-react'

import blocks from './blocks'

const handleKeyDown = (evt, editor, next) => {
  if (evt.key !== '`' || !evt.ctrlKey) return next()
  evt.preventDefault()

  const isCode = editor.value.blocks.some(block => block.type === 'code')
  editor.setBlocks(isCode ? 'paragraph' : 'code')
}

const renderBlock = (props, _, next) => {
  const Block = blocks[props.node.type]
  if (Block) return <Block {...props} />
  return next()
}

function Editor(props) {
  return (
    <SlateEditor
      onKeyDown={handleKeyDown}
      renderBlock={renderBlock}
      {...props}
    />
  )
}

export default Editor
