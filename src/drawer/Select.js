import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  ToastAndroid,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {Styles} from './Styleselect';

export default class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      modalVisible2: false,
      bebas: true,
      bebas2: true,
      email: '',
      password: '',
      loading: false
      // nama:'',
      // email2:'',
      // password2: '',
      // confirmpassword2: ''
    };
    // AsyncStorage.getItem('token').then((value) => {
    //   if (value !== null) {
    //     this.props.navigation.navigate('Home2');
    //   } else {
    //     this.props.navigation.navigate('Home');
    //   }
    // })
    // .catch((err) => console.log(err));
  }

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };

  setModalVisible2 = (visible) => {
    this.setState({modalVisible2: visible});
  };

  Login = () => {
    const {email, password} = this.state;
    var dataToSend = {email: email, password: password, mobile: true};
    //making data to send on server
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    //POST request
    this.setState({loading:true})
    fetch('https://api-oceanstore.herokuapp.com/api/login', {
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
        const {token, error} = responseJson;
        console.log(token);
        if (token) {
          // alert("Login Berhasil!")
          ToastAndroid.show('Berhasil Login', 1000);
          AsyncStorage.setItem('token', token);
          this.props.navigation.replace('Home2');
          this.setState({modalVisible: false});
          this.setState({loading:false})
        } else {
          alert('Pastikan Email dan Password BENAR!');
          this.setState({loading:false})
        }
      })
      //If response is not in json then in error
      .catch((error) => {
        alert('Pastikan Email dan Password BENAR!');
      });
  };

  render() {
    const {modalVisible, modalVisible2} = this.state;
    return (
      <View style={Styles.container}>
        <Image style={Styles.imglogo} source={require('../assets/logo1.png')} />
        <Text style={Styles.txtlogo}>OceanStore</Text>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
              }}>
              <View
                style={{
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  width: '100%',
                  height: '100%',
                }}>
                <View style={Styles.containermodal}>
                  <View style={Styles.viewmodal}>
                    <TouchableOpacity
                      onPress={() => {
                        this.setModalVisible(!modalVisible);
                      }}>
                      <Image
                        style={Styles.imgclose}
                        source={require('../assets/close.png')}
                      />
                    </TouchableOpacity>

                    <View style={Styles.viewemail}>
                      <TextInput
                        style={Styles.inputuserlog}
                        placeholder={'Email'}
                        autoCompleteType={'email'}
                        keyboardType={'email-address'}
                        onChangeText={(email) => this.setState({email})}
                      />
                      <Image
                        style={Styles.imguser}
                        source={require('../assets/user(1).png')}
                      />
                    </View>

                    <View style={Styles.viewpassword}>
                      <TextInput
                        style={Styles.inputpasswordlog}
                        placeholder={'Password'}
                        secureTextEntry={this.state.bebas}
                        onChangeText={(password) => this.setState({password})}
                      />
                      <TouchableOpacity
                        onPress={() =>
                          this.setState({bebas: !this.state.bebas})
                        }>
                        <Image
                          style={Styles.imgpassword}
                          source={
                            this.state.bebas
                              ? require('../assets/eye.png')
                              : require('../assets/invisible.png')
                          }
                        />
                      </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                      style={Styles.touchlogin}
                      onPress={() => this.Login()}>
                      {this.state.loading == false ? (
                      <Text style={Styles.txtlogin}>Login</Text>

                      ) : (
                        <ActivityIndicator color={'#fff'}/>
                      )}
                    </TouchableOpacity>

                    {/* <TouchableOpacity
                      // style={Styles.openButton}
                      onPress={() => {
                        this.setModalVisible2(false);
                      }}>
                      <Text style={Styles.txtnotregistered}>
                        Not Registered?
                      </Text>
                    </TouchableOpacity> */}
                  </View>
                </View>
              </View>
            </Modal>

            <TouchableHighlight
              style={Styles.openButton}
              onPress={() => {
                this.setModalVisible(true);
              }}>
              <Text style={Styles.textStyle}>Log In</Text>
            </TouchableHighlight>
          </View>

          <View style={{marginLeft: 30}}>
            <TouchableHighlight
              style={Styles.openButton}
              onPress={() => {
                this.props.navigation.navigate('Register');
              }}>
              <Text style={Styles.textStyle}>Register</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}
