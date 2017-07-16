/**
 * Created by manjeet on 17/07/17.
 */
import React, { Component } from 'react';
import {
  home
} from './container';
import { Router, Scene } from 'react-native-router-flux';

export default class AppRouter extends Component{
  render(){
    return(
      <Router
        navigationBarStyle={{backgroundColor:'#fc214f', borderBottomWidth: 0,}}>
        <Scene key="home"  component={home}  hideNavBar={true}/>
      </Router>
    )
  }
}