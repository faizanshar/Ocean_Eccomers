import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  RefreshControl,
  ScrollView,
  TextInput,
} from 'react-native';
import {Styles} from './Stylehome2';
import Shoopingcarticon from '../Shoopingcarticon/Shoopingcarticon';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';
import LottieView from 'lottie-react-native';

export default class Homescreen extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
      refresh: false,
      loading: false,
    };
  }
  onRefreshControl() {
    this.setState({refresh: true});
    this.getProduct();
  }
  // renderItem = ({item}) => {
  //   return (
  //     <View>
  //       <TouchableOpacity
  //         >
  //         <View
  //           key={item}
  //           style={{
  //             backgroundColor: '#fff',
  //             width: 150,
  //             height: 150,
  //             margin: 10,
  //             alignItems: 'center',
  //             marginLeft: 15,
  //             borderRadius: 20,
  //           }}>
  //           <Image
  //             source={{
  //               uri:
  //                 'data:image/jpeg;base64,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',
  //             }}
  //             style={{width: 100, height: 100}}
  //           />
  //           <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
  //             {item.name}
  //           </Text>
  //           <Text style={{fontSize: 10, fontWeight: 'bold', color: 'green'}}>
  //             Rp.{item.price}
  //           </Text>
  //           <Text style={{fontSize: 10, fontWeight: 'bold', color: 'black'}}>
  //             {item.stock}
  //           </Text>
  //         </View>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // };

  getProduct() {
    const url = 'https://api-oceanstore.herokuapp.com/api/products';
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: responseJson.data,
          refresh: false,
          loading: true,
        });
        // this.setState({})
      })
      .catch((error) => {
        console.log(error);
      });
    // this.setState({refresh: false});
  }

  componentDidMount() {
    AsyncStorage.getItem('token')
      .then((value) => {
        if (value !== null) {
          this.setState({token: value, refresh: false});
          this.getProduct();
        } else {
          this.getProduct();
          this.props.navigation.navigate('Home');
        }
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <View style={Styles.container}>
        <View style={Styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
            <Image
              style={Styles.imgmenu}
              source={require('../assets/Whitemenu.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Chatscreen')}>
            <Image
              style={Styles.imgchat}
              source={require('../assets/Chat.png')}
            />
          </TouchableOpacity>

          {/* <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Favoritescreen')}>
            <Image
              style={Styles.imglove}
              source={require('../assets/Love.png')}
            />
          </TouchableOpacity> */}

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('CartScreen')}>
            <Shoopingcarticon />
          </TouchableOpacity>
        </View>

        <View style={Styles.header2}>
        <TouchableOpacity onPress={()=>this.props.navigation.navigate("Searchscreen")}>

          <View style={Styles.viewinput}>
          <Text style={{color:'#ddd',marginLeft:10}}>Search</Text>
            {/* <TextInput style={{marginLeft: 5}} placeholder={'Search'} /> */}
            <TouchableOpacity>
              <Image
                style={Styles.imgseacrh}
                source={require('../assets/Bluesearch.png')}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        </View>

        {/* <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refresh}
              onRefresh={() => this.onRefreshControl()}
            />
          }>
          <View style={{height: 220}}>
            <Swiper autoplay={true}>
              <TouchableOpacity>
                <View>
                  <Image
                    style={Styles.img}
                    source={{
                      uri:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTanwp9seVrBe2Dgng2CvfbuUmC_Ej_-AwJ4w&usqp=CAU',
                    }}
                  />
                  <Text style={Styles.txt}>Description1</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View>
                  <Image
                    style={Styles.img}
                    source={{
                      uri:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR-Zj5wln3UpXMwWJAeomk4s0aZ9aYwVNj2ow&usqp=CAU',
                    }}
                  />
                  <Text style={Styles.txt}>Description2</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View>
                  <Image
                    style={Styles.img}
                    source={{
                      uri:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLIaKZrpD9aS0PGfi65lLwNClt3PmLoQmyzg&usqp=CAU',
                    }}
                  />
                  <Text style={Styles.txt}>Description3</Text>
                </View>
              </TouchableOpacity>
            </Swiper>
          </View>

          <Text style={Styles.categories}>Product :</Text> */}

        {this.state.loading == false ? (
          <View>
            <LottieView
              source={require('../assets/21788-loading-animation.json')}
              autoPlay={true}
              style={Styles.imgloading}
            />
            <Text style={Styles.txtloading}>Wait a minute</Text>
          </View>
        ) : (
          <ScrollView
            // scrollsToTop={false}
            // oncon
            // ref={ref => {this.scrollView = ref}}
            // onContentSizeChange={() => this.scrollView.scrollToEnd({animated: true})}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refresh}
                onRefresh={() => this.onRefreshControl()}
              />
            }>
            <View style={{height: 220}}>
              <Swiper autoplay={true}>
                <TouchableOpacity>
                  <View>
                    <Image
                      style={Styles.img}
                      source={{
                        uri:
                          'data:image/jpeg;base64,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',
                      }}
                    />
                    {/* <Text style={Styles.txt}>Description1</Text> */}
                  </View>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View>
                    <Image
                      style={Styles.img}
                      source={{
                        uri:
                          'data:image/jpeg;base64,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',
                      }}
                    />
                    {/* <Text style={Styles.txt}>Description2</Text> */}
                  </View>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View>
                    <Image
                      style={Styles.img}
                      source={{
                        uri:
                          'data:image/jpeg;base64,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',
                      }}
                    />
                    {/* <Text style={Styles.txt}>Description3</Text> */}
                  </View>
                </TouchableOpacity>
              </Swiper>
            </View>
            <View style={Styles.viewcategory}>
              <TouchableOpacity style={Styles.touchcategory} onPress={()=>this.props.navigation.navigate("Fashionscreen")}>
                <Image
                  style={Styles.imgcategory}
                  source={require('../assets/fashion.png')}
                />
                <Text style={Styles.txtcategory}>Fashion</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Styles.touchcategory} onPress={()=>this.props.navigation.navigate("ElectronicsScreen")}>
                <Image
                  style={Styles.imgcategory}
                  source={require('../assets/electronic.png')}
                />
                <Text style={Styles.txtcategory}>Electronic</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Styles.touchcategory} onPress={()=>this.props.navigation.navigate("Foodscreen")}>
                <Image
                  style={Styles.imgcategory}
                  source={require('../assets/food.png')}
                />
                <Text style={Styles.txtcategory}>Food</Text>
              </TouchableOpacity>
              <TouchableOpacity style={Styles.touchcategory} onPress={()=>this.props.navigation.navigate("Otherscreen")}>
                <Image
                  style={Styles.imgcategory}
                  source={require('../assets/other.png')}
                />
                <Text style={Styles.txtcategory}>Other</Text>
              </TouchableOpacity>
            </View>
            {/* <Text style={Styles.categories}>Product :</Text> */}
            <View style={Styles.containercategories}>
            {/* <Text>
              {this.state.dataSource.name}
            </Text> */}
              {this.state.dataSource.map((item, index) => {
                return (
                  <TouchableOpacity
                    // onPress={() =>
                    //   this.props.navigation.navigate('Description', {
                    //     id: item.id,
                    //     name: item.name,
                    //     price: item.price,
                    //     description: item.description,
                    //     stock: item.stock,
                    //     discount: item.discount,
                    //     totalPrice: item.totalPrice,
                    //     rating: item.rating
                    //   })
                    // }
                    key={index}
                    style={Styles.viewproduct}
                    onPress={() =>
                      this.props.navigation.navigate('Description', {
                        item: item,
                      })
                    }>
                    <Image
                      style={Styles.imgproduct}
                      source={{
                        uri: item.image_url,
                        // 'data:image/jpeg;base64,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',
                      }}
                    />

                    <Text style={Styles.txtnameproduct}>{item.name}</Text>
                    <Text style={Styles.txtpriceproduct}>
                      {item.totalPrice}
                    </Text>
                    {/* <View style={Styles.viewstar}>
                      <Image
                        style={Styles.imgstar}
                        source={require('../assets/star.png')}
                      />
                      <Text style={Styles.txtrating}>{item.rating}</Text>
                    </View> */}
                    {/* <Text style={Styles.txtpriceproduct}>Rp.{item.discount}</Text> */}
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        )}
      </View>
    );
  }
}
