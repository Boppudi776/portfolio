import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Child1 from './components/Component1';
import { Child2 } from './components/Component2';
im

class Parent extends Component {
  constructor(){
    super();
    this.state = {
      inputval: '',
      tasklist: []
    }
  }

  // handleChange = (event) => {
  //   this.setState({
  //     inputval: event.target.value
  //   })
  // }
  // componentDidMount(){
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  // }

  // handleDataPush = () => {
  //   this.state.tasklist.push(this.state.inputval);
  //   this.setState({
  //     tasklist: this.state.tasklist
  //   })
  // }

  // handleDelete = (item) => {
  //   console.log('delete called', item);
  //   const index = this.state.tasklist.indexOf(item);

  //   const { tasklist } = this.state; // destructring

  //   // const leftArr = arr.slice(0,index);  
  //   // const rightArr = arr.slice(index+1);
  //   // const newArr = [...leftArr, ...rightArr];

  //   this.setState({
  //     tasklist: [ ...tasklist.slice(0,index), ...tasklist.slice(index+1) ]
  //   })
  // }

  
  render(){
    return (
      <div className="App d-flex justify-content-center">
        {/* <div>
          <Child1 
            handleChange={this.handleChange}
            handleDataPush={this.handleDataPush}
            
          />
          <Child2 
            tasks={this.state.tasklist}
            handleDelete={this.handleDelete}
          />
        </div> */}
      

      </div>
    )
  }
}


export default Parent;