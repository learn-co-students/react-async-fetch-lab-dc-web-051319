// create your App component here
import React from 'react'

const URL = 'http://api.open-notify.org/astros.json'

class App extends React.Component {

    componentDidMount() {
        this.fetchApi()
    }

    fetchApi() {
        fetch(URL)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }

    render() {
        return (
            <div>Hello World</div>
        )
    }
}

export default App