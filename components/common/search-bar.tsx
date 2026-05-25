import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '@/constants/colors'
import { Ionicons } from "@expo/vector-icons";

const SearchBar = () => {
    return (
        <View style={styles.cardShadow} className='border flex-row gap-x-5 items-center border-white shadow bg-white rounded-lg px-3'>
            <Ionicons name={'search-outline'} size={20} color={COLORS.muted} />
            <TextInput
                placeholder="Search any Product.."
                className=' placeholder:text-[#BBBBBB] flex-1 bg-transparent py-5'
            />
            <Ionicons name='mic' size={20} color={COLORS.muted} />
        </View>
    )
}

export default SearchBar;

const styles = StyleSheet.create({
    cardShadow: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 3,
    },
})