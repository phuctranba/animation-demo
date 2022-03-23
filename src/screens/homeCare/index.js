import * as React from 'react';
import {useEffect} from 'react';
import {View} from 'react-native';
import {Easing, useSharedValue, withDelay, withTiming} from "react-native-reanimated";
import Tabbar from "./tabbar";
import Header from "./header";
import Calendar from "./calendar";
import ListSession from "./listSession";


const Test = () => {
    const animatedBallValue = useSharedValue(0);

    useEffect(() => {
        animatedBallValue.value = withDelay(4000, withTiming(1, {
            duration: 4500, easing: Easing.out(Easing.quad)
        }));
    }, [])

    return (
        <View style={{flex: 1, alignItems: 'center', backgroundColor: '#fdfffe'}}>

            <Header/>

            <Calendar/>

            <ListSession/>

            <Tabbar/>
        </View>
    );
}

export default Test;
