import React from 'react'
import ReactDOM from 'react-dom'
import Main from './view/main'
import Canvas from './view/canvas'

class App extends React.Component {
  render () {
    return <Main />
  }
}

let canvas = new Canvas()

ReactDOM.render(<App />, document.getElementById('app'))
