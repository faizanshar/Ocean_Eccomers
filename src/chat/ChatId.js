import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {styles} from './Stylechatid';
import AsyncStorage from '@react-native-community/async-storage';
import Pusher from 'pusher-js/react-native';

export default class ChatId extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
      dataSource: [],
      dataSource2: [],
    };
    // setTimeout(() => {

    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    var pusher = new Pusher('ab9c6bb2fd641cf594ba', {
      cluster: 'ap1',
    });

    var channel = pusher.subscribe('my-channel');
    channel.bind('my-event', (data) => {
      // alert(JSON.stringify(data));
      this.enemyUs();
    });
  }

  // }, 5000);

  meUs() {
    fetch(`https://api-oceanstore.herokuapp.com/api/auth`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.state.token}`,
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('INI id saya', responseJson.user);
        this.setState({
          dataSource2: responseJson.user,
        });
      })
      .catch((error) => {
        console.log('ini error', error);
      });
  }
  enemyUs() {
    fetch(
      `https://api-oceanstore.herokuapp.com/api/chat/${this.props.route.params.item.id}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.state.token}`,
        },
      },
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('INI saya', responseJson.message[0].message);
        this.setState({
          dataSource: responseJson.message,
        });
      })
      .catch((error) => {
        console.log('ini error', error);
      });
  }
  componentDidMount() {
    console.log('ini Punya lawan', this.props.route.params.item);
    AsyncStorage.getItem('token')
      .then((value) => {
        // console.log(this.props.route.params.item.user_id);

        if (value !== null) {
          this.setState({token: value});
          this.enemyUs();
          this.meUs();
          // this.pusherEr()
        } else {
          alert('Silahkan Login Dahulu!');
          this.props.navigation.navigate('Home');
        }
        console.log(this.props.route.params.item);
      })
      .catch((err) => console.log(err));
    //       Pusher.logToConsole = true;

    // var pusher = new Pusher('ab9c6bb2fd641cf594ba', {
    //   cluster: 'ap1'
    // });

    // var channel = pusher.subscribe('my-channel');
    // channel.bind('my-event', function(data) {
    //   alert(JSON.stringify(data));
    //   this.enemyUs()
    // });
  }

  sendMessage = () => {
    console.log('mulai Mengirim');
    console.log('ini ID', this.props.route.params.item.id);
    // this.setState({loading: true});
    const {
      message,
      // receiver
    } = this.state;
    const formData = new FormData();

    formData.append('message', message);
    formData.append('receiver_id', this.props.route.params.item.id);
    this.setState({message:''})
    // formBody = formBody.join(',');
    //POST request
    fetch('https://api-oceanstore.herokuapp.com/api/chat', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${this.state.token}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status === 'success') {
          ToastAndroid.show('Pesan Terkirim', 1000);
          this.enemyUs();
        } else {
          alert('Gagal', response);
        }
      })
      .catch((error) => console.log(error));
    // .then((response) => response.json())
    // //If response is in json then in success
    // .then((responseJson) => {
    //   console.log('ini response', responseJson);
    //   // this.setState({
    //   //   loading: false,
    //   // });
    //   const {message, error} = responseJson;
    //   console.log('ini adalah pesan',message);
    //   if (message) {
    //     ToastAndroid.show('Mengirim', 1000);
    //     // AsyncStorage.setItem('token',token)
    //     // this.props.navigation.navigate('Screenstore');
    //   } else {
    //     alert('Gagal Membuat Mengirim!');
    //   }
    // })
    // //If response is not in json then in error
    // .catch((error) => {
    //   alert('Error!' + error);
    // });
  };

  render() {
    console.log(this.state.dataSource2.id);
    return (
      <View style={styles.container}>
        <View style={styles.containerheader}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={styles.imgback}
              source={require('../assets/whiteback.png')}
            />
          </TouchableOpacity>
          <Image
            style={styles.imguser}
            source={{uri: this.props.route.params.item.avatar_url}}
          />
          <Text
            style={styles.txtheader}
            onChangeText={(receiver) => this.setState({receiver})}>
            {this.props.route.params.item.name}
          </Text>
        </View>
        <ScrollView
          ref={(ref) => {
            this.scrollView = ref;
          }}
          onContentSizeChange={() =>
            this.scrollView.scrollToEnd({animated: true})
          }>
          {this.state.dataSource.map((item, index) => {
            if (item.from === this.state.dataSource2.id) {
              return (
                <View
                  key={index}
                  style={{
                    alignSelf: 'flex-end',
                    backgroundColor: '#fff',
                    margin: 3,
                    marginRight: 10,
                    borderRadius: 10,
                    marginTop: 10,
                    marginBottom: 10,
                    letterSpacing: 3,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      marginTop: 10,
                      marginBottom: 10,
                      marginRight: 10,
                      marginLeft: 10,
                    }}>
                    {item.message}
                  </Text>
                </View>
              );
            } else {
              return (
                <View
                  key={index}
                  style={{
                    alignSelf: 'flex-start',
                    backgroundColor: '#fff',
                    margin: 3,
                    marginLeft: 10,
                    display: 'flex',
                    borderRadius: 10,
                    marginTop: 10,
                    marginBottom: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      marginTop: 10,
                      marginBottom: 10,
                      marginRight: 10,
                      marginLeft: 10,
                    }}>
                    {item.message}
                  </Text>
                </View>
              );
            }
          })}
        </ScrollView>
        <View style={styles.viewsend}>
          <TextInput
            style={styles.inputsend}
            multiline={true}
            value= {this.state.message}
            onChangeText={(message) => this.setState({message})}
          />
          <TouchableOpacity onPress={() => this.sendMessage()}>
            <Image
              style={styles.imgsend}
              source={require('../assets/plane.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
