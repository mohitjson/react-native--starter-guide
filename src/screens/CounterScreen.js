import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';



const CounterScreen = () => {
    const [counter, setcounter] = useState(0);
    return (

        <View>
            <Text style={styles.first}>
                Current counter:{counter}
            </Text>

            <Button
                title='Increase'
                onPress={() => { setcounter(counter + 1) }
                } />
            <Button title='Decrease'
                onPress={() => { setcounter(counter - 1) }} />
            <View>
                <Text>here we use of hooks. counter is a state variable and setcounter is a function to store a value and useState is a hook whick is call from React.</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    first: {
        fontSize: 40,
        borderStartWidth: 70,

    }
})


export default CounterScreen;
