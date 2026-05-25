import { View, Text } from 'react-native'
import React from 'react'

const AuthHeading = ({title} : {title: string}) => {
  return (
    <View>
      <Text className='text-black w-1/2 font-montserratBold text-4xl'>{title}</Text>
    </View>
  )
}

export default AuthHeading