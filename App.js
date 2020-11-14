import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/Header.js';
import { Form } from './components/Form.js';
export default function App() {


  return (
    <View style={styles.container}>
      <Header />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#cfd3ce'
  },
});
