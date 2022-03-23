import * as React from 'react';
import {useEffect} from 'react';
import {Path, Svg} from "react-native-svg";
import Animated, {Easing, useAnimatedProps, useSharedValue, withDelay, withTiming} from "react-native-reanimated";

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
        ["M3.02515 9.32397H21.0331",
            "M2.74976 12.7755C2.74976 5.81947 5.06876 3.50146 12.0238 3.50146C18.9798 3.50146 21.2988 5.81947 21.2988 12.7755C21.2988 19.7315 18.9798 22.0495 12.0238 22.0495C5.06876 22.0495 2.74976 19.7315 2.74976 12.7755Z"],
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
const AnimatedPath = Animated.createAnimatedComponent(Path);

const IconAni = ({itemIcon, indexIcon}) => {
    const animatedIconValue = useSharedValue(0);

    useEffect(() => {
        animatedIconValue.value = withDelay(4100 + ((ICON.length - 1 - indexIcon) * 315) + ((ICON.length - 1 - indexIcon) * 850), withTiming(1, {
            duration: 1100, easing: Easing.out(Easing.quad)
        }, () => {
            if (indexIcon !== 0) {
                animatedIconValue.value = withTiming(0, {
                    duration: 500
                })
            }
        }));
    }, [])

    const animatedLongIcon = useAnimatedProps(() => {
        return {
            strokeDasharray: [80 * animatedIconValue.value, 80],
            stroke: `rgba(255,255,255,${animatedIconValue.value * 0.99})`
        };
    });

    const animatedShortIcon = useAnimatedProps(() => {
        return {
            stroke: `rgba(255,255,255,${animatedIconValue.value})`
        };
    });

    return (

        <Svg height="50%" width="25%" viewBox="0 0 24 24">
            {itemIcon[0].map((itemLongPath, indexLong) => {
                return (<AnimatedPath
                    key={indexLong.toString()}
                    animatedProps={animatedLongIcon}
                    d={itemLongPath}
                    strokeWidth={1.5}
                    fill={'none'}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                />)
            })}

            {itemIcon[1].map((itemShortPath, indexShort) => {
                return (<AnimatedPath
                    key={indexShort.toString()}
                    animatedProps={animatedShortIcon}
                    d={itemShortPath}
                    strokeWidth={1.5}
                    fill={"none"}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                />)
            })}
        </Svg>
    )
}

export default IconAni;
