import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerheader: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    backgroundColor: '#011a27',
    flexDirection: 'row',
  },
  imgback: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  txtheader: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 30,
  },
  imgavatar: {
    width:100,
    height:100
  },
  touchchat: {
    width:'100%',
    height:60,
    flexDirection:'row',
    // alignItems:'center',
    marginTop:15,
    // marginBottom:10,
    borderBottomWidth:1,
    borderColor:'#ddd'
  },
  imgavatar: {
    width:50,
    height:50,
    marginLeft:10,
    borderRadius:40
  },
  txtname: {
    fontSize:15,
    fontWeight:'bold',
    marginLeft:15
  },
  txtread1: {
    marginLeft: 260,
    backgroundColor: 'rgba(0,255,0,0.5)',
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  txtread2: {
    marginLeft: 260,
    backgroundColor: 'rgba(255,0,0,0.5)',
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  }
});
