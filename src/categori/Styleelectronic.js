import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerheader: {
    width:'100%',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#011a27',
  },
  imgback: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  txtelectronic: {
    fontSize: 20,
    color: '#fff',
    marginLeft: 30,
    fontWeight: 'bold',
  },
  imgcart: {
    marginLeft: 160,
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
    elevation:5,
    borderRadius:10
  },
  imgproduct: {
    width: 160,
    height: 140,
  },
  txtnameproduct: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    marginLeft: 10,
    // textShadowColor:'#fff',
    // textShadowRadius:1,
    // textShadowOffset: {
    //   width:1,
    //   height:1
    // }
  },
  txtpriceproduct: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 10,
    marginLeft: 10,
    // top:20
  },
  viewproduct1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor:'red',
    // marginHorizontal:15,
    justifyContent: 'space-around',
    width:'100%',


  }
});
