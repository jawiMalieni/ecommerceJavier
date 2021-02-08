import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar';
import FooterComponent from './components/footer';

const App =() => {
  return (
    <>
      <NavbarComponent />
      
      <FooterComponent />
    </>
  );
}

export default App;
