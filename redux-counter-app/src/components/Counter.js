import React, { Component } from 'react';
import Button from './Button';
import {connect} from 'react-redux';
import {incrementCount, decrementCount} from '../store/action/action';

class Counter extends Component {

incrementCount= () => {
  this.props.IncrementCount()
}

decrementCount= () => {
  this.props.decrementCount()
}

render() {
  return (
    <div>
      <h2>Count: {this.props.count} </h2>
      <Button
        title = { "+" }
        task = { () => this.incrementCount() }
      />
      <Button
        title = { "-" }
        task = { () => this.decrementCount() }
      />
     </div>
  );
}
}

function mapStateToProp(state){
  return({
      count: state.root.count
  })
}
function mapDispatchToProp(dispatch){
  return({
    IncrementCount: ()=>{dispatch(incrementCount())},
    decrementCount: ()=>{dispatch(decrementCount())}
  })
}

export default connect(mapStateToProp, mapDispatchToProp)(Counter);