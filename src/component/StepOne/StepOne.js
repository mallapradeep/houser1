import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateName, updateAddress, updateCity, updateState, updateZip } from '../../ducks/reducer';



 class StepOne extends Component {
    constructor(){
        super();

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
        this.handleName = this.handleName.bind(this);
      
    }
    componentDidMount(){
        this.setState({
            name: this.props.name
        })
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
    handleNext(){
        let {} = this.props;
        updateName(this.state.name);
        
    }


   
    
    
  render() {
      
    return (
      <div>
       <h2>Add New Listing</h2>

        <p>Property Name</p>
        <input type="text" value={this.state.name} onChange={e => this.handleName(e.target.value)}/>

         <p>address</p>
        <input type="text" value={this.state.address} onChange={e => this.handleAddress(e.target.value)}/>

         <p>city</p>
        <input type="text" value={this.state.city} onChange={e => this.handleCity(e.target.value)}/>

         <p>state</p>
        <input type="text" value={this.state.state} onChange={e => this.handleState(e.target.value)}/>

         <p>zip</p>
        <input type="text" value={this.state.zip} onChange={e => this.handleZip(e.target.value)}/>

         
      <Link to='/wizard/step2'><button onClick={()=> this.handleNext()}>Next Step</button></Link>
      <Link to='/'><button>Cancel</button></Link>
        


      </div>
    )
  }
}

function mapStateToProps(State) {
    let { name, address, city, state, zip } = State;
    return {  name, address, city, state, zip }
}

export default connect(
    mapStateToProps, { updateName, updateAddress, updateCity, updateState, updateZip }
)(StepOne);