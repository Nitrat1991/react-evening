import React, { Component } from 'react';

import './beerFilters.scss';

class BeerFilters extends Component {

    onRequest = (page) => {
        this.punkService.getAllBeers(page)
        .then(this.onBeerListLoaded)
        .catch(this.onError)
    }

    render() {
        return (
            <div className="beer__info">
                <div className="beer__basics">
                    <button className="beer__basics__btn">
                        <div>Светлое</div>
                    </button>     
                    <button className="beer__basics__btn">
                        <div>Темное</div>
                    </button>
                </div>            
            </div>
        )
    }
}

export default BeerFilters;