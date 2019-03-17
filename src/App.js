import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  // Use null because we need 3 states:
  // 1. Unknown if logged-in (null)
  // 2. Definitely logged-in (true)
  // 3. Definitely not logged-in (false)
  state = { loggedIn: null };

  componentWillMount() {
    const config = {};

    firebase.initializeApp(config);

    console.log(config);

    // Tracks authentication state
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button onPress={}>Log Out</Button>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;