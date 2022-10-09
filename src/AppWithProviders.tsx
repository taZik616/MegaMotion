import React from 'react'

import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { flexOne } from './constants'
import Navigation from './Navigation'

export default function AppWithProviders() {
  return (
    <GestureHandlerRootView style={flexOne}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}
