import React, {Component} from 'react'

class App extends Component {

    //When component mounts

 constructor(props){

    super(props)
    this.state={astros: []}
 }

    render(){
        return (
            <div>{this.state.astros.map(astro => astro.name)}</div> 
        )
    }

componentDidMount(){
    fetch("http://api.open-notify.org/astros.json")
    .then(resp => resp.json())
    .then(astrosObj => {
        this.setState({astros: astrosObj.people})
        })
    }
}

export default App 