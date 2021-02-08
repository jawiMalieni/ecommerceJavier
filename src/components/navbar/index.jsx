import { Nav, Navbar, Button, Form, FormControl, Dropdown, NavItem, NavLink} from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Nombre</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Categoria 1</Nav.Link>
          <Nav.Link href="#features">Categoria 2</Nav.Link>
          <Nav.Link href="#pricing">Categoria 3</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Escribe lo que Buscas" className="mr-sm-2" />
          <Button variant="outline-info">Buscar</Button>
        </Form>
        <Dropdown as={NavItem}>
          <Dropdown.Toggle as={NavLink}>Toca para ver productos</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>Productos 1</Dropdown.Item>
            <Dropdown.Item>Productos 2</Dropdown.Item>
            <Dropdown.Item>Productos 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>;
      </Navbar>

    </>
  );
}

export default NavbarComponent;