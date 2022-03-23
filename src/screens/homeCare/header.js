import * as React from 'react';
import {useEffect} from 'react';
import {Text, View} from 'react-native';
import {ClipPath, Defs, LinearGradient, Path, Stop, Svg} from "react-native-svg";
import Animated, {
    Extrapolation,
    interpolate,
    useAnimatedProps,
    useSharedValue,
    withDelay,
    withTiming
} from "react-native-reanimated";
import {COLOR, SIZES} from "../../utils";
import WaveHeaderAni from "./WaveHeaderAni";
import Icon from "react-native-vector-icons/MaterialIcons";
import IconFont from "react-native-vector-icons/FontAwesome";
import * as Animatable from 'react-native-animatable';


const AnimatedPath = Animated.createAnimatedComponent(Path);

const Header = () => {
    const animatedBackgroundValue = useSharedValue(1);

    const animatedProps = useAnimatedProps(() => {
        const value1 = interpolate(animatedBackgroundValue.value, [0, 0.3, 0.5, 1], [0, 150, 300, 844], {extrapolateRight: Extrapolation.CLAMP});
        const value2 = interpolate(animatedBackgroundValue.value, [0, 0.3, 0.5, 1], [0, 100, 450, 844], {extrapolateRight: Extrapolation.CLAMP});
        const value3 = interpolate(animatedBackgroundValue.value, [0, 0.3, 0.5, 1], [0, 300, 400, 844], {extrapolateRight: Extrapolation.CLAMP});
        const value4 = interpolate(animatedBackgroundValue.value, [0, 0.3, 0.5, 1], [0, 300, 450, 844], {extrapolateRight: Extrapolation.CLAMP});

        const path = `M 0 0 L 0 ${value1} C 130 ${value2} 260 ${value3} 390 ${value4} L 390 0 Z`;
        return {
            d: path,
        };
    });

    useEffect(() => {
        animatedBackgroundValue.value = withDelay(9000, withTiming(0, {duration: 3000}));
    }, [])

    return (
        <View style={{width: '100%', height: '100%', position: 'absolute'}}>

            <Svg height="100%" width="100%" viewBox="0 0 390 844">
                <Defs>
                    <LinearGradient id="grad" x1="0" y1="1" x2="0" y2="0">
                        <Stop offset="0" stopColor={COLOR.color_1} stopOpacity="0.5"/>
                        {/*<Stop offset="0.2" stopColor={COLOR.color_1} stopOpacity="0" />*/}
                        <Stop offset="1" stopColor={COLOR.color_2} stopOpacity="0"/>
                    </LinearGradient>
                </Defs>

                <AnimatedPath
                    animatedProps={animatedProps}
                    fill="url(#grad)"
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                />
            </Svg>

            <View style={{
                width: '100%',
                height: SIZES.WIDTH_WINDOW * 0.5,
                position: 'absolute',
                top: 0
            }}>
                <Svg height="100%" width="100%" viewBox="0 0 100 50">
                    <Defs>
                        <ClipPath id="clip">
                            <Path
                                d={"M 0 0 L 0 55 C 17 19 79 32 120 55 L 120 0 Z"}
                                x={-10}
                                strokeWidth={0}
                                stroke={"none"}
                                // fill={COLOR.color_1}
                            />
                        </ClipPath>
                    </Defs>
                    <WaveHeaderAni a1={80} a2={13} delay={10400} color={COLOR.color_4}/>
                    <WaveHeaderAni a1={80} a2={13} delay={10700} color={COLOR.color_2}/>
                    <WaveHeaderAni a1={80} a2={13} delay={11000} color={COLOR.color_1}/>
                </Svg>
            </View>

            <View style={{
                flexDirection: 'row',
                position: 'absolute',
                height: SIZES.WIDTH_WINDOW * 0.4,
                alignItems: 'center',
                paddingHorizontal: 24,
                width: '100%',
                justifyContent: 'space-between'
            }}>
                <Animatable.Image
                    animation={"zoomIn"}
                    duretion={1500}
                    delay={9000}
                    source={require("../../assets/images/avatar.jpg")}
                    style={{width: 50, height: 50, borderRadius: 30, borderWidth: 1, borderColor: '#fff'}}/>

                <Animatable.View
                    animation={"fadeIn"}
                    duretion={1500}
                    delay={9000}
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon name={"keyboard-arrow-left"} style={{fontSize: 22, color: '#e5e5e5'}}/>
                    <Text style={{marginHorizontal: 8, fontSize: 16, color: '#e5e5e5'}}>11 Feb 2021</Text>
                    <Icon name={"keyboard-arrow-right"} style={{fontSize: 22, color: '#e5e5e5'}}/>
                </Animatable.View>

                <Animatable.View
                    animation={"zoomIn"}
                    duretion={1500}
                    delay={9000}
                    style={{padding: 10, backgroundColor: 'rgba(255,255,255,0.2)', borderRadius: 8}}>
                    <IconFont name={"bell-o"} style={{fontSize: 20, color: '#e5e5e5'}}/>
                </Animatable.View>


            </View>

        </View>
    );
}

export default Header;
