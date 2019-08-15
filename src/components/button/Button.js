import styled from 'styled-components'

const Button = styled.button`
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;

  padding: 6px 14px;

  color: white;
  font-size: 14px;
  text-align: center;

  border-radius: 4px;
  background: ${({ theme }) => theme.colors.blues.med};

  &:hover {
    background: ${({ theme }) => theme.colors.blues.light};
  }
`

export default Button
