import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function GenderByName() {
    const [name, onChangeName] = React.useState(null);
    const [color, onChangeColor] = React.useState(null);
    var divColor = {
        backgroundColor: color == null? "#C0C0C0" : color,
        height: 60,
        width: 60,
        marginTop: 20
    }

    const predecir = async () => {
        try {
            var nombre = name;
            const response = await fetch('https://api.genderize.io/?name=' + nombre);
            const json = await response.json();
            if(json.gender == 'male')
            {
                onChangeColor("#1177D1");
            }else if(json.gender == 'female')
            {
                onChangeColor("#F76AEC");
            }else{
                onChangeColor("#C0C0C0");
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
      }

  return (
    <View style={styles.container}>
      <Text>Ingrese un nombre:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="Nombre"
      />
      <Button
        title="Predecir género"
        onPress={() => predecir()}
      />
      <View style={divColor} />
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
