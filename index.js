import { AppRegistry } from 'react-native'

import { name as appName } from './app.json'
import App from './src/AppWithProviders'

AppRegistry.registerComponent(appName, () => App)
