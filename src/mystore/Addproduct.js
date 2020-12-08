import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  Button,
  Stylesheet,
  picker,
  ToastAndroid,
  ActivityIndicator,
  ScrollView, TextInput
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {Styles} from './Styleaddproduct';
import {Picker} from '@react-native-community/picker';

export default class Addproduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
      product: '',
      price: '',
      stock: '',
      category: '',
      description: '',
      image: '',
      discount: '',
      srcImg: '',
      uri: '',
      fileName: '',
      loading: false,
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
  choosePicture = () => {
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
        if (response.fileSize >= 2000000) {
          alert('Foto kegedean');
        } else {
          this.setState({
            srcImg: {uri: response.uri},
            uri: response.uri,
            fileName: response.fileName,
          });
        }
      }
    });
  };


  Addproduct = () => {
    console.log('mulai Mengirim');
    
    const {product, price, stock, category, description, discount} = this.state;
    const formData = new FormData();

    formData.append('product_name', product);
    formData.append('price', price);
    formData.append('stock', stock);
    formData.append('category_id', category);
    formData.append('discount', discount);
    formData.append('image', {
      uri: this.state.uri,
      type: 'image/jpeg',
      name: this.state.fileName,
    });
    formData.append('description', description);


    this.setState({loading:true})
    fetch('https://api-oceanstore.herokuapp.com/api/seller', {
      method: 'POST',
      headers: {
       
        Authorization: `Bearer ${this.state.token}`,
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((response) => {
        console.log('ini response',response);
        if (response.status === 'success') {
          ToastAndroid.show('Berhasil Membuat Barang!', 1000);
          this.props.navigation.navigate('Screenstore')
          this.setState({loading:false})
        } else {
          alert('Gagal');
          this.setState({loading:false})

        }
      })
      .catch((error) => console.log(error));
  };
  

  render() {
    return (
      <View style={Styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Image
            style={Styles.imgback}
            source={require('../assets/whiteback.png')}
          />
        </TouchableOpacity>
        <ScrollView>
          <View>
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
                style={Styles.img}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 10,
                color: '#fff',
                alignSelf: 'center',
                top: 5,
              }}>
              *Maksimal 2MB*
            </Text>
           
          </View>

          <Text style={Styles.txtname}>Product :</Text>
          <TextInput
            onChangeText={(product) => this.setState({product})}
            style={Styles.inputname}
          />
          <View style={Styles.viewpricestock}>
            <Text style={Styles.txtprice}>Price :</Text>
            <Text style={Styles.txtstock}>Stock :</Text>
          </View>
          <View style={Styles.viewinput}>
            <TextInput
              onChangeText={(price) => this.setState({price})}
              keyboardType={'number-pad'}
              style={Styles.inputprice}
            />

            <TextInput
              onChangeText={(stock) => this.setState({stock})}
              keyboardType={'number-pad'}
              style={Styles.inputstock}
            />
          </View>
          <View style={Styles.viewcategorydiscount}>
            <Text style={Styles.txtcategory}>Category :</Text>
            <Text style={Styles.txtdiscount}>Discount :</Text>
          </View>
          <View style={Styles.viewinput2}>
            <View style={Styles.viewpicker}>
              <Picker
                selectedValue={this.state.category.toString()}

                onValueChange={(itemValue, itemindex) =>
                  this.setState({category: itemValue})
                }>
                <Picker.Item label='category' value="0"/>
                <Picker.Item label="Fashion" value="1" />
                <Picker.Item label="Electronic" value="2" />
                <Picker.Item label="Food" value="3" />
                <Picker.Item label="Other" value="4" />
              </Picker>
            </View>
            <TextInput
              onChangeText={(discount) => this.setState({discount})}
              style={Styles.inputdiscount}
              keyboardType={'number-pad'}
            />
          </View>
          <Text style={Styles.txtdescription}>Description :</Text>
          <TextInput
            onChangeText={(description) => this.setState({description})}
            style={Styles.description}
            multiline={true}
          />
          <TouchableOpacity
            style={Styles.touchadd}
            onPress={() => this.Addproduct()}>
            {this.state.loading == false ? (
            <Text>Addproduct</Text>

            ) : (
              <ActivityIndicator color={"#fff"}/>
            )}
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
