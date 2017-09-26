import React from 'react'
import { StackNavigator } from 'react-navigation'
import MainScreen from './MainScreen'
import WelcomeScreen from './WelcomeScreen'

const App = StackNavigator({
  Welcome: { screen: WelcomeScreen },
  Main: { screen: MainScreen }
})

export default App
