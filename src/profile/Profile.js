import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity,ScrollView, ToastAndroid,TextInput,ActivityIndicator} from 'react-native';
import {styles} from './Styleprofile';
import LinearGradient from 'react-native-linear-gradient';
import ImagePicker from 'react-native-image-picker';
import AsyncStorage from '@react-native-community/async-storage';

export default class profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
      dataSource: [],
      changeSource: [],
      name2: '',
      email2: '',
      address2: '',
      phone2: '',
      srcImg: '',
      uri: '',
      fileName: '',
      loading: false
    };
  }
  chooseFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          filePath: source,
        });
      }
    });
  };
  // componentDidUpdate() {
  //   console.log('update' + this.state.name2);
  //   if( )
  // }
  componentDidMount() {
    AsyncStorage.getItem('token')
      .then((value) => {
        if (value !== null) {
          const {item} = this.props.route.params;
          this.setState({
            token: value,
            name2: item.name,
            email2: item.email,
            address2: item.address,
            phone2: item.phone,
            uri: item.avatar_url,
          });
        } else {
          this.props.navigation.navigate('Home');
        }
      })
      .catch((err) => console.log(err));
  }

  choosePicture = () => {
    // var ImagePicker = require('react-native-image-picker');
    var options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ' + response);
      if (response.didCancel) {
        console.log('user cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button', response.customButton);
      } else {
        console.log(response);
        // if (response.fileSize >= 2000000) {
        // alert('Foto kegedean');
        // } else {
        this.setState({
          srcImg: {uri: response.uri},
          uri: response.uri,
          fileName: response.fileName,
        });
        // }
      }
    });
  };

  editProduct = () => {
    console.log('mulai Upload');
    // this.setState({loading: true});
    const {name2, email2, address2, phone2} = this.state;
    var dataToSend = {
      name: name2,
      email: email2,
      address: address2,
      phone: phone2,
      _method: 'PUT',
    };
    var data = new FormData();
    data.append('avatar', {
      uri: this.state.uri,
      type: 'image/jpeg',
      name: this.state.fileName,
    });
    console.log('ini data tosend', dataToSend);
    for (var key in dataToSend) {
      var encodedKey = key.toString();
      var encodedValue = dataToSend[encodedKey];
      data.append(encodedKey, encodedValue);
      console.log(encodedValue);
    }
    this.setState({loading:true})
    fetch('https://api-oceanstore.herokuapp.com/api/profile', {
      method: 'POST',
      headers: {
        // Accept: 'application/json',
        // 'Content-Type': 'application/json',
        Authorization:
          // token ,
          `Bearer ${this.state.token}`,
      },
      body: data,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        const {message, error} = responseJson;
        console.log(message);
        if (message) {
          ToastAndroid.show("Behasil Mengubah",1000)
          this.props.navigation.navigate('Home2');
          this.setState({loading:false})
        } else {
          alert("GAGA'");
          this.setState({loading:false})
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const {item} = this.props.route.params;
    console.log(this.props.route.params);
    return (
      <View style={styles.container}>
        <View style={styles.containerheader}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.imgback}
              source={require('../assets/whiteback.png')}
            />
          </TouchableOpacity>
          <Text style={styles.txtprofile}>Profile</Text>
        </View>
      <ScrollView>
        <TouchableOpacity onPress={() => this.choosePicture()}>
          <Image
            source={
              this.state.uri
                ? {
                    uri: this.state.uri,
                  }
                : {
                    uri:
                      'https://image.shutterstock.com/image-vector/add-icon-plus-vector-260nw-454078798.jpg',
                  }
            }
            style={styles.imgprofile}
          />
        </TouchableOpacity>
        <View style={styles.containerinput}>
          <View style={styles.viewname}>
            <Text style={styles.txtname}>Name</Text>
            <TextInput
              style={styles.inputname}
              value={this.state.name2}
              onChangeText={(input) => this.setState({name2: input})}
            />
          </View>
          <View style={styles.viewemail}>
            <Text style={styles.txtemail}>Email</Text>
            <TextInput
              style={styles.inputemail}
              keyboardType={'email-address'}
              value={this.state.email2}
              onChangeText={(input) => this.setState({email2: input})}
              multiline={true}
            />
          </View>
          <View style={styles.viewadress}>
            <Text style={styles.txtadress}>Adress</Text>
            <TextInput
              style={styles.inputadress}
              value={this.state.address2}
              onChangeText={(input) => this.setState({address2: input})}
              multiline={true}
            />
          </View>
          <View style={styles.viewnumber}>
            <Text style={styles.txtnumber}>Phone</Text>
            <TextInput
              keyboardType={'number-pad'}
              style={styles.inputnumber}
              value={this.state.phone2}
              onChangeText={(input) => this.setState({phone2: input})}
            />
          </View>
        </View>

        {/* <View style={styles.alltouch}> */}
        <TouchableOpacity
          style={styles.touchedit}
          onPress={() => this.editProduct()}>
        {this.state.loading == false ? (
         <Text style={styles.txtedit}>edit profile</Text>
        ) : (
          <View>
          <ActivityIndicator color={'#fff'}/>
            {/* <Text style={styles.txtloading}>Wait a minute</Text> */}
          </View>
        )}
         
        </TouchableOpacity>
        </ScrollView>
        {/* <TouchableOpacity
            style={styles.touchstore}
            onPress={() => this.props.navigation.navigate('Registerseller')}>
            <Text style={styles.txtstore}>Open Shop</Text>
          </TouchableOpacity> */}
        {/* </View> */}
      </View>
    );
  }
}
