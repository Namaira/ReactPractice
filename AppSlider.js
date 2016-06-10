import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(){
        super();
        this.state = { 
            red: 0,
            green: 0,
            blue: 0
        }
        this.update = this.update.bind(this)
    }
    update(e){
        this.setState({
            red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
            green:ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
            blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
        })
    }
    render() {
        return (
            <div>
            <Slider ref = "red" update={this.update} />
            {this.state.red}
            <br />
            <Slider ref = "green" update={this.update} />    
            {this.state.green}
            <br />
            <Slider ref = "blue" update={this.update} />    
            {this.state.blue}
            <br />
                
            </div>
        ); 
    }
}
class Slider extends React.Component {
    render(){
        return (
            //if you add div, then you must give input its own ref, otherwise
            //nothing will work! that's why it's this.red.refs.inp instead of just
            //this.red
            //adding div means you have to specify. pretty weird.
            //this part is almost purely referring to the components appearance..
            //We don't export slider because it's used in App anyways.
            <div>
            <input ref = "inp" type="range"
            min = "0"
            max = "255" 
                onChange={this.props.update} />
            </div>
        )        
            
    }
}
//Widget killed off in Video 7, place taken by slider
/*const Widget = (props) => {
    return (
        <div>
            <input type="text" 
                onChange={props.update} />
            <h1>{props.txt}</h1>
        </div>
    );
}*/

export default App
