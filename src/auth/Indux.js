import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

//intro
import Intro from '../intro/Intro';

//dashbord
import Home2 from '../dashbord/Home2';
import Searchscreen from '../dashbord/Searchscreen'

//drawer
import Select from '../drawer/Select';
// import Login from '../drawer/Login';
import Drawerseller from '../drawerseller/Drawerseller';

//auth
import Register from '../auth/Register';



//profile
import Profile from '../profile/Profile';

//categori
import Categori from '../categori/Categori';
import Fashionscreen from '../categori/Fashionscreen';
import ElectronicsScreen from '../categori/ElectronicsScreen';
import Foodscreen from '../categori/Foodscreen';
import Descriptionscreen from '../categori/Descriptionscreen';
import Otherscreen from '../categori/Otherscreen';

//chat
import Chatscreen from '../chat/Chatscreen';
import ChatId from '../chat/ChatId';


//cart
import Cartscreen from '../cart/Cartscreen';


//mystore

import Screenstore from '../mystore/Screenstore';
import Addproduct from '../mystore/Addproduct';
import Registerseller from '../mystore/Registerseller';
import Editscreen from '../mystore/Editscreen';



import Splash from '../auth/Splash';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const RootDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <Select {...props} />}>
      <Drawer.Screen name="Home" component={Home2} />
      {/* <Drawer.Screen name="Login" component={Login} /> */}
    </Drawer.Navigator>
  );
};

const RootDrawer2 = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <Drawerseller {...props} />}>
      <Drawer.Screen name="Home" component={Home2} />
    </Drawer.Navigator>
  );
};

const Indux = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Intro"
          component={Intro}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={RootDrawer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home2"
          component={RootDrawer2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
       
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Categori"
          component={Categori}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chatscreen"
          component={Chatscreen}
          options={{headerShown: false}}
        />
       
        <Stack.Screen
          name="Foodscreen"
          component={Foodscreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Fashionscreen"
          component={Fashionscreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Otherscreen"
          component={Otherscreen}
          options={{headerShown: false}}
        />
        
        <Stack.Screen
          name="ElectronicsScreen"
          component={ElectronicsScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="CartScreen"
          component={Cartscreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Description"
          component={Descriptionscreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Screenstore"
          component={Screenstore}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Addproduct"
          component={Addproduct}
          options={{headerShown: false}}
        />


        <Stack.Screen
          name="Registerseller"
          component={Registerseller}
          options={{headerShown: false}}
        />
       
        <Stack.Screen
          name="Editscreen"
          component={Editscreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chatid"
          component={ChatId}
          options={{headerShown: false}}
        />
       
        
         <Stack.Screen
          name="Searchscreen"
          component={Searchscreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Indux;
