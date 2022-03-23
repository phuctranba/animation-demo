import React, {useRef} from 'react';
import {Animated, Easing, Pressable, StyleSheet, Text, View} from "react-native";
import {SIZES} from "../../utils";

const PressableAnimated = Animated.createAnimatedComponent(Pressable);

export const Ex2 = () => {

    const animationEaseInQuart = useRef(new Animated.Value(0)).current;
    const animationEaseOutQuart = useRef(new Animated.Value(0)).current;
    const animationEaseInOutQuart = useRef(new Animated.Value(0)).current;

    const playAnimation = () => {
        Animated.timing(animationEaseInQuart, {
            toValue: 1,
            duration: 4000,
            easing: Easing.in(Easing.quad),
            useNativeDriver: true
        }).start(() => setTimeout(() => {
            animationEaseInQuart.setValue(0)
            animationEaseOutQuart.setValue(0)
            animationEaseInOutQuart.setValue(0)
        }, 1000));

        Animated.timing(animationEaseOutQuart, {
            toValue: 1,
            duration: 4000,
            easing: Easing.out(Easing.quad),
            useNativeDriver: true
        }).start()

        Animated.timing(animationEaseInOutQuart, {
            toValue: 1,
            duration: 4000,
            easing: Easing.inOut(Easing.quad),
            useNativeDriver: true
        }).start()
    }

    return (
        <View style={styles.container}>

            <View style={styles.column}>
                <PressableAnimated onPress={playAnimation} style={[styles.presssable, {
                    transform: [{
                        translateY: animationEaseInQuart.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, SIZES.HEIGHT_SCREEN - 200]
                        })
                    }]
                }]}>
                    <Text style={styles.txtPress}>InQuart</Text>
                </PressableAnimated>
            </View>

            <View style={styles.column}>
                <PressableAnimated onPress={playAnimation} style={[styles.presssable, {
                    transform: [{
                        translateY: animationEaseOutQuart.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, SIZES.HEIGHT_SCREEN - 200]
                        })
                    }]
                }]}>
                    <Text style={styles.txtPress}>OutQuart</Text>
                </PressableAnimated>
            </View>

            <View style={styles.column}>
                <PressableAnimated onPress={playAnimation} style={[styles.presssable, {
                    transform: [{
                        translateY: animationEaseInOutQuart.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, SIZES.HEIGHT_SCREEN - 200]
                        })
                    }]
                }]}>
                    <Text style={styles.txtPress}>InOutQuart</Text>
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
