import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateImg } from '../../ducks/reducer';





class StepTwo extends Component {
    constructor(){
        super();

        this.state = {
            img: ''
        };

        this.handleImg = this.handleImg.bind(this);
        this.handleNext = this.handleNext.bind(this);

    }

    componentDidMount(){
        this.setState({
            img: this.props.img
        })
    }

    handleImg(val){
        this.setState({
            img: val
        })
    }
    handleNext(){
        let { updateImg } = this.props;
        updateImg(this.state.img);
    }
  render() {
    return (
      <div>
          Wizard
          <h2>Add New Listing</h2>
          <p>Image URL</p>
        <input type="text" value={this.state.img} onChange={(e)=>this.handleImg(e.target.value)}/>
        <Link to='/wizard/step3'><button onClick={()=> this.handleNext()}>Next Step</button></Link>
        <Link to='/wizard/step1'><button onClick={()=> this.handleNext()}>Previous Step</button></Link>
      </div>
    )
  }
}

function mapStateToProps(State) {
    let { img } = State;
    return { img };
}

export default connect(mapStateToProps, {updateImg})(StepTwo);