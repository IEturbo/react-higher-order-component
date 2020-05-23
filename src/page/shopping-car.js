import React, { Component } from 'react'
import Tapbar from '../components/index'
class ShoppingCar extends Component {
  render() {
    return (
      <div>
        <img className={'bg'} src={require('../asset/img/car.png')}/>
        <Tapbar/>
      </div>
    )
  }
}
export default Tapbar(ShoppingCar)