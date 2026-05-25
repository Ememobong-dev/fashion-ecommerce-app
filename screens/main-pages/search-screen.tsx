import { View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from '@/components/common/navbar';
import SearchBar from '@/components/common/search-bar';
import SortFilterWrapper from '@/components/common/sort-filter-wrapper';

const SearchScreen = () => {
  return (
    <SafeAreaView className='pt-10 px-8 bg-tertiary flex-1'>
      <Navbar />
      < View className='mt-6'>
        <SearchBar />
      </View>
      <View  className='mt-6'>
        <SortFilterWrapper title='All Featured' />
      </View>
    </SafeAreaView>
  )
}

export default SearchScreen;