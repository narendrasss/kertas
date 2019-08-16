import React from 'react'
import { Editor as SlateEditor } from 'slate-react'

import { Wrapper } from './style'
import blocks from './blocks'

const handleKeyDown = (evt, editor, next) => {
  if (evt.key === ' ') return handleSpace(evt, editor, next)
  return next()
}

const handleSpace = (evt, editor, next) => {
  const { value } = editor
  const { selection, startBlock } = value
  const { start } = selection
  const chars = startBlock.text.slice(0, start.offset).trim()
  if (chars === '#') {
    evt.preventDefault()
    editor.setBlocks('heading-one')
    editor.moveFocusToStartOfNode(startBlock).delete()
  }
  return next()
}

const renderBlock = (props, _, next) => {
  const Block = blocks[props.node.type]
  if (Block) return <Block {...props} />
  return next()
}

function Editor(props) {
  return (
    <Wrapper>
      <SlateEditor
        renderBlock={renderBlock}
        onKeyDown={handleKeyDown}
        {...props}
      />
    </Wrapper>
  )
}

export default Editor
