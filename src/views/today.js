import React from 'react'
import { FlatList } from 'react-native'

import NavBar from '../components/nav-bar'
import Box from '../components/box'
import Label from '../components/label'
import JobItemCard from '../components/job-item-card'

const { MonthlyData } = require('../../mock')

const TodayPostsView = ({ navigation }) => {
  return (
    <Box bg="background" flex={1}>
      <FlatList
        ListHeaderComponent={() => (
          <Box>
            <NavBar mb={24} />
            <Label mx={16} fontSize={24} fontWeight={700} color="icon">
              Son Eklenen ilanlar
            </Label>
          </Box>
        )}
        data={MonthlyData.data}
        renderItem={({ item }) => <JobItemCard item={item} navigation={navigation} />}
        keyExtractor={(item) => item.slug}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      />
    </Box>
  )
}

export default TodayPostsView
