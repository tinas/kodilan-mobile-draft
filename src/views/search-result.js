import React from 'react'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Box from '../components/box'
import Label from '../components/label'
import Button from '../components/button'
import JobItemCard from '../components/job-item-card'
import SuggestionCardList from '../components/suggestion-card-list'
import Loader from '../components/loader'

import { ChevronLeft, Search } from '../components/icons'

import { search, fetchByTag, fetchByCompany, fetchByPosition, fetchFeaturedPosts } from '../services/post-service'
import { TYPES, QUERY_TYPE } from '../utils/constants'
import theme from '../utils/theme'

const SearchResultView = ({ route }) => {
  const [queryResult, setQueryResult] = React.useState(null)
  const [queryText, setQueryText] = React.useState('')
  const [subText, setSubText] = React.useState('')
  const [featuredPosts, setFeaturedPosts] = React.useState([])
  const navigation = useNavigation()

  const getSearchResult = async () => {
    let response

    switch (route.params.type) {
      case QUERY_TYPE.SEARCH:
        setQueryText(route.params.query)
        setSubText('anahtar kelimesine sahip ilanlar')
        response = await search(route.params.query)
        break
      case QUERY_TYPE.TAG:
        setQueryText(route.params.query)
        setSubText('etiketli ilanlar')
        response = await fetchByTag(route.params.query)
        break
      case QUERY_TYPE.COMPANY:
        setQueryText(route.params.company.name)
        setSubText('firmasına ait ilanlar')
        response = await fetchByCompany(route.params.company.slug)
        break
      case QUERY_TYPE.POSITION_TAG:
        setQueryText(TYPES[route.params.query].name)
        setSubText('çalışma tipindeki ilanlar')
        response = await fetchByPosition(route.params.query)
        break
    }

    setQueryResult(response.data)
    console.log(response.data.data.length)

    if (!response.data.data.length) getFeaturedPosts()
  }

  const getFeaturedPosts = async () => {
    const response = await fetchFeaturedPosts()

    setFeaturedPosts(response.data.data)
  }

  React.useEffect(() => {
    getSearchResult()
  }, [])

  const handleBackPress = () => {
    navigation.goBack()
  }

  const handleSearchPress = () => {
    navigation.navigate('Search')
  }

  return (
    <Box bg="background" flex={1}>
      <Box mx={16} mt={16} flexDirection="row" alignItems="center">
        <Button hitSlop={{ top: 12, right: 8, bottom: 12, left: 12 }} onPress={handleBackPress}>
          <ChevronLeft width={32} height={32} color={theme.colors.icon} />
        </Button>
        <Button
          flex={1}
          height={52}
          justifyContent="flex-start"
          ml={16}
          borderWidth={1}
          borderRadius="normal"
          borderColor="placeholder"
          onPress={handleSearchPress}
        >
          <Label ml={16} color="placeholder">
            {queryText}
          </Label>
        </Button>
      </Box>
      <Box flexDirection="row" mt={16} px={16}>
        <Label fontSize={12} fontWeight="bold" color="disable">
          {queryText}
        </Label>
        <Label fontSize={12} ml={4} mb={16} color="disable">
          {subText}
        </Label>
      </Box>
      {queryResult ? (
        queryResult.data.length ? (
          <FlatList
            ListHeaderComponent={() => (
              <Label fontSize={16} color="green" mt={24} mx={16}>
                {queryResult.data.length} ilan bulundu
              </Label>
            )}
            data={queryResult.data}
            keyExtractor={(item) => item.slug}
            renderItem={({ item }) => <JobItemCard item={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: 6, paddingBottom: 32 }}
          />
        ) : (
          <Box flex={1}>
            <Box flex={1} justifyContent="center" alignItems="center">
              <Search width={56} height={56} color={theme.colors.placeholder} />
              <Label fontSize={20} color="disable" mt={24}>
                Bu kritere uygun ilan bulunamadı
              </Label>
            </Box>
            <Box mb={36}>
              <SuggestionCardList suggestions={featuredPosts} />
            </Box>
          </Box>
        )
      ) : (
        <Loader showNavbar={false} />
      )}
    </Box>
  )
}

export default SearchResultView
