import React, { useState } from 'react'
import { Value } from 'slate'

import useAuth from '../hooks/useAuth'
import { Header, PublicHeader } from './header'
import Editor from './editor'

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

function App() {
  const [value, setValue] = useState(initialValue)
  const user = useAuth()

  const handleChange = ({ value }) => setValue(value)

  return (
    <main>
      {user ? <Header /> : <PublicHeader />}
      <Editor value={value} onChange={handleChange} />
    </main>
  )
}

export default App
