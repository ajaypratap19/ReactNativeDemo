import React, {useState} from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Logo from '../../../assets/happiLogo.svg';
// import Animatable from 'react-native-animatable';

const HappiLoginComponent = ({navigation}) => {
  const [data, setData] = useState({mobile: 0});
  console.log(data.mobile);

  // const checkMobileNumber = val => {
  //   // console.log(mobile);
  //   setData({
  //     ...data,
  //     mobile: val.target.value,
  //   });
  //   console.log(data.mobile);
  // };

  const submit = (mobile = data.mobile) => {
    if (
      mobile !== undefined &&
      mobile < 1 &&
      mobile !== null &&
      mobile.length !== 10
    ) {
      console.warn(mobile);
      Alert.alert('Invalid Mobile Number');
    } else {
      console.warn(mobile);
      navigation.navigate('Home');
    }
  };

  return (
    <SafeAreaView style={[styles.home, styles.padding]}>
      <View style={styles.home}>
        <Logo style={styles.imgPosition} />
        <Text style={styles.textSignUp}>SignUp with Mobile Number </Text>
        <TextInput
          placeholder="Mobile Number"
          style={styles.inputField}
          maxLength={10}
          keyboardType={'numeric'}
          value={data.mobile}
          onChangeText={val => setData(val)}
        />
        {data.mobile ? null : (
          // <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>
            Mobile Number must be 10 digits long
          </Text>
          // </Animatable.View>
        )}
        <Text style={styles.textOtp}>You will get a OTP via SMS</Text>
        <TouchableOpacity style={styles.btn} onPress={() => submit()}>
          <Text style={styles.btnText}>Get OTP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgPosition: {
    alignSelf: 'center',
  },
  textSignUp: {
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
    color: '#000000',
    opacity: 0.2,
    marginTop: 28,
    alignSelf: 'center',
  },
  inputField: {
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    marginTop: 32,
    borderWidth: 20,
    borderColor: '#F6F6F6',
    width: '100%',
    alignSelf: 'center',
    aspectRatio: 5 / 1,
  },
  textOtp: {
    alignSelf: 'flex-end',
    marginTop: 7,
    color: '#C0BBBB',
  },
  btn: {
    borderRadius: 14,
    backgroundColor: '#000000',
    marginTop: 32,
    width: '100%',
    aspectRatio: 6.5 / 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  padding: {
    marginHorizontal: 53,
  },
  btnText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 24,
    fontStyle: 'normal',
  },
  errorMsg: {
    fontSize: 10,
    color: 'red',
    alignSelf: 'flex-start',
    marginStart: 3,
  },
});

export default HappiLoginComponent;
