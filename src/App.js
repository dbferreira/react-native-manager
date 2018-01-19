import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './store/reducers';
import LoginForm from './components/LoginForm';
import { Header } from './components/common/index';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDLB2ecEXxiO2DQYAAJ_wdXP7HjkgKyx3w',
      authDomain: 'auth-react-c237a.firebaseapp.com',
      databaseURL: 'https://auth-react-c237a.firebaseio.com',
      projectId: 'auth-react-c237a',
      storageBucket: 'auth-react-c237a.appspot.com',
      messagingSenderId: '870935953102'
    });
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Header headerText="Login" />
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
