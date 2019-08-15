import styled from 'styled-components'
import { Sidebar } from 'styled-icons/feather'
import { KeyboardArrowLeft } from 'styled-icons/material'
import { User } from 'styled-icons/boxicons-solid'

export const Wrapper = styled.header`
  padding: 12px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grays.light};
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
`

const Icon = styled.div.attrs({ size: '18px' })`
  color: ${({ theme }) => theme.colors.grays.dark};
  font-weight: bold;
  margin-right: 8px;
`

export const SidebarIcon = styled(Icon).attrs({ as: Sidebar })`
  margin-right: 12px;
`

export const BackIcon = styled(Icon).attrs({ as: KeyboardArrowLeft })``

export const UserIcon = styled(Icon).attrs({ as: User, size: '12px' })``

export const Title = styled.h1`
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 4px;
`

export const Metadata = styled(Flex)`
  color: ${({ theme }) => theme.colors.grays.dark};
  font-size: 12px;
`

export const Members = styled(Flex)`
  list-style: none;
`

export const FolderButton = styled.button`
  cursor: pointer;
  appearance: none;
  outline: none;
  color: ${({ theme }) => theme.colors.blues.med};
  border: none;
`

export const Avatar = styled.div`
  height: 30px;
  width: 30px;
  color: white;
  font-size: 12px;
  background: ${({ theme }) => theme.colors.pink};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 8px;
`

export const Separator = styled.div`
  width: 4px;
  height: 4px;
  background: ${({ theme }) => theme.colors.grays.light};
  margin: 0 8px;
`

export const SharingActions = styled(Flex)`
  padding-right: 16px;
  border-right: 1px solid ${({ theme }) => theme.colors.grays.light};
`
