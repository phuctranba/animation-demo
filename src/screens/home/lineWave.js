import * as React from 'react';
import {useEffect} from 'react';
import {View} from 'react-native';
import {Path, Svg} from "react-native-svg";
import Animated, {
    Extrapolation,
    interpolate,
    useAnimatedProps,
    useSharedValue,
    withRepeat,
    withTiming
} from "react-native-reanimated";
import {COLOR} from "../../utils";

const AnimatedPath = Animated.createAnimatedComponent(Path);

const LineWave = ({style={},a1 = 43, a2 = 67, b1 = 67, b2 = 35, c1 = 145, c2 = 113, d1 = 78, d2 = 103}) => {
    const animatedValue = useSharedValue(0);

    const animatedProps = useAnimatedProps(() => {
        const value1 = interpolate(animatedValue.value, [0, 1], [a1, a2], {extrapolateRight: Extrapolation.CLAMP});
        const value2 = interpolate(animatedValue.value, [0, 1], [b1, b2], {extrapolateRight: Extrapolation.CLAMP});
        const value3 = interpolate(animatedValue.value, [0, 1], [c1, c2], {extrapolateRight: Extrapolation.CLAMP});
        const value4 = interpolate(animatedValue.value, [0, 1], [d1, d2], {extrapolateRight: Extrapolation.CLAMP});

        const path = `M 0 0 C ${value1} ${value2} ${value3} ${value4} 199 141`;
        return {
            d: path,
        };
    });

    useEffect(() => {
        animatedValue.value = withRepeat(withTiming(1, {duration: 2000}), 20, true);
    }, [])

    return (
        <View style={[style,{position:'absolute',width:'100%'}]}>
            <Svg height={300} width="100%" viewBox="0 0 200 142.4">
                <AnimatedPath animatedProps={animatedProps} fill="none" stroke={COLOR.color_6}/>
            </Svg>
        </View>
    );
}

export default LineWave;
