import React from 'react'
import { useNavigation } from '@react-navigation/native'

import Button from './button'
import Label from './label'

import { QUERY_TYPE } from '../utils/constants'

const Tag = ({ item, touchable = false, ...props }) => {
  const navigation = useNavigation()

  const handlePress = () => {
    if (!touchable) return

    navigation.navigate('SearchResult', { query: item.name, type: QUERY_TYPE.TAG })
  }

  return (
    <Button px={8} pb={2} mb={8} border={1} borderColor="green" borderRadius={3} {...props} onPress={handlePress}>
      <Label fontSize={10} my={2} color="green">
        {item.name}
      </Label>
    </Button>
  )
}

export default Tag
