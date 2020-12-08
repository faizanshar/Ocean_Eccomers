import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {Styles} from './Stylecategori';
import Shoopingcarticon from '../Shoopingcarticon/Shoopingcarticon';
import {ScrollView} from 'react-native-gesture-handler';
// import BooksScreen from './BooksScreen';

export default class Categori extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
    };
  }

  componentDidMount() {
    const url = 'https://api-oceanstore.herokuapp.com/api/categories';
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('KETERANGAN ' + JSON.stringify(responseJson));
        this.setState({
          dataSource: responseJson.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // MoveScreen = (id) => {
  //   if (id == 1) {
  //     this.props.navigation.navigate('ClothesScreen', {id: 1});
  //   } else if (id == 2) {
  //     this.props.navigation.navigate('BooksScreen', {id: 2});
  //   } else if (id == 3) {
  //     this.props.navigation.navigate('ElectronicsScreen', {id: 3});
  //   } else if (id == 4) {
  //     this.props.navigation.navigate('FoodScreen', {id: 4});
  //   }
  // };
  render() {
    // const {id, name} = this.state.dataSource;
    return (
      <View style={Styles.container}>
        <View style={Styles.header}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home2')}>
            <Image
              style={Styles.imgback}
              source={require('../assets/whiteback.png')}
            />
          </TouchableOpacity>
          <Text style={Styles.txtcategori}>Categori</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('CartScreen')}>
            <View style={Styles.imgcart}>
              <Shoopingcarticon />
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <TouchableOpacity style={Styles.touchfashion} onPress={()=>this.props.navigation.navigate("Fashionscreen")}>
            {/* <View style={Styles.viewfashion}> */}
              <Image style={Styles.imgclothes} source={require('../assets/pakaian.png')}/>
              <Text style={Styles.txtfashion}>Fashion</Text>
            {/* </View> */}
          </TouchableOpacity>

          <TouchableOpacity style={Styles.touchfashion} onPress={()=>this.props.navigation.navigate("ElectronicsScreen")}>
            {/* <View style={Styles.viewfashion}> */}
              <Image style={Styles.imgelectronic} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV3Dypewej8FDxKVeOBblJ_XrtlZfEODPTDA&usqp=CAU'}}/>
              <Text style={Styles.txtfashion}>Electronic</Text>
            {/* </View> */}
          </TouchableOpacity>

          <TouchableOpacity style={Styles.touchfashion} onPress={()=>this.props.navigation.navigate("Foodscreen")}>
            {/* <View style={Styles.viewfashion}> */}
              <Image style={Styles.imgfood} source={{uri:'data:image/jpeg;base64,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'}}/>
              <Text style={Styles.txtfashion}>Food</Text>
            {/* </View> */}
          </TouchableOpacity>

          <TouchableOpacity style={Styles.touchother} onPress={()=>this.props.navigation.navigate("Otherscreen")}>
            {/* <View style={Styles.viewfashion}> */}
              <Image style={Styles.imgother} source={{uri:'data:image/png;base64,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'}}/>
              <Text style={Styles.txtfashion}>Other</Text>
            {/* </View> */}
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
