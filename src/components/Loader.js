import React from 'react'
import { ActivityIndicator } from 'react-native'

import Box from './box'
import NavBar from './nav-bar'

const Loader = ({ showNavbar = true }) => {
  return (
    <Box flex={1}>
      {showNavbar && <NavBar />}
      <ActivityIndicator
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        size="large"
        color="green"
      />
    </Box>
  )
}

export default Loader
