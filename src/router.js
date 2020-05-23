import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import ShoppingCar from './page/shopping-car'
import Home from './page/home'
import Category from './page/category'
import Surprice from './page/surprice'
import User from './page/user'
export default () => (
  <BrowserRouter>
  <Switch>
    <Route path='/home' component = {Home}></Route>
    <Route path='/category' component = {Category}></Route>
    <Route path='/surprice' component = {Surprice}></Route>
    <Route path='/shopping-car' component = {ShoppingCar}></Route>
    <Route path='/user' component = {User}></Route>
  </Switch>
  </BrowserRouter>
)