import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Login from '../pages/Login';
import Products from '../pages/customers/Products';
import Register from '../pages/Register';
import Orders from '../pages/customers/Orders';
import Checkout from '../pages/customers/Checkout';

export default function Router() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      {/* essa rota precisa ser dinamica com Id do user */}
      <Route path="/customer/orders/">
        <Orders />
      </Route>
      <Route path="/customer/products">
        <Products />
      </Route>
      <Route path="/login">
        <Checkout />
      </Route>
      <Route path="/">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
}
