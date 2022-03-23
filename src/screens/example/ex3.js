import React, {useRef} from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from "react-native";
import {SIZES} from "../../utils";

const PressableAnimated = Animated.createAnimatedComponent(Pressable);

export const Ex3 = () => {

    const animationWithNativeDriver = useRef(new Animated.Value(0)).current;
    const animationWithoutNativeDriver = useRef(new Animated.Value(0)).current;

    const playAnimation = () => {


        Animated.loop(Animated.timing(animationWithNativeDriver, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        })).start()

        Animated.loop(Animated.timing(animationWithoutNativeDriver, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: false
        })).start()

        setTimeout(() => {
            let value = 1;
            while (value > 0) {
                value = Math.floor(Math.random() * 100) + 1;
                console.log(value)
            }
        }, 5000)
    }

    return (
        <View style={styles.container}>

            <View style={styles.column}>
                <PressableAnimated onPress={playAnimation} style={[styles.presssable, {
                    transform: [{
                        translateY: animationWithNativeDriver.interpolate({
                            inputRange: [0, 0.5, 1],
                            outputRange: [0, SIZES.HEIGHT_SCREEN - 200, 0]
                        })
                    }]
                }]}>
                    <Text style={styles.txtPress}>Native driver</Text>
                </PressableAnimated>
            </View>

            <View style={styles.column}>
                <PressableAnimated onPress={playAnimation} style={[styles.presssable, {
                    transform: [{
                        translateY: animationWithoutNativeDriver.interpolate({
                            inputRange: [0, 0.5, 1],
                            outputRange: [0, SIZES.HEIGHT_SCREEN - 200, 0]
                        })
                    }]
                }]}>
                    <Text style={styles.txtPress}>No native driver</Text>
                </PressableAnimated>
            </View>

        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    column: {
        flex: 1,
        height: '100%',
        alignItems: 'center'
    },
    presssable: {
        backgroundColor: 'blue',
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtPress: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
});
