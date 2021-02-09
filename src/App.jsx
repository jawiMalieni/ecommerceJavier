import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar';
import FooterComponent from './components/footer';
import ItemListContainer from './components/containers/ItenListContainer';
import React from "react"
import {BrowserRouter, Switch, Route} from "react-router-dom";

const App =() => {
  return (
    <>
      <BrowserRouter>
      <Switch>
      <NavbarComponent />
      <ItemListContainer greeting={"Nuestros productos"} />
      <Route exact path="/Home">
      
       
      
      </Route>
      <FooterComponent />
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
