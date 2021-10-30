import React from 'react'
import { useNavigation } from '@react-navigation/native'

import Box from './box'
import Input from './input'
import Button from './button'
import Label from './label'

import { Search } from './icons'

import { QUERY_TYPE } from '../utils/constants'
import theme from '../utils/theme'

const SearchBox = ({ ...props }) => {
  const [value, setValue] = React.useState('')
  const inputRef = React.createRef()
  const navigation = useNavigation()

  React.useEffect(() => {
    onFocus()
  }, [])

  const onFocus = () => {
    inputRef.current.focus()
  }

  const onClear = () => {
    setValue('')
  }

  const handleOnSubmitting = () => {
    navigation.navigate('SearchResult', { query: value, type: QUERY_TYPE.SEARCH })
  }

  return (
    <Box position="relative" {...props}>
      <Input
        ref={inputRef}
        height={52}
        px={52}
        borderRadius="normal"
        color="primaryText"
        bg="white"
        borderWidth={1}
        borderColor="green"
        value={value}
        onChangeText={(text) => setValue(text)}
        returnKeyType="search"
        onSubmitEditing={handleOnSubmitting}
      />
      <Box position="absolute" left={16} top={16}>
        <Button onPress={onFocus}>
          <Search width={19} height={19} color={theme.colors.green} />
        </Button>
      </Box>
      {value.length > 0 && (
        <Box position="absolute" right={16} top={16}>
          <Button onPress={onClear} bg="#DDDDDD" borderRadius="full" width={20} height={20}>
            <Label color="white" fontSize={14} fontWeight="bold">
              X
            </Label>
          </Button>
        </Box>
      )}
    </Box>
  )
}

export default SearchBox
