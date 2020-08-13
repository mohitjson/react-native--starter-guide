import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation})=> {
  return (
    <View>
      <Text style={styles.text}>
        Home Screen!!!
      </Text>
      <Button 
      onPress={() => navigation.navigate('Components')}
        title='go to component' />
      
      <TouchableOpacity onPress={() => navigation.navigate('Flatlist')}>
        <Text>go to flat list</Text>
      </TouchableOpacity>

      <Button 
      onPress={() => navigation.navigate('Image')}
        title='go to image' />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    borderStartWidth:70
  }
});

export default HomeScreen;
