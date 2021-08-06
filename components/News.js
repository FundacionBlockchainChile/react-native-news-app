import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, StyleSheet, FlatList, Text, Button} from 'react-native';
import ItemBox from './ItemBox';
import NewsBox from './newsBox';
import Page from './WebView';

const data = [
  {id: '1', name: 'A'},
  {id: '2', name: 'B'},
  {id: '3', name: 'C'},
  {id: '4', name: 'D'},
  {id: '5', name: 'E'},
  {id: '6', name: 'F'},
  {id: '7', name: 'G'},
  {id: '8', name: 'H'},
  {id: '9', name: 'I'},
  {id: '10', name: 'J'},
  {id: '11', name: 'K'},
  {id: '12', name: 'L'},
  {id: '13', name: 'M'},
  {id: '14', name: 'N'},
  {id: '15', name: 'O'},
  {id: '16', name: 'P'},
  {id: '17', name: 'Q'},
  {id: '18', name: 'R'},
  {id: '19', name: 'S'},
  {id: '20', name: 'T'},
  {id: '21', name: 'U'},
  {id: '22', name: 'V'},
  {id: '23', name: 'W'},
  {id: '24', name: 'X'},
  {id: '25', name: 'Y'},
  {id: '26', name: 'Z'},
];


const News = ({ navigation }) => {
  const [lists, setLists] = useState(data);
  const [feturedNew, setfeturedNew] = useState(null);
  // const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch('http://hn.algolia.com/api/v1/search_by_date?tags=story')
      response = await response.json()
      setLists(response.hits); 
      console.log(response.hits);
    }

    fetchMyAPI()
  }, [])

  const deleteItem = (index) => {
    const arr = [...lists];
    arr.splice(index, 1);
    setLists(arr);
  };

  const showNews = (url) => {
    navigation.navigate('WebView', {
            url: url,
            // otherParam: 'anything you want here',
          })
    // setfeturedNew(index);
  };

  if (lists.length !== 0 ) {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={lists}
          renderItem={({item, index}) => {
            return <ItemBox  data={item} handleDelete={() => deleteItem()} showNews={() => showNews(item.url)} />;
          }}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => {
            return <View style={styles.seperatorLine}></View>;
          }}
        />
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.titleText} >Loading...</Text>    
        </View>
      </SafeAreaView>
    )
  }

// <NewsBox item={lists[feturedNew]} />
  
};

export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperatorLine: {
    height: 1,
    backgroundColor: 'black',
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
  }

});