import React, { Component } from 'react'
import Tapbar from '../components/index'
class User extends Component {
  render() {
    return (
      <div>
        <img  className={'bg'}  src={require('../asset/img/user.png')}/>
        <Tapbar/>
      </div>
    )
  }
}
export default  Tapbar(User)