import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import {styles} from './Styleregisterseller';
import AsyncStorage from '@react-native-community/async-storage';

import LinearGradient from 'react-native-linear-gradient';

export default class Registerseller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
      dataSource: [],
      changeSource: [],
      store: '',
      addressstore: '',
      number: '',
      loading: false,
      // phone2: '',
      // srcImg: '',
      // uri: '',
      // fileName: '',
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('token')
      .then((value) => {
        if (value !== null) {
          this.setState({token: value});
        } else {
          this.props.navigation.navigate('Home');
        }
      })
      .catch((err) => console.log(err));
  }

  editSeller = () => {
    console.log('mulai Upload');
    // this.setState({loading: true});
    const {store, addressstore, number} = this.state;
    var dataToSend = {
      store: store,
      store_address: addressstore,
      account_number: number,

      _method: 'PUT',
    };
    var data = new FormData();

    console.log('ini data tosend', dataToSend);
    for (var key in dataToSend) {
      var encodedKey = key.toString();
      var encodedValue = dataToSend[encodedKey];
      data.append(encodedKey, encodedValue);
      console.log(encodedValue);
    }
    this.setState({loading: true});
    fetch('https://api-oceanstore.herokuapp.com/api/store', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
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
          ToastAndroid.show('berhasil Update!', 1000);
          this.props.navigation.navigate('Screenstore');
          this.setState({loading: false});
        } else {
          alert("GAGA'");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
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
        </View>
        <ScrollView>
          <Image
            style={styles.imghand}
            source={require('../assets/imagehand.png')}
          />
          <View style={styles.viewstore}>
            <Text style={styles.txtstore}>Store :</Text>
            <TextInput
              style={styles.inputstore}
              onChangeText={(store) => this.setState({store})}
            />
          </View>
          <View style={styles.viewadress}>
            <Text style={styles.txtadress}>Adress :</Text>
            <TextInput
              style={styles.inputstore}
              onChangeText={(addressstore) => this.setState({addressstore})}
            />
          </View>
          <View style={styles.viewadress}>
            <Text style={styles.txtadress}>Account Number :</Text>
            <TextInput
              style={styles.inputstore}
              keyboardType={'number-pad'}
              onChangeText={(number) => this.setState({number})}
            />
            <Text style={styles.txtminimum}>*Minimum 12 numbers</Text>
          </View>
          <TouchableOpacity
            style={styles.touchsubmit}
            onPress={() => this.editSeller()}>
            {this.state.loading == false ? (
              <Text style={styles.txtsubmit}>Submit</Text>
            ) : (
              <ActivityIndicator color={'#fff'} />
            )}
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
