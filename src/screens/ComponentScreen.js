
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

ComponentScreen = () => {

  const name = "mohit"
  
  return (
    <View>
      <Text style={styles.container}>Getting started with React native!</Text>
      <Text style={styles.container1}>My name is {name} . </Text>
    </View>
  );
}

  const styles = StyleSheet.create({
  container: {

    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    borderStartWidth: 100
  },
  container1: {

    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    borderStartWidth: 100,
  }
});
export default ComponentScreen ;