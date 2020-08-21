import React, { useReducer } from 'react'
import { Button, View,Text } from 'react-native'

const initialState = 0 ;

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}
function CounterOne() {

  const [Count,dispatch] = useReducer(reducer, initialState)
  return (
    <View>
      <Text>Counter  {Count}</Text>
      <Button onPress={()=> dispatch('increment')}  title='increment'></Button>
      <Button onPress={()=>dispatch('decrement')} title='decrement'></Button>
      <Button onPress={()=>dispatch('reset')} title='reset'></Button>

    </View>
  )
}

export default CounterOne;