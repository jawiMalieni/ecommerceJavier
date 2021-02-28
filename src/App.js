
import React from "react";
import {Switch , Route, BrowserRouter} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { useState } from 'react';
import { Fragment } from 'react';
import HomeContainer from './containers/HomeContainers';
import ShopContainer from './containers/ShopContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import CartContainer from './containers/CartContainer';
import Footer from './components/Footer';
import CartContext from './Context/CartContex';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <CartContext>
      <BrowserRouter>
        <div className="App container-fluid no-gutters">
          <header className="row">
              <NavBar />
          </header>
          <Switch>
                   <Route exact path='/' render={() =>  <HomeContainer />} />
                   <Route path='/shop' render={() =>  <ShopContainer />} />
                   <Route path='/item/:id' render={() =>  <ItemDetailContainer />} />
                   <Route path='/cart' render={() =>  <CartContainer />} />
          </Switch>
          <footer className='row'>
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
    </CartContext>
  );
}


export default App;
