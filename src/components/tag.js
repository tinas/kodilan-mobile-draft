import React from 'react'

import Button from './button'
import Label from './label'

const Tag = ({ item, navigation, ...props }) => {
  return (
    <Button
      px={8}
      pb={2}
      mb={8}
      border={1}
      borderColor="green"
      borderRadius={3}
      {...props}
      onPress={() => navigation.navigate('SearchResult')}
    >
      <Label fontSize={10} my={2} color="green">
        {item.name}
      </Label>
    </Button>
  )
}

export default Tag
