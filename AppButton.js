import React from 'react';
class App extends React.Component {
    render(){
        return <Button>I <Heart/> React</Button>
    }
}

class Button extends React.Component {
    render() {
        return <button>{this.props.children}</button>
    }
}

//the heart is supposed to a bootstrap thing but it doesn't show up :/
const Heart = () => <span className="glyphicon glyphicon-heart">
    </span>

   
export default App