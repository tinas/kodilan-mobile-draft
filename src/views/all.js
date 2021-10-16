import React from 'react'
import { Button } from 'react-native'

import NavBar from '../components/nav-bar'
import Box from '../components/box'
import Label from '../components/label'

const AllPostsView = ({ navigation }) => {
  return (
    <Box bg="background" flex={1}>
    <NavBar />
    <Box flex={1} justifyContent="center" alignItems="center">
      <Label mb={36}>"Tüm ilanlar" page</Label>
      <Button title="Go to Hiring Detail" onPress={() => navigation.navigate('Detail')} />
    </Box>
  </Box>
  )
}

export default AllPostsView
