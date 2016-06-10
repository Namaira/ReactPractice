import React from 'react';
import ReactDOM from 'react-dom';
//basically the same deal as the mount unmount buttons
class App extends React.Component {
    constructor() {
        super();
        //start with val: 0. I thought I read somewhere that you shouldn't
        //mess with state but maybe that's only outside the constructor. 
        //or maybe i read it totally wrong who knows
        this.state = { val: 0};
        //since you're setting this.update, you need to use bind
        //something about losing context
        this.update = this.update.bind(this);

    }
    update() {
        //increment state.val by one 
        this.setState({val: this.state.val + 1})
    }

    componentWillMount() {
        //set m(ultiplier) to 2
        //I guess you could do this in the constructor too?
        this.setState({m: 2})
    }

    render(){
        console.log('rendering!')
        return (
            <button onClick = {this.update}>
            //display the current value * the multiplier
             {this.state.val * this.state.m}
            </button>)
    }
    //set it to update every half second or whatever 
    componentDidMount() {
        this.inc = setInterval(this.update,500)
    }
    //clear this.inc before the component is unmounted
    componentWillUnmount() {
        clearInterval(this.inc)
    }
}

export default App


class Wrapper extends React.Component {
    constructor(){
        //SUPER
        super();
    }
    //everything else is the same jam as AppMountUnmount
    mount() {
        ReactDOM.render(<App />, document.getElementById('a'))
        }
    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('a'))
        }
    render() {
        return (
            <div>
                <button onClick={this.mount.bind(this)}>Mount</button>
                <button onClick={this.unmount.bind(this)}>unmount</button>
                <div id = "a"></div>
            </div>
        )
    }
}

export default Wrapper



