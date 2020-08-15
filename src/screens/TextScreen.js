import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';

const TextScreen= () =>{
    const [name,setname]=useState('')
    const [password,setpassword]=useState('')
    return(
    <View>
        <Text>Enter you name</Text>
        <TextInput
         style={styles.input} 
         autoCapitalize='none'
         autoCorrect={false}
         value={name}
         onChangeText={newValue=>setname(newValue)}
         />
         <Text>My name is {name}</Text>


        <Text>Enter you password</Text>
        <TextInput
         style={styles.input} 
         autoCapitalize='none'
         autoCorrect={false}
         value={password}
         onChangeText={newValue=>setpassword(newValue)}
         />
        {password.length < 5 ? <Text>password must be minimum 5 charachter</Text>:null }
         
    </View>
    )}

const styles=StyleSheet.create({
  input:{
      margin:10,
      borderWidth:4,
      borderStartColor:'black'


  }  
})
export default TextScreen;