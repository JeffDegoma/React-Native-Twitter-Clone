import React from 'react';
import { UIManager } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';

import { store, client } from './src/store';
import { colors } from './src/utils/constants';

import Welcome from './src/components/Welcome';
import HomeScreen from './src/screens/HomeScreen';


if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider store={store} client={client}>
        <ThemeProvider theme={colors}>
          <HomeScreen />
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}
