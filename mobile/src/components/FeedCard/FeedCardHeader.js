import React from 'react';
import styled from 'styled-components/native';

import { fakeAvatar } from '../../utils/constants';


const AVATAR_SIZE = 40;
const AVATAR_RADIUS = AVATAR_SIZE/2;

const Root = styled.View`
  height: 50;
  flexDirection: row;
  alignItems: center;
  backgroundColor: yellow;

`;

//avatar container
const AvatarContainer = styled.View`
  flex: 0.2;
  backgroundColor: red;
  alignSelf: stretch;
  justifyContent: center;
`;
//meta container
const MetaContainer = styled.View`
  flex:1;
  backgroundColor: blue;
  alignSelf: stretch;
`;

//avatar
const Avatar = styled.Image`
  height: ${AVATAR_SIZE};
  width: ${AVATAR_SIZE};
  borderRadius: ${AVATAR_RADIUS};
`;

function FeedCardHeader() {
  return (
    <Root>
      <AvatarContainer>
        <Avatar source={{uri: fakeAvatar}} />
      </AvatarContainer>
      <MetaContainer />
    </Root>
  )
}

export default FeedCardHeader;
