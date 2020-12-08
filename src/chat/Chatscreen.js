import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from './Stylechat';
import AsyncStorage from '@react-native-community/async-storage';
import {ScrollView} from 'react-native-gesture-handler';

export default class Chatscreen extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('token')
      .then((value) => {
        console.log('ini', value);
        if (value !== null) {
          this.setState({token: value});
          this.getContact();
        } else {
          // this.getProduct();
          alert("Silahkan Login Dahulu!")
          this.props.navigation.navigate('Home');
        }
      })
      .catch((err) => console.log(err));
  }

  getContact() {
    // console.log('ini route', this.props.route.params.item);
    const url = 'https://api-oceanstore.herokuapp.com/api/chat';
    // console.log(this.props.route.params.item.href.link);
    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',

        // 'Content-Type': 'application/json',
        Authorization: `Bearer ${this.state.token}`,
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('INI', responseJson);
        this.setState({
          dataSource: responseJson.user,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // checkOut() {
  //   fetch('http://api-oceanstore.herokuapp.com/api/chat', {
  //     method: 'GET',
  //     headers: {
  //       // 'Content-Type': 'application/json',
  //       Authorization: `Bearer ${this.state.token}`,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       this.setState({
  //         dataSource: responseJson.user
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }
  // getContact() {
  //   const url = 'http://api-oceanstore.herokuapp.com/api/chat';
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       console.log('ini response',responseJson);
  //       this.setState({

  //         dataSource: responseJson.user,
  //         // refresh: false,
  //         // loading: true,
  //       });
  //       // this.setState({})
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   this.setState({refresh: false});
  // }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerheader}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.imgback}
              source={require('../assets/whiteback.png')}
            />
          </TouchableOpacity>
          <Text style={styles.txtheader}>ChatScreen</Text>
        </View>
        <ScrollView>
          {this.state.dataSource.map((item, index) => {
            return (
              <View key={index}>
                <TouchableOpacity style={styles.touchchat} onPress={()=>this.props.navigation.navigate("Chatid", {
                        item:item
                      })}>
                  <Image
                    style={styles.imgavatar}
                    source={{uri: item.avatar_url}}
                  />
                  <View>
                    <Text style={styles.txtname}>{item.name}</Text>
                    {/* {item.unread === 0 ? (
                      <View
                        style={styles.txtread1}>
                        <Text>{item.unread}</Text>
                      </View>
                    ) : (
                      <View
                        style={styles.txtread2}>
                        <Text>{item.unread}</Text>
                      </View>
                    )} */}
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
