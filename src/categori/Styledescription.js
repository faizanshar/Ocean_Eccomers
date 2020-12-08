import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#063852ff',
  },
  containerheader: {
    width:'100%',
    height: 40,
    // justifyContent: 'center',
    backgroundColor: '#063852',
    // backgroundColor:'#a8d0da',
    flexDirection:'row',
    alignItems:'center'
  },
  viewimg: {
    alignItems: 'center',
    borderColor: '#fff',
    borderWidth: 2,
    width:'100%',
    
  },
  imgcart: {
    marginLeft:270,
    // backgroundColor:'red'
  },
  viewproduct: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  txtnameproduct: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 15,
    marginLeft: 10,
    color: '#fff',
  },
  viewdiscount: {
    backgroundColor: '#ffe414',
    width: 50,
    height: 50,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    // marginLeft: 255,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtdiscount: {
    color:"red",
    fontSize:16,
    fontWeight:'bold'
  },
  viewprice: {
    // flexDirection:'row'
  },
  txtnameprice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5fff42',
    marginTop: 30,
    marginLeft: 10,
    // textDecorationLine: 'line-through',
  },
  txtnameprice2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#999494',
    marginTop: 20,
    marginLeft: 10,
    textDecorationLine: 'line-through',
    bottom: 10,
  },
  txtdetail: {
    fontSize: 20,
    marginTop: 50,
    marginLeft: 10,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom:10
  },
  viewstore: {
    borderColor: '#777',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: '100%',
    height: 70,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 30,
    // backgroundColor:'#fffsaa'
  },
  imgstore: {
    width: 50,
    height: 50,
    marginLeft: 10,
    borderRadius:40
    
  },
  txtstore: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 20,
    marginLeft: 20,
  },
  viewdetail: {
    width: 360,
    // height: 300,
    borderColor: '#ddd',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    marginBottom: 10,
  }, 
  viewdetailproduct: {
    flexDirection:'row',
    alignItems:'center',
    marginTop:10,
    marginLeft:10
  },
  txtproduct: {
    fontSize:15,
    color:'#fff',
    fontWeight:'bold'
  },
  txtproduct2: {
    fontSize:15,
    color:'#fff',
    fontWeight:'bold',
    marginLeft:10
  },
  viewdetailstock: {
    flexDirection:'row',
    alignItems:'center',
    marginTop:10,
    marginLeft:10
  },
  txtstock: {
    fontSize:15,
    color:'#fff',
    fontWeight:'bold'
  },
  txtstock2: {
    fontSize:15,
    color:'#fff',
    fontWeight:'bold',
    marginLeft:10

  },
  txtdetail2: {
    fontSize:15,
    color:'#fff',
    fontWeight:'bold',
    marginTop:10,
    marginLeft:10
  },
  txtdetail3: {
    fontSize:15,
    color:'#fff',
    fontWeight:'bold',
    marginTop:10,
    marginLeft:10,
    marginBottom:10
    
  },
  viewrating: {
    flexDirection:'row',
    alignItems:'center',
    width:360,
    // marginBottom:10,
    marginTop:10,
    // borderBottomWidth:2,
    // borderColor:'#ddd'
  },
  imgrating:{
    width:15,
    height:15,
    marginLeft:10,
    marginBottom:20
  },
  imgrating2:{
    width:15,
    height:15,
    marginBottom:20

    // marginLeft:10
  },
  txtreviews: {
    fontSize:15,
    color:'#fff',
    fontWeight:'bold',
    marginLeft:20,
    marginBottom:20

  },
  imgnext: {
    width:15,
    height:15,
    marginLeft:170
  },
  viewcrud: {
    width:360,
    height:60,
    flexDirection:'row',
    // marginBottom:10
  },
  touchchat: {
    width:180,
    height:60,
    backgroundColor:'gray',
    alignItems:'center',
    justifyContent:'center'
  },
  touchbuy: {
    width:180,
    height:60,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  },
  imgchat: {
    width:25,
    height:25
  },
  imgbuy: {
    width:25,
    height:25
  },
  viewplusminus: {
    width:120,
    height:50,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'space-evenly',
    flexDirection:'row',
    borderLeftWidth:1,
    borderRightWidth:1,
    marginLeft:235,
    borderRadius:10
  },
  touchplus: {
    alignItems:'center',
    justifyContent:'center',
    width:30,
    height:30,
    // backgroundColor:'#fff'
  },
  txtplus: {
    fontSize:18,
    fontWeight:'bold',
    color:'black'
  },
  touchminus: {
    alignItems:'center',
    justifyContent:'center',
    width:30,
    height:30,
  },
  txtminus: {
    fontSize:30,
    fontWeight:'bold',
    color:'black',
    // backgroundColor:''
  },
  txtnumber: {
    fontSize:18,
    fontWeight:'bold',
    // color:'#fff'
  }
 
});
