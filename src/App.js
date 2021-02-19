
import React from "react";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/NavBar';
import FooterComponent from './components/Footer';
import ItemListContainer from './containers/ItemListContainer';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemCount from './components/ItemCount';
import ItemDetail from './components/ItemDetail';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <ItemCount />
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeating={"ItemlistContainer"} />
          </Route>
          <Route exact component={ItemDetail} path="/mocks/products" />
        </Switch>
        <FooterComponent />
      </BrowserRouter>
    </>
  );        
}        
        
export default App;
      

    
  


