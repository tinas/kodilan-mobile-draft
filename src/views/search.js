import React from 'react'
import { Button } from 'react-native'

import Box from '../components/box'
import Label from '../components/label'

const SearchView = ({ navigation }) => {
  return (
    <Box bg="background" flex={1} justifyContent="center" alignItems="center">
      <Label>Search View</Label>
      <Button bg="red" title="Go to Search Details" onPress={() => navigation.navigate('SearchResult')} />
    </Box>
  )
}

export default SearchView
