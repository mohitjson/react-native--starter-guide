
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
      backgroundColor='#1e90ff'
      barStyle='Light-content'
      />

      <Text style={styles.welcome}>Login to SCHOOL !</Text>

      <TextInput style={styles.input}
        placeholder='Username' />

      <TextInput style={styles.input}
        placeholder='Password'
        secureTextEntry
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.userBtn}
        onPress={()=>alert('login works')}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.userBtn}
        onPress={()=>alert('signup works')}>
          <Text style={styles.btnText}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e90ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'white',
  

  },
  input: {
    width: '90%',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%'
  },
  userBtn: {
    backgroundColor: '#ffd700',
    padding: 15,
    width: '45%'
  },
  btnText: {
    fontSize: 18,
    textAlign: 'center'
  }
});
