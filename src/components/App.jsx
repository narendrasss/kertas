import React, { useState } from 'react'
import { Editor } from 'slate-react'
import { Value } from 'slate'

import CodeBlock from './code-block'

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            text: 'Sample text.'
          }
        ]
      }
    ]
  }
})

const blocks = {
  code: CodeBlock
}

function App() {
  const [value, setValue] = useState(initialValue)

  const handleChange = ({ value }) => setValue(value)

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

  return (
    <Editor
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      renderBlock={renderBlock}
    />
  )
}

export default App
