import React from 'react'
import { StatusBar } from 'react-native'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components'
import 'react-native-gesture-handler'

import Navigation from './navigation'
import Theme from './utils/theme'

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <StatusBar barStyle="dark-content" backgroundColor={Theme.colors.background} />
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </ThemeProvider>
  )
}

export default App
