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
                tabBarIconStyle:{
                    color: COLORS.primary,
                },
                tabBarStyle: {
                    height: 70,
                    paddingBottom: 10,
                    paddingTop: 8,
                },
            }}
        >
            <Tabs.Screen name="home" options={{
                title: 'Home',
                tabBarIcon: ({ size }) => (
                    <Ionicons name="home" size={size} color="black" />
                ),
            }} />
            <Tabs.Screen name="wishlist" options={{
                title: 'Wishlist',
                tabBarIcon: ({ size }) => (
                    <Ionicons name="heart" size={size} className='text-primary' color="black" />
                ),
            }} />
            <Tabs.Screen name="cart" options={{
                title: '',
                tabBarIcon: ({ size }) => (
                    <View style={styles.boxShadow} className='justify-center items-center rounded-full w-16 h-16 -mt-5 bg-white'>
                        <Ionicons name="cart" size={size} color="black" />
                    </View>
                ),
            }} />
            <Tabs.Screen name="search" options={{
                title: 'Search',
                tabBarIcon: ({ size }) => (
                    <Ionicons name="search-outline" size={size} color="black" />
                ),
            }} />
            <Tabs.Screen name="settings" options={{
                title: 'Settings',
                tabBarIcon: ({ size }) => (
                    <Ionicons name="settings-outline" size={size} color="black" />
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