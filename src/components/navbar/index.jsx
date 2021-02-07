

const NavbarComponent = () => {
  return (
    <>
      <button className="btn btn-warning">Push</button>
      <div className="row">
        <nav className="navbar navbar-default" role="navigation">
          <div className="navbar-header">
            header
          <button type="button" className="navbar-toggle" data-toggle="collapse"
              data-target=".navbar-exl-collapse">
              <span className="sr-only">Desplegar navegacion</span>
              <span className="icon-bar">hola</span>
              <span className="icon-bar">hola1</span>
              <span className="icon-bar">hola2</span>
            </button>
            <a className="navbar.bard">Ejemplo</a>
          </div>
          <div className="collapse navbar-collapse navbar-exl-collapse">
            <ul className="nav navbar-nav">

            </ul>
          </div>
        </nav>
      </div>

    </>
  );
}

export default NavbarComponent;