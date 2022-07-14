import React from 'react';
import {SafeAreaView, Text, TextInput, View} from 'react-native';

const Form = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>E-mail ID or Mobile Number</Text>
        <TextInput style={{placeHolder: 'Enter your email or number'}} />
      </View>
    </SafeAreaView>
  );
};

export default Form;
