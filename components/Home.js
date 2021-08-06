import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
  Image,
  Button
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width * .9;

const HomeView = ({item}) => {

  const [numberOfLines, setNumberOfLines] = useState(50);

  console.log(item);

  return (
    <View style={styles.container}>
    
    <Text style={styles.baseText}>
      <Text style={styles.titleText}>
        This is the Home View
      </Text>
      <View style={styles.newImage}>
        <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        }}
        style={{height: 200, width: SCREEN_WIDTH}}
        />
      </View>
      
      <Text numberOfLines={numberOfLines} style={styles.contentText}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat in ex id rhoncus. Quisque vestibulum, eros vitae suscipit pretium, purus ex sagittis velit, nec condimentum tellus nisl sed ligula. Maecenas cursus hendrerit mi in interdum. Morbi mattis dapibus dignissim. Vivamus gravida convallis diam, sed consectetur quam dapibus a. Donec ut purus ut ipsum tincidunt posuere at vel lectus. Praesent vitae risus in nulla mattis ultrices nec non purus. Phasellus vehicula ipsum ipsum, a ultricies ipsum cursus vel. In fringilla suscipit neque id posuere. Maecenas at nunc sapien. Aenean mi lectus, venenatis porta orci a, eleifend scelerisque libero. Vivamus ac eros est.

      Quisque congue diam at mauris mollis, at tincidunt diam commodo. Aenean tincidunt maximus sagittis. Nullam nisi nisl, commodo ut erat eu, viverra finibus ipsum. Proin sodales id elit quis ornare. Nullam cursus magna magna, in rutrum neque semper eget. In a laoreet nunc. Phasellus lobortis id velit sit amet rutrum. Nunc sagittis blandit massa, at luctus lectus sollicitudin non. Nunc ac nisi non est vestibulum semper quis pretium eros. Vestibulum sodales, tortor vel varius ultrices, enim odio condimentum ante, at porta urna felis nec lectus. Vivamus vel tempor purus. Quisque sit amet dui turpis.

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis placerat in ex id rhoncus. Quisque vestibulum, eros vitae suscipit pretium, purus ex sagittis velit, nec condimentum tellus nisl sed ligula. Maecenas cursus hendrerit mi in interdum. Morbi mattis dapibus dignissim. Vivamus gravida convallis diam, sed consectetur quam dapibus a. Donec ut purus ut ipsum tincidunt posuere at vel lectus. Praesent vitae risus in nulla mattis ultrices nec non purus. Phasellus vehicula ipsum ipsum, a ultricies ipsum cursus vel. In fringilla suscipit neque id posuere. Maecenas at nunc sapien. Aenean mi lectus, venenatis porta orci a, eleifend scelerisque libero. Vivamus ac eros est.

      Quisque congue diam at mauris mollis, at tincidunt diam commodo. Aenean tincidunt maximus sagittis. Nullam nisi nisl, commodo ut erat eu, viverra finibus ipsum. Proin sodales id elit quis ornare. Nullam cursus magna magna, in rutrum neque semper eget. In a laoreet nunc. Phasellus lobortis id velit sit amet rutrum. Nunc sagittis blandit massa, at luctus lectus sollicitudin non. Nunc ac nisi non est vestibulum semper quis pretium eros. Vestibulum sodales, tortor vel varius ultrices, enim odio condimentum ante, at porta urna felis nec lectus. Vivamus vel tempor purus. Quisque sit amet dui turpis.
      </Text>
    </Text>
    
    
    </View>
    
    
  );
};

export default HomeView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  newImage: {
    marginTop: 10,
  },
  baseText: {
    marginTop: 10,
    padding: 20
  },
  titleText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    paddingBottom: 20
  },
  contentText: {
    marginTop: 10,
    textAlign: 'justify'
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 20,
    marginBottom: 20,
  },

});