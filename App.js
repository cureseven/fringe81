import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  AppRegistry,
  TextInput,
  AsyncStorage
} from 'react-native';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14

function _onChangeUserName(text){
  alert(text);
}



class HomeScreen extends React.Component {

  constructor(){

    super();

    this.inputUserName = null;
    this.inputPassword = null;

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onCreateAccount = this.onCreateAccount.bind(this);

  }

  onChangeUserName(text){
    this.inputUserName = text;
  }

  onChangePassword(text){
    this.inputPassword = text;
  }

  onCreateAccount(){
    let newAccount = {
      userName : this.inputUserName,
      password : this.inputPassword,
    }

    AsyncStorage.getItem("ACCOUNT_LIST").then((value) => {

        let accountList = JSON.parse(value);

        if(!accountList){
          accountList = {};
        }

        accountList["USER_" + newAccount.userName] = newAccount;

        console.log(accountList);

        AsyncStorage.setItem("ACCOUNT_LIST",JSON.stringify(accountList)).then((value) => {

        });

    });

  }

  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <TextInput
          style={{height: 40,width: 80,borderColor: 'gray',borderBottomWidth: 1}}
          onChangeText={this.onChangeUserName}
          placeholder="ログインID"
        />
        <TextInput
          style={{height: 40,width: 80,borderColor: 'gray',borderBottomWidth: 1}}
          onChangeText={this.onChangePassword}
          placeholder="パスワード"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Details')}
          title="ログイン"
        />

        <Button
          onPress={() => this.props.navigation.navigate('NewAcount')}
          title="新規作成"
        />
      </View>
    );
  }

}

class NewAcountScreen extends React.Component {

  constructor(){

    super();

    this.inputUserName = null;
    this.inputPassword = null;

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onCreateAccount = this.onCreateAccount.bind(this);

  }

  onChangeUserName(text){
    this.inputUserName = text;
  }

  onChangePassword(text){
    this.inputPassword = text;
  }

  onCreateAccount(){
    let newAccount = {
      userName : this.inputUserName,
      password : this.inputPassword,
      // () => this.props.navigation.() => this.props.navigation.navigate('Home')
    }

    AsyncStorage.getItem("ACCOUNT_LIST").then((value) => {

        let accountList = JSON.parse(value);

        if(!accountList){
          accountList = {};
        }

        accountList["USER_" + newAccount.userName] = newAccount;

        console.log(accountList);

        AsyncStorage.setItem("ACCOUNT_LIST",JSON.stringify(accountList)).then((value) => {

        });

    });

  }

  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>newAccount Screen</Text>
        <TextInput
          style={{height: 40,width: 80,borderColor: 'gray',borderBottomWidth: 1}}
          onChangeText={this.onChangeUserName}
          placeholder="ログインID"
        />
        <TextInput
          style={{height: 40,width: 80,borderColor: 'gray',borderBottomWidth: 1}}
          onChangeText={this.onChangePassword}
          placeholder="パスワード"
        />

        <Button
          onPress={this.onCreateAccount}
          title="新規作成はこちら"
        />
      </View>
    );
  }

}

class DetailsScreen extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Settings')}
          title="ユーザー管理画面"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Chatroom')}
          title="チャットルーム"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Home')}
          title="ログアウト"
        />
      </View>
    );
  }

}

class SettingsScreen extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Setting Screen</Text>
        <TextInput
          style={{height: 40,width: 80,borderColor: 'gray',borderBottomWidth: 1}}
          onChangeText={_onChangeUserName}
          placeholder="ログインID"
        />
        <TextInput
          style={{height: 40,width: 80,borderColor: 'gray',borderBottomWidth: 1}}
          onChangeText={_onChangeUserName}
          placeholder="パスワード"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Details')}
          title="登録"
        />
        <Text style={styles.alluser}>ユーザー一覧</Text>
        <Text>icon,username,登録day,delete</Text>
      </View>
    );
  }

}

class ChatroomScreen extends React.Component {
  constructor(){
    super();

  }
  render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Chatroom Screen</Text>
        <Button
          onPress={() => alert("投稿")}
          title="投稿"
        />
        <Button
          onPress={() => alert("削除")}
          title="削除"
        />
        <Button
          onPress={() => this.props.navigation.navigate('Home')}
          title="ログアウト"
        />
      </View>
    );
  }
}

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  NewAcount: {
    screen: NewAcountScreen,
    navigationOptions: {
      headerTitle: 'NewAcount',
    },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      headerTitle: 'Settings',
    },
  },
  Chatroom: {
    screen: ChatroomScreen,
    navigationOptions: {
      headerTitle: 'Chatroom',
    },
  },
});

const styles = StyleSheet.create({
  alluser: {
    height: 40,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default RootNavigator;



/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
//
// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   AppRegistry,
//   TextInput
// } from 'react-native';
//
// // var Button = require('react-native-button');
//
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
//
//
// export default class App extends Component {
//      constructor(props) { //初期化したら呼ばれる
//          super(props);
//          this.state = { user: 'ユーザID', pass:'パスワード' };
//        }
  //   _onPress(e){
  //     alert("onPressLearnMore");
  //     this.props.() => this.props.navigation.() => this.props.navigation.navigate('Profile', {name: a});
  //   }
   //
  //   _onChangeUserName(text){
  //     alert(text);
  //   }
   //
  //   _onChangePassword(text){
  //     alert(text);
  //   }
   //
  //   static navigationOptions = {
  //   title: 'Home',
  //  }
//
//   render() {
//     return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     This is Home page.
      //   </Text>
        // <TextInput
        // style={{height: 40, width: 80, borderColor: 'gray', borderBottomWidth: 1}}
        // onChangeText={this._onChangeUserName}
        // value={this.state.user}
        // />
        // <TextInput
        // style={styles.password}
        // onChangeText={this._onChangePassword}
        // value={this.state.pass}
        // />
      //   <Button onPress={this._onPress} title="ログイン" style = {{color:'red'}}/>
//
//       </View>
//     );
//   }
// }
//
//
// class Login extends Component {
//      constructor(props) { //初期化したら呼ばれる
//          super(props);
//          this.state = { user: 'ユーザID', pass:'パスワード' };
//        }
//     _onPress(e){
//       alert("onPressLearnMore");
//     }
//
//     _onChangeUserName(text){
//       alert(text);
//     }
//
//     _onChangePassword(text){
//       alert(text);
//     }
//
//     static navigationOptions = {
//     title: 'Profile',
//   }
//
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           This is Home page.
//         </Text>
//         <TextInput
//         style={{height: 40, width: 80, borderColor: 'gray', borderBottomWidth: 1}}
//         onChangeText={this._onChangeUserName}
//         value={this.state.user}
//         />
//         <TextInput
//         style={styles.password}
//         onChangeText={this._onChangePassword}
//         value={this.state.pass}
//         />
//         <Button onPress={this._onPress} title="ログイン" style = {{color:'red'}}/>
//
//       </View>
//     );
//   }
// }
//
//
//
//
// AppRegistry.registerComponent('AwesomeProject', () => UselessTextInput);
// AppRegistry.registerComponent('secureTextEntry', () => secureTextEntry);
//
// // const ModalStack = StackNavigator({
// //   Home: {
// //     screen: MyHomeScreen,
// //   },
// //   Profile: {
// //     path: 'people/:name',
// //     screen: MyProfileScreen,
// //   },
// // });
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   password: {
    // height: 40,
    // width: 80,
    // borderColor: 'gray',
    // borderBottomWidth: 1,
//     // secureTextEntry: true,
//     // underlineColorAndroid: 'transparent',
//     // error: 'Must have 6-12 characters with at least 1 number and 1 special character'
//   }
// });
