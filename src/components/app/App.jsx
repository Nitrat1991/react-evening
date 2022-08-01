import React from 'react';
import { Component } from '../../../node_modules/react/cjs/react.development';
import AppHeader from "../appHeader/AppHeader.jsx";
import BearList from '../bearList/BearList.jsx';

class App extends Component {
    render() {
        return (
            <div className="app">
                <AppHeader/>
                <BearList/>
            </div>
        );
    }
};

export default App;