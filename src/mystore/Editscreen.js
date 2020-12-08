import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Picker} from '@react-native-community/picker';
import {styles} from './Styleedit';
import AsyncStorage from '@react-native-community/async-storage';
import ImagePicker from 'react-native-image-picker';

export default class Editscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
      dataSource: [],
      changeSource: [],
      language: 'java',
      product: '',
      price: parseInt(''),
      category: '',
      discount: parseInt(''),
      description: '',
      stock: parseInt(''),
      srcImg: '',
      uri: '',
      fileName: '',
      loading: false,
    };
  }

  componentDidMount() {
    // typeof(this.state)
    AsyncStorage.getItem('token')
      .then((value) => {
        if (value !== null) {
          const {item} = this.props.route.params;
          this.setState({
            token: value,
            product: item.product_name,
            price: item.price,
            category: item.category_id,
            discount: item.discount,
            description: item.description,
            uri: item.image_url,
            stock: item.stock,
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
      noData: true,
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
    const {product, price, stock, category, discount, description} = this.state;
    var dataToSend = {
      product_name: product,
      price: parseInt(price),
      stock: parseInt(stock),
      category_id: parseInt(category),
      discount: parseInt(discount),
      description: description,
      _method: 'PUT',
    };
    var data = new FormData();
    data.append('image', {
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
    console.log(data);
    this.setState({loading: true});
    fetch(
      `https://api-oceanstore.herokuapp.com/api/seller/${this.props.route.params.item.id}`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          // 'Content-Type': 'application/json',
          Authorization:
            // token ,
            `Bearer ${this.state.token}`,
        },
        body: data,
      },
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('ini response', responseJson);
        const {message, error} = responseJson;
        console.log('ini message', message);
        if (message) {
          ToastAndroid.show('Berhasil Update!',1000);
          this.props.navigation.navigate('Screenstore');
          this.setState({loading: false});
        } else {
          alert("GAGA'");
          this.setState({loading: false});
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  render() {
    return (
      <LinearGradient
        style={styles.container}
        tart={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#011a27', '#063852']}>
        <ScrollView>
          <View style={styles.containerheader}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                style={styles.imgback}
                source={require('../assets/whiteback.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.container2}>
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
                style={styles.img}
              />
            </TouchableOpacity>

            <Text style={styles.txtproduct}>Product :</Text>
            <TextInput
              style={styles.inputproduct}
              value={this.state.product}
              onChangeText={(input) => this.setState({product: input})}
            />

            <View style={styles.viewpricestock}>
              <Text style={styles.txtprice}>Price :</Text>
              <Text style={styles.txtstock}>Stock :</Text>
            </View>

            <View style={styles.viewinputpricestock}>
              <TextInput
                style={styles.inputprice}
                keyboardType="number-pad"
                value={this.state.price.toString()}
                onChangeText={(input) => this.setState({price: input})}
              />
              <TextInput
                style={styles.inputstock}
                keyboardType="number-pad"
                value={this.state.stock.toString()}
                onChangeText={(input) => this.setState({stock: input})}
              />
            </View>

            <View style={styles.viewcategorydiscount}>
              <Text style={styles.txtcategory}>Category :</Text>
              <Text style={styles.txtdiscount}>Discount :</Text>
            </View>

            <View style={styles.viewinputcategorydiscount}>
              <View style={styles.viewpicker}>
                <Picker
                  selectedValue={this.state.category.toString()}
                  //   style={{height: 60, width: 200}}

                  onValueChange={(itemValue, itemindex) =>
                    this.setState({category: itemValue})
                  }>
                  <Picker.Item label="Fashion" value="1" />
                  <Picker.Item label="Electronic" value="2" />
                  <Picker.Item label="Food" value="3" />
                  <Picker.Item label="Other" value="4" />
                </Picker>
              </View>
              <TextInput
                style={styles.inputdiscount}
                keyboardType="number-pad"
                value={this.state.discount.toString()}
                onChangeText={(input) => this.setState({discount: input})}
              />
            </View>

            <Text style={styles.txtdescription}>Description :</Text>
            <TextInput
              style={styles.inputdescription}
              multiline={true}
              value={this.state.description}
              onChangeText={(input) => this.setState({description: input})}
            />
            <TouchableOpacity
              style={styles.touchedit}
              onPress={() => this.editProduct()}>
              {this.state.loading == false ? (
                <Text>Edit Product</Text>
              ) : (
                <ActivityIndicator color="#fff" />
              )}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}
