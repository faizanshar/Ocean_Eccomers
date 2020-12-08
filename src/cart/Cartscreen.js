import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, ToastAndroid} from 'react-native';
import {styles} from './Stylecart';
import AsyncStorage from '@react-native-community/async-storage';
import {ScrollView} from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';

export default class Cartscreen extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
      dataSource2: [],
    };
  }
  componentDidMount() {
    AsyncStorage.getItem('token')
      .then((value) => {
        if (value !== null) {
          this.setState({token: value});
          this.getProduct();
        } else {
          alert('Silahkan Login Dahulu!');
          this.props.navigation.navigate('Home');
        }
      })
      .catch((err) => console.log(err));
  }
  deleteProduct(index) {
    fetch(
      `https://api-oceanstore.herokuapp.com/api/checkout/${this.state.dataSource[index].id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.state.token}`,
        },
      },
    )
      .then((res) => res.json()) // or res.json()
      .then((res) => console.log(res))
      .catch((err) => {
        console.log(err);
      });
  }
  // getProduct() {
  //   const url = 'http://api-oceanstore.herokuapp.com/api/cart'  ;
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       console.log('ini respon',responseJson);
  //       this.setState({
  //         dataSource: responseJson.cart,
  //         // refresh:false
  //       });
  //       // this.setState({})
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   // this.setState({refresh: false});
  // }
  checkOut() {
    fetch('https://api-oceanstore.herokuapp.com/api/checkout', {
      method: 'POST',
      headers: {
        // 'Content-Type': 'application/json',
        Authorization: `Bearer ${this.state.token}`,
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('ini', responseJson);
        ToastAndroid.show('Pesanan telah dikirimkan!', 1000);
        this.props.navigation.navigate('Home2');
        // this.setState({})
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getProduct() {
    fetch('https://api-oceanstore.herokuapp.com/api/cart', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.state.token}`,
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('ini', responseJson);
        this.setState({
          dataSource: responseJson.product,
          dataSource2: responseJson.order,
          // refresh:false
        });
        // this.setState({})
      })
      .catch((error) => {
        console.log(error);
      });
  }
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

          <Text style={styles.txtcartscreen}>CartScreen</Text>
        </View>
        <ScrollView>
          {this.state.dataSource.length === 0 ? (
            <View style={styles.empty}>
              <LottieView
                source={require('../assets/629-empty-box.json')}
                autoPlay={true}
                style={styles.imgempty}
              />
              <Text style={styles.txtempty}>Nothing Items</Text>
            </View>
          ) : (
            <View>
              {this.state.dataSource2.status == 0 ? (
                <View>
                  {this.state.dataSource.map((item, index) => {
                    return (
                      <View key={index}>
                        <View style={styles.viewall}>
                          <TouchableOpacity style={styles.containerproduct}>
                            <Image
                              style={styles.img}
                              source={{uri: item.image_url}}
                            />
                            <View style={styles.viewproduct}>
                              <Text style={styles.txtnameproduct}>
                                {item.product_name}
                              </Text>
                              <Text style={styles.txtprice}>
                                Rp.{item.price}
                              </Text>
                              <Text style={styles.txtprice2}>
                                Rp.{(100 / (100 - item.discount)) * item.price}
                              </Text>
                              <Text style={styles.txtamount}>
                                Amount: {item.quantity}
                              </Text>
                            </View>
                            <View>
                              <View style={styles.viewdiscount}>
                                <Text style={styles.txtdiscount}>
                                  {item.discount}%
                                </Text>
                              </View>
                              <TouchableOpacity
                                onPress={() => this.deleteProduct(index)}>
                                <Image
                                  style={styles.imgtrash}
                                  source={require('../assets/sampah.png')}
                                />
                              </TouchableOpacity>
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    );
                  })}
                </View>
              ) : (
                <View></View>
              )}
            </View>
          )}
        </ScrollView>
        {this.state.dataSource.length === 0 ? (
          <View></View>
        ) : (
          <View style={styles.viewcheckot}>
            <View style={{width: 360, borderBottomWidth: 1}}>
              <Text style={styles.txttotal}>
                Rp.{this.state.dataSource2.total_price}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.touchcheckout}
              onPress={() => this.checkOut()}>
              <Text style={styles.txtcheckout}>Check Out</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

// import React, {Component} from 'react';
// import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
// import Products from '../categori/Products';
// import {connect} from 'react-redux';
// import ShoopingCartIcon from '../Shoopingcarticon/Shoopingcarticon';

// class Cartscreen extends Component {
//     constructor(){
//         super()
//     }
//   render() {
//     console.log(this.props.cartItems);
//     return (
//       <View style={styles.container}>
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             height: 45,
//             backgroundColor: '#00ffff',
//           }}>
//           <View style={{flexDirection: 'row', alignItems: 'center'}}>
//             <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
//               <Image
//                 source={require('../assets/whiteback.png')}
//                 style={{height: 20, width: 20, marginLeft: 10}}
//               />
//             </TouchableOpacity>
//             <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 15}}>
//               Keranjang Saya
//             </Text>
//           </View>
//           <TouchableOpacity
//             onPress={() => this.props.navigation.navigate('Cartscreen')}>
//             <ShoopingCartIcon />
//           </TouchableOpacity>
//         </View>

//         {this.props.cartItems.length > 0 ? (
//           <Products
//             onPress={this.props.removeItem}
//             products={this.props.cartItems}
//             // checkout={this.props.cartItems}
//           />
//         ) : (
//           <View
//             style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//             <Text style={{fontSize: 14, color: 'rgba(0,0,0,0.6)'}}>Silahkan Beli Barangnya BRO!!!!</Text>
//           </View>
//         )}
//       </View>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     cartItems: state,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeItem: (products) =>
//       dispatch({type: 'REMOVE_FROM_CART', payload: products}),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Cartscreen);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
