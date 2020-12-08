import { Picker } from '@react-native-community/picker';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#ddd'
    },
    containerheader: {
        width:360,
        height:40,
        flexDirection:'row',
        alignItems:'center',
        // backgroundColor:'#063852'
    },
    imgback: {
        width:20,
        height:20,
        marginLeft:10
    },
    inputsearch: {
        width:270,
        height:40,
        backgroundColor:'#fff',
        marginLeft:10,
        borderRadius:10,
        marginTop:10
    },
    imgseacrh: {
        width:30,
        height:30,
        marginTop:10,
        marginLeft:10
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
      containercategories: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        // backgroundColor:'red',
        // marginHorizontal:15,
        justifyContent: 'space-between',
        padding:5
    
        // salignItems:'center',
      },
      imgnotfound: {
        width:250,
        height:250,
        alignSelf:'center',
        marginTop:50
      },
      txtnotfound: {
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center'
      }
})