import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Text, Button } from 'react-native';

export const Form = () => {
  
  const [city, onChangeText] = useState('');
  const [pressed, setPressed] = useState(false);
  const [weather, setWeather] = useState([]);
  const [cityError, setCityError] = useState(false)


  const handlePress = async () => {
    const key = '924ee8d07fbaec9c2634a7dfcc3d11c6'
    const url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`

    try {
      let response = await fetch(url)
      let json = await response.json()
      //update state with json.weather
      //console.log(json.weather)
    } catch(err) {
      setCityError(true)
      console.error(err)
      // Network request failed error
    }
  }

  return (
      <View>

        <Text style={styles.text}>Choose a city</Text>

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => onChangeText(text)}
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