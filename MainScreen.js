import React from 'react'
import { Image, Button, FlatList, StyleSheet, Text, View } from 'react-native'
import axios from 'axios'

export default class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Heroes List'
  }
  constructor (props) {
    super(props)

    this.state = {
      heroes: []
    }
  }
  componentDidMount () {
    const url = `https://gateway.marvel.com:443/v1/public/characters?limit=100&apikey=8e4b16eac17661411803de96e1c47791&ts=1&hash=cbde4f64806790d640ffa309bc9937e0`
    axios
      .get(url)
      .then(response => {
        const heroes = response.data.data.results
        this.setState({
          heroes
        })
      })
      .catch(err => console.log(err))
  }
  render () {
    return (
      <View style={styles.container}>
        <Text>Hero List</Text>
        <FlatList
          style={styles.list}
          data={this.state.heroes}
          renderItem={({ item }) => (
            <View>
              <Image
                source={{
                  uri: `${item.thumbnail.path}.${item.thumbnail.extension}`
                }}
                style={styles.listImage}
              />
              <Text style={styles.listText}>{item.name}</Text>
            </View>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  list: {
    margin: 10,
    width: '100%'
  },
  listText: {
    margin: 20
  },
  listImage: {
    width: 25,
    height: 25
  }
})
