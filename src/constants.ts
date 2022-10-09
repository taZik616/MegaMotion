import { createNavigationContainerRef } from '@react-navigation/native'

import { RootStackParamList } from './types'

// NAVIGATION
export const navRef = createNavigationContainerRef<RootStackParamList>()

export const goBack = () => {
  if (navRef.isReady()) {
    navRef.goBack()
  }
}

// COLORS
export const primary = '#50E3C2'
export const secondary = '#ff06f4'
export const gray = '#949494'
export const white = '#ffffff'
export const black = '#17191A'
export const darkGray = '#3B3B3B'
export const lightGray = '#BFBFBF'
export const brightTurquoise = '#1EE4EC'
export const green = '#2ECC71'
export const red = 'rgb(255, 69, 58)'

// THEMES
export const lightTheme = {
  dark: false,
  colors: {
    primary: secondary,
    background: white,
    card: '#F6F8FA',
    text: black,
    border: darkGray,
    notification: 'rgb(255, 69, 58)'
  }
}
export const darkTheme = {
  dark: true,
  colors: {
    primary: primary,
    background: black,
    card: '#282A36',
    text: white,
    border: lightGray,
    notification: 'rgb(255, 69, 58)'
  }
}

export const fetchJson = async (url: string) => {
  try {
    const res = await (await fetch(url)).json()
    return res
  } catch (error) {
    handleError(error)
    return []
  }
}

export const fetchText = async (url: string) => {
  try {
    const fetchRes = await fetch(url)
    if (fetchRes.ok) {
      const res = await fetchRes.text()
      return res
    } else {
      return ''
    }
  } catch (error) {
    handleError(error)
    return ''
  }
}

// FUNCTIONS

export const handleError = (error: any) => {
  console.log('MY error: ', error)
}

export function shuffle(array: any[]) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

export const randomProperty = (obj: any) => {
  var keys = Object.keys(obj)
  return obj[keys[(keys.length * Math.random()) << 0]]
}

export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min
}

export function getRandomItem(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export const flexOne = { flex: 1 }
