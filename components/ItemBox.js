import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import moment from 'moment';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const SCREEN_WIDTH = Dimensions.get('window').width;

const ItemBox = (props) => {

  let date = moment(props.data.created_at_i, "YYYYMMDD").fromNow()


  const rightSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [1, .5],
    });
    return (
      <TouchableOpacity onPress={props.handleDelete} activeOpacity={0.6}>
        <View style={styles.deleteBox}>
          <Animated.Text style={{transform: [{scale: scale}], color: 'white'}}>
            Delete
          </Animated.Text>
        </View>
      </TouchableOpacity> 
    );
  };
  return (
    <TouchableOpacity onPress={props.showNews}>
      <Swipeable renderRightActions={rightSwipe}>
        <View style={styles.container}>
          <Text numberOfLines={2} style={styles.textTitle} >{props.data.title}.</Text>
          <Text style={{color: '#7a7a7a', fontSize: 15}}>Author: {props.data.author} - {moment(props.data.created_at).fromNow()}</Text>
        </View>
      </Swipeable>
    </TouchableOpacity>
  );
};

export default ItemBox;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: SCREEN_WIDTH,
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 30,
  },
  deleteBox: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
  },
  textTitle: {
    fontSize: 16,
    textAlign: 'auto',
  }
});