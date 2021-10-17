import React from 'react'

import Button from './button'
import Label from './label'

import theme from '../utils/theme'

const PositionTag = ({ type, navigation, ...props }) => {
  return (
    <Button
      width={80}
      pt={2}
      pb={3}
      border={1}
      borderRadius={3}
      style={[types[type].containerStyle]}
      {...props}
      onPress={() => navigation.navigate('SearchResult')}
    >
      <Label fontSize={10} style={[types[type].textStyle]}>
        {types[type].name}
      </Label>
    </Button>
  )
}

const types = {
  1: {
    name: 'Tam zamanlı',
    containerStyle: {
      borderColor: theme.colors.blue,
      backgroundColor: '#F1F7FC'
    },
    textStyle: {
      color: theme.colors.blue
    }
  },
  2: {
    name: 'Yarı zamanlı',
    containerStyle: {
      borderColor: theme.colors.orange,
      backgroundColor: '#FEF6F0'
    },
    textStyle: {
      color: theme.colors.orange
    }
  },
  3: {
    name: 'Stajyer',
    containerStyle: {
      borderColor: theme.colors.yellow,
      backgroundColor: '#FDFCF2'
    },
    textStyle: {
      color: theme.colors.yellow
    }
  },
  4: {
    name: 'Freelance',
    containerStyle: {
      borderColor: theme.colors.yellow,
      backgroundColor: '#FDFCF2'
    },
    textStyle: {
      color: theme.colors.yellow
    }
  }
}

export default PositionTag
