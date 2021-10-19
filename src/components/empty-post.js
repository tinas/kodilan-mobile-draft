import React from 'react'

import Box from './box'
import Label from './label'
import SuggestionCardList from './suggestion-card-list'
import NavBar from './nav-bar'

import { Management } from './icons'

import theme from '../utils/theme'

const EmptyPost = ({ suggestions, periodName, ...props }) => {
  return (
    <Box flex={1} {...props}>
      <NavBar />
      <Box flex={1} justifyContent="center" alignItems="center">
        <Management width={56} height={56} color={theme.colors.placeholder} />
        <Label mt={16} fontSize={24} fontWeight={700} color="disable">
          {periodName}
        </Label>
        <Label fontSize={20} color="disable">
          Yeni ilan eklenmedi
        </Label>
      </Box>
      <Box mb={36}>
        <SuggestionCardList suggestions={suggestions} />
      </Box>
    </Box>
  )
}

export default EmptyPost
