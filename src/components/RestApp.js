import axios from 'axios'
import React, { Component } from 'react'
import Showdata from './RestApp/Showdata';
const URL = "https://jsonplaceholder.typicode.com/users";

export default class RestApp extends Component {
  state={
    users:[]
  }
  componentDidMount() {
    axios
      .get(URL)
      .then((response) => response.data)
      .then((data) => {
      
        this.setState({users:data})
      });
  }
  render() {
    return <div>
     <Showdata sdata={this.state.users}/>
    </div>;
  }
}