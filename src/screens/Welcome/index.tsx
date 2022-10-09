import React from 'react'

import Lottie from 'lottie-react-native'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import toaster from './toaster.json'

import { animals } from '../../../assets/svg/animals'

export function Welcome() {
  const animalsArray = Object.values(animals)
  const data = animalsArray[0]

  return (
    <SafeAreaView>
      <Lottie source={toaster} style={{ height: 100 }} autoPlay loop />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  subButtons: {
    flexDirection: 'row',
    width: '100%'
  }
})
const { subButtons } = styles
