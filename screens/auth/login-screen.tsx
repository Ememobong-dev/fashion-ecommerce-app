import { Image, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthHeading from '@/components/auth/auth-heading';
import AuthInput from '@/components/auth/auth-input';
import AuthButton from '@/components/auth/auth-button';
import { Link, useRouter } from 'expo-router';


const LoginScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView className='flex-1 pt-10 px-8'>
      <View>
        <AuthHeading title='Welcome Back!' />
      </View>
      <View className='gap-y-10 mt-10'>
        <AuthInput icon='person' placeholder='Username or email' />
        <View>
          <AuthInput icon='lock-closed' placeholder='Password' secureTextEntry />
          <TouchableOpacity onPress={() => router.push("/forgot-password")}>
            <Text className='text-right mt-3 text-primary'>Forgot password?</Text>
          </TouchableOpacity>

        </View>

      </View>
      <View className='mt-6'>
        <AuthButton title='Login' />
      </View>

      <View className='mt-6 gap-6'>
        <Text className='text-lg text-gradeGray text-center'> - OR continue with  -</Text>

        <View className='flex-row justify-center items-center gap-5'>
          <View className='w-16 h-16 rounded-full border border-primary flex items-center justify-center bg-lightPink'>
            <Image resizeMode='contain' width={16} height={16} source={require("@/assets/images/google.png")} />
          </View>
          <View className='w-16 h-16 rounded-full border border-primary flex items-center justify-center bg-lightPink'>
            <Image resizeMode='contain' width={16} height={16} source={require("@/assets/images/apple.png")} />
          </View>
          <View className='w-16 h-16 rounded-full border border-primary flex items-center justify-center bg-lightPink'>
            <Image resizeMode='contain' width={16} height={16} source={require("@/assets/images/facebook.png")} />
          </View>
        </View>
        <Text className='text-center text-gradeGray text-xl'>Create An Account <Link className='text-primary underline font-montserratSemiBold' href={'/create-account'}>Sign up</Link>
        </Text>
      </View>


    </SafeAreaView>
  )
}

export default LoginScreen;