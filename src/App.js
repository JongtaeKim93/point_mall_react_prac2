import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './point_mall/Home';
import Header from './point_mall/Header';
import Footer from './point_mall/Footer';
import ItemDetail from './point_mall/ItemDetail'
import CategoryItems from './point_mall/CategoryItems';
import Login from './point_mall/Login';
import CartItems from './point_mall/CartItems';
import Register from './point_mall/Register';
import MyItems from './point_mall/MyItems';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/items/:itemId" component={ItemDetail} />
          <Route exact path="/categories/:categoryId" component={CategoryItems} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cart/items" component={CartItems} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/me/items" component={MyItems} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
