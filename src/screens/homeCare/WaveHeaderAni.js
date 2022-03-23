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

const WaveHeaderAni = ({delay = 0, color = "white"}) => {
    const animatedValue = useSharedValue(0);

    const animatedProps = useAnimatedProps(() => {
        const value1 = interpolate(animatedValue.value, [0, 0.5, 1], [0, 30, 120], {extrapolateRight: Extrapolation.CLAMP});
        const value2 = interpolate(animatedValue.value, [0, 0.3, 1], [0, 30, 120], {extrapolateRight: Extrapolation.CLAMP});
        const value3 = interpolate(animatedValue.value, [0, 0.5, 1], [0, 80, 120], {extrapolateRight: Extrapolation.CLAMP});
        const value4 = interpolate(animatedValue.value, [0, 0.5, 1], [0, 120, 120], {extrapolateRight: Extrapolation.CLAMP});

        const path = `M 0 0 L 0 55 L ${value4} 55 C ${value3} 36.6667 ${value2} 18.3333 ${value1} 0 Z`;
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

export default WaveHeaderAni;
