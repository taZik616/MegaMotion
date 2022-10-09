import React from 'react'

import { useTheme } from '@react-navigation/native'
import { Image, Pressable, StyleSheet } from 'react-native'
import { s, ms } from 'react-native-size-matters'

import { W } from '../../../constants'

const tabWidth = W / 4 - s(2) * 2
export function Tab({ icon, onPress, isActive }: TabT) {
  const {
    colors: { text }
  } = useTheme()
  const iconColor = isActive ? 'red' : text
  return (
    <Pressable onPress={onPress} style={imgContainer}>
      <Image
        resizeMode="contain"
        source={{
          uri: 'https://docs.swmansion.com/react-native-gesture-handler/img/swmLogo.svg'
        }}
        style={img}
      />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  img: {
    width: tabWidth,
    height: ms(35, 0.3)
  },
  imgContainer: {
    flex: 1,
    marginHorizontal: s(2),
    alignItems: 'center'
  }
})

const { img, imgContainer } = styles

interface TabT {
  icon: string
  onPress?: () => void
  isActive?: boolean
}
