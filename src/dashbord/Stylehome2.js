import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  header: {
    backgroundColor: '#063852',
    // backgroundColor:"#a8d0da",
    width: '100%',
    height: 60,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  imgmenu: {
    width: 30,
    height: 30,
    marginBottom: 100,
    marginRight: 150,
    bottom: -10,
  },
  imgchat: {
    width: 30,
    height: 30,
    left: 5,
    marginBottom: 100,
    marginLeft: 70,
    bottom: -10,
  },
  imglove: {
    width: 35,
    height: 40,
    left: 13,
    marginBottom: 100,
    // marginLeft:30,
    bottom: -7,
  },
  header2: {
    backgroundColor: '#063852',
    // backgroundColor:'#a8d0da',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    flexDirection: 'row',
    // borderRadius:20
  },
  viewinput: {
    backgroundColor: '#fff',
    width: 300,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
  },
  imgseacrh: {
    width: 25,
    height: 25,
    marginRight: 5,
  },
  wrapper: {},
  img: {
    width: '100%',
    height: 200,
  },
  txt: {
    position: 'absolute',
    bottom: 10,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'red',
  },
  categories: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
    color:'black',
    textShadowColor:'#fff',
    textShadowRadius:1,
    textShadowOffset: {
      width:1,
      height:1
    }
  },
  containercategories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor:'red',
    // marginHorizontal:15,
    justifyContent: 'space-between',
    padding:5

    // salignItems:'center',
  },
  // viewcategories: {
  //   // width: 80,
  //   // height: 80,
  //   // backgroundColor: '#fff',
  //   // marginLeft: 8,
  //   // marginTop: 10,
  //   // borderRadius: 15,
  //   // borderWidth: 2,
  //   // alignItems: 'center',
  //   // // flexDirection:'row'
  //   width: 170,
  //   height: 230,
  //   backgroundColor: '#ddd',
  //   marginTop: 10,
  //   // marginLeft: 5,
  //   borderRadius: 10,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  imgcategories: {
    width: 35,
    height: 35,
    marginTop: 10,
  },
  txtcategories: {
    marginTop: 5,
  },
  viewproduct: {
    width: 170,
    height: 220,
    backgroundColor: '#ddd',
    marginTop: 10,
    // marginLeft: 5,
    // borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor:'black',
    shadowRadius:100,
    shadowOffset: {
      width:10,
      height:10
    },
    marginBottom:5,
    elevation:5
    
    // shadowOpacity:0.5
  },
  imgproduct: {
    width: 150,
    height: 140,
    marginTop:10
  },
  txtnameproduct: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
    marginLeft: 10,
    textShadowColor:'#fff',
    textShadowRadius:1,
    textShadowOffset: {
      width:1,
      height:1
    }
    // top:10
  },
  txtpriceproduct: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'green',
    // marginTop: 20,
    marginLeft: 10,
    // top:20
  },  
  viewstar: {
    width:20,
    height:20,
    flexDirection:'row',
    // marginTop:30,
    alignItems:'center',
    marginRight:150
  },
  imgstar: {
    width:10,
    height:10
  },
  txtrating: {
    fontSize:10,
    fontWeight:'bold',
    
  },
  imgloading: {
    width:150,
    height:150,
    alignSelf:'center',
    marginTop:70
  },
  txtloading: {
    alignSelf:'center',
    fontSize:18,
    fontWeight:'bold',
    marginTop:50
  },
  viewcategory: {
    width:'100%',
    height:100,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    marginTop:10
  },
  touchcategory: {
    width:80,
    height:80,
    backgroundColor:'#ddd',
    borderRadius:10,
    elevation:10,
    alignItems:'center',
    justifyContent:'center'
  },
  imgcategory: {
    width:30,
    height:30
  },
  txtcategory: {
    fontWeight:'bold',
    fontSize:15,
    marginTop:10
  }
});

