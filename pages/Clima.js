import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function CLima() {
    const [grades, onChangeGrades] = React.useState(null);
    const [state, onChangeState] = React.useState(null);

        
    const clima = async () => {
        try {
            const response = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=18.47186&lon=-69.89232&appid=8f766aacd2867f8514be044bf3ebf1ce');
            const json = await response.json();            
            onChangeGrades(json.main.temp);
            onChangeState(json.weather[0].description);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
      }
      return (
    <View style={styles.container}>
      <Text style={styles.city}>Santo Domingo</Text>
      <Text style={styles.grades}>{grades}<Text style={styles.kelvin}>°K</Text></Text>
      <Text style={styles.state}>{state}</Text>
      <Button
        title="Ver Clima"
        onPress={() => clima()}
      />
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
  city: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  grades: {
    fontSize: 80,
    fontWeight: 'bold',
  },
  kelvin: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  state: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 50
  }
});
