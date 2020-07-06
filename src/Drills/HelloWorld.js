import React from 'react';

class HelloWorld extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            who: 'world'
        };
    }

handleButtonClickOne = () => {
    this.setState ({
       who: 'friend!' 
    })
}

handleButtonClickTwo = () => {
    this.setState ({
        who: 'React!' 
     })
}

handleButtonClickThree = () => {
    this.setState ({
        who: 'World!' 
     })
}

    render(){
        return(
        <div>
            <p> Hello, {this.state.who} </p>
            <button onClick={this.handleButtonClickOne}>
                Friend
            </button>
            <button onClick={this.handleButtonClickTwo}>
                React
            </button>
            <button onClick={this.handleButtonClickThree}>
                World
            </button>

        </div>
        )
    }
}


export default HelloWorld