import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import { SymbolView, SymbolViewProps, SFSymbol } from 'expo-symbols';
import Finder from './components/finder';

export default function App() {
  // Javascript
  let list = ["Leche", "Pan", "Huevos", "Cereal"];

  // JSX (HTML like)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de compras</Text>

      <Finder texto={list} />
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
    color: 'darkblue',
    fontSize: 25,
    fontWeight: 'bold',
  },
  text: {
    color: 'red',
    fontSize: 15,
  }
});
