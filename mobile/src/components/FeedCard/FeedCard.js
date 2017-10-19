import React from 'react';
import styled from 'styled-components/native';

import FeedCardHeader from './FeedCardHeader'
import FeedCardButton from './FeedCardButton'


const Root = styled.View`
  minHeight: 180;
  backgroundColor: ${props => props.theme.WHITE};
  shadowColor: ${props => props.theme.SECONDARY};
  shadowOffset: 0px 2px;
  shadowRadius: 2;
  shadowOpacity 0.1;
`;

const CardContentContainer = styled.View`
  flex: 1;
  padding: 10px 20px 10px 5px;
`;

const CardContentText = styled.Text`
  fontSize: 14;
  textAlign: left;
  fontWeight: 500;
  color: ${props => props.theme.LIGHT_GRAY};
`;

const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '

function FeedCard() {
  return (
    <Root>
      <FeedCardHeader />
        <CardContentContainer>
          <CardContentText>
          {text}
          </CardContentText>
        </CardContentContainer>
      <FeedCardButton />
    </Root>
  )
}

export default FeedCard;
