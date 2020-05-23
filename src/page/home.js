import React, { Component } from 'react'
import Tapbar from '../components/index'
class Home extends Component {
  render() {
    return (
      <div>
        <img  className={'bg'} src={require('../asset/img/home.png')}/>
      </div>
    )
  }
}
export default Tapbar(Home)