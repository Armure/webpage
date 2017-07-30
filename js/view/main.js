import React from 'react'

const titles = [
  'matt',
  'about',
  'projects',
  'context'
]
const style = {
  fontSize: '6vw',
  letterSpacing: '2vw',
  width: '100%',
  textAlign: 'center',
  fontFamily: 'Century Gothic',
  position: 'absolute',
  top: '30%',
  left: '0',
  color: 'rgba(0, 0, 0, 0.3)',
  cursor: 'pointer'
}

export default class Main extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      titleIndex: 0
    }
  }

  onClick () {
    let index = this.state.titleIndex
    index++
    index = index % 4
    this.setState({titleIndex: index})
  }

  render () {
    const title = titles[this.state.titleIndex]
    return (
      <h1 style={style} onClick={() => this.onClick()}>
        {title.toUpperCase()}
      </h1>
    )
  }
}
