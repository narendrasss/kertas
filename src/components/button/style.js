import styled from 'styled-components'

const Base = styled.button`
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;

  padding: 6px 14px;

  font-size: 14px;
  text-align: center;

  border-radius: 4px;
`

export const Default = styled(Base)`
  color: white;
  background: ${({ theme }) => theme.colors.blues.med};

  &:hover {
    background: ${({ theme }) => theme.colors.blues.light};
  }
`

export const Outline = styled(Base)`
  border: 1px solid ${({ theme }) => theme.colors.grays.med};

  &:hover {
    border-color: ${({ theme }) => theme.colors.blues.light};
    color: ${({ theme }) => theme.colors.blues.light};
  }
`

export const Text = styled(Base)`
  color: ${({ theme }) => theme.colors.blues.med};
`
