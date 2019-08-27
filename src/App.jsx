import React from 'react'
import { Router } from '@reach/router'

import Document from './components/Document'

function App() {
  return (
    <Router>
      <Document path="doc" />
    </Router>
  )
}

export default App
