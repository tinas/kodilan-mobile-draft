import React from 'react'

import Button from './button'
import Box from './box'
import Label from './label'

import { Search } from './icons'

import theme from '../utils/theme'

export const SearchNormal = () => {
  return (
    <Button
      style={{
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 24,
        elevation: 20,
        shadowOffset: {
          width: 0,
          height: 10
        }
      }}
      px={16}
      height={52}
      bg="white"
      borderRadius="normal"
    >
      <Search width={20} height={20} color={theme.colors.green} />
      <Box flex={1} pl={16}>
        <Label color="placeholder">Pozisyon adı, teknoloji adı</Label>
      </Box>
    </Button>
  )
}
