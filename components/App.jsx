import React from 'react';
import './app.sass';

const App = (props) => {
    return (
        <div className="app">
            {props.tab}
        </div>
    );
};

export default App;