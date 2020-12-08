import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor:'#ddd'
  },
  containerheader: {
    backgroundColor: '#063852',
    width: '100%',
    height: 50,
    // justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgback: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  txtprofile: {
    fontSize: 20,
    color: '#fff',
    marginLeft: 30,
    fontWeight: 'bold',
  },
  imgprofile: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 50,
    marginLeft:90
    // marginLeft: 90,
    // elevation:10
  },
  containerinput: {
    width:300,
    height:210,
    backgroundColor:"#fff",
    borderRadius:10,
    marginTop:50,
    elevation:10,
    // resizeMode:'contain2'
  },
  viewname: {
    width:300,
    height:40,
    // backgroundColor:'#fff',
    // borderRadius:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    borderColor:'black',
    borderBottomWidth:1,
    marginTop:10
  },
  txtname:{
    fontSize:15,
    fontWeight:'bold',
    marginLeft:10,
  },
  inputname: {
    width:200,
    height:40,
    // backgroundColor:'red',
    borderTopRightRadius:10,
    fontSize:15,
    fontWeight:'bold',
    textAlign:'center'
  },
  viewemail:{
    width:300,
    height:40,
    // backgroundColor:'#fff',
    // borderRadius:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderColor:'black',
    borderBottomWidth:1,
    marginTop:10
  },
  txtemail: {
    fontSize:15,
    fontWeight:'bold',
    marginLeft:10
  },
  inputemail: {
    width:200,
    height:40,
    fontSize:15,
    fontWeight:'bold',
    textAlign:'center'
  },
  viewadress: {
    width:300,
    height:40,
    // backgroundColor:'#fff',
    // borderRadius:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderColor:'black',
    borderBottomWidth:1,
    marginTop:10,

  },
  txtadress: {
    fontSize:15,
    fontWeight:'bold',
    marginLeft:10
  },
  inputadress: {
    width:200,
    // height:40,
    textAlign:'center',
    fontWeight:'bold'

    // backgroundColor:'red',
  },
  viewnumber: {
    width:300,
    height:40,
    // backgroundColor:'#fff',
    // borderRadius:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderColor:'black',
    // borderBottomWidth:1,
    marginTop:10

  },
  txtnumber: {
    fontSize:15,
    fontWeight:'bold',
    marginLeft:10
  },
  inputnumber: {
    width:200,
    height:40,
    // backgroundColor:'red'
    textAlign:'center',
    fontWeight:'bold'

  },
  alltouch: {
    flexDirection:'row',
    marginTop:50,
    justifyContent:'space-between',
    width:300
  },
  touchedit: {
    backgroundColor:'gray',
    alignItems:'center',
    justifyContent:'center',
    width:140,
    height:40,
    borderRadius:20,
    marginTop:30,
    elevation:10,
    marginLeft:80
    
  },
  txtedit:{
    fontSize:15,
    fontWeight:'bold',
    color:'#fff'
    
  },
  touchstore: {
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    width:140,
    height:40,
    borderRadius:20
  },
  txtstore:{
    fontSize:15,
    fontWeight:'bold',
    
  },
});
