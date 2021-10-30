import React from 'react'
import { FlatList, ActivityIndicator } from 'react-native'

import Box from '../components/box'
import Label from '../components/label'
import SearchBox from '../components/search-box'
import Tag from '../components/tag'
import JobItemCard from '../components/job-item-card'

import { getRandomTags } from '../utils/tags'
import { fetchFeaturedPosts } from '../services/post-service'

const SearchView = () => {
  const [featuredPosts, setFeaturedPosts] = React.useState([])

  const getFeaturedPosts = async () => {
    try {
      const response = await fetchFeaturedPosts()

      setFeaturedPosts(response.data.data)
    } catch (e) {
      throw e
    }
  }

  React.useEffect(() => {
    getFeaturedPosts()
  }, [])

  return (
    <Box bg="background" flex={1}>
      <Box mb={16} px={16}>
        <Box mt={16} flexDirection="row" alignItems="center">
          <SearchBox flex={1} />
        </Box>
        <Box flexDirection="row" flexWrap="wrap" mt={16} mb={-6}>
          {getRandomTags(10).map((item) => (
            <Tag item={{ name: item }} key={item} mr={6} px={14} py={4} touchable={true} />
          ))}
        </Box>
      </Box>
      {featuredPosts.length ? (
        <FlatList
          ListHeaderComponent={() => (
            <Label fontSize={20} fontWeight={700} color="icon" mt={16} pl={16}>
              Öne çıkan ilanlar
            </Label>
          )}
          data={featuredPosts}
          keyExtractor={(item) => item.slug}
          renderItem={({ item }) => <JobItemCard item={item} marginRight={16} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 6, paddingBottom: 32 }}
        />
      ) : (
        <ActivityIndicator
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          size="large"
          color="green"
        />
      )}
    </Box>
  )
}

export default SearchView
