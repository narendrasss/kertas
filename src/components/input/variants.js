import styled from 'styled-components'

const Base = styled.input`
  appearance: none;
  outline: none;
  width: 100%;
  border: none;
  box-shadow: none;

  &:focus {
    outline: none;
  }
`

export const Title = styled(Base)`
  font-size: 40px;
  font-weight: 600;
`
