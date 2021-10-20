import React from 'react'
import { useNavigation } from '@react-navigation/native'

import Box from '../components/box'
import Button from '../components/button'
import Label from '../components/label'
import CompanyImage from './company-image'

import { Management, Map } from '../components/icons'

import theme from '../utils/theme'

const SuggestionCard = ({ item, ...props }) => {
  const navigation = useNavigation()
  const onPressButton = () => {
    navigation.push('Detail', { item })
  }

  return (
    <Box mt={8} width={210} height={140} backgroundColor="white" borderRadius={8} p={10} {...props}>
      <Box flexDirection="row" alignItems="center">
        <CompanyImage
          style={{ width: 50, height: 50, resizeMode: 'contain' }}
          uri={item.company.logo}
          width={50}
          height={50}
          company_slug={item.company.slug}
        />
        <Box ml={10}>
          <Box flexDirection="row" alignItems="center">
            <Management width={10} height={10} color={theme.colors.placeholder} />
            <Label ml={4} fontSize={9} color="green">
              {item.company.name.length > 23 ? item.company.name.substr(0, 21) + '...' : item.company.name}
            </Label>
          </Box>
          <Box flexDirection="row" alignItems="center" mt={6}>
            <Map width={10} height={10} color={theme.colors.placeholder} />
            <Label ml={4} fontSize={9} color="green">
              {item.location}
            </Label>
          </Box>
        </Box>
      </Box>
      <Label mt={6} fontSize={12} color="title">
        {item.position.length > 60 ? item.position.substr(0, 55) + '...' : item.position}
      </Label>
      <Button onPress={onPressButton} mt="auto" width="100%" height={25} backgroundColor="green" borderRadius={4}>
        <Label color="white">İlana git</Label>
      </Button>
    </Box>
  )
}

export default SuggestionCard
