/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  AppRegistry,
  TextInput
} from 'react-native';

// var Button = require('react-native-button');

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends Component {
     constructor(props) { //初期化したら呼ばれる
         super(props);
         this.state = { user: 'ユーザID', pass:'パスワード' };
       }
    _onPress(e){
      alert("onPressLearnMore");
      this.props.navigation.navigate('Profile', {name: a});
    }

    _onChangeUserName(text){
      alert(text);
    }

    _onChangePassword(text){
      alert(text);
    }

    static navigationOptions = {
    title: 'Home',
   }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is Home page.
        </Text>
        <TextInput
        style={{height: 40, width: 80, borderColor: 'gray', borderBottomWidth: 1}}
        onChangeText={this._onChangeUserName}
        value={this.state.user}
        />
        <TextInput
        style={styles.password}
        onChangeText={this._onChangePassword}
        value={this.state.pass}
        />
        <Button onPress={this._onPress} title="ログイン" style = {{color:'red'}}/>

      </View>
    );
  }
}


class Login extends Component {
     constructor(props) { //初期化したら呼ばれる
         super(props);
         this.state = { user: 'ユーザID', pass:'パスワード' };
       }
    _onPress(e){
      alert("onPressLearnMore");
    }

    _onChangeUserName(text){
      alert(text);
    }

    _onChangePassword(text){
      alert(text);
    }

    static navigationOptions = {
    title: 'Profile',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is Home page.
        </Text>
        <TextInput
        style={{height: 40, width: 80, borderColor: 'gray', borderBottomWidth: 1}}
        onChangeText={this._onChangeUserName}
        value={this.state.user}
        />
        <TextInput
        style={styles.password}
        onChangeText={this._onChangePassword}
        value={this.state.pass}
        />
        <Button onPress={this._onPress} title="ログイン" style = {{color:'red'}}/>

      </View>
    );
  }
}




AppRegistry.registerComponent('AwesomeProject', () => UselessTextInput);
AppRegistry.registerComponent('secureTextEntry', () => secureTextEntry);

// const ModalStack = StackNavigator({
//   Home: {
//     screen: MyHomeScreen,
//   },
//   Profile: {
//     path: 'people/:name',
//     screen: MyProfileScreen,
//   },
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  password: {
    height: 40,
    width: 80,
    borderColor: 'gray',
    borderBottomWidth: 1,
    // secureTextEntry: true,
    // underlineColorAndroid: 'transparent',
    // error: 'Must have 6-12 characters with at least 1 number and 1 special character'
  }
});
