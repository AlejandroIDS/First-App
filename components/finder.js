import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Finder({ items = [] }) {
  return (
    <View style={styles.container}>
        <View style={styles.box}>
            {items.map((item, index) => (
              <Text key={index} style={styles.item}>• {item}</Text>
            ))}
            
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  box: {
    backgroundColor: "lightgrey",
    width: "80%",
  },

  item: {
    fontSize: 18,
    color: "black",
    padding: 10,
    borderRadius: 8,
  },
});