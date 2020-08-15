import React, { useState } from 'react';
import { View, StyleSheet, } from 'react-native'
import ColorCounter from '../components/ColorCounter';

// const COLOR_INCREMENT=15 /*WE CAN USE COLOR INCREMENT TO SIMULTANEOUSLUY CHANGE ALL VALUE RED+15 */

const SquareScreen = () => {
    const [red, setred] = useState(0);
    const [green, setgreen] = useState(0);
    const [blue, setblue] = useState(0);
    return (
        <View>
            <ColorCounter
                on
                onIncrease={() => setred(red + 15)}
                onDecrease={() => setred(red - 15)}
                color='Red' />

            <ColorCounter
                onIncrease={() => setgreen(green + 15)}
                onDecrease={() => setgreen(green - 15)}
                color='Green' />

            <ColorCounter
                onIncrease={() => setblue(blue + 15)}
                onDecrease={() => setblue(blue - 15)}
                color='Blue' />

            <View style={{
                height: 150,
                width: 150,
                backgroundColor: `rgb(${red},${green},${blue})`
            }} />
        </View>
    );

};
const styles = StyleSheet.create();

export default SquareScreen;