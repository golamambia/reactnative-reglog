// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React
import React, {useState, createRef,useEffect,Component} from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
import HomeScreen from './DrawerScreens/HomeScreen';
import SettingsScreen from './DrawerScreens/SettingsScreen';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';
import ProfileScreen from './DrawerScreens/ProfileScreen';
import ProfileUpdateScreen from './DrawerScreens/ProfileUpdateScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import AsyncStorage from '@react-native-community/async-storage';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const homeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
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
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: 'Profile', //Set Header Title
          
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

const settingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{

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
      >
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Settings', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const profileScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen">
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title:'Profile View',
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
        name="ProfileUpdateScreen"
        component={ProfileUpdateScreen}
        options={{
          title: 'Profile Update', //Set Header Title
          headerStyle:{backgroundColor:'#307ecc'},
          headerTintColor:'#fff',
          headerTitleStyle:{fontWeight:'bold'}
        }}
      />
    </Stack.Navigator>
  );
};
const loginScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title:'Login',
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
          title: 'Registration', //Set Header Title
          headerStyle:{backgroundColor:'#307ecc'},
          headerTintColor:'#fff',
          headerTitleStyle:{fontWeight:'bold'}
        }}
      />
    </Stack.Navigator>
  );
};
const registerScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="RegisterScreen">
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          title:'Registration',
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
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: 'Login', //Set Header Title
          headerStyle:{backgroundColor:'#307ecc'},
          headerTintColor:'#fff',
          headerTitleStyle:{fontWeight:'bold'}
        }}
      />
    </Stack.Navigator>
  );
};
const DrawerNavigatorRoutes = (props) => {

const[userid, setuserid]=useState('');
   const[userData, setuserData]=useState('');
useEffect(async () => {
      //setLoading(true);
      let userId = await AsyncStorage.getItem('user_id');
     setuserid(userId);
    //console.log(userId);
  
  }, []);

if(userid){
   return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#d8d8d8',
        },
      }}
      screenOptions={{headerShown: false}}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="homeScreenStack"
        options={{drawerLabel: 'Home Screen'}}
        component={homeScreenStack}
      />
      
      
      <Drawer.Screen
        name="profileScreenStack"
        options={{drawerLabel: 'Profile page'}}
        component={profileScreenStack}
      />
       
      <Drawer.Screen
        name="settingScreenStack"
        options={{drawerLabel: 'Setting Screen'}}
        component={settingScreenStack}
      />
    </Drawer.Navigator>
  );
}else{
 
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#d8d8d8',
        },
      }}
      screenOptions={{headerShown: false}}
      drawerContent={(props) => {
        return (
         <View style={stylesSidebar.sideMenuContainer}>
      <View style={stylesSidebar.profileHeader}>
        <View style={stylesSidebar.profileHeaderPicCircle}>
          <Text style={{fontSize: 25, color: '#307ecc'}}>
            {'About React'.charAt(0)}
          </Text>
        </View>
        <Text style={stylesSidebar.profileHeaderText}>
          AboutReact
        </Text>
      </View>
      <View style={stylesSidebar.profileHeaderLine} />
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
                      
          </DrawerContentScrollView>
          </View>
        );
      }}>
      <Drawer.Screen
        name="homeScreenStack"
        options={{drawerLabel: 'Home Screen'}}
        component={homeScreenStack}
      />
      <Drawer.Screen
        name="loginScreenStack"
        options={{drawerLabel: 'Login'}}
        component={loginScreenStack}
      />
      <Drawer.Screen
        name="registerScreenStack"
        options={{drawerLabel: 'Registration'}}
        component={registerScreenStack}
      />
      
     
    </Drawer.Navigator>
  );
  }
};

export default DrawerNavigatorRoutes;
const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#307ecc',
    paddingTop: 40,
    color: 'white',
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: '#307ecc',
    padding: 15,
    textAlign: 'center',
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'white',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: 'white',
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
  },
});