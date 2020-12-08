import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    Image
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


const ShoppingCartIcon = (props) => (
    
    <View style={[{ padding: 5 }, Platform.OS == 'android' ? styles.iconContainer : null]}>
        {/* <View style={{
            position: 'absolute', height: 22, width: 22, borderRadius: 15, backgroundColor: 'rgba(50, 50, 50, 0.8)', right: 15, bottom: 15, alignItems: 'center', justifyContent: 'center', zIndex: 2000,

        }}> */}
            {/* <Text style={{color:'#fff'}}>0</Text> */}
            {/* <Text style={{ color: 'white', fontWeight: 'bold' }}>{props.cartItems.length}</Text> */}
        {/* </View> */}
        <TouchableOpacity>
            <Image source={require('../assets/Whiteshoop.png')} style={{height : 28, width: 28}} />
        </TouchableOpacity>
    </View>
)




export default ShoppingCartIcon


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer: {
        paddingLeft: 20, paddingTop: 10, marginRight: 5
    }
});