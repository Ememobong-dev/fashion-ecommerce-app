import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'


type ProductCardProps = {
    imgSource: any;
    name: string;
    price: number;
    discount: number;
    numberOfSales: number;
    rating: number;
    description: string;
}


const ProductCard = ({ imgSource, name, price, discount, numberOfSales, rating, description }: ProductCardProps) => {
    const discountedAmount = price - (price * discount);

    return (
        <View
            className="bg-white border border-white rounded-xl overflow-hidden w-56"
           
        >
            <Image
                resizeMode="cover"
                source={imgSource}
                className="w-full h-32"
            />

            <View className="px-3 py-2"  style={styles.cardShadow}>
                <Text
                    numberOfLines={1}
                    className="font-montserratSemiBold text-base text-black"
                >
                    {name}
                </Text>

                <Text
                    numberOfLines={2}
                    className="text-sm text-muted mt-1"
                >
                    {description}
                </Text>

                <Text className="font-montserratSemiBold text-base mt-2">
                    ₹{price}
                </Text>

                <View className="flex-row items-center gap-2 mt-1">
                    <Text className="text-[#808488] text-sm line-through">
                        ₹{discountedAmount}
                    </Text>

                    <Text className="text-primary text-sm">
                        {discount * 100}% OFF
                    </Text>
                </View>

                <View className="flex-row items-center gap-2 mt-2">
                    <Text className="text-sm">⭐ {rating}</Text>

                    <Text className="text-sm text-muted">
                        {numberOfSales}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default ProductCard;

const styles = StyleSheet.create({
    cardShadow: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 16,
    },
})