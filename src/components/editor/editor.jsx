import React from 'react'
import { Editor as SlateEditor } from 'slate-react'

import { Wrapper } from './style'
import blocks, { types } from './blocks'

/**
 * On key down, call the appropriate handlers.
 *
 * @param {React.KeyboardEvent} evt
 * @param {SlateEditor} editor
 * @param {Function} next
 */
const handleKeyDown = (evt, editor, next) => {
  if (evt.key === ' ') return handleSpace(evt, editor, next)
  if (evt.key === 'Backspace') return handleBackspace(evt, editor, next)
  if (evt.key === 'Enter') return handleEnter(evt, editor, next)
  return next()
}

/**
 * On space, if after a markdown shortcut, convert the current
 * block to the appropriate type.
 *
 * @param {React.KeyboardEvent} evt
 * @param {SlateEditor} editor
 * @param {Function} next
 */
const handleSpace = (evt, editor, next) => {
  const { value } = editor
  const { selection, startBlock } = value
  const { start } = selection

  const chars = startBlock.text.slice(0, start.offset).trim()
  const type = types[chars]
  if (!type) return next()
  evt.preventDefault()

  editor.setBlocks(type)
  editor.moveFocusToStartOfNode(startBlock).delete()
}

/**
 * On backspace, if at the start of a markdown block, convert
 * current block to a paragraph.
 *
 * @param {React.KeyboardEvent} evt
 * @param {SlateEditor} editor
 * @param {Function} next
 */
const handleBackspace = (evt, editor, next) => {
  const { value } = editor
  const { selection, startBlock } = value
  if (selection.start.offset !== 0) return next()

  if (startBlock.type === 'paragraph') return next()

  evt.preventDefault()
  editor.setBlocks('paragraph')
}

/**
 * On enter, if at the end of a block that should not be
 * extended, create a new paragraph block below it.
 *
 * @param {React.KeyboardEvent} evt
 * @param {SlateEditor} editor
 * @param {Function} next
 */
const handleEnter = (evt, editor, next) => {
  const { value } = editor
  const { selection, startBlock } = value

  // If current block is empty, just convert it to a paragraph
  if (selection.start.offset === 0 && startBlock.text.length === 0)
    return handleBackspace(evt, editor, next)
  if (shouldExtend(startBlock.type)) return next()

  evt.preventDefault()
  editor.splitBlock().setBlocks('paragraph')
}

const shouldExtend = type =>
  type !== 'heading-one' &&
  type !== 'heading-two' &&
  type !== 'heading-three' &&
  type !== 'blockquote'

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
