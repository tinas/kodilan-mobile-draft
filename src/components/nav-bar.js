import React from 'react'

import Box from './box'
import Button from './button'
import Logo from './logo'
import { Megaphone, Info } from './icons'

import theme from '../utils/theme'

const NavBar = ({...props}) => {
  return (
    <Box bg="background" {...props}>
      <Box px={16} flexDirection="row" justifyContent="space-between">
        <Logo fontSize={32} />
        <Box flexDirection="row">
          <Button>
            <Megaphone width={32} height={32} color={theme.colors.icon} />
          </Button>
          <Button pl={24}>
            <Info width={32} height={32} color={theme.colors.icon} />
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default NavBar
