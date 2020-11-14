import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Text, Button } from 'react-native';

export const Form = () => {
  
  const [city, setCity] = useState('');
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    // handle HTTP requests to get weather informations on Lyon
  }

  return (
      <View>

        <Text style={styles.text}>Choose a city</Text>

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChange={event => setCity(event.target.value)}
          value={city}
          style={styles.textInput}
        />

        <Button
          onPress={handlePress}
          title="Search"
          style={styles.button}
        />

      </View>
    )
};

const styles = StyleSheet.create({
  textInput: {
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: 'white',
    height: 40,
    width: 250,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Arial'
  },
  text: {
    fontSize: 30,
    padding: 10,
    color: 'darkslateblue',
    textAlign: 'center',
    fontFamily: 'Arial'
  },
  button: {
    width: 50,
    backgroundColor: 'darkslateblue',
    color: 'white'

  }
});