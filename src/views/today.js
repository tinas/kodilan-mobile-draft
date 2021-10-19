import React from 'react'

import Box from '../components/box'
import JobItemCardList from '../components/job-item-card-list'

import { PERIODS } from '../utils/constants'

const TodayPostsView = () => {
  return (
    <Box bg="background" flex={1}>
      <JobItemCardList period={PERIODS.daily} />
    </Box>
  )
}

export default TodayPostsView
