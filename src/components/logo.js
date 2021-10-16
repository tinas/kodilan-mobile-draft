import React from 'react'

import Box from './box'
import Label from './label'

const Logo = ({ ...props }) => {
  return (
    <Box>
      <Box flexDirection="row">
        <Label color="green" fontSize={24} {...props}>
          {'{'}
        </Label>
        <Label color="title" fontSize={24} {...props}>
          {' kod'}
        </Label>
        <Label color="green" fontSize={24} {...props}>
          ,
        </Label>
        <Label color="title" fontSize={24} {...props}>
          {' ilan '}
        </Label>
        <Label color="green" fontSize={24} {...props}>
          {'}'}
        </Label>
      </Box>
    </Box>
  )
}

export default Logo
