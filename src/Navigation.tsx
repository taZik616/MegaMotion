import React, { useEffect } from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar, useColorScheme } from 'react-native'
import Orientation from 'react-native-orientation-locker'
import SystemNavigationBar from 'react-native-system-navigation-bar'

import { TopTabBar } from './components'
import { black, darkTheme, gray, lightTheme, navRef, white } from './constants'
import { Welcome } from './screens'
import { RootStackParamList, RootMainExamplesParamList } from './types'

const Stack = createNativeStackNavigator<RootStackParamList>()
const TopTab = createMaterialTopTabNavigator<RootMainExamplesParamList>()

export default function Navigation() {
  const isDark = useColorScheme() === 'dark'
  const barStyle = isDark ? 'light-content' : 'dark-content'
  const bg = isDark ? black : white

  // SystemColors
  useEffect(() => {
    SystemNavigationBar.setNavigationColor(bg, !!isDark)
    SystemNavigationBar.setNavigationBarDividerColor(gray)
  }, [isDark])

  useEffect(() => {
    Orientation.lockToPortrait()
  }, [])

  const theme = isDark ? darkTheme : lightTheme
  return (
    <NavigationContainer theme={theme} ref={navRef}>
      <StatusBar barStyle={barStyle} backgroundColor={bg} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="WELCOME_SCREEN"
      >
        <Stack.Screen name="WELCOME_SCREEN" component={Welcome} />
        <Stack.Group
          screenOptions={{
            animation: 'slide_from_right'
          }}
        >
          <Stack.Screen name="MAIN_EXAMPLES" component={MainExamplesNavigation} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function MainExamplesNavigation() {
  return (
    <TopTab.Navigator tabBar={props => <TopTabBar {...props} />}>
      {/* <TopTab.Screen name="SVG_ANIMATIONS" component={SvgAnimations} />
      <TopTab.Screen name="ITEMS_SWIPER" component={ItemsSwiper} />
      <TopTab.Screen name="IMAGES_STACK_SWIPER" component={ImagesStackSwiper} />
      <TopTab.Screen name="DRAG_AND_DROP" component={DragAndDrop} /> */}
    </TopTab.Navigator>
  )
}
