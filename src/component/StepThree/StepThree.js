import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateMortgage, updateRent } from '../../ducks/reducer';
import axios from 'axios';


 class StepThree extends Component {
    constructor(){
        super();

        this.state = {
            mortgage: 0,
            rent: 0
        };
        this.addHouse = this.addHouse.bind(this);
        this.handleMortgage = this.handleMortgage.bind(this);
        this.handleRent = this.handleRent.bind(this);
        this.handleNext = this.handleNext.bind(this);

    }
    addHouse(){
        let {name, address, city, state, zip, img,  mortgage, rent  } = this.props;
        
        axios.post('/api/house/add', {name, address, city, state, zip ,img,  mortgage, rent  } );
        }

    handleMortgage(val){
        this.setState({
            mortgage: val
        })
    }
    handleRent(val){
        this.setState({
            rent: val
        })
    }
    handleNext(){
        let { updateMortgage, updateRent } = this.props;
        updateMortgage(this.state.mortgage);
        updateRent(this.state.rent);
    }
    componentDidMount(){
        this.setState({
            mortgage: this.state.mortgage,
            rent: this.state.rent
        })
    }

  render() {
    return (
      <div>
              <h2>Add New Listing</h2>
        <p>Recommended Rent:</p>

        <p>Monthly Mortgage Amount</p>
        <input type="text" value={this.state.mortgage} onChange={(e)=>this.handleMortgage(e.target.value)}/>

        <p>Desired Monthly Rent</p>
        <input type="text" value={this.state.rent} onChange={(e)=>this.handleRent(e.target.value)}/>



        <Link to='/'><button onClick={() => this.addHouse }>Complete</button></Link>

    

        <Link to='/wizard/step2'><button onClick={()=> this.handleNext()}>Previous Step</button></Link>

      </div>
    )
  }
}

function mapStateToProps(State) {
    let {name, address, city, state, zip, img,  mortgage, rent } = State;
    return { name, address, city, state, zip, img, mortgage, rent };
}

export default connect(mapStateToProps, {updateMortgage,updateRent})(StepThree);