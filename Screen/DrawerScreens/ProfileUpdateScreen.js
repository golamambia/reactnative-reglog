// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, createRef,useEffect,Component} from 'react';
import {  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
   KeyboardAvoidingView,
  Keyboard,
  ScrollView,
  TouchableOpacity, SafeAreaView} from 'react-native';
  import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../Components/Loader';
const ProfileUpdateScreen = (props) => {
 const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  //const [userId, setUserAddress] = useState('');
  const [
    isRegistraionSuccess,
    setIsRegistraionSuccess
  ] = useState(false);
  const[userid, setuserid]=useState('');
   const[userData, setuserData]=useState('');

  const emailInputRef = createRef();
  const ageInputRef = createRef();
  const addressInputRef = createRef();
  const passwordInputRef = createRef();
  //  useEffect( () => {
  //   getUser();    
  // });
   useEffect(() => {
      setLoading(true);
    // console.log(
    //   "This only happens ONCE.  But it happens AFTER the initial render."
    // );
    getUser();
  }, []);
   const getUser = async () => {
    
     let userId = await AsyncStorage.getItem('user_id');
     setuserid(userId);
//console.log('hello'+userId);
fetch('https://theitvibe.com/project/ihose/api/UserController/rn_profile_update', {
      method: 'POST',
      body: JSON.stringify({
       editid: userId,
       //password: userPassword,
      }),
      headers: {
        //Header Defination
       
        'Content-Type':'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
       
        //console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status ==1) {
           setLoading(false);
          //AsyncStorage.setItem('user_id', responseJson.user_id);
          //console.log(responseJson.user_id);
         // navigation.replace('DrawerNavigationRoutes');
         setuserData(responseJson.res_data[0]);
         //UserName:'hell';
         setUserName(responseJson.res_data[0].name);
         setUserEmail(responseJson.res_data[0].email);
         setUserAge(responseJson.res_data[0].age);
         setUserAddress(responseJson.res_data[0].address);
        // console.log(responseJson.res_data[0]);
        } else {
           setLoading(false);
          //setErrortext(responseJson.msg);
          console.log('Please check your email id or password');
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
   }

const handleSubmitButton2 = async () => {
  let userId = await AsyncStorage.getItem('user_id');
    setErrortext('');
   // console.log(userid);
    if (!userName) {
      alert('Please fill Name');
      return;
    }
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userAge) {
      alert('Please fill age');
      return;
    }
    if (!userAddress) {
      alert('Please fill Address');
      return;
    }
    // if (!userPassword) {
    //   alert('Please fill Password');
    //   return;
    // }
    //Show Loader
    setLoading(true);
    var dataToSend = {
      name: userName,
      email: userEmail,
      age: userAge,
      address: userAddress,
      id: userid,
    };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
 
    fetch('https://theitvibe.com/project/ihose/api/UserController/rn_profile_update_post', {
      method: 'POST',
      header : {
        //   Accept: 'application/json',
          'Content-Type': 'application/json',
            
          },
      body: JSON.stringify({
        name: userName,
      email: userEmail,
      age: userAge,
      address: userAddress,
      id: userId,
      }),
      
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        //Hide Loader
        setLoading(false);
       
        // If server response message same as Data Matched
        if (responseJson.status ==1) {
          setIsRegistraionSuccess(true);
          alert('Profile successfully updated');
          console.log(
            'Registration Successful. Please Login to proceed'
          );
        } else {
          alert('Please try again ,something went wrong!');
          setErrortext(responseJson.msg);
        }
      })
      .catch((error) => {
        //Hide Loader
        alert('Please try again ,server error!');
        setLoading(false);
        console.error(error);
      });
  };

  return (
   
    <View>
    <Loader loading={loading} />
    <ScrollView>
    <View style={{padding:10,width:'100%',backgroundColor:'#11D0E3',height:120}}>
    
    </View>
<View style={{alignItems:'center'}}>
<Image source={require('../../Image/amb.jpeg')} style={{width:140,height:140,borderRadius:100,marginTop:-70}}></Image>
<Text style={{fontSize:25,padding:10,fontWeight:'bold'}}>Amb 
</Text>
<Text style={{fontSize:15,fontWeight:'bold',color:'grey'}}>25, Male
</Text>
</View>

<KeyboardAvoidingView enabled>
<View style={styles.SectionStyle}>
<TextInput style={styles.inputStyle} placeholder="Enter name" underlineColorAndroid="#f000"
             
 placeholderTextColor="#8b9cb5" returnKeyType="next"
 onChangeText={(userName)=>setUserName(userName)} value={userName} onSubmitEditing={Keyboard.dismiss} />

</View>
<View style={styles.SectionStyle}>
<TextInput style={styles.inputStyle} placeholder="Enter email" underlineColorAndroid="#f000"
             
placeholderTextColor="#8b9cb5" returnKeyType="next" keyboardType="email-address" 
value={userEmail} onChangeText={(userEmail)=>setUserEmail(userEmail)} onSubmitEditing={Keyboard.dismiss} />

</View>
<View style={styles.SectionStyle}>
<TextInput style={styles.inputStyle} placeholder="Enter age" underlineColorAndroid="#f000"
             
 placeholderTextColor="#8b9cb5" returnKeyType="next" keyboardType="numeric" ref={ageInputRef}
  value={userAge} onChangeText={(userAge)=>setUserAge(userAge)} onSubmitEditing={Keyboard.dismiss} />

</View>
<View style={styles.SectionStyle}>
<TextInput style={styles.inputStyle} placeholder="Enter address" underlineColorAndroid="#f000"
             
  placeholderTextColor="#8b9cb5" returnKeyType="next" value={userAddress} 
  onChangeText={(userAddress)=>setUserAddress(userAddress)} onSubmitEditing={Keyboard.dismiss} />

</View>
<TouchableOpacity style={{backgroundColor:'#7DE24E',marginTop:20,marginLeft:60,marginRight:60,height:40,
marginBottom:20,borderRadius:30,alignItems:'center',color: '#FFFFFF',
    borderColor: '#7DE24E'}} onPress={handleSubmitButton2}>
<Text style={{color:'white',paddingVertical:5,fontSize:20}}>Update Now</Text>
</TouchableOpacity>
</KeyboardAvoidingView>
    </ScrollView>
    </View>
   
  );
};
const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 45,
    marginTop: 10,
    marginLeft: 35,
    marginRight: 35,
    margin: 8,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: 'black',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});
export default ProfileUpdateScreen;