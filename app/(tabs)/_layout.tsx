import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '@/constants/colors';

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: "black",
                tabBarStyle: {
                    height: 70,
                    paddingBottom: 10,
                    paddingTop: 8,
                },
            }}
        >
            <Tabs.Screen name="home" options={{
                title: 'Home',
                tabBarIcon: ({ size, color }) => (
                    <Ionicons name="home" size={size} color={color} />
                ),
            }} />
            <Tabs.Screen name="wishlist" options={{
                title: 'Wishlist',
                tabBarIcon: ({ size, color }) => (
                    <Ionicons name="heart" size={size} className='text-primary' color={color} />
                ),
            }} />
            <Tabs.Screen name="cart" options={{
                title: '',
                tabBarIcon: ({ size, color }) => (
                    <View style={styles.boxShadow} className='justify-center items-center rounded-full w-16 h-16 -mt-5 bg-white'>
                        <Ionicons name="cart" size={size} color={color} />
                    </View>
                ),
            }} />
            <Tabs.Screen name="search" options={{
                title: 'Search',
                tabBarIcon: ({ size, color }) => (
                    <Ionicons name="search-outline" size={size} color={color} />
                ),
            }} />
            <Tabs.Screen name="settings" options={{
                title: 'Settings',
                tabBarIcon: ({ size, color }) => (
                    <Ionicons name="settings-outline" size={size} color={color} />
                ),
            }} />
        </Tabs>
    )
}

const styles = StyleSheet.create({
    boxShadow: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 3,
    }
})