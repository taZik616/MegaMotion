import { NavigatorScreenParams } from '@react-navigation/native'

export type RootStackParamList = {
  MAIN_EXAMPLES?: NavigatorScreenParams<RootMainExamplesParamList>
  // Lesson
  WELCOME_SCREEN: undefined
}

export type RootMainExamplesParamList = {
  SVG_ANIMATIONS: undefined
  ITEMS_SWIPER: undefined
  IMAGES_STACK_SWIPER: undefined
  DRAG_AND_DROP: undefined
}
