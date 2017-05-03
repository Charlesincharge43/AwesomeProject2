/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {Scene, Router, Actions } from 'react-native-router-flux';
// import StatusModal from './components/StatusModal'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';

export default class AwesomeProject2 extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="loginPage" component={Login} title="Login" initial={true} />
          <Scene key="statsPage" component={Stats} navBar={Navbar} title="Stats" />
          <Scene key="runPage" component={Run} navBar={Navbar} title="Run" />
          <Scene key="routeSelectPage" component={RouteSelect} navBar={Navbar} title="Select Route" />
          <Scene key="leaguesPage" component={League} navBar={Navbar} title="Leagues" />
          <Scene key="storyPage" component={Story} navBar={Navbar} title="Story" />
        </Scene>
      </Router>
    )
  }
}

class Login extends Component {
  render(){
    const gotoStats = () => Actions.statsPage({logininfo: 'blah blah login info'});

    return (
      // <View style={{margin: 128}}>
      //   <Text onPress={gotoStats} >Login PlaceHolder (just click here to go to stats/home)</Text>
      // </View>
      <View style={styles.container}>
        <Text>Email:</Text>
        <TextInput style={styles.input} />
        <Text>Password:</Text>
        <TextInput style={styles.input} />
        <TouchableOpacity>
          <Text style={styles.button} onPress={gotoStats} >Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

class Navbar extends Component {
  render(){

    const gotoStats = () => Actions.statsPage({text: 'pass this to stats page!'});
    const gotoRun = () => Actions.runPage({text: 'pass this thingy to missions!'});
    const gotoLeagues = () => Actions.leaguesPage({text: 'pass all tis shiz to leagues page!'});
    const gotoStory = () => Actions.storyPage({text: 'blah blah blahh story page!'});


    return (
      <View style={styles.navigationBar}>
        <Text onPress={gotoStats} style={styles.navButton}>Stats</Text>
        <Text onPress={gotoRun} style={styles.navButton}>Run</Text>
        <Text onPress={gotoLeagues} style={styles.navButton}>Your Leagues</Text>
        <Text onPress={gotoStory} style={styles.navButton}>Story</Text>
      </View>)
  }
}


class Stats extends Component {
  render() {
    return (
      <View style={{margin: 128}}>
        <Text>Stats Page Placeholder</Text>
      </View>
    )
  }
}

class Run extends Component {
  render() {

    const gotoRouteSelect = () => Actions.routeSelectPage({text: 'this goes to route select page!'});

    return (
      <View style={}>
        <View>
          <Text onPress={gotoRouteSelect} style={styles.button}>Select a distance</Text>

        </View>
        <View>
          <Text onPress={gotoRouteSelect} style={styles.button}>Select a route</Text>
        </View>
        <View>
          <Text onPress={gotoRouteSelect} style={styles.button}>Create a route</Text>
        </View>
      </View>
    )
  }
}






class Leagues extends Component {
  render() {
    return (
      <View style={{margin: 128}}>
        <Text>Your Clan Page Placeholder</Text>
      </View>
    )
  }
}

class Story extends Component {
  render() {
    return (
      <View style={{margin: 128}}>
        <Text>Story Page Placeholder</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
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
  navigationBar: {
    margin: 5,
    paddingTop: 15,
    flexDirection: 'row',
    backgroundColor: 'grey',
    position: "absolute",
    paddingTop: 0,
    bottom: 5,
    height: 64,
    right: 0,
    left: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: 'white',
  },
  navButton: {
    color: 'white',
    textAlign: 'center',
    margin: 15,
    width: '17%',
    // flexBasis: 'auto',
  },
  button: {
    backgroundColor: 'blue',
    color: 'white',
    height: 30,
    lineHeight: 30,
    marginTop: 10,
    textAlign: 'center',
    width: 250
  },
  input: {
    margin: 'auto',//CAN'T GET THIS TO CENTER NO MATTER WHAT
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 1,
    height: 37,
    width: 250
  },

});

AppRegistry.registerComponent('AwesomeProject2', () => AwesomeProject2);
