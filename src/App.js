import './App.css';
import React from 'react';
import Main from "./Main";
import {Link} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Main />
            <Link to="/cms">
                <button>
                    Cms
                </button>
            </Link>
            <Link to="/products">
                <button>
                    Products
                </button>
            </Link>
        </div>
    );
}

export default App;
