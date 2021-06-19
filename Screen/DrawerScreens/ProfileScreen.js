// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React, {useState, createRef} from 'react';
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

const ProfileScreen = (props) => {
 const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [
    isRegistraionSuccess,
    setIsRegistraionSuccess
  ] = useState(false);

  const emailInputRef = createRef();
  const ageInputRef = createRef();
  const addressInputRef = createRef();
  const passwordInputRef = createRef();
const handleSubmitButton = () => {
    setErrortext('');
    if (!userName) {
      alert('Please fill Name');
      return;
    }
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userAge) {
      alert('Please fill phone');
      return;
    }
    if (!userAddress) {
      alert('Please fill Address');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    //Show Loader
    setLoading(true);
    var dataToSend = {
      name: userName,
      email: userEmail,
      age: userAge,
      address: userAddress,
      password: userPassword,
    };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('https://theitvibe.com/project/ihose/api/UserController/rn_registration', {
      method: 'POST',
      body: JSON.stringify({
        name: userName,
      email: userEmail,
      phone: userAge,
      address: userAddress,
      pass: userPassword,
      }),
      headers: {
        //Header Defination
       'Content-Type':'application/json',
       // 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status === 'success') {
          setIsRegistraionSuccess(true);
          console.log(
            'Registration Successful. Please Login to proceed'
          );
        } else {
          setErrortext(responseJson.msg);
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
    <View>
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
<View style={{alignSelf:'center',flexDirection:'row',justifyContent:'center',
backgroundColor:'#E7F6F8',width:'90%',padding:20,paddingBottom:22,
borderRadius:10,shadowOpacity:80,elevation:15,marginTop:20
}}>
<Image source={require('../../Image/bag.png')} style={{width:20,height:20}}></Image>
<Text>
Web & App Programmer
</Text>

</View>
<View style={{alignSelf:'center',flexDirection:'row',justifyContent:'center',
backgroundColor:'#E7F6F8',width:'90%',padding:20,paddingBottom:22,
borderRadius:10,shadowOpacity:80,elevation:15,marginTop:20
}}>
<Image source={require('../../Image/info.png')} style={{width:20,height:20}}></Image>
<Text>
Kolkata, Baguihati WTM
</Text>

</View><View style={{alignSelf:'center',flexDirection:'row',justifyContent:'center',
backgroundColor:'#E7F6F8',width:'90%',padding:20,paddingBottom:22,
borderRadius:10,shadowOpacity:80,elevation:15,marginTop:20
}}>
<Image source={require('../../Image/info.png')} style={{width:20,height:20}}></Image>
<Text>
Phone:7003832809</Text>

</View><View style={{alignSelf:'center',flexDirection:'row',justifyContent:'center',
backgroundColor:'#E7F6F8',width:'90%',padding:20,paddingBottom:22,
borderRadius:10,shadowOpacity:80,elevation:15,marginTop:20
}}>
<Image source={require('../../Image/info.png')} style={{width:20,height:20}}></Image>
<Text>
Email:golamambia78@mail.com
</Text>

</View>
<TouchableOpacity onPress={()=>props.navigation.navigate('ProfileUpdateScreen')}>
<View style={{alignSelf:'center',flexDirection:'row',justifyContent:'center',
backgroundColor:'#7A8FEF',width:'90%',padding:20,paddingBottom:22,
borderRadius:10,shadowOpacity:80,elevation:15,marginTop:20,marginBottom:40
}}>
<Image source={require('../../Image/edit.png')} style={{width:20,height:20}}></Image>

<Text>
Edit Profile
</Text>


</View>
</TouchableOpacity>
    </ScrollView>
    </View>
    </SafeAreaView>
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
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
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
    color: 'white',
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
export default ProfileScreen;