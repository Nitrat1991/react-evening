import React, { Component } from 'react';
import AppHeader from "../appHeader/AppHeader.jsx";
import BeerList from '../beerList/BeerList.jsx';

class App extends Component {
    render() {
        return (
            <div className="app">
                <AppHeader/>
                <BeerList/>
            </div>
        );
    }
};

export default App;