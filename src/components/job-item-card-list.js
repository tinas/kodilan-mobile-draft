import React from 'react'
import { ActivityIndicator, Animated, RefreshControl } from 'react-native'
import { useScrollToTop } from '@react-navigation/native'

import NavBar from '../components/nav-bar'
import Box from './box'
import Label from '../components/label'
import JobItemCard from '../components/job-item-card'
import Loader from '../components/loader'
import EmptyPost from '../components/empty-post'

import { fetchRecentPosts, fetchFeaturedPosts, fetchAllPosts } from '../services/post-service'

import { PERIODS } from '../utils/constants'

const NAVBAR_HEIGHT = 70

const JobItemCardList = ({ period }) => {
  const ref = React.useRef(null)
  const [posts, setPosts] = React.useState([])
  const [featuredPosts, setFeaturedPosts] = React.useState([])
  const [refresh, setRefresh] = React.useState(false)
  const [currentPage, setCurrentPage] = React.useState(1)
  const [lastPage, setLastPage] = React.useState(1)
  const [totalPost, setTotalPost] = React.useState(0)
  const [loading, setLoading] = React.useState(true)

  useScrollToTop(ref)

  const getPosts = async () => {
    const response =
      period.slug == PERIODS.all.slug ? await fetchAllPosts(currentPage) : await fetchRecentPosts(period.slug)

    setLastPage(response.data.last_page)
    setPosts(response.data.data)
    setTotalPost(response.data.total)

    if (!response.data.data.length) getFeaturedPosts()

    setRefresh(false)
    setLoading(false)
  }

  const getFeaturedPosts = async () => {
    const response = await fetchFeaturedPosts()

    setFeaturedPosts(response.data.data)
  }

  React.useEffect(() => {
    getPosts()
  }, [])

  const onRefreshHandle = () => {
    if (refresh) return

    setRefresh(true)
    setCurrentPage(1)
    getPosts()
  }

  const loadMore = async () => {
    if (lastPage == currentPage) return

    const nextPage = currentPage + 1

    const response =
      period.slug == PERIODS.all.slug ? await fetchAllPosts(nextPage) : await fetchRecentPosts(period.slug, nextPage)

    setPosts(posts.concat(response.data.data))
    setCurrentPage(nextPage)
  }

  // Header Animation
  const animatedScrollY = React.useRef(new Animated.Value(0))
  const animatedScrollClamped = Animated.diffClamp(animatedScrollY.current, 0, NAVBAR_HEIGHT)

  const translateY = animatedScrollClamped.interpolate({
    inputRange: [0, NAVBAR_HEIGHT],
    outputRange: [0, -NAVBAR_HEIGHT]
  })

  const translateYNumber = React.useRef()

  translateY.addListener(({ value }) => {
    translateYNumber.current = value
  })

  const handleScroll = Animated.event([{ nativeEvent: { contentOffset: { y: animatedScrollY.current } } }], {
    useNativeDriver: true
  })

  const getCloser = (value, checkOne, checkTwo) =>
    Math.abs(value - checkOne) < Math.abs(value - checkTwo) ? checkOne : checkTwo

  const handleSnap = ({ nativeEvent }) => {
    const offsetY = nativeEvent.contentOffset.y
    if (!(translateYNumber.current == 0 || translateYNumber.current == -NAVBAR_HEIGHT)) {
      if (ref.current) {
        ref.current.scrollToOffset({
          offset:
            getCloser(translateYNumber.current, -NAVBAR_HEIGHT) == -NAVBAR_HEIGHT
              ? offsetY + NAVBAR_HEIGHT
              : offsetY - NAVBAR_HEIGHT
        })
      }
    }
  }

  const renderItem = React.useCallback(({ item }) => <JobItemCard item={item} />, [])
  const keyExtractor = React.useCallback((item) => item.slug, [])

  return (
    <React.Fragment>
      {!loading ? (
        posts.length ? (
          <React.Fragment>
            <Animated.View style={{ position: 'absolute', left: 0, right: 0, zIndex: 1, transform: [{ translateY }] }}>
              <NavBar />
            </Animated.View>

            <Animated.FlatList
              ListHeaderComponent={() => (
                <Box flexDirection="row" alignItems="center" mx={16} mt={16}>
                  <Label fontSize={20} fontWeight={700} color="icon">
                    Son Eklenen ilanlar
                  </Label>
                  <Label ml="auto" fontSize={10} color="icon">
                    Toplam {totalPost} ilan bulundu
                  </Label>
                </Box>
              )}
              ref={ref}
              data={posts}
              refreshControl={
                <RefreshControl
                  refreshing={refresh}
                  onRefresh={onRefreshHandle}
                  colors={['green']}
                  progressViewOffset={NAVBAR_HEIGHT}
                />
              }
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingTop: NAVBAR_HEIGHT }}
              scrollEventThrottle={2}
              onScroll={handleScroll}
              onMomentumScrollEnd={handleSnap}
              onEndReached={loadMore}
              onEndReachedThreshold={2}
              initialNumToRender={10}
              maxToRenderPerBatch={10}
              windowSize={10}
              ListFooterComponent={() => (
                <Box my={32} justifyContent="center" alignItems="center">
                  {lastPage != currentPage ? (
                    <ActivityIndicator size="large" color="green" />
                  ) : (
                    <Label color="placeholder">Tüm ilanları gördünüz</Label>
                  )}
                </Box>
              )}
            />
          </React.Fragment>
        ) : featuredPosts.length ? (
          <EmptyPost suggestions={featuredPosts} periodName={period.name} />
        ) : (
          <Loader />
        )
      ) : (
        <Loader />
      )}
    </React.Fragment>
  )
}

export default JobItemCardList
