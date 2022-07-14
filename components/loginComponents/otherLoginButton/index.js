import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Facebook from '../../../images/facebook.png';
import Google from '../../../images/google.png';

const OtherLoginButton = () => {
  return (
    <SafeAreaView>
      <View style={{flex: 1}}>
        <Text style={styles.heading}>Login instantly:</Text>
        <View
          style={{
            flex: 1,
            flexWrap: 'wrap',
            flexDirection: 'row',
            alignItems: 'stretch',
          }}>
          <TouchableOpacity style={styles.button} activeOpacity={0.5}>
            <Image source={Facebook} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Image source={Google} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'sans-serif',
    fontSize: 10,
    fontWeight: 'normal',
    fontStyle: 'normal',
  },
  button: {
    width: 25,
    height: 10,
    borderRadius: 3,
    borderColor: '#d8d8d8',
    padding: 10,
  },
});

export default OtherLoginButton;
