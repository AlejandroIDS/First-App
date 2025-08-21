// CODIGO QUE HICE DURANTE LA CLASE 21/08/2025 (Correcciones a tarea)

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Finder from './components/finder';

export default function App() {
  // Javascript
  let [list] = useState(["Leche", "Pan", "Huevos", "Cereal"]);
  let [itemInput, setItemInput] = useState("");

  // Añadir que se pueda tachar
  const [task, setTask] = useState(
    {id: 1, title: "Tarea 1", completed: false},
    {id: 2, title: "Tarea 2", completed: false}
  );

  // JSX (HTML like)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de compras</Text>


      // input de texto que llena la variable text y un boton para añadir lo escrito ahí a la lista list
      <TextInput style={styles.textInput} onChangeText={text => setItemInput(text)} value={itemInput} />

      <Button style={styles.addButton} title="Agregar Item" onPress={() => {
        if (itemInput) {
          list.push(itemInput);
          setItemInput(""); 
        }
      }} />

      <Finder items={list} />

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

  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
    width: '80%',
  },

  addButton: {
    backgroundColor: 'darkblue',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },

  text: {
    color: 'red',
    fontSize: 15,
  }
  
});


/*
  CODIGO QUE ENTREGUE ORIGINALMENTE EN LA TAREA (CREÍ QUE ERA NOMAS DE HACER EL COMPONENTE)

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

*/