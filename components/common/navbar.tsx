import { View, Text, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Navbar = () => {
    return (
        <View className='flex-row justify-between'>
            <View className='bg-lightGray flex justify-center items-center rounded-full w-12 h-12'>
                <Ionicons name='menu-sharp' size={24} color='black' />
            </View>
            <View className='flex-row gap-3 items-center'>
                <Image resizeMode='contain' width={10} height={10} source={require('../../assets/images/brand-image.png')} className='w-10 h-10' />
                <Text className='text-lg font-libreBold text-lightBlue'>Stylish</Text>
            </View>
            <View>
                <Image resizeMode='contain' width={24} height={24} source={require('../../assets/images/avatar.png')} />
            </View>
        </View>
    )
}

export default Navbar;