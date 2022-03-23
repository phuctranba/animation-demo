import * as React from 'react';
import {useEffect} from 'react';
import {Text, View} from 'react-native';
import Animated, {Easing, useAnimatedStyle, useSharedValue, withDelay, withTiming} from "react-native-reanimated";
import {COLOR, SIZES} from "../../utils";
import * as Animatable from 'react-native-animatable';

const DATA = [
    {
        number: 1
    },
    {
        number: 2
    },
    {
        number: 3
    },
    {
        number: 4
    },
    {
        number: 5
    },
    {
        number: 6
    },
    {
        number: 7
    },
    {
        number: 8
    },
    {
        number: 9,
        text: "Wed"
    },
    {
        number: 10,
        text: "Thu"
    },
    {
        number: 11,
        text: "Fri",
        today: true
    },
    {
        number: 12,
        text: "Sat"
    },
    {
        number: 13,
        text: "Sun"
    },
    {
        number: 14
    },
    {
        number: 15
    },
    {
        number: 16
    },
    {
        number: 17
    },
    {
        number: 18
    },
]

const Calendar = () => {

    const animatedValue = useSharedValue(600);

    useEffect(() => {
        animatedValue.value = withDelay(10500,withTiming(-SIZES.WIDTH_WINDOW * 0.18 * 7.8, {
            duration: 2000,
            easing: Easing.out(Easing.circle),
        }))
    }, [])

    const styleAni = useAnimatedStyle(() => {
        return {
            transform: [{translateX: animatedValue.value}]
        };
    });

    const renderItem = (item) => {
        return (
            <View key={item.number.toString()} style={{width: SIZES.WIDTH_WINDOW * (item.today ? 0.21 : 0.18)}}>
                <View style={{
                    backgroundColor: 'rgba(0,0,0,0.06)', marginHorizontal: 10,
                    borderRadius: 14, alignItems: 'center'
                }}>
                    <View style={{
                        width:42,
                        height:42,
                        justifyContent:'center',
                        alignItems:'center',
                        marginTop: item.today ? 10 : 4,
                        marginBottom: 4,
                        backgroundColor: item.today ? COLOR.color_1 : "transparent",
                        borderRadius: 30
                    }}>
                        <Text style={{
                            color: item.today ? "#fff" : "#5b5b5b",
                            fontSize: 18,
                            fontWeight: 'bold'
                        }}>{item.number.toString()}</Text>
                    </View>


                    {item.text && item.today ? <Text style={{
                            marginTop: 12,
                            color: "#5b5b5b",
                            fontSize: 17,
                            fontWeight: '500',
                            width: '100%',
                            paddingBottom: 12,
                            textAlign: 'center'
                        }}>{item.text}</Text>
                        : null}
                </View>

                {!item.today ? <Text style={{
                        marginTop: 8,
                        color: "#5b5b5b",
                        fontSize: 17,
                        fontWeight: '500',
                        width: '100%',
                        textAlign: 'center'
                    }}>{item.text} </Text>
                    : null}

            </View>
        )
    }

    const translateTitle = {
        from: {
            transform: [{translateY: 30}],
            opacity: 0
        },
        to: {
            transform: [{translateY: 0}],
            opacity: 1
        },
    };

    return (
        <View style={{width: '100%', marginTop: SIZES.WIDTH_WINDOW * 0.4}}>
            <Animatable.Text
                animation={translateTitle}
                duretion={500}
                delay={11800}
                style={{
                marginTop: 16,
                color: COLOR.color_3,
                marginHorizontal: 24,
                fontSize: 24,
                fontWeight: '500'
            }}>Good moring Dr. Zip</Animatable.Text>
            <Animatable.Text
                animation={translateTitle}
                duretion={500}
                delay={11500}
                style={{
                color: COLOR.color_3,
                marginTop: 12,
                marginHorizontal: 24,
                fontSize: 14,
            }}>You have 5 sessions today</Animatable.Text>


            <Animated.View style={[{flexDirection: 'row', alignItems: 'center', marginTop: 24}, styleAni]}>
                {DATA.map(renderItem)}
            </Animated.View>
        </View>
    );
}

export default Calendar;
