import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  Text,
  ActivityIndicator,
  Button,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ItemBox from './ItemBox'

const data = [
  { id: '1', name: 'A' },
  { id: '2', name: 'B' },
  { id: '3', name: 'C' },
  { id: '4', name: 'D' },
  { id: '5', name: 'E' },
  { id: '6', name: 'F' },
  { id: '7', name: 'G' },
  { id: '8', name: 'H' },
  { id: '9', name: 'I' },
  { id: '10', name: 'J' },
  { id: '11', name: 'K' },
  { id: '12', name: 'L' },
  { id: '13', name: 'M' },
  { id: '14', name: 'N' },
  { id: '15', name: 'O' },
  { id: '16', name: 'P' },
  { id: '17', name: 'Q' },
  { id: '18', name: 'R' },
  { id: '19', name: 'S' },
  { id: '20', name: 'T' },
  { id: '21', name: 'U' },
  { id: '22', name: 'V' },
  { id: '23', name: 'W' },
  { id: '24', name: 'X' },
  { id: '25', name: 'Y' },
  { id: '26', name: 'Z' },
]

const News = ({ navigation }) => {
  // STATE
  const [allNews, setAllNews] = useState([])
  const [readedStories, setReadedStories] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const [fetchingNews, setFetchingNews] = useState(false)

  // INITIAL TASK OF COMPONENT
  useEffect(() => {
    fetchMyAPI()
    getReadedStoriesFromLocalStorage()
  }, [])

  // FETCH API FUNCTION
  const fetchMyAPI = async () => {
    let response = await fetch(
      'http://hn.algolia.com/api/v1/search_by_date?tags=story'
    )
    response = await response.json()
    setAllNews(response.hits)
    setRefreshing(false)
    setFetchingNews(false)
  }

  // LOCAL STORAGE FUNCTIONS
  const getReadedStoriesFromLocalStorage = async () => {
    let jsonValue = await AsyncStorage.getItem('@readed_stories')
    if (jsonValue !== null) {
      jsonValue = await JSON.parse(jsonValue)
      setReadedStories(jsonValue)
    }
  }

  // FUNCTIONS
  const filterStories = () => {
    const filteredList = allNews.filter(
      (newsItem) => !readedStories.includes(newsItem.objectID)
    )
    return filteredList
  }

  const deleteItem = async (story) => {
    let readed = [...readedStories, story]
    setReadedStories(readed)
    const jsonObject = await JSON.stringify(readed)
    AsyncStorage.setItem('@readed_stories', jsonObject)
    filterStories()
  }

  const showNews = (url) => {
    navigation.navigate('WebView', { url: url })
  }

  const refresh = () => {
    setRefreshing(true)
    fetchMyAPI()
  }

  const fetchLetesNews = () => {
    setFetchingNews(true)
    fetchMyAPI()
  }

  // RENDER COMPONENT
  if (fetchingNews) {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <View style={[styles.container, styles.marginTop]}>
            <ActivityIndicator size="large" color="red" />
          </View>
          <Text style={styles.titleText}>Fetching News...</Text>
        </View>
      </SafeAreaView>
    )
  } else {
    if (filterStories().length !== 0) {
      return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={filterStories()}
            renderItem={({ item, index }) => {
              return (
                <ItemBox
                  data={item}
                  handleDelete={() => deleteItem(item.objectID)}
                  showNews={() => showNews(item.url)}
                />
              )
            }}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => {
              return <View style={styles.seperatorLine}></View>
            }}
            refreshing={refreshing}
            onRefresh={refresh}
          />
        </SafeAreaView>
      )
    } else {
      return (
        <SafeAreaView style={styles.container}>
          <View>
            <Text style={styles.titleText}>You have readed all Stories.</Text>
            <View style={styles.fixToText}>
              <Button
                onPress={fetchLetesNews}
                title="Get Latest News"
                color="red"
              />
            </View>
          </View>
        </SafeAreaView>
      )
    }
  }
}

export default News

// STYLES
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperatorLine: {
    height: 1,
    backgroundColor: 'black',
  },
  titleText: {
    fontSize: 15,
    margin: 30,
    flex: 1,
    textAlign: 'center',
  },
  marginTop: {
    margin: 40,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    justifyContent: 'center',
  },
})
