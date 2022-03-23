import React, {useRef} from 'react';
import {Animated, Pressable, StyleSheet, Text, View} from "react-native";
import {SIZES} from "../../utils";

const PressableAnimated = Animated.createAnimatedComponent(Pressable);

export const Ex1 = () => {

    const animationDecay = useRef(new Animated.Value(SIZES.HEIGHT_SCREEN - 200)).current;
    const animationSpring = useRef(new Animated.Value(0)).current;

    const playAnimation = () => {
        Animated.decay(animationDecay, {
            velocity: 0.95,
            deceleration: 0.998,
            useNativeDriver: true
        }).start();

        Animated.spring(animationSpring, {
            toValue: 1,
            friction: 1,
            tension: 20,
            useNativeDriver: true
        }).start(() => setTimeout(() => {
            animationDecay.setValue(SIZES.HEIGHT_SCREEN - 200)
            animationSpring.setValue(0)
        }, 1000));
    }

    return (
        <View style={styles.container}>
            <View style={styles.column}>
                <PressableAnimated onPress={playAnimation} style={[styles.presssable, {
                    transform: [{
                        translateY: animationDecay.interpolate({
                            inputRange: [0, SIZES.HEIGHT_SCREEN - 200],
                            outputRange: [-SIZES.HEIGHT_SCREEN, 0]
                        })
                    }]
                }]}>
                    <Text style={styles.txtPress}>Decay</Text>
                </PressableAnimated>
            </View>

            <View style={styles.column}>
                <PressableAnimated onPress={playAnimation} style={[styles.presssable, {
                    transform: [{
                        translateY: animationSpring.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, SIZES.HEIGHT_SCREEN - 200]
                        })
                    }]
                }]}>
                    <Text style={styles.txtPress}>Spring</Text>
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
