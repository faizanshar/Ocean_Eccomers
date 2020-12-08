import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        backgroundColor:'#063852'
    },
    containerheader: {
        width:360,
        height:50,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#063852'
    },
    imgback: {
        width:20,
        height:20,
        marginLeft:10
    },
    imghand: {
        width:200,
        height:200,
        marginTop:20,
        marginLeft:20
    },
    viewstore: {
        marginTop:30
    },
    txtstore : {
        fontSize:18,
        fontWeight:'bold',
        color:'#fff',
        // marginTop:20
    },
    inputstore: {
        width:250,
        backgroundColor:'#fff',
        height:40,
        borderRadius:10,
        marginTop:10,
        elevation:5
    },
    viewadress: {
        marginTop:20
    },
    txtadress: {
        fontSize:18,
        fontWeight:'bold',
        color:'#fff',
    },
    touchsubmit: {
        width:250,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#87CEEB',
        marginTop:40,
        borderRadius:20,
        marginBottom:20
    },
    txtsubmit: {
        fontSize:15,
        fontWeight:'bold',
        color:'#fff'
    },
    txtminimum:{
        fontSize:12,
        fontWeight:'bold',
        color:'#fff',
        marginTop:5
    }
})