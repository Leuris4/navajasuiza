import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';

export default function AgeByName() {
    const [name, onChangeName] = React.useState(null);
    const [age, onChangeAge] = React.useState(null);
    const [textAge, onChangeTA] = React.useState(null);
    const [image, onChangeImage] = React.useState(require("../img/espermatozoide.png"));
    // var divColor = {
    //     backgroundColor: color == null? "#C0C0C0" : color,
    //     height: 40,
    //     width: 40,
    //     marginTop: 20
    // }
    var imgn = image;
    const predecir = async () => {
        try {
            var nombre = name;
            const response = await fetch('https://api.agify.io/?name=' + nombre);
            const json = await response.json();
            var edad = json.age
            onChangeAge(edad);
            if(edad > 0 && edad <= 4)
            {
                onChangeTA("Bebé");
                onChangeImage(require("../img/bebe.png"));
            }else if(edad > 4 && edad <= 12)
            {
                onChangeTA("Niño");
                onChangeImage(require("../img/nino.png"));
            }else if(edad > 12 && edad <= 18)
            {
                onChangeTA("Adolescente");
                onChangeImage(require("../img/adolescente.png"));
            }else if(edad > 18 && edad <= 30)
            {
                onChangeTA("Joven");
                onChangeImage(require("../img/joven.png"));
            }else if(edad > 30 && edad <= 45)
            {
                onChangeTA("Adulto");
                onChangeImage(require("../img/adulto.png"));
            }else if(edad > 45)
            {
                onChangeTA("Anciano");
                onChangeImage(require("../img/anciano.png"));
            }else {
                onChangeTA("Don Nadie");
                onChangeImage(require("../img/espermatozoide.png"));
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
        title="Predecir Edad"
        onPress={() => predecir()}
      />
      <Text><Text style={styles.negrita}>Edad: </Text>{age}</Text>
      <Text>Eres un: <Text style={styles.negrita}>{textAge}</Text></Text>
      <Image
        style={styles.img}
        source={imgn}
      />
      {/* <View style={divColor} /> */}
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
  negrita: {
    fontWeight: 'bold'
  },
  img: {
    width: 150,
    height: 250,
    resizeMode: 'contain'
  }
});
