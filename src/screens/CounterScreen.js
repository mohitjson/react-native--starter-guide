import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';




const CounterScreen = () => {
    const [counter, setcounter] = useState(initialState, middleState, finalState);
    
    const initialState = 0;
    const middleState = 1
    const finalState = 2;
    return (

        <View>
            <Text >Current counter:{counter}</Text>
            <Button title='Increase' onPress={() => { setcounter(counter + 1) }} />
            <Button title='Decrease' onPress={() => { setcounter(counter - 1) }} />
            <Button title='Reset' onPress={() => { setcounter(initialState) }} />
            <Button title='Reset1' onPress={() => { setcounter(middleState) }} />
            <Button title='Reset2' onPress={() => { setcounter(finalState) }} />
            <View>
                <Text>here we use of hooks. counter is a state variable and setcounter is a function to store a value and useState is a hook whick is call from React.</Text>
            </View>
        </View>
    );
};
export default CounterScreen;
