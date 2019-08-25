import React, { useState } from 'react'
import styled from 'styled-components'
import { Value } from 'slate'

import { Header, PublicHeader } from './header'
import Input from './input'
import Editor from './editor'

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'heading-one',
        nodes: [
          {
            object: 'text',
            text: 'The Design Process'
          }
        ]
      },
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            text: 'The first thing that I did was to decide on the tech stack.'
          }
        ]
      }
    ]
  }
})

function App() {
  const [value, setValue] = useState(initialValue)
  const [user, setUser] = useState(null)
  const [title, setTitle] = useState('Recreating Dropbox Paper')

  const handleChange = ({ value }) => {
    setValue(value)
  }

  const shouldShowPlaceholder = () => {
    const node = value.document.nodes.get(0)
    return node.type === 'paragraph'
  }

  return (
    <main>
      {user ? (
        <Header title={title} />
      ) : (
        <PublicHeader
          onSignin={() => setUser({ name: 'Narendra Syahrasyad' })}
        />
      )}
      <Content>
        <TitleInput
          value={title}
          onChange={evt => setTitle(evt.target.value)}
          placeholder="You are a shining star"
        />
        <Editor
          value={value}
          onChange={handleChange}
          placeholder={
            shouldShowPlaceholder() ? 'You are a tiny masterpiece' : ''
          }
        />
      </Content>
    </main>
  )
}

export default App

const TitleInput = styled(Input)`
  margin-bottom: 1em;
`

const Content = styled.article`
  padding-top: 30vh;
  padding-left: 32px;
  padding-right: 32px;
`
