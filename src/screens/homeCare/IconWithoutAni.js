import * as React from 'react';
import {useEffect} from 'react';
import {Path, Svg} from "react-native-svg";
import {COLOR} from "../../utils";
import Animated, {Easing, useAnimatedProps, useSharedValue, withDelay, withTiming} from "react-native-reanimated";
import * as Animatable from 'react-native-animatable';

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatablePath = Animatable.createAnimatableComponent(AnimatedPath);


const IconWithoutAni = ({itemIcon}) => {

    const animatedIconValue = useSharedValue(0);

    useEffect(() => {
        animatedIconValue.value = withDelay(2800, withTiming(1, {
            duration: 0, easing: Easing.out(Easing.quad)
        }));
    }, [])

    const animatedIcon = useAnimatedProps(() => {
        return {
            fillOpacity: animatedIconValue.value
        };
    });

    return (
        <Svg height="50%" width="25%" viewBox="0 0 24 24">
            {itemIcon[0].map((itemLongPath, indexLong) => {
                return (<AnimatablePath
                    animation={"fadeInUp"} duration={2400}
                    key={indexLong.toString()}
                    d={itemLongPath}
                    animatedProps={animatedIcon}
                    strokeWidth={1.5}
                    stroke={COLOR.color_5}
                    fill={COLOR.color_1}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                />)
            })}

            {itemIcon[1].map((itemShortPath, indexShort) => {
                return (<AnimatablePath
                    animation={"fadeInUp"} duration={2400}
                    key={indexShort.toString()}
                    d={itemShortPath}
                    strokeWidth={1.5}
                    stroke={COLOR.color_5}
                    fill={COLOR.color_1}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                />)
            })}
        </Svg>
    )
}

export default IconWithoutAni;
