import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';


const SplashData = [
    {
        id: 1,
        title: "Choose Products",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        image: require("../../assets/images/fashion shop-rafiki-1.png")
    },
    {
        id: 2,
        title: "Make Payment",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        image: require("../../assets/images/Sales consulting-pana 1.png")
    },
    {
        id: 3,
        title: "Get Your Order",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        image: require("../../assets/images/Shopping bag-rafiki 1.png")
    },
]

const ChooseProductSplash = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeData = SplashData[activeIndex];
    const router = useRouter();


    
    const handleNext = () => {
        if (activeIndex === SplashData.length - 1) {
            // navigate to next screen
            router.push("/create-account")
            return;
        }

        setActiveIndex((prev) => prev + 1);
    };

    
    useEffect(() => {
        const interval = setInterval(() => {
          setActiveIndex((prev) => {
            if (prev === SplashData.length - 1) {
              return prev;
            }
      
            return prev + 1;
          });
        }, 5000);
      
        return () => clearInterval(interval);
      }, []);


    const handlePrev = () => {
        if (activeIndex === 0) return;

        setActiveIndex((prev) => prev - 1);
    };

    const handleSkip = () => {
        // navigate to next screen
    };

    return (
        <SafeAreaView className='flex-1 px-8 bg-white'>
            <View className="flex-row mt-5 justify-between">
                <Text className="font-montserrat font-semibold text-xl">
                    {activeIndex + 1}/<Text className={` ${activeIndex + 1 === SplashData.length ? "text-black" : "text-secondary"}`}>{SplashData.length}</Text>
                </Text>

                <Text onPress={handleSkip} className="text-xl font-semibold">
                    Skip
                </Text>
            </View>
            {/* Main content */}
            <View className='flex-1 justify-center items-center'>
                <Image source={activeData.image} />
                <View>
                    <Text className='text-center text-3xl font-montserratExtraBold font text-black'>{activeData.title}</Text>
                    <Text className='text-center tracking-wide text-muted'>{activeData.description}</Text>
                </View>
            </View>

            {/* bottom navigation */}
            <View className='flex-row justify-between items-center'>
                {
                    activeIndex > 0 ? (
                        <TouchableOpacity onPress={handlePrev}>
                            <Text className='text-gray  font-montserratSemiBold text-xl'>Prev</Text>
                        </TouchableOpacity>

                    ) : <View />
                }

                <View className='flex-row gap-2'>
                    {
                        SplashData.map((item) => (
                            <View key={item.id} className={`h-3 rounded-full ${activeIndex + 1 === item.id ? "bg-darkBlue w-10" : "bg-darkBlue/20 w-3"}`} />
                        ))
                    }

                </View>
                <TouchableOpacity onPress={handleNext}>
                    <Text className="text-primary font-montserratSemiBold text-xl">
                        {activeIndex === SplashData.length - 1 ? "Get Started" : "Next"}
                    </Text>
                </TouchableOpacity>


            </View>

        </SafeAreaView>
    )
}

export default ChooseProductSplash