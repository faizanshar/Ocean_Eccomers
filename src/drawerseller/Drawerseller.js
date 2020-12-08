import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  RefreshControl,
  ToastAndroid
} from 'react-native';
// import { TouchableHighlight } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import AsyncStorage from '@react-native-community/async-storage';
import {Styles} from './Styledrawer';
import LottieView from 'lottie-react-native';
import {ScrollView} from 'react-native-gesture-handler';

// import {styles} from '../profile/Styleprofile';

export default class Drawerseller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
      dataSource: {},
      loading: false,
      refresh: false,
    };
  }

  onRefreshControl() {
    this.setState({refresh: true});
    this.getUser();
  }
  componentDidMount() {
    AsyncStorage.getItem('token')
      .then((value) => {
        if (value !== null) {
          this.setState({token: value});
          this.getUser();
          this.setState({loading: false});
        } else {
          this.props.navigation.navigate('Home');
        }
      })
      .catch((err) => console.log(err));
  }

  getUser() {
    fetch('https://api-oceanstore.herokuapp.com/api/auth', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.state.token}`,
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        const {status} = responseJson;
        if (status) {
          alert(status);
        } else {
          this.setState({dataSource: responseJson.user, refresh: false});
          this.setState({loading: true});
          console.log(responseJson);
        }
      })
      .catch((err) => {
        console.log(err);
      });
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

  toStore() {
    if (this.state.dataSource.store) {
      this.props.navigation.navigate('Screenstore');
    } else {
      this.props.navigation.navigate('Registerseller');
    }
  }

  logOut() {
    console.log('Keluar');
    // console.log('ini ID',this.props.route.params.id);
    // this.setState({loading: true});
    // const {product, price, stock, category, description, discount} = this.state;
    // const formData = new FormData();

    // formData.append('product_name', product);
    // formData.append('price', price);
    // formData.append('stock', stock);
    // formData.append('category_id', category);
    // formData.append('discount', discount);
    // formData.append('image', {
    // uri: this.state.uri,
    // type: 'image/jpeg',
    // name: this.state.fileName,
    // });
    // formData.append('description', description);

    // formBody = formBody.join(',');
    //POST request
    fetch('https://api-oceanstore.herokuapp.com/api/logout', {
      method: 'POST',
      headers: {
        // Accept: 'application/json',
        // 'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${this.state.token}`,
      },
      // body: formData,
    })
      .then((response) => response.json())
      .then((response) => {
        console.log('ini response', response);
        if (response.message === 'auth.logged_out') {
          ToastAndroid.show('Keluar!', 1000);
          this.props.navigation.replace('Home');
          AsyncStorage.removeItem(
            'token',
            this.props.navigation.replace('Home'),
          );
        } else {
          alert('Gagal Keluar');
        }
      })
      .catch((error) => console.log(error));
  }
  render() {
    // const {email} = this.props.route.params;
    return (
      <View style={Styles.container}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refresh}
              onRefresh={() => this.onRefreshControl()}
            />
          }>
          {this.state.loading == false ? (
            <View style={Styles.viewimg}>
              <Image
                source={{
                  uri:
                    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
                }}
                style={Styles.img}
              />
              <LottieView
                source={require('../assets/34356-loading-blue-dot.json')}
                autoPlay={true}
                style={Styles.imgloading}
              />
            </View>
          ) : (
            <View style={Styles.viewimg}>
              <TouchableOpacity>
                <Image
                  source={
                    this.state.dataSource.avatar_url
                      ? {
                          uri: this.state.dataSource.avatar_url,
                        }
                      : {
                          uri:
                            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
                        }
                  }
                  style={Styles.img}
                />
              </TouchableOpacity>
              <Text style={Styles.txtnameheader}>
                {this.state.dataSource.name}
              </Text>
              <Text style={Styles.txtemailheader}>
                {this.state.dataSource.email}
              </Text>
            </View>
          )}

          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('Profile', {
                item: this.state.dataSource,
              })
            }
            style={Styles.touchprofile}>
            <Image
              style={Styles.imgprofile}
              source={require('../assets/profile2.png')}
            />
            <Text style={Styles.txtprofile}>Profile</Text>
            <Image
              style={Styles.imgnext2}
              source={require('../assets/blackarrow.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity style={Styles.touch} onPress={() => this.toStore()}>
            <Image
              style={Styles.imgmystore}
              source={require('../assets/store1.png')}
            />
            <Text style={Styles.txtmyorder}>MyStore</Text>
            <Image
              style={Styles.imgnext4}
              source={require('../assets/blackarrow.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Categori')}
            style={Styles.touch}>
            <Image
              style={Styles.imgcategori}
              source={require('../assets/category1.png')}
            />
            <Text style={Styles.txtcategori}>Categori</Text>
            <Image
              style={Styles.imgnext3}
              source={require('../assets/blackarrow.png')}
            />
          </TouchableOpacity>

          {/* <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Historyscreen')}
            style={Styles.touch}>
            <Image
              style={Styles.imghistory}
              source={require('../assets/history.png')}
            />
            <Text style={Styles.txthistory}>History</Text>
            <Image
              style={Styles.imgnext7}
              source={require('../assets/blackarrow.png')}
            />
          </TouchableOpacity> */}

          {/* <TouchableOpacity
            style={Styles.touch}
            onPress={() => this.props.navigation.navigate('About')}>
            <Image
              style={Styles.imgabout}
              source={require('../assets/information.png')}
            />
            <Text style={Styles.txtabout}>About</Text>
            <Image
              style={Styles.imgnext5}
              source={require('../assets/blackarrow.png')}
            />
          </TouchableOpacity> */}

          <TouchableOpacity
            style={Styles.touchlogout}
            onPress={() => this.logOut()}>
            <Image
              style={Styles.imglogout}
              source={require('../assets/logout.png')}
            />
            <Text style={Styles.txtlogout}>Logout</Text>
            <Image
              style={Styles.imgnext6}
              source={require('../assets/blackarrow.png')}
            />
          </TouchableOpacity>
          {/* <View style={Styles.viewimg}> */}
          {/* <LottieView
            source={require('../assets/34356-loading-blue-dot.json')}
            autoPlay={true}
            style={Styles.imgloading}
          /> */}
        </ScrollView>
        {/* </View> */}
      </View>
    );
  }
}
