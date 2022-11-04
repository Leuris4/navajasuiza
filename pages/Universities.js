import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function Universities() {
    const [country, onChangeCountry] = React.useState(null);
    const [data, onChangeData] = React.useState(null);
    const [isSelected, onChangeSelect] = React.useState(false);

    const cargar = async () => {
        try {
            var pais = country;
            const response = await fetch('http://universities.hipolabs.com/search?country=' + pais);
            const json = await response.json();

            onChangeData(json);
            onChangeSelect(true);

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
      }

  return (
    <View style={styles.container}>
      <Text>Ingrese un país en inglés:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeCountry}
        value={country}
        placeholder="País"
      />
      <Button
        title="Buscar Universidades"
        onPress={() => cargar()}
      />
      {!isSelected ? <Text>Universidades</Text> : (
        <FlatList
          data={data}
          keyExtractor={({ domains }, index) => domains}
          renderItem={({ item }) => (
            <View style={styles.box}>
                <View>
                    <Text style={styles.name}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.text}>{item.domains}</Text>
                </View>
                <View>
                    <Text style={styles.text}>{item.web_pages}</Text>
                </View>
            </View>
          )}
        />
      )}
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
  box: {
    width: 350,
    height: 115,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    elevation: 3,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    display: "flex",
    flexDirection: "column",
    // paddingBottom: 10
    },
    name: {
        fontSize: 18,
        marginTop: 25,
        marginLeft: 10,
        fontWeight: "bold"
    },
    text: {
        marginLeft: 10,
    }
});
