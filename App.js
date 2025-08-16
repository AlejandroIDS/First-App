import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  // Javascript
  var texto = "Variable de texto xdd";


  // JSX (HTML like)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Mi primera app con React Native!!!!</Text>
      <Button style={styles.text}
        title="Botón"
        onPress={() => Alert.alert('Presionaste el botón wao')}
      />
    </View>

  );
}

// Estilos (Similar a CSS)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'blue',
    fontSize: 20,
  },
  text: {
    color: 'red',
    fontSize: 15,
  }
});
