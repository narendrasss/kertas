import React from 'react'

import Button from '../button'
import { Wrapper, Flex } from './style'

function PublicHeader() {
  return (
    <Wrapper>
      <h1>Kertas</h1>
      <Flex>
        <Button variant="text">Sign up</Button>
        <Button variant="outline">Sign in</Button>
      </Flex>
    </Wrapper>
  )
}

export default PublicHeader
