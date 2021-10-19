import React from 'react'

import Box from '../components/box'
import JobItemCardList from '../components/job-item-card-list'

import { PERIODS } from '../utils/constants'

const ThisWeekPostsView = () => {
  return (
    <Box bg="background" flex={1}>
      <JobItemCardList period={PERIODS.weekly} />
    </Box>
  )
}

export default ThisWeekPostsView
