import React from 'react';
import { Link } from 'react-router-dom';

const NewModels = () => {
    return (
        <div className='col-12 new_models d-flex flex-column justify-content-center align-items-center text-center'>
            <h2>Nuevos modelos</h2>
            <br></br>
            <p>Ir a nuestra <span>
            <Link to={`/shop`}>Tienda</Link>
                </span> Para verlos!</p>
            <button>
              <Link to={`/shop`}>Ver mas</Link>
            </button>     
        </div>
    );
}

export default NewModels;
