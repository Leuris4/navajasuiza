import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native';

export default function Inicio( { navigation } ) {
  return (
    <View style={styles.container}>
        <ImageBackground
        source={require("../img/navajasuiza.png")} 
        resizeMode="contain" style={styles.portada} 
        >
            <Pressable 
                style={[styles.boton, styles.genero]} 
                onPress={() => {navigation.navigate("Adivinar el genero")}}>
                <Text>Genero</Text>
            </Pressable>
            <Pressable 
                style={[styles.boton, styles.edad]} 
                onPress={() => {navigation.navigate("Adivinar la edad")}}>
                <Text>Edad</Text>
            </Pressable>
            <Pressable 
                style={[styles.boton, styles.clima]} 
                onPress={() => {navigation.navigate("Ver el clima")}}>
                <Text>Clima</Text>
            </Pressable>
            <Pressable 
                style={[styles.boton, styles.uni]} 
                onPress={() => {navigation.navigate("Generar universidades")}}>
                <Text>Universidades</Text>
            </Pressable>
            <Pressable 
                style={[styles.boton, styles.acerca]} 
                onPress={() => {navigation.navigate("Acerca de")}}>
                <Text>Acerca de</Text>
            </Pressable>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  portada: {
    flex: 1,
    // alignItems: 'center',
  },
  boton: {
    width: 100,
    height: 40,
    backgroundColor: 'rgba(162, 222, 230, 0.8)',
    marginTop: 30,
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 5
  },
  genero: {
    position: 'absolute',
    marginLeft: 25,
    marginTop: 120
  },
  edad: {
    position: 'absolute',
    marginLeft: 120,
    marginTop: 215
  },
  clima: {
    position: 'absolute',
    marginLeft: 130,
    marginTop: 370
  },
  uni: {
    position: 'absolute',
    marginLeft: 80,
    marginTop: 510
  },
  acerca: {
    position: 'absolute',
    marginLeft: 170,
    marginTop: 610
  }
});
