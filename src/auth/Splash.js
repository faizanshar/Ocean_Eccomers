import React, {Component} from 'react';
import {Text, View, Image, Ac, ActivityIndicator} from 'react-native';
import {Styles} from './Stylesplash';
import AsyncStorage from '@react-native-community/async-storage'

import Indux from './Indux';

export default class Splash extends Component {
  constructor() {
    super();
    (this.componentDidMount = function () {
     
  
      console.log(' Console Log Ini Dari componentDidMount');
      setTimeout(() => {
        AsyncStorage.getItem('token').then((value) => {
          if (value !== null) {
            this.props.navigation.replace('Home2');
          } else {
            this.props.navigation.replace('Intro');
          }
        })
        .catch((err) => console.log(err));
        // this.setState({
        //   role: false,
        // });
      }, 1000);
    }),
      (this.componentDidUpdate = function () {
        console.log(' Console Log Ini Dari componentDidUpdate');
      });
  }

  state = {
    role: true,
  };

  splash = () => {
    // if (this.state.role) {
    return (
      <View style={Styles.container}>
      <Image style={{width:200,height:200}} source={require('../assets/logo.png')}/>
        <Text style={Styles.txt}>OceanStore</Text>
      </View>
    );
  };

  render() {
    if (this.state.role) {
      return <View style={{flex: 1}}>{this.splash()}</View>;
    } else {
      return <Indux />;
    }
  }
}
