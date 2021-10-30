import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import {
  TodayPostsView,
  ThisWeekPostsView,
  ThisMonthPostsView,
  AllPostsView,
  DetailView,
  SearchView,
  SearchResultView
} from './views'

import TabBar from './components/tab-bar'
import Button from './components/button'
import { ChevronLeft } from './components/icons'

import theme from './utils/theme'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const BottomTabs = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="Today" component={TodayPostsView} />
      <Tab.Screen name="ThisWeek" component={ThisWeekPostsView} />
      <Tab.Screen name="Search" component={SearchView} />
      <Tab.Screen name="ThisMonth" component={ThisMonthPostsView} />
      <Tab.Screen name="All" component={AllPostsView} />
    </Tab.Navigator>
  )
}

const TabStack = () => {
  return (
    <Stack.Navigator initialRouteName="Today">
      <Stack.Screen
        name="Tabs"
        component={BottomTabs}
        options={() => {
          return {
            headerShown: false
          }
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailView}
        options={({ navigation }) => {
          return {
            title: 'İlan detayı',
            headerTintColor: theme.colors.icon,
            headerStyle: {
              backgroundColor: theme.colors.background,
              shadowColor: theme.colors.placeholder
            },
            headerLeft: () => (
              <Button px={20} height="100%" onPress={() => navigation.goBack()}>
                <ChevronLeft width={32} height={32} color={theme.colors.icon} />
              </Button>
            )
          }
        }}
      />
      <Stack.Screen
        name="SearchResult"
        component={SearchResultView}
        options={() => {
          return { headerShown: false }
        }}
      />
    </Stack.Navigator>
  )
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <TabStack />
    </NavigationContainer>
  )
}

export default Navigation
