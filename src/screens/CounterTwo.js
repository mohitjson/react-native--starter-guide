import React, { useReducer } from 'react'
import { Button, View,Text } from 'react-native'

const initialState =  {
    firstCounter: 0,          //both are state
    secondCounter: 0
}

const reducer = (state, action) => {                               /*we can maintain action and state both as object..state as an object we can 
                                                                        maintain multiple state variables..by using action as an object we can pass additional instruction to reducer function*/
  switch (action.type) {
    case 'increment':
      return {...state,firstCounter:state.firstCounter +action.value}
    case 'decrement':
      return {...state,firstCounter:state.firstCounter - action.value}
    case 'increment2':
      return {...state,secondCounter:state.secondCounter +action.value}
    case 'decrement2':
      return {...state,secondCounter:state.secondCounter - action.value}
    case 'reset':
      return initialState
    default:
      return state
  }
}
function CounterTwo() {

  const [Count,dispatch] = useReducer(reducer, initialState)
 
  return (
    <View>
      <Text>First Counter  {Count.firstCounter}</Text>
      <Text>Second Counter  {Count.secondCounter}</Text>
      <Button onPress={()=> dispatch({type:'increment' ,value:1})}  title='increment'></Button>
      <Button onPress={()=>dispatch({type:'decrement' , value:1})} title='decrement'></Button>
      <Button onPress={()=> dispatch({type:'increment' ,value:5})}  title='increment5'></Button>
      <Button onPress={()=>dispatch({type:'decrement' , value:5})} title='decrement5'></Button>
      <Button onPress={()=> dispatch({type:'increment2' ,value:10})}  title='increment2'></Button>
      <Button onPress={()=>dispatch({type:'decrement2' , value:10})} title='decrement2'></Button>
      <Button onPress={()=>dispatch({type:'reset'})} title='reset'></Button>

    </View>
  )
}

export default CounterTwo;