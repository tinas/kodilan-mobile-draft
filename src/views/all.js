import React from 'react'

import Box from '../components/box'
import JobItemCardList from '../components/job-item-card-list'

import { PERIODS } from '../utils/constants'

const AllPostsView = () => {
  return (
    <Box bg="background" flex={1}>
      <JobItemCardList period={PERIODS.all} />
    </Box>
  )
}

export default AllPostsView
