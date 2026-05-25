import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

const AuthButton = ({title} : {title: string}) => {
  return (
  <TouchableOpacity>
    <Text className='text-center text-xl font-montserratSemiBold text-white bg-primary py-6 rounded-lg mt-10'>{title}</Text>
  </TouchableOpacity>
  )
}

export default AuthButton