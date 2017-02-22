import HomeScreen from 'app/containers/HomeScreen'
import ChatScreen from 'app/containers/ChatScreen'

export default {
  RouteConfig: {
    Home: {
      screen: HomeScreen,
      navigationOptions: {}
    },
    Chat: { screen: ChatScreen },
  },
  StackNavigatorConfig: {
    initialRouteName: 'Home'
  }
}