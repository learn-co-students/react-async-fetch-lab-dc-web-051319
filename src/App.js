import React from "react";

class App extends React.Component {
    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(response => response.json())
            .then(obj => {
                console.log(obj)
            });
    }

    render() {
        return (
        <div>App</div>
        )
    }
}

export default App