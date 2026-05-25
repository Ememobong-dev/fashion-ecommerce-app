import { Image, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthHeading from '@/components/auth/auth-heading';
import AuthInput from '@/components/auth/auth-input';
import AuthButton from '@/components/auth/auth-button';


const ForgotPasswordScreen = () => {
  return (
    <SafeAreaView className='flex-1 pt-10 px-8'>
      <View>
        <AuthHeading title='Forgot Password?' />
      </View>
      <View className='gap-y-10 mt-10'>
        <AuthInput icon='mail' placeholder='Enter your email address' />
        <View>
         <Text className='text-naturalGray'> <Text className='text-primary w-10/12'>*</Text> We will send you a message to set or reset your new password</Text>
        </View>
      </View>
      <View className='mt-6'>
        <AuthButton title='Submit' />
      </View>


    </SafeAreaView>
  )
}

export default ForgotPasswordScreen;