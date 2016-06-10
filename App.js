import React from 'react';
//react-dom needed because you'll be interacting with the rendered module
import ReactDOM from 'react-dom';

//App is responsible for the number button
class App extends React.Component {
    constructor() {

        //need super() if you have constructor -- 'this' doesnt work until
        //you've called super. Also you can call super(props) if you want
        //to access props from the constructor
        super();
        this.state = { val: 0};
        this.update = this.update.bind(this);

    }
    update() {
        this.setState({val: this.state.val + 1})
    }
    //mounting refers to the initial rendering--this method is invoked before
    //the inital rendering occurs
    componentWillMount() {
        console.log('mounting!')
    }
    render(){
        console.log('rendering!')
        return <button onClick = {this.update}>{this.state.val}</button>
    }
    //invoked once immediately after component is mounted
    componentDidMount() {
        console.log('mounted')
    }
}

export default App

//Wrapper refers to the mount and unmount buttons
class Wrapper extends React.Component {
    constructor(){

        super();
    }

    mount() {
        //render 'a' -- check below for div id = "a" -- not sure why it's
        //necessary to pass <App />, since it appears on the page anyways
        //maybe ReactDOM.render() takes priority? 
        //oh wait, a is technically the dom container node while <App />
        //is the react element
        //weird
        ReactDOM.render(<App />, document.getElementById('a'))
        }
        //unmounts the counter button--the component/element at a, the 
        //container node
    unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('a'))
        }
    //why is there reactDOM.render() and different renders? does ReactDOM.render
    //infer a relationship wrt the renders?    
    render() {
        //initially render mount and unmount buttons
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



