import React from 'react'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Box from './box'
import Label from './label'
import Button from './button'
import SuggestionCard from './suggestion-card'

import { ChevronLeft } from './icons'

import theme from '../utils/theme'

const SuggestionCardList = ({ suggestions, ...props }) => {
  const navigation = useNavigation()
  const onPressButton = () => {
    navigation.navigate('All')
  }

  return (
    <Box {...props}>
      <Box flexDirection="row" mx={16} mb={8}>
        <Label fontSize={20} fontWeight={700} color="icon">
          Diğer ilanlara göz atın
        </Label>
        <Button onPress={onPressButton} ml="auto" style={{ transform: [{ rotateY: '180deg' }] }}>
          <ChevronLeft width={32} height={32} color={theme.colors.icon} />
        </Button>
      </Box>
      <FlatList
        horizontal={true}
        data={suggestions}
        renderItem={({ item }) => <SuggestionCard item={item} marginRight={16} />}
        keyExtractor={(item) => item.slug}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 16 }}
      />
    </Box>
  )
}

export default SuggestionCardList
