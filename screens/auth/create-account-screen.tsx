import { Image, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthHeading from '@/components/auth/auth-heading';
import AuthInput from '@/components/auth/auth-input';
import AuthButton from '@/components/auth/auth-button';
import { Link } from 'expo-router';

const CreateAccountScreen = () => {
    return (
        <SafeAreaView className='bg-white flex-1 pt-10 px-8'>
            <View>
                <AuthHeading title='Create an account' />
            </View>
            <View className='gap-y-10 mt-10'>
                <AuthInput icon='person' placeholder='Username or email' />
                <AuthInput icon='lock-closed' placeholder='Password' secureTextEntry />
                <AuthInput icon='lock-closed' placeholder='Confirm password' secureTextEntry />
            </View>
            <View className='mt-6'>
                <Text className='text-naturalGray'>By clicking the <Text className='text-primary'>Register</Text>  button, you agree to the public offer</Text>
                <AuthButton title='Create Account' />
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


                <Text className='text-center text-gradeGray text-xl'>I Already Have an Account <Link className='text-primary underline font-montserratSemiBold' href={'/login'}>Login</Link>
                </Text>
            </View>


        </SafeAreaView>

    )
}

export default CreateAccountScreen;