import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';

import Cms from './cms/Cms';
import Product from "./products/Product";

const Main = () => {
    return (
        <Routes>
            <Route exact path='/products' element={<Product/>}></Route>
            <Route exact path='/cms' element={<Cms/>}></Route>
        </Routes>
    );
}

export default Main;