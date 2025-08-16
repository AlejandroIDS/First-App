import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // Javascript
  var texto = "Variable de texto xdd";


  // JSX (HTML like)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{texto}</Text>
      <Text style={styles.text}>Jolimouli</Text>
      <StatusBar style="auto" />
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
