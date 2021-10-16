import React from 'react'
import { Image } from 'react-native'

import Box from '../components/box'
import Button from '../components/button'
import Label from '../components/label'
import { Management, Map } from '../components/icons'

import theme from '../utils/theme'

const SuggestionCard = ({ item, ...props }) => {
  return (
    <Box mt={8} width={210} height={140} backgroundColor={theme.colors.white} borderRadius={8} p={10} {...props}>
      <Box flexDirection="row" alignItems="center">
        <Image
          style={{ width: 50, height: 50, resizeMode: 'contain' }}
          source={require('../assets/empty-company-logo.png')}
        />
        <Box ml={10}>
          <Box flexDirection="row" alignItems="center">
            <Management width={10} height={10} color={theme.colors.placeholder} />
            <Label ml={4} fontSize={9} color={theme.colors.green}>
              {item.company.name.length > 23 ? item.company.name.substr(0, 21) + '...' : item.company.name}
            </Label>
          </Box>
          <Box flexDirection="row" alignItems="center" mt={6}>
            <Map width={10} height={10} color={theme.colors.placeholder} />
            <Label ml={4} fontSize={9} color={theme.colors.green}>
              {item.location}
            </Label>
          </Box>
        </Box>
      </Box>
      <Label mt={6} fontSize={12} color={theme.colors.title}>
        {item.position.length > 60 ? item.position.substr(0, 55) + '...' : item.position}
      </Label>
      <Button mt="auto" width="100%" height={25} backgroundColor={theme.colors.green} borderRadius={4}>
        <Label color={theme.colors.white}>İlana git</Label>
      </Button>
    </Box>
  )
}

export default SuggestionCard