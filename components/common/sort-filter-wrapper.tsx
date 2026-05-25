import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

export default function SortFilterWrapper({ title }: { title: string }) {
    return (
        <View className='flex-row justify-between items-center'>
            <Text className='text-xl font-montserratSemiBold'>{title}</Text>
            <View className='flex-row gap-4'>
                <View style={styles.cardShadow} className='flex-row gap-3 items-center justify-center rounded-lg bg-white p-2'>
                    <Text>Sort</Text>
                    <Ionicons name='swap-vertical' size={20} color='black' />

                </View>
                <View style={styles.cardShadow} className='flex-row gap-3 items-center justify-center rounded-lg bg-white p-2'>
                    <Text>Filter</Text>
                    <Ionicons name='funnel-outline' size={20} color='black' />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardShadow: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 3,
    },
})