import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar';
import FooterComponent from './components/footer';
import ItemListContainer from './components/containers/ItenListContainer';
import { BrowserRouter, Switch, Route } from "react-router-dom";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        <ItemListContainer greeting={"Nuestros productos"} />
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
