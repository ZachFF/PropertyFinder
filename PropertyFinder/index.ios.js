'use strict'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';
import SearchPage from './SearchPage.js';


 class PropertyFinder extends Component{
  render(){
    return(
    <NavigatorIOS
    style={styles.container}
    initialRoute={{
      title:'PropertyFinder',
      component: SearchPage,
    }}/>

    );
  }
}

const styles = StyleSheet.create({

 container: {
   flex: 1,
 }
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
