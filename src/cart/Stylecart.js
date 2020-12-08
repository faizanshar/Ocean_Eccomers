import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerheader: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#063852',
  },
  imgback: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  txtcartscreen: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 30,
  },
  containerproduct: {
    width: '100%',
    height: 180,
    backgroundColor: '#ddd',
    marginTop: 5,
    // borderWidth:1
    marginBottom: 5,
    flexDirection: 'row',
    elevation: 20,
    // alignItems: 'center',
    justifyContent:'space-between'
    // borderWidth:2,
  },
  viewproduct: {
    alignSelf:'flex-start'
      // marginRight:80
  },
  img: {
    width: 80,
    height: 80,
    // alignSelf:'flex-start',
    marginTop:20,
    marginLeft: 10,
    // marginBottom: 20,
  },
//   viewall: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent:'space-between'
//   },
  txtnameproduct: {
    fontSize: 18,
    fontWeight: 'bold',
    // marginLeft: 20,
    textShadowColor: '#fff',
    textShadowRadius: 1,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    marginRight:90,
    marginTop:15
  },
  txtprice: {
    fontSize: 15,
    color: 'green',
    marginLeft: 20,
    // marginBottom: 50,
    marginTop: 10,
  },
  txtprice2: {
    fontSize: 12,
    color: 'gray',
    textDecorationLine: 'line-through',
    marginLeft: 20,
    marginBottom:80
  },
  txtamount: {
      fontSize:13,
      fontWeight:'bold',
      marginLeft:10,
    //   marginTop:20
  },
  viewdiscount: {
      width:50,
      height:50,
      backgroundColor:'yellow',
      alignItems:'center',
      justifyContent:'center',
    //   marginBottom:120,
      marginRight:5,
      borderBottomRightRadius:50,
      borderBottomLeftRadius:50,
      alignSelf:'center'
      // marginLeft:20
    //   alignSelf:'center'
    // alignSelf:'center'
      
  },
  txtdiscount: {
      fontSize:15,
      fontWeight:'bold',
      color:'red'
  },
  imgtrash: {
    width:30,
    height:30,
    marginRight:10,
    marginTop:100,
    // marginLeft:30
    alignSelf:'flex-end'
},
  viewcheckot: {
      width:360,
      height:80,
    //   flexDirection:'row'
      backgroundColor:'#eee'
  },
  txttotal: {
      fontSize:25,
      fontWeight:'bold',
      marginLeft:10,
      color:'green',
    //   width:360,
    //   borderBottomWidth:1  
  },
  touchcheckout: {
      width:360,
      height:52,
      backgroundColor:'#ddd',
      justifyContent:'center',
      alignItems:'center'
  },
  txtcheckout: {
      fontSize:20,
      fontWeight:'bold'
  },
  empty: {
    // flex:1,
    height:'100%',
    alignItems:'center',
    
  },
  imgempty: {
    width:200,
    height:200,
    marginTop:60
  },
  txtempty: {
    fontSize:18,
    fontWeight:'bold',
    marginTop:20
  }
});
