import React from 'react'
import { Editor as SlateEditor } from 'slate-react'

import { renderBlock, handleKeyDown } from './controllers'
import { Wrapper } from './style'

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
