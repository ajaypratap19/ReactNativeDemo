import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';

const OtpComponent = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, styles.padding]}>
        <Text style={styles.viewHeading}>OTP VERIFICATION</Text>
        <Text style={styles.marginSubView}>
          <Text style={styles.viewSubHeading}>Enter the OTP sent to</Text>
          <Text style={styles.number}> {'+91-8976500001'}</Text>
        </Text>
        <OTPTextView
          handleTextChange={e => {}}
          containerStyle={styles.textInputContainer}
          textInputStyle={styles.roundedTextInput}
          // defaultValue="1234"
        />
        <Text style={styles.marginResend}>
          <Text style={styles.viewResend}>Don't receive code ?</Text>
          <Text style={styles.resendBold}> {'Re-send'}</Text>
        </Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Otp')}>
          <Text style={styles.btnText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    background: '#F5F5F5',
  },
  viewHeading: {
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 27,
    color: '#5E5E5E',
  },
  viewSubHeading: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
    color: '#5E5E5E',
    ontWeight: 'bold',
  },
  marginSubView: {
    marginTop: 9,
  },
  number: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 21,
    color: '#5E5E5E',
    marginTop: 9,
  },
  textInputContainer: {
    marginTop: 32,
  },
  roundedTextInput: {
    borderRadius: 10,
    borderWidth: 3,
    background: '#F6F6F6',
    justifyContent: 'space-between',
  },
  viewResend: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 18,
    color: '#5E5E5E',
  },
  marginResend: {
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  resendBold: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 18,
    color: '#5E5E5E',
    alignSelf: 'flex-end',
  },
  btn: {
    backgroundColor: '#000000',
    mixBlendMode: 'normal',
    borderRadius: 12,
    marginTop: 32,
    width: '90%',
    aspectRatio: 5 / 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 27,
    color: '#FFFFFF',
  },
  padding: {
    marginHorizontal: 60,
    // backgroundColor: 'red',
  },
});

export default OtpComponent;
