import React from 'react'
import { Platform } from 'react-native'

import Button from './button'
import Box from './box'
import Label from './label'

import { Search } from './icons'

import theme from '../utils/theme'

function TabBar({ state, descriptors, navigation }) {
  return (
    <Box
      pb={Platform.OS == 'ios' && 20}
      bg="white"
      flexDirection="row"
      paddingHorizontal={16}
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 12
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 24
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        return label === 'Search' ? (
          // search button
          <Box key={label} p={15} mt={-15} bg="white" borderRadius="full">
            <Button size={56} bg="green" borderRadius="full" onPress={onPress}>
              <Search width={24} height={24} color="white" />
            </Button>
          </Box>
        ) : (
          // tab-button
          <Button key={label} pt={6} flexDirection="column" height={56} flex={1} onPress={onPress}>
            {label === 'Today' && <Label color={isFocused ? theme.colors.green : theme.colors.disable}>Bugün</Label>}
            {label === 'ThisWeek' && (
              <Label color={isFocused ? theme.colors.green : theme.colors.disable}>Bu hafta</Label>
            )}
            {label === 'ThisMonth' && (
              <Label color={isFocused ? theme.colors.green : theme.colors.disable}>Bu ay</Label>
            )}
            {label === 'All' && (
              <Label color={isFocused ? theme.colors.green : theme.colors.disable}>Tüm ilanlar</Label>
            )}

            {/* indicator */}
            <Box size={4} bg={isFocused ? 'green' : 'white'} mt={6} borderRadius="full" />
          </Button>
        )
      })}
    </Box>
  )
}

export default TabBar
