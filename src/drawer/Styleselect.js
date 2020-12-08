import {StyleSheet} from 'react-native';
import { block } from 'react-native-reanimated';

export const Styles = StyleSheet.create({
  container: {
    backgroundColor: '#063852ff',
    // backgroundColor:'#a8d0da',
    flex: 1,
    alignItems: 'center',
  },
  imglogo: {
    // backgroundColor:'red',
    width: 250,
    height: 200,
    marginTop: 50,
  },
  txtlogo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff',
    position: 'absolute',
    marginTop: 220,
  },
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
    width: 40,
    height: 50,
    backgroundColor: 'red',
    marginLeft: 150,
  },
  modalView: {
    margin: 20,
    // backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
  },
  openButton: {
    backgroundColor: '#ffff',
    borderRadius: 20,
    padding: 15,
    width: 110,
    marginTop: 100,
    marginLeft:-5,
    marginRight:-5,
    textShadowOffset: {
      width:1,
      height:1
    },
    textShadowColor:2
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  containermodal: {
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  viewmodal: {
    backgroundColor: 'white',
    height: 500,
    marginTop: 100,
    width: 300,
    borderRadius:10,
    // justifyContent:'center',
    alignItems:'center',
    borderColor:'#063852ff',
    // borderColor:'#a8d0da',
    borderWidth:5
  },
  imgclose: {
    width:20,
    height:20,
    marginLeft:250,
    marginTop:15
  },
  viewuser: {
    width:250,
    height:50,
    backgroundColor:'#fff',
    marginTop:20,
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center',
    borderColor:"#063852ff",
    borderWidth:2
  },
  inputuserlog: {
    width:205,
    height:50,
    marginLeft:5
    // backgroundColor:'#00ffff',
    // marginTop:60
  },
  imguser: {
    width:30,
    height:30,
    // marginRight:50,
    // backgroundColor:'red'
  },
  viewpassword: {
    width:250,
    height:50,
    backgroundColor:'#fff',
    marginTop:20,
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center',
    borderColor:'#063852ff',
    borderWidth:2
  },
  inputpasswordlog: {
    width:205,
    height:50,
    marginLeft:5
  },
  imgpassword: {
    width:30,
    height:30,
    marginRight:100,
    
  },
  touchlogin: {
    backgroundColor:'black',
    width:250,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginTop:20
  },
  txtlogin: {
    fontSize:17,
    color:'#fff'
  },
  txtnotregistered: {
    marginTop:10
  },
  viewname: {
    width:250,
    height:50,
    backgroundColor:'#fff',
    marginTop:40,
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center',
    borderColor:'#063852ff',
    borderWidth:2,
    justifyContent:'space-between'    
  },
  inputusername: {
    width:205,
    height:50,
    marginLeft:5
   
  },
  viewemail: {
    width:250,
    height:50,
    backgroundColor:'#fff',
    marginTop:100,
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center',
    borderColor:'#063852ff',
    borderWidth:2,
    justifyContent:'space-between'
  }
});
