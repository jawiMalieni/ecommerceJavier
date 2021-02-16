import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar';
import FooterComponent from './components/footer';
import ItemListContainer from './containers/ItenListContainer';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemCount from './components/count/ItemCount';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <ItemListContainer greeting={"Nuestros productos"} />
        <ItemCount />
        <Switch>
          <Route exact path="/">
               




          </Route>
        </Switch>
        <FooterComponent />
      </BrowserRouter>

    </>
  );
}

export default App;
