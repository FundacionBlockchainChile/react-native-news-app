import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeView from './components/Home';
import NewsBox from './components/newsBox';
import WebPage from './components/WebView';
import News from './components/News';

const Stack = createStackNavigator();

const theme = {
  colors: {
    dark: '#050505',
    light: '#F5F1E3',
    button: '#b25b00',
    textLight: '#FFFFFF',
    textDark: '#4E598C',
    input: '#DDDBCB',
  }
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Hacker News"
          component={News}
          options={{ 
            title: 'Hacker News',
          }} />

        <Stack.Screen
          name="WebView"
          component={WebPage}
          options={{
            headerTintColor: theme.colors.textLight,
            headerTitle: 'News Website',
            headerStyle: { backgroundColor: theme.colors.dark }
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;