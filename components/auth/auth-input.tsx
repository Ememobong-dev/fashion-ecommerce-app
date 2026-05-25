import { View, TextInput } from 'react-native'
import React from 'react'
import { COLORS } from '@/constants/colors';
import { Ionicons } from "@expo/vector-icons";


const AuthInput = ({ icon, placeholder, secureTextEntry }: { icon: React.ComponentProps<typeof Ionicons>['name'], placeholder: string, secureTextEntry?: boolean }) => {
    const [showPassword, setShowPassword] = React.useState(false);
    return (
        <View className='border flex-row gap-x-5 items-center border-muted bg-offWhite rounded-lg px-3'>
            <Ionicons name={icon} size={20} color={COLORS.muted} />
            <TextInput
                placeholder={placeholder}
                secureTextEntry={secureTextEntry && !showPassword}
                className=' placeholder:text-naturalGray flex-1 bg-transparent py-5'
            />
            {secureTextEntry && (
                <Ionicons onPress={() => setShowPassword(!showPassword)} name={showPassword ? 'eye' : 'eye-off'} size={20} color={COLORS.muted} />
            )
            }
        </View>
    )
}

export default AuthInput;