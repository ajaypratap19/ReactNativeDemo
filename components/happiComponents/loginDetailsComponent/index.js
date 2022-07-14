import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const OtpDetailsComponent = ({navigation}) => {
  return (
    <SafeAreaView style={styles.home}>
      <View style={[styles.home, styles.padding]}>
        <Text style={styles.heading}>Welcome to Veda</Text>

        <TextInput placeholder="Name" style={styles.input1} />
        <TextInput placeholder="Phone Number" style={styles.input1} />
        <TextInput placeholder="Email" style={styles.input1} />

        <View style={styles.home1}>
          <TextInput placeholder="DOB" style={styles.input2} />
          <TextInput placeholder="Gender" style={styles.input2} />
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.btnText}>Start</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
  },
  home1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  heading: {
    color: '#000000',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: 20,
    alignSelf: 'flex-start',
  },

  input1: {
    backgroundColor: '#D9D9D9',
    marginTop: 22,
    width: '100%',
    height: 40,
    // aspectRatio: 6.3 / 1,
    borderWidth: 15,
    borderColor: '#D9D9D9',
  },

  padding: {
    marginHorizontal: 69,
    // backgroundColor: 'red',
  },

  input2: {
    width: '40%',
    backgroundColor: '#D9D9D9',
    height: 39,
    marginTop: 23,
    borderWidth: 15,
    borderColor: '#D9D9D9',
  },

  btn: {
    width: '40%',
    aspectRatio: 3 / 1,
    backgroundColor: '#5E5E5E',
    marginTop: 47,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },

  btnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '800',
    fontStyle: 'normal',
  },
});

export default OtpDetailsComponent;
