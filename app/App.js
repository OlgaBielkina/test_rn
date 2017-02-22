import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from 'app/reducers'
import AppContainer from 'app/containers/AppContainer'

const store = createStore(reducer)

export default class App extends Component {
  render() {
    return <Provider store={store}>
            <AppContainer />
          </Provider>
  }
}