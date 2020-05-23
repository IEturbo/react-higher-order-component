import React, { Component } from 'react'
import Tapbar from '../components/index'
class Surprice extends Component {
  render() {
    return (
      <div>
        <img  className={'bg'} src={require('../asset/img/surprice.png')}/>
        <Tapbar/>
      </div>
    )
  }
}
export default Tapbar(Surprice)