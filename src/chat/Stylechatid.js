import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#063852'
    },
    containerheader: {
        width:'100%',
        height:50,
        backgroundColor:'#011a27',
        flexDirection:'row',
        alignItems:'center'
    },
    imgback: {
        width:20,
        height:20,
        marginLeft:10
    },
    txtheader: {
        fontWeight:'bold',
        fontSize:18,
        marginLeft:10,
        color:'#fff'
    },
    viewsend: {
        width:'100%',
        // height:60,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#011a27'
    },
    inputsend: {
        width:300,
        height:'90%',
        backgroundColor:'#fff',
        borderRadius:10
    },
    imgsend: {
        width:28,
        height:28,
        marginLeft:15,
        // position:'absolute'
    },
    imguser: {
        width:40,
        height:40,
        marginLeft:20,
        borderRadius:20
    }
})