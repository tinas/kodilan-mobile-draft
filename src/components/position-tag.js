import React from 'react'
import { useNavigation } from '@react-navigation/native'

import Button from './button'
import Label from './label'

import { TYPES, QUERY_TYPE } from '../utils/constants'

const PositionTag = ({ type, touchable = false, ...props }) => {
  const navigation = useNavigation()

  const handlePress = () => {
    if (!touchable) return

    navigation.navigate('SearchResult', { query: type, type: QUERY_TYPE.POSITION_TAG })
  }

  return (
    <Button
      width={80}
      pt={2}
      pb={3}
      border={1}
      borderRadius={3}
      style={[TYPES[type].containerStyle]}
      {...props}
      onPress={handlePress}
    >
      <Label fontSize={10} style={[TYPES[type].textStyle]}>
        {TYPES[type].name}
      </Label>
    </Button>
  )
}

export default PositionTag
