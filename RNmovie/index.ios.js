/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var React = require('react');
var ReactNative = require('react-native');
var {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
} = ReactNative;

var SearchScreen = require('./SearchScreen');

var RNmovie = React.createClass({
  render: function(){
    return(
      <NavigatorIOS 
        style={styles.container}
        initialRoute={{
          title:'Movies',
          component:SearchScreen,
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
  },
});

AppRegistry.registerComponent('RNmovie', () => RNmovie);


