import React, { useEffect, useState } from 'react'

import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs'
import { StyleSheet, View } from 'react-native'
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { vs } from 'react-native-size-matters'

import { en_color, W } from '../../../constants'
import { Tab } from '../Tab'

const tabWidth = W / 5

export function TopTabBar({ state, navigation }: MaterialTopTabBarProps) {
  const { index, routes } = state
  const { top } = useSafeAreaInsets()
  const paddingTop = top + vs(5)
  const [lineColor, setLineColor] = useState(en_color)
  // Animation
  const x = useSharedValue(0)
  useEffect(() => {
    x.value = withTiming(tabWidth * index, { duration: 300 }, () => {
      runOnJS(onAnimationEnd)()
    })
  }, [index])

  const onAnimationEnd = () => {
    const curColor = '#FF06F4'
    setLineColor(curColor)
  }

  const lineAnim = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: x.value }]
    }
  })

  const handlePress = (name: string, isFocused: boolean) => {
    if (!isFocused) {
      navigation.navigate('MAIN_EXAMPLES', {
        screen: name,
        merge: true
      })
    }
  }

  return (
    <View style={[tabContainer, { paddingTop }]}>
      {routes.map(({ name }, id) => {
        const isFocused = index === id
        return (
          <Tab
            onPress={() => {
              handlePress(name, isFocused)
            }}
            key={id}
            isActive={isFocused}
            icon={`${name}`}
          />
        )
      })}
      <Animated.View style={[line, { backgroundColor: lineColor }, lineAnim]} />
    </View>
  )
}

const styles = StyleSheet.create({
  tabContainer: {
    paddingBottom: vs(5),
    flexDirection: 'row'
  },
  line: {
    width: tabWidth,
    height: vs(2),
    position: 'absolute',
    bottom: 0,
    left: 0
  }
})
const { tabContainer, line } = styles
