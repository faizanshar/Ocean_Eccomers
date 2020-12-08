import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems:'center'
  },
  containerheader: {
    width:'100%',
    height: 40,
    backgroundColor: '#063852',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgback: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  txtmystore: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 30,
    color: '#fff',
  },
  touchadd: {
    width: 55,
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    marginBottom: 10,
    backgroundColor: '#ddd',
    opacity: 0.6,
    marginLeft: 300,
    position: 'absolute',
    bottom: 10,
  },
  img: {
    width: 20,
    // backgroundColor:'red',
    height: 20,
  },
  imgprofile: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginTop: 10,
    marginLeft: 10,
  },
  containerprofile: {
    width:'100%',
    height: 90,
    backgroundColor: '#063852',
    // alignItems :'center'
  },
  viewimgname: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  txtname: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 20,
    top: 20,
  },
  
  containerprofile2: {
   flexDirection:'row',
   alignItems:'center',
  //  top:20
  },
  imgmap: {
    width: 10,
    height: 10,
    // marginTop:20,
    marginBottom:30,
    marginLeft:10,
    top:20
  },
  txtmap: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    // marginTop:10,
    marginBottom:30,
    marginLeft:5,
    top:20

  },
  viewtoko: {
    width: 300,
    height: 40,
    // backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop:10,
    borderBottomWidth: 1,
  },
  txttoko: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  inputtoko: {
    width: 200,
    height: 40,
    // backgroundColor:'red',
    borderTopRightRadius: 10,
  },
  viewnama: {
    width: 300,
    height: 40,
    // backgroundColor: '#fff',
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop:10,
    borderBottomWidth: 1,
  },
  txtnama: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  inputnama: {
    width: 200,
    height: 40,
    // backgroundColor:'red',
    // borderTopRightRadius:10
  },
  viewalamat: {
    width: 300,
    height: 40,
    // backgroundColor: '#fff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginTop:10,
    borderBottomWidth: 1,
  },
  txtalamat: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
  },
  inputalamat: {
    width: 200,
    height: 40,
    // backgroundColor:'red',
    borderBottomRightRadius: 10,
  },
  containerproduct: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor:'red',
    // marginHorizontal:15,
    justifyContent: 'space-between',
    padding:5
  },
  vieweditdelete: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 170,
    // marginBottom:2
  },
  imgedit: {
    width: 15,
    height: 15,
    marginLeft: 10,
  },
  imgcancel: {
    width: 20,
    height: 20,
    // marginLeft: 150,
  },
  viewproduct: {
    width: 170,
    height: 230,
    backgroundColor: '#ddd',
    marginTop: 10,
    // marginLeft: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgproduct: {
    width: 140,
    height: 140,
    marginBottom:20
  },
  txtnameproduct: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    // marginTop: 15,
    marginLeft: 10,
    bottom:5
  },
  txtpriceproduct: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'green',
    // marginTop: 20,
    marginLeft: 10,
    marginBottom:20
  },
  viewstar: {
    width: 20,
    height: 20,
    flexDirection: 'row',
    // marginTop:30,
    alignItems: 'center',
    marginRight: 150,
    marginTop: 10,
  },
  imgstar: {
    width: 10,
    height: 10,
  },
  txtrating: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  imgnothing: {
    width:320,
    height:320,
    marginLeft:20
    // marginTop:10
  },
  txtnothing: {
    fontSize:25,
    // color:'black',
    fontWeight:'bold',
    textShadowColor:'black',
    // textShadowOffset: {
    //   width:1,
    //   height:1
    // },
    // textShadowRadius:1,
    color:'black',
    textAlign:'center',
    // backgroundColor:'red',
    width:'100%'
    // color:'gray'
    // width:10
    
  },
  imgnotif: {
    width:25,
    height:25,
    marginLeft:200
  }
});
