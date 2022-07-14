import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View>
      <Text style={[styles.fontHeader, styles.marginHeader]}>Login Now</Text>
      <Text style={[styles.fontSubHeader, styles.marginSubHeader]}>
        Please login to continue using our app.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fontHeader: {
    fontFamily: 'sans-serif',
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  marginHeader: {
    marginTop: 20,
    marginStart: 10,
  },
  fontSubHeader: {
    fontFamily: 'sans-serif',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
  marginSubHeader: {
    marginTop: 7,
    marginStart: 10,
  },
});

export default Header;
