// create your App component here
import React from 'react'

class App extends React.Component {

  state = {
    data: null
  }
  
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(data => this.setState({
      data
    }))
  }
  render () {
    return <h1>Hi</h1>
  }
}

export default App