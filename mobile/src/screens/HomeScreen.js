import React, { Component } from 'react';
import styled from 'styled-components/native';

import FeedCard from '../components/FeedCard/FeedCard';

const Root = styled.View`
  backgroundColor: #f2f2f2;
  flex: 1;
  paddingTop: 10;
`;


const List = styled.ScrollView``

const T = styled.Text ``;

class HomeScreen extends Component {
  state = { }
  render() {
    return (
      <Root>
        <List>
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </List>
      </Root>
    );
  }
}

export default HomeScreen;
