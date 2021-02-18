
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar';
import FooterComponent from './components/footer';
import ItemListContainer from './containers/ItemListContainer';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemCount from './components/count/ItemCount';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavbarComponent />
        
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
