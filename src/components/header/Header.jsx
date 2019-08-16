import React from 'react'
import Types from 'prop-types'

import Button from '../button'
import {
  Avatar,
  Wrapper,
  Flex,
  SidebarIcon,
  BackIcon,
  UserIcon,
  Title,
  Metadata,
  Members,
  FolderButton,
  Separator,
  SharingActions
} from './style'

function Header({ title, folder, members }) {
  return (
    <Wrapper>
      <Flex>
        <BackIcon />
        <SidebarIcon />
        <div>
          <Title>{title.length ? title : 'Untitled'}</Title>
          <Metadata>
            {folder ? (
              <p>{folder}</p>
            ) : (
              <FolderButton>Add to folder</FolderButton>
            )}
            <Separator />
            <Members>
              <UserIcon />
              {members.map(member => (
                <li key={member}>{member}</li>
              ))}
            </Members>
          </Metadata>
        </div>
      </Flex>
      <Flex>
        <SharingActions>
          <Avatar>NS</Avatar>
          <Button>Invite</Button>
        </SharingActions>
      </Flex>
    </Wrapper>
  )
}

Header.propTypes = {
  title: Types.string,
  folder: Types.string,
  members: Types.arrayOf(Types.string)
}

Header.defaultProps = {
  title: 'Untitled',
  folder: null,
  members: ['Only me']
}

export default Header
