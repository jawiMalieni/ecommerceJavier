import React from 'react';
import Home from '../components/Home';
import BrandsContainer from '../containers/BrandsContainer';
import NewModelsContainer from './NewModelsContainer';


const HomeContainer = () => {
    return (
        <div>
            <Home />
            <BrandsContainer />
            <NewModelsContainer />
        </div>
    );
}

export default HomeContainer;