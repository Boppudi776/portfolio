import React, { Component} from 'react';


class Child1 extends Component {
    render(){
        
        return (
            <div className="componentA ">
                
                <input type="text" className="mt-4 py-1" onChange={this.props.handleChange}/>

                <button type="button" className="btn btn-warning mx-3" onClick={this.props.handleDataPush}>Add</button>

            </div>
        )
    }
}




export default Child1;
