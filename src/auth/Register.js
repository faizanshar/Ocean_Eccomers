import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  ActivityIndicator,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {Styles} from './Styleregister';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      confirmpassword: '',
      bebas: true,
      bebas2: true,
      loading: false,
    };
  }

  register = () => {
    const {name, email, password, confirmpassword} = this.state;

    //POST json
    var dataToSend = {
      name: name,
      email: email,
      password: password,
      password_confirmation: confirmpassword,
    };
    //making data to send on server
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    //POST request
    this.setState({loading: true});
    fetch('https://api-oceanstore.herokuapp.com/api/register', {
      method: 'POST', //Request Type
      body: formBody, //post body
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        console.log(responseJson);
        const {token} = responseJson;
        if (token) {
          alert('register sukses');
          this.props.navigation.navigate('Home');
          this.setState({loading: false});
        } else {
          alert('Pastikan Form Sudah Terisi dengan benar');
          this.setState({loading:false})
        }
      })
      //If response is not in json then in error
      .catch((error) => {
        alert('Pastikan Form Sudah Terisi dengan benar');
      });
  };
  render() {
    return (
      <View style={Styles.container}>
        <ScrollView>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}>
              <Image
                style={Styles.imgback}
                source={require('../assets/whiteback.png')}
              />
            </TouchableOpacity>
            <Image
              style={Styles.imglogo}
              source={require('../assets/logo1.png')}
            />

            <View style={Styles.viewinput}>
              <TextInput
                style={Styles.input}
                placeholder={'Name'}
                onChangeText={(name) => this.setState({name})}
              />
              <Image
                style={Styles.img}
                source={require('../assets/user(1).png')}
              />
            </View>

            <View style={Styles.viewinput2}>
              <TextInput
                style={Styles.input}
                keyboardType="email-address"
                placeholder={'Email'}
                onChangeText={(email) => this.setState({email})}
              />
              <Image
                style={Styles.img}
                source={require('../assets/user(1).png')}
              />
            </View>

            <View style={Styles.viewinput2}>
              <TextInput
                style={Styles.input}
                placeholder={'Password'}
                secureTextEntry={this.state.bebas}
                onChangeText={(password) => this.setState({password})}
              />
              <TouchableOpacity
                onPress={() => this.setState({bebas: !this.state.bebas})}>
                <Image
                  style={Styles.img}
                  source={
                    this.state.bebas
                      ? require('../assets/eye.png')
                      : require('../assets/invisible.png')
                  }
                />
              </TouchableOpacity>
            </View>

            <View style={Styles.viewinput2}>
              <TextInput
                style={Styles.input}
                placeholder={'Confirm Password'}
                secureTextEntry={this.state.bebas2}
                onChangeText={(confirmpassword) =>
                  this.setState({confirmpassword})
                }
              />
              <TouchableOpacity
                onPress={() => this.setState({bebas2: !this.state.bebas2})}>
                <Image
                  style={Styles.img}
                  source={
                    this.state.bebas2
                      ? require('../assets/eye.png')
                      : require('../assets/invisible.png')
                  }
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={Styles.touchregister}
              onPress={() => this.register()}>
              {this.state.loading == false ? (
                <View>

                <Text style={Styles.txtregister}>Register</Text>
                </View>
              ) : (
                <View>
                  <ActivityIndicator color={'black'} />
                </View>
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
