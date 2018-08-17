import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';



export default class Dashboard extends Component {
    constructor(){
        super();

        this.state = {
            houses: []
        }
        this.deleteHouse = this.deleteHouse.bind(this);
    }
//requesting the server to get the list of houses
    componentDidMount(){
        axios.get('/api/houses')
             .then(response => {
                 this.setState({
                     houses: response.data
                 })
             })
    }

    deleteHouse(id){
    
        axios.delete(`/api/house/delete/${id}`)
             .then(response => {
                 console.log(response.data)
                 this.setState({
                     house: response.data
                 })
             })
        }


  render() {
      let displayHouses = () => {
          return this.state.houses.map( house => {
              const {id, name, address, city, state, zip, img,  mortgage, rent  } = house;
              return (
                  <div key = {id}>
                  {/* //passing the house info to the house component */}
                  <House 
                    id = {id}
                    name ={name}
                    address={address}
                    city={city}
                    state = {state}
                    zip = {zip}
                    img = {img}
                    mortgage = {mortgage}
                    rent = {rent}
                    deleteHouse = {this.deleteHouse}
                     />
                  </div>

              )
          })
      }
    return (
      <div className="App">
        <h2>Dashboard</h2>
       <Link to='/wizard/step1'> <button>Add New Property</button></Link> 
        <House />
       {displayHouses()}
      </div>
    )
  }
}
