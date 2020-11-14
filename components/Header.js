import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

Header.defaultProps = {
  title: "WEATHER APP"
}

const styles = StyleSheet.create({
  header: {
    padding: 15,
    height: 60,
    backgroundColor: 'white'
  },
  text: {
    color: 'darkslateblue',
    fontSize: 23,
    textAlign: 'center',
    fontFamily: 'Arial',
    letterSpacing: 2
  }
});
