import React, {useEffect, useRef} from 'react';
import {Animated, Easing, Image, Platform, StyleSheet, Text, View} from "react-native";

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
const scrollY = new Animated.Value(0);

export const Ex4 = () => {


    useEffect(()=>{
        setTimeout(()=>{
            Animated.timing(scrollY,{
                duration:5000,
                toValue:300,
                easing:Easing.in(Easing.circle),
                useNativeDriver:true
            }).start()
        },2000)
    },[])
    scrollY.addListener(e=>{
        console.log(e.value)
    })

    const renderItem = () => {
        const data = Array.from({length: 30});
        return (
            <View style={styles.scrollViewContent}>
                {data.map((_, i) => (
                    <View key={i} style={styles.row}>
                        <Text>Item {i}</Text>
                    </View>
                ))}
            </View>
        );
    }

    const a1 =  scrollY.interpolate({
        inputRange: [0, 200],
        outputRange: [1,2 ],
        extrapolate: 'clamp',
    })

    const a3 =  a1.interpolate({
        inputRange: [1, 2],
        outputRange: [1,4],
        extrapolate: 'clamp',
    })


    return (
        <View style={styles.fill}>

            <Animated.ScrollView
                style={styles.fill}
                scrollEventThrottle={1}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {y: scrollY}}}],
                    {useNativeDriver: false},
                )}
            >
                <Animated.View
                    pointerEvents="none"
                    style={[
                        styles.header,
                        {
                            // height:scrollY.interpolate({
                            //     inputRange: [0, HEADER_SCROLL_DISTANCE],
                            //     outputRange: [HEADER_SCROLL_DISTANCE,0 ],
                            //     extrapolate: 'clamp',
                            // })
                            transform:[{
                                scale:a3
                            }]
                        },
                    ]}>
                    <Image
                        style={styles.backgroundImage}
                        source={require("../../assets/images/avatar.jpg")}
                    />
                </Animated.View>
                {renderItem()}
            </Animated.ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    fill: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    header: {
        // position: 'absolute',
        // top: 0,
        // left: 0,
        // right: 0,
        backgroundColor: '#03A9F4',
        overflow: 'hidden',
        height: HEADER_MAX_HEIGHT,
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: HEADER_MAX_HEIGHT,
        resizeMode: 'cover',
    },
    bar: {
        backgroundColor: 'transparent',
        marginTop: Platform.OS === 'ios' ? 28 : 38,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    title: {
        color: 'white',
        fontSize: 24,
    },
    scrollViewContent: {

    },
    row: {
        height: 40,
        margin: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
