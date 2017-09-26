import React from 'react'
import { Button } from 'react-native'

const WelcomeScreen = props => {
  return (
    <Button title='Next' onPress={() => props.navigation.navigate('Main')} />
  )
}

export default WelcomeScreen
