import React from 'react'

import Box from '../components/box'
import JobItemCardList from '../components/job-item-card-list'

import { PERIODS } from '../utils/constants'

const ThisMonthPostsView = () => {
  return (
    <Box bg="background" flex={1}>
      <JobItemCardList period={PERIODS.monthly} />
    </Box>
  )
}

export default ThisMonthPostsView
