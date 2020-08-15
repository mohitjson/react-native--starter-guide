import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";



const HomeScreen = ({ navigation }) => {
  
  return (
    <View>
      <Text style={styles.text}>
        Home Screen
      </Text>
      <Button style={styles.text1}
        onPress={() => navigation.navigate('Components')}
        title='go to component' />

      <TouchableOpacity onPress={() => navigation.navigate('Flatlist')}>
        <Text style={styles.text1}>go to flat list</Text>
      </TouchableOpacity>

      <Button style={styles.text1}
        onPress={() => navigation.navigate('Image')}
        title='go to image' />

      <Button 
        onPress={() => navigation.navigate('counter')}
        title ='go to counter'
        color="red"
       />
      <Button 
        onPress={() => navigation.navigate('color')}
        title ='go to color'
       
       />
      <Button 
        onPress={() => navigation.navigate('Square')}
        title ='go to square'
       
       />
      <Button 
        onPress={() => navigation.navigate('Text')}
        title ='go to text screen'
       
       />
      <Button 
        onPress={() => navigation.navigate('Login')}
        title ='go to login screen'
      
       />
      <Button 
        onPress={() => navigation.navigate('Box')}
        title ='go to Box screen'
      
       />
     
    </View>
    
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    borderStartWidth: 70,
   
  },
  text1: {
    fontSize:30,
    borderStartWidth: 110,
   
  }
});

export default HomeScreen;
