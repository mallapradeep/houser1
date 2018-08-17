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
                 this.setState({
                     house: response.data
                 })
             })
        }


  render() {
      let displayHouses = () => {
          return this.state.houses.map( house => {
              const {id, name, address, city, state, zip } = house;
              return (
                  <div key = {id}>
                  {/* //passing the house info to the house component */}
                  <House 
                    id = {id}
                    name ={name}
                    address={address}
                    city={city}
                    state = {state}
                    zip = {zip} />
                  </div>

              )
          })
      }
    return (
      <div>
        Dashboard
        <House />
       <Link to="/wizard"> <button>Add New Property</button></Link> 
       {displayHouses()}
      </div>
    )
  }
}
