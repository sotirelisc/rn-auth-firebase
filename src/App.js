import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    const config = {};

    firebase.initializeApp(config);

    console.log(config);
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>Boom</Text>
      </View>
    );
  }
}

export default App;