import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GenderByName from './pages/GenderByName';
import AgeByName from './pages/AgeByName';
import Clima from './pages/Clima';
import Universities from './pages/Universities';
import AcercaDe from './pages/AcercaDe';
import Inicio from './pages/Inicio';
import MainStack from './navigation/MainStack';

export default function App() {
  return (
      <MainStack />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
