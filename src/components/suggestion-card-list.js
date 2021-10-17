import React from 'react'
import { FlatList } from 'react-native'

import Box from './box'
import Label from './label'
import SuggestionCard from './suggestion-card'

const SuggestionCardList = ({ suggestions, ...props }) => {
  return (
    <Box {...props}>
      <Label ml={16} fontSize={24} fontWeight={700} color="icon">
        Öne çıkan ilanlar
      </Label>
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
