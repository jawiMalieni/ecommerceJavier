import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';



const NavBar = () => {

	

	return (
		<nav className="navbar navbar-expand-lg navbar-dark shadow col-12">
			<a className="navbar-brand">
			 <Link to={`/`}>Mike M</Link>
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
				<div className="navbar-nav">
					<a className="nav-link">
					   <Link to={`/`}>Home</Link><span className="sr-only">(current)</span>
					</a>
					<a className="nav-link" href="#">
						Sobre Nosotros
					</a>
					<a className="nav-link">
						<Link to={`/shop`}>Tienda</Link>
					</a>
                    <a className="nav-link" href="#">
                        Contacto
					</a>
					<Link to={`/cart`}>
					  <CartIcon />
					</Link>
					
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
