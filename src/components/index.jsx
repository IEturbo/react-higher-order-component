import React, { Component } from 'react'
import '../asset/iconfont.css'
import './index.css'
import { Link } from 'react-router-dom'
const tabs = [
  {
    img: 'icon-shouye',
    text: '首页',
    link: '/home'
  },
  {
    img: 'icon-2',
    text: '分类',
    link: '/category'
  },
  {
    img: 'icon-jingxi',
    text: '京喜',
    link: '/surprice'
  },
  {
    img: 'icon-gouwuche-copy',
    text: '购物车',
    link: '/shopping-car'
  },
  {
    img: 'icon-wo',
    text: '我的',
    link: '/user'
  }
]

const Tapbar = (WrapedComponent) => class Tapbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }
  render() {
    const url = window.location.href;
    return (
      <div className='tapbar-container'>
        <div className='tapbar-children'>
          <WrapedComponent />
        </div>
        <div className='tapbar'>
          <div className="tapbar-content">
            {
              tabs.map((v, i) => (
                <Link to={v.link} key={i} className={"tapbar-item" + (url.indexOf(v.link) > -1 ? ' active' : '')} >
                  <div className={'iconfont ' + v.img}></div>
                  <div className='text'>{v.text}</div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}
export default Tapbar