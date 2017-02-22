import React, { Component } from 'react'
import { Text, View, Button } from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
    header: {
      right: <Button title="Info" />,
    }
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Lucy' })}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}