
import 'react-native-gesture-handler';

// Import React and Component
import React, {useState, createRef,useEffect,Component} from 'react';

// Import Navigators from React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
 import {createDrawerNavigator} from '@react-navigation/drawer';
// Import Screens
import SplashScreen from './Screen/SplashScreen';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
//import ExtraScreen from './Screen/ExtraScreen';
import HomeScreen from './Screen/DrawerScreens/HomeScreen';
import DrawerNavigationRoutes from './Screen/DrawerNavigationRoutes';
import NavigationDrawerHeader from './Screen/Components/NavigationDrawerHeader';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Auth = ({navigation}) => {
  useEffect(() => {
    //AsyncStorage.setItem('user_id', '');
      //setLoading(true);
   // props.navigation.replace('Auth');
    navigation.replace('DrawerNavigationRoutes');
  }, []);
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        //options={{headerShown: false}}
        options={{
          title: 'Home', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title: 'Register', //Set Header Title
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      
    </Stack.Navigator>
  );
};

const App = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{headerShown: false}}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}

        />
        {/* Navigation Drawer as a landing page */}
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNavigationRoutes}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;