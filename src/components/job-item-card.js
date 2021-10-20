import React from 'react'
import { useNavigation } from '@react-navigation/native'

import Box from './box'
import Button from './button'
import Label from './label'
import Tag from './tag'
import PositionTag from './position-tag'
import CompanyImage from './company-image'
import { Management, Map } from './icons'

import theme from '../utils/theme'
import { formatDistanceToNowDate } from '../utils/date'

const JobItemCard = ({ item, ...props }) => {
  const navigation = useNavigation()

  return (
    <Button
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      mt={10}
      p={10}
      mx={10}
      backgroundColor="white"
      borderRadius={8}
      {...props}
      onPress={() => navigation.push('Detail', { item })}
    >
      <Box flexDirection="row" justifyContent="space-between">
        <Box flex={1} flexDirection="row" alignItems="center">
          <CompanyImage
            style={{ width: 50, height: 50, resizeMode: 'contain' }}
            uri={item.company.logo}
            width={50}
            height={50}
            company_slug={item.company.slug}
          />

          <Box ml={10}>
            <Box flexDirection="row">
              <Box flexDirection="row" alignItems="center">
                <Management width={10} height={10} color={theme.colors.placeholder} />
                <Label ml={4} fontSize={9} color="green">
                  {item.company.name}
                </Label>
              </Box>
            </Box>
            <Box flexDirection="row" alignItems="center" mt={6}>
              <Map width={10} height={10} color={theme.colors.placeholder} />
              <Label ml={4} fontSize={9} color="green">
                {item.location}
              </Label>
            </Box>
          </Box>
        </Box>
        <Box alignItems="flex-end" mt={2} ml={90}>
          <PositionTag type={item.type} />
          <Label fontSize={8} color="placeholder" mt={6}>
            {formatDistanceToNowDate(item.updated_at)}
          </Label>
        </Box>
      </Box>
      <Label mt={16} fontSize={12} color="title" numberOfLines={2} ellipsizeMode="tail">
        {item.position}
      </Label>
      {item.tags.length > 0 && (
        <Box flexDirection="row" flexWrap="wrap" mt={16} mb={-8}>
          {item.tags.map((t, index) => (
            <Tag item={t} mr={8} key={index} />
          ))}
        </Box>
      )}
    </Button>
  )
}

export default JobItemCard
