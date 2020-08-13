import React from 'react';
import { Text, View,FlatList } from 'react-native';

const FlatList1=()=>{
  const friends=[
    
    {name:'friend #4',id:'ram'},
    {name:'friend #5',id:'ram2'},
    
  ];
  return(
    <View>
      <Text style={{fontSize:70,borderStartWidth:70}} > Flat list</Text>
    <FlatList  data={friends} renderItem={({item})=>{
      return <Text>{item.name}
      </Text> 
    }}/>
    </View>
  )
}

export default FlatList1;