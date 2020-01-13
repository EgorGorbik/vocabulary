import React from 'react';
import './App.css';
import Router from "./Components/Router";
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import {store} from "./Redux/Store/configureStore";

function App() {
    return (
        <Provider store={store}> 
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
