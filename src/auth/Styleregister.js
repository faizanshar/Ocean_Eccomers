import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent:'center',
    backgroundColor: '#063852ff',
  },
  imgback: {
    width: 30,
    height: 30,
    marginRight: 320,
  },
  imglogo: {
    width: 200,
    height: 200,
    marginLeft:10
    // marginTop: 0,
    
  },
  viewinput: {
    width: 270,
    height: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    // elevation:100
    // marginBottom:10
  },
  input: {
    width: 230,
    marginLeft: 5,
  },
  img: {
    width: 30,
    height: 30,
  },
  viewinput2: {
    width: 270,
    height: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  touchregister: {
      width:270,
      height:50,
      backgroundColor:'#fff',
      alignItems:'center',
      justifyContent:'center',
      marginTop:30,
      borderRadius:10
  },
  txtregister: {
      fontSize:18,
      fontWeight:'bold',
      color:'black'
  }
});
