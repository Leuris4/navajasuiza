import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function AcercaDe() {
  return (
    <View style={styles.container}>
        <View style={styles.box}>
            <Image
                style={styles.foto}
                source={require('../img/Yo.png')}
            />
            <Text style={styles.nombre}>Leuris Joel Morel Nuñez</Text>
            <Text style={styles.texto}><Text style={styles.text}>Celular: </Text>{"(829) 470-0904"}</Text>
            <Text style={styles.texto}><Text style={styles.text}>Teléfono local: </Text>{"(809) 638-1118"}</Text>
            <Text style={styles.texto}><Text style={styles.text}>Correo personal: </Text>{"leurismorel7@gmail.com"}</Text>
            <Text style={styles.texto}><Text style={styles.text}>Correo institucional:</Text>{"20186681@itla.edu.do"}</Text>
        </View>
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
  nombre: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center'
  },
  box: {
    width: 300,
    backgroundColor: "#F9F9F9",
    borderRadius: 20,
    paddingBottom: 20
  },
  text: {
    fontWeight: 'bold',
  },
  foto: {
    width: 200,
    height: 300,
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center'
  },
  texto: {
    marginLeft: 15
  }
});
