import React from 'react';

class Accordion extends React.Component {
     result = ''
    // this.props.forEach(element => {
    //     let temp=(<li>
    //               <button>
    //                   {element.title}
    //               </button>
    //           </li>)
    //       console.log(temp);
    //     result += temp
    //   })
    handleClick() {
        console.log('click')
    }
    render(){
        return(
            <div>
            <button onClick={this.handleClick} >
                click
            </button>

            <ul>
                
            </ul>
                <p>{}</p>
            </div>
        )
    }    
}

export default Accordion;