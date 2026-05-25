import { Image, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withSequence,
    withTiming,
} from "react-native-reanimated";

const StartingSplashScreen = ({ onChange }: { onChange: () => void }) => {
    const translateX = useSharedValue(0);

    useEffect(() => {
        translateX.value = withRepeat(
            withSequence(
                withTiming(10, { duration: 600 }),
                withTiming(-10, { duration: 600 }),
                withTiming(0, { duration: 600 })
            ),
            -1,
            false
        );
    }, [translateX]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }],
        };
    });

    useEffect(() => {
        const timer = setTimeout(onChange, 3000);
        return () => clearTimeout(timer);

    }, [onChange]);

    return (
        <View className='flex-1 bg-white justify-center items-center'>
            <View className='flex-row gap-4 items-center'>
                <Image source={require("@/assets/images/brand-image.png")} />
                <Animated.Text
                    style={animatedStyle}
                    className="text-primary font-libreBold text-4xl"
                >
                    Stylish
                </Animated.Text>
            </View>
        </View>
    )
}

export default StartingSplashScreen
