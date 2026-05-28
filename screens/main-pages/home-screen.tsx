import { FlatList, Image, ImageBackground, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from '@/components/common/navbar';
import SearchBar from '@/components/common/search-bar';
import SortFilterWrapper from '@/components/common/sort-filter-wrapper';
import { Ionicons } from '@expo/vector-icons';
import ProductCard from '@/components/common/product-card';
import { productData } from "@/data/product";





const homeCategory1 = require("@/assets/images/home-category1.png");
const homeCategory2 = require("@/assets/images/home-category2.png");
const homeCategory3 = require("@/assets/images/home-category3.png");
const homeCategory4 = require("@/assets/images/home-category4.png");
const homeCategory5 = require("@/assets/images/home-category5.png");





const HomeScreen = () => {
  return (
    <SafeAreaView className='pt-10 px-8 bg-tertiary flex-1'>
      <Navbar />
      <View className='mt-6'>
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='my-6'>
          <SortFilterWrapper title='All Featured' />
        </View>
        <View className='flex-row justify-between w-full'>
          <View>
            <Image source={homeCategory1} resizeMode='contain' className='w-18 h-18' />
            <Text className='text-purple text-center text-sm mt-2'>Beauty</Text>
          </View>
          <View>
            <Image source={homeCategory2} resizeMode='contain' className='w-18 h-18' />
            <Text className='text-purple text-center text-sm mt-2'>Fashion</Text>
          </View>
          <View>
            <Image source={homeCategory3} resizeMode='contain' className='w-18 h-18' />
            <Text className='text-purple text-center text-sm mt-2'>Kids</Text>
          </View>
          <View>
            <Image source={homeCategory4} resizeMode='contain' className='w-18 h-18' />
            <Text className='text-purple text-center text-sm mt-2'>Men</Text>
          </View>
          <View>
            <Image source={homeCategory5} resizeMode='contain' className='w-18 h-18' />
            <Text className='text-purple text-center text-sm mt-2'>Women</Text>
          </View>
        </View>
        {/* banner */}
        <View>
          <ImageBackground source={require("@/assets/images/home-discount-banner1.png")} resizeMode='cover' className='w-full h-48 mt-6 rounded-lg overflow-hidden justify-start p-4'>
            <View>
              <Text className='text-white font-montserratBold text-2xl'>50-40% OFF</Text>
              <Text className='text-white mt-2'>Now in (product)</Text>
              <Text className='text-white mt-2'>All colours</Text>
              <TouchableOpacity className='border border-white inline-flex h-10 rounded-md justify-center items-center mt-4 w-36'>
                <Text className='text-white mx-auto font-montserratSemiBold'>
                  Shop Now <Ionicons name='arrow-forward' size={14} />
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View className='mt-3 flex-1 flex-row justify-center items-center gap-3'>
            <View className='w-3 h-3 bg-[#DEDBDB] rounded-full' />
            <View className='w-3 h-3 bg-[#FFA3B3] rounded-full' />
            <View className='w-3 h-3 bg-[#DEDBDB] rounded-full' />
          </View>
        </View>

        {/* blue banner */}
        <View className='mt-6 bg-lightBlue rounded-lg p-4 flex flex-row justify-between items-center'>
          <View>
            <Text className='text-white text-lg font-montserratMedium'>Deal of the Day</Text>
            <View className='flex-row gap-2 mt-3'>
              <Ionicons name='alarm-outline' color={'white'} size={18} />
              <Text className='text-white'>
                22h 55m 20s remaining
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity className='border border-white rounded-md justify-center items-center mt-4 p-2'>
              <Text className='text-white mx-auto font-montserratSemiBold'>
                View all <Ionicons name='arrow-forward' size={14} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* product scroll view */}
        <View className='mt-6'>
          <FlatList 
          horizontal
          data={productData}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{
            gap: 16,
            paddingHorizontal: 3,
          }}
          renderItem={({ item }) => (
            <ProductCard 
              imgSource={item.image}
              name={item.name}
              price={item.price}
              discount={item.discount}
              numberOfSales={item.numberOfSales}
              rating={item.rating}
              description={item.description}
            />
          )}
          />

        </View>










      </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen;