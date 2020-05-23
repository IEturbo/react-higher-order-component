import React, { Component } from 'react'
import Tapbar from '../components/index'
class Category extends Component {
  render() {
    return (
      <div>
        <img  className={'bg'} src={require('../asset/img/category.png')}/>
        <Tapbar/>
      </div>
    )
  }
}
export default Tapbar(Category)