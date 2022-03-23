import * as React from 'react';
import {useEffect} from 'react';
import {Path} from "react-native-svg";
import Animated, {
    Extrapolation,
    interpolate,
    useAnimatedProps,
    useSharedValue,
    withDelay,
    withTiming
} from "react-native-reanimated";

const AnimatedPath = Animated.createAnimatedComponent(Path);

const WaveAni = ({a1 = 100, a2 = 10, delay = 0, color = "white"}) => {
    const animatedValue = useSharedValue(0);

    const animatedProps = useAnimatedProps(() => {
        const value1 = interpolate(animatedValue.value, [0, 0.4, 1], [0, 20, 100], {extrapolateRight: Extrapolation.CLAMP});
        const value2 = interpolate(animatedValue.value, [0, 1], [0, 150], {extrapolateRight: Extrapolation.CLAMP});
        const value3 = interpolate(animatedValue.value, [0, 1], [0, a1], {extrapolateRight: Extrapolation.CLAMP});
        const value4 = interpolate(animatedValue.value, [0, 1], [0, a2], {extrapolateRight: Extrapolation.CLAMP});
        const value5 = interpolate(animatedValue.value, [0, 1], [0, 150], {extrapolateRight: Extrapolation.CLAMP});

        const path = `M 0 0 L 0 19 L ${value2} 19 C ${value5} 10 ${value3} ${value4} ${value1} 0 Z`;
        return {
            d: path,
        };
    });

    useEffect(() => {
        animatedValue.value = withDelay(delay, withTiming(1, {duration: 2000}));
    }, [])

    return (
        <AnimatedPath
            animatedProps={animatedProps}
            fill={color}
            clipPath="url(#clip)"
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
        />
    );
}

export default WaveAni;
