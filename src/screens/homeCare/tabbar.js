import * as React from 'react';
import {useEffect} from 'react';
import {View} from 'react-native';
import {Circle, ClipPath, Defs, Path, Svg} from "react-native-svg";
import Animated, {
    Easing,
    Extrapolation,
    interpolate,
    useAnimatedProps,
    useSharedValue,
    withDelay,
    withTiming
} from "react-native-reanimated";
import {COLOR} from "../../utils";
import IconAni from "./IconAni";
import IconWithoutAni from "./IconWithoutAni";
import WaveAni from "./WaveAni";
import * as Animatable from 'react-native-animatable';

const ICON = [
    [
        ["M2.3999 13.713C2.3999 8.082 3.0139 8.475 6.3189 5.41C7.7649 4.246 10.0149 2 11.9579 2C13.8999 2 16.1949 4.235 17.6539 5.41C20.9589 8.475 21.5719 8.082 21.5719 13.713C21.5719 22 19.6129 22 11.9859 22C4.3589 22 2.3999 22 2.3999 13.713Z"],
        ["M9.07861 16.1355H14.8936"]
    ],
    [
        ["M19.071 19.0698C16.0159 22.1264 11.4896 22.7867 7.78631 21.074C7.23961 20.8539 3.70113 21.8339 2.93334 21.067C2.16555 20.2991 3.14639 16.7601 2.92631 16.2134C1.21285 12.5106 1.87411 7.9826 4.9302 4.9271C8.83147 1.0243 15.1698 1.0243 19.071 4.9271C22.9803 8.83593 22.9723 15.1681 19.071 19.0698Z"],
        ["M15.9393 12.4131H15.9483",
            "M11.9303 12.4131H11.9393",
            "M7.92128 12.4131H7.93028"]
    ],
    [
        ["M2.74976 12.7755C2.74976 5.81947 5.06876 3.50146 12.0238 3.50146C18.9798 3.50146 21.2988 5.81947 21.2988 12.7755C21.2988 19.7315 18.9798 22.0495 12.0238 22.0495C5.06876 22.0495 2.74976 19.7315 2.74976 12.7755Z",
            "M3.02515 9.32397H21.0331"],
        ["M16.4284 13.261H16.4374",
            "M12.0289 13.261H12.0379",
            "M7.62148 13.261H7.63048",
            "M16.4284 17.113H16.4374",
            "M12.0289 17.113H12.0379",
            "M7.62148 17.113H7.63048",
            "M16.033 2.05005V5.31205",
            "M8.02466 2.05005V5.31205"]
    ],
    [
        ["M11.8445 21.6618C8.15273 21.6618 5 21.0873 5 18.7865C5 16.4858 8.13273 14.3618 11.8445 14.3618C15.5364 14.3618 18.6891 16.4652 18.6891 18.766C18.6891 21.0658 15.5564 21.6618 11.8445 21.6618Z",
            "M11.8372 11.1735C14.26 11.1735 16.2236 9.2099 16.2236 6.78718C16.2236 4.36445 14.26 2.3999 11.8372 2.3999C9.41452 2.3999 7.44998 4.36445 7.44998 6.78718C7.4418 9.20172 9.3918 11.1654 11.8063 11.1735C11.8172 11.1735 11.8272 11.1735 11.8372 11.1735Z"],
        []
    ]
]

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const Tabbar = () => {
    const animatedBallValue = useSharedValue(0);

    useEffect(() => {
        animatedBallValue.value = withDelay(4000, withTiming(1, {
            duration: 4500, easing: Easing.out(Easing.quad)
        }));
    }, [])

    const aniIconBall1 = useAnimatedProps(() => {
        const valueX = interpolate(animatedBallValue.value,
            [0, 0.07, 0.32, 0.50, 0.64, 0.83, 0.93, 0.96],
            [87, 87, 87, 62, 62, 37, 37, 12],
            {extrapolateRight: Extrapolation.CLAMP});
        const valueY = interpolate(animatedBallValue.value,
            [0, 0.07, 0.32, 0.365, 0.41, 0.455, 0.50, 0.64, 0.83, 0.93, 0.945, 1],
            [21, 10, 10, 5, 10, 15, 10, 10, 10, 10, 17, 10],
            {extrapolateRight: Extrapolation.CLAMP});
        const opacity = interpolate(animatedBallValue.value,
            [0, 0.07, 0.32, 0.365, 0.41, 0.455, 0.50, 0.64, 0.83, 0.93, 0.945, 1],
            [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            {extrapolateRight: Extrapolation.CLAMP});
        return {
            cx: valueX,
            fill: `rgba(255,255,255,${opacity})`,
            cy: valueY
        };
    });

    const aniIconBall2 = useAnimatedProps(() => {
        const valueX = interpolate(animatedBallValue.value,
            [0, 0.07, 0.32, 0.50, 0.64, 0.83, 0.93, 0.96],
            [87, 87, 87, 62, 62, 37, 37, 12],
            {extrapolateRight: Extrapolation.CLAMP});
        const valueY = interpolate(animatedBallValue.value,
            [0, 0.07, 0.32, 0.365, 0.41, 0.455, 0.50, 0.64, 0.83, 0.93, 0.945, 1],
            [21, 10, 10, 5, 10, 15, 10, 10, 10, 10, 3, 10],
            {extrapolateRight: Extrapolation.CLAMP});
        const opacity = interpolate(animatedBallValue.value,
            [0, 0.07, 0.32, 0.365, 0.41, 0.455, 0.50, 0.64, 0.83, 0.93, 0.945, 1],
            [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            {extrapolateRight: Extrapolation.CLAMP});
        return {
            cx: valueX,
            fill: `rgba(255,255,255,${opacity})`,
            cy: valueY
        };
    });

    return (
        <Animatable.View
            animation={"fadeInUp"}
            duretion={800}
            delay={500}
            style={{
            width: 356.421, height: 67.71999,
            backgroundColor: COLOR.color_1, borderRadius: 50,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            position:'absolute',
            bottom:32
        }}>

            <View style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Svg height="100%" width="100%" viewBox="0 0 100 19">
                    <Defs>
                        <ClipPath id="clip">
                            <Path
                                d={"M 0 10 Q 0 0 10 0 L 90 0 Q 100 0 100 10 Q 100 19 90 19 Q 50 19 10 19 Q 0 19 0 10 Z"}
                                strokeWidth={0}
                                stroke={"none"}
                                fill={"red"}
                            />
                        </ClipPath>
                    </Defs>
                    <WaveAni a1={80} a2={13} delay={1000} color={COLOR.color_5}/>
                    <WaveAni a1={100} a2={10} delay={1300} color={COLOR.color_2}/>
                    <WaveAni a1={120} a2={7} delay={1800} color={COLOR.color_1}/>
                </Svg>
            </View>

            <View style={{position: 'absolute', width: '100%', height: "100%", borderRadius: 50}}>
                <Svg height="100%" width="100%" viewBox="0 0 100 19">
                    <AnimatedCircle animatedProps={aniIconBall1} r="1.5"/>
                    <AnimatedCircle animatedProps={aniIconBall2} r="1.5"/>
                </Svg>
            </View>

            <View style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {ICON.map((itemIcon, index) => {
                    return <IconWithoutAni key={index.toString()} itemIcon={itemIcon} indexIcon={index}/>
                })}
            </View>

            <View style={{
                width: '100%',
                height: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {ICON.map((itemIcon, index) => {
                    return <IconAni key={index.toString()} itemIcon={itemIcon} indexIcon={index}/>
                })}
            </View>

        </Animatable.View>
    );
}

export default Tabbar;
