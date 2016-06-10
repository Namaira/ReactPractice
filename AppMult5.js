import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    constructor() {
        super();
        //state and update comments in AppMUAuto.js
        this.state = { increasing: false};
        this.update = this.update.bind(this);

    }
    update() {
        //rerender with every update
        ReactDOM.render(
            <App val={this.props.val+1} />,
            document.getElementById('app')
            );
    }

    componentWillReceiveProps(nextProps) {
        this.setState({increasing: nextProps.val > this.props.val})
    }
    //will only update if multiple of 5
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.val % 5 ===0;
    }
    //print the previous values before updating--4, 9, 14...etc
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps)
    }

    render(){
        console.log(this.state.increasing)
        return(
            <button onClick={this.update}>
             {this.props.val}
            </button>)

    }
}
//start out with val = 0. Why not put this in constuctor? 
App.defaultProps = {val: 0}
export default App



