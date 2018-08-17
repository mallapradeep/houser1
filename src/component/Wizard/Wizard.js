import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class Wizard extends Component {
    constructor(){
        super();

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
    }

    handleName(val){
        this.setState({
            name: val
        })
    }
    handleAddress(val){
        this.setState({
            address: val
        })
    }
    handleCity(val){
        this.setState({
            city: val
        })
    }
    handleState(val){
        this.setState({
            state: val
        })
    }
    handleZip(val){
        this.setState({
            zip: val
        })
    }


    addHouse(){
        let {name, address, city, state, zip } = this.props;
        
        axios.post('/api/house/add', {name, address, city, state, zip } );
        }
    
    
  render() {
    return (
      <div>
        Wizard
        <p>name</p>
        <input type="text" value={this.state.name} onChange={e => this.handleName(e.target.value)}/>

         <p>address</p>
        <input type="text" value={this.state.address} onChange={e => this.handleAddress(e.target.value)}/>

         <p>city</p>
        <input type="text" value={this.state.city} onChange={e => this.handleCity(e.target.value)}/>

         <p>state</p>
        <input type="text" value={this.state.state} onChange={e => this.handleState(e.target.value)}/>

         <p>zip</p>
        <input type="text" value={this.state.zip} onChange={e => this.handleZip(e.target.value)}/>

         
        <Link to='/'><button>Cancel</button></Link>
        <Link to='/'><button onClick={() => this.addHouse }>Complete</button></Link>


      </div>
    )
  }
}
