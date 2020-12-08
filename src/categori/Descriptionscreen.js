import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {Styles} from './Styledescription';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import Shoopingcarticon from '../Shoopingcarticon/Shoopingcarticon';

export default class Descriptionscreen extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
      dataSource2:[],
      jumlah: '',
      quantity: 0,
    };
  }
  buyProduct() {
    console.log('Mulai Kirim');
    const {quantity} = this.state;
    const dataToSend = {
      quantity: quantity,
    };
    console.log(dataToSend);
    // var data = new FormData();
    // for (var key in dataToSend) {
    //   var encodedKey = key.toString();
    //   var encodedValue = dataToSend[encodedKey];
    //   data.append(encodedKey, encodedValue);
    //   console.log(encodedValue);
    // }
    console.log('ini', this.props.route.params.item.id);
    fetch(
      `https://api-oceanstore.herokuapp.com/api/order/${this.props.route.params.item.id}`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.state.token}`
        },
        body: JSON.stringify(dataToSend),
      },
    )
      .then((res) => res.json()) // or res.json()
      .then((res) => {
        console.log(res);
        const {msg, error} = res;
        console.log(msg);
        if(this.state.token === null){
          // alert("Login dulu")
          ToastAndroid.show("Anda Belum Login",20000)
          // this.props.navigation.navigate("Home")
        }else if (msg) {
          ToastAndroid.show("Berhasil Menambah Barang!",1000)
        }else {
          alert("Silahkan Login Terlebih Dahulu")
          this.props.navigation.navigate("Home")
        }
        // if (msg) {
        //   alert('Berhasil Menambah Barang!');
        //   // AsyncStorage.setItem('token', token);
        //   // this.props.navigation.navigate('Home2');
        // } else {
        //   alert('GAGAL!');
        // }
      })
      .catch((err) => {
        console.log(err);
        alert('ERROR!');
      });
  }
  // this.setState((prevState) => {
  //   return {quantity: prevState.quantity + 1};
  // })
  buyPlus() {
    this.setState(() => {
      return {quantity: this.state.quantity + 1};
    });
  }

  buyMinus() {
    if (this.state.quantity <= 0) {
      this.state.quantity;
    } else {
      this.setState(() => {
        return {quantity: this.state.quantity - 1};
      });
    }
  }
  // renderItem = ({item}) => {
  //     return(
  //         <View>
  //           <Text></Text>
  //         </View>
  //     )
  // }

  // componentDidMount() {
  //   const url = 'http://api-oceanstore.herokuapp.com/api/products/id/reviews';
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       this.setState({
  //         dataSource: responseJson.data
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  // item = () => {
  //   this.setState({id})
  // }

  getProduct() {
    console.log('ini route', this.props.route.params.item);
    const url = `https://api-oceanstore.herokuapp.com/api/products/${this.props.route.params.item.id}`;
    // console.log(this.props.route.params.item.href.link);
    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        // Authorization: `Bearer ${this.state.tokess
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('INI', responseJson);
        this.setState({
          dataSource: responseJson.product,
          dataSource2: responseJson.user
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    AsyncStorage.getItem('token')
      .then((value) => {
        if (value !== null) {
          // console.log(this.props.route.params.item.id);

          this.setState({token: value}, () => {
            this.getProduct();
          });
          // this.buy();
          // this.deleteProduct()
        } else {
          // this.props.navigation.navigate('Home');
          // alert("Login Dlu")
          ToastAndroid.show("Silahkan Login Terlebih Dahulu!",2000)
          this.getProduct()
        }
      })
      .catch((err) => console.log(err));
  }

  // componentDidMount() {
  //   const url = "http://api-oceanstore.herokuapp.com/api/order/" + this.props.route.params.item.id
  //   console.log(this.props.route.params.item.href.link);
  //   fetch(url, {
  //     method: 'GET',
  //     headers: {
  //       'Accept': 'application/json',
  //       Authorization: `Bearer ${this.state.token}`,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       this.setState({
  //         dataSource: responseJson.data,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  // getUser() {
  //   const url = this.props.route.params.item.href.link;

  //   fetch(url, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${this.state.token}`,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       this.setState({
  //         dataSource: responseJson.data,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  render() {
    // const {item} = this.props.route.params;
    return (
      <View
        style={Styles.container}
        >
        <View style={Styles.containerheader}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={{
                width: 20,
                height: 20,
                marginLeft: 10,
                marginTop: 10,
                marginBottom: 10,
              }}
              source={require('../assets/whiteback.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={Styles.imgcart}
            onPress={() => this.props.navigation.navigate('CartScreen')}>
            <Shoopingcarticon />
          </TouchableOpacity>
        </View>
        <ScrollView>
          {/* <View style={Styles.viewimg}> */}
          <Image
            style={{width: 360, height: 300}}
            source={{
              uri: this.state.dataSource.image_url,
              // 'data:image/jpeg;base64,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',
            }}
          />
          {/* </View> */}
          <View style={Styles.viewproduct}>
            <Text style={Styles.txtnameproduct}>
              {this.state.dataSource.name}
            </Text>
            <View style={Styles.viewdiscount}>
              <Text style={Styles.txtdiscount}>
                {this.state.dataSource.discount}%
              </Text>
            </View>
          </View>
          <View style={Styles.viewprice}>
            <Text style={Styles.txtnameprice}>
              Rp.{this.state.dataSource.price}
            </Text>
            <Text style={Styles.txtnameprice2}>
              Rp.{100 / (100 - this.state.dataSource.discount ) * this.state.dataSource.price}
            </Text>
          </View>
          <View style={Styles.viewplusminus}>
            <TouchableOpacity
              onPress={() => this.buyMinus()}
              style={Styles.touchminus}>
              <Text style={Styles.txtminus}>-</Text>
            </TouchableOpacity>
            <Text style={Styles.txtnumber}>{this.state.quantity}</Text>
            <TouchableOpacity
              onPress={
                () => this.buyPlus()
                // this.setState((prevState) => {
                //   return {quantity: prevState.quantity + 1};
                // })
              }
              style={Styles.touchplus}>
              <Text style={Styles.txtplus}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={Styles.viewstore}>
            <Image
              style={Styles.imgstore}
              source={{uri:this.state.dataSource2.avatar_url}}
            />
            <Text style={Styles.txtstore}>{this.state.dataSource2.store}</Text>
          </View>

          <Text style={Styles.txtdetail}>Product details :</Text>

          <View style={Styles.viewdetail}>
            <View style={Styles.viewdetailproduct}>
              <Text style={Styles.txtproduct}>Product :</Text>
              <Text style={Styles.txtproduct2}>
                {this.state.dataSource.name}
              </Text>
            </View>

            <View style={Styles.viewdetailstock}>
              <Text style={Styles.txtstock}>Stock :</Text>
              <Text style={Styles.txtstock2}>
                {this.state.dataSource.stock}
              </Text>
            </View>

            {/* <View style={Styles.viewdetailstock}> */}
            <Text style={Styles.txtdetail2}>Detail :</Text>
            <Text style={Styles.txtdetail3}>
              {this.state.dataSource.description}
            </Text>
            {/* </View */}
          </View>
          
        </ScrollView>

        <View style={Styles.viewcrud}>
          <TouchableOpacity style={Styles.touchchat} onPress={()=>this.props.navigation.navigate("Chatid", {
            item: this.state.dataSource2
          })}>
            <Image
              style={Styles.imgchat}
              source={require('../assets/Chat.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={Styles.touchbuy}
            onPress={() => this.buyProduct()}>
            <Image
              style={Styles.imgbuy}
              source={require('../assets/blackcart.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
