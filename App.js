import React from 'react';
import HappiLoginComponent from './components/happiComponents/loginComponent';
import OtpDetailsComponent from './components/happiComponents/loginDetailsComponent';
import OtpComponent from './components/happiComponents/otpComponent';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={HappiLoginComponent} />
        <Stack.Screen name="Home" component={OtpComponent} />
        <Stack.Screen name="Otp" component={OtpDetailsComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
