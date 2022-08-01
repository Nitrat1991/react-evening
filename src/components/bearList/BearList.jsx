import React from 'react';
import { Component } from '../../../node_modules/react/cjs/react.development';
import PunkService from '../../services/PunkService.js';

import './bearList.scss';

class BearList extends Component {

    state = {
        charList: [],
        page: 1,
        bearEnded: false
    }

    punkService = new PunkService();

    componentDidMount() {
        this.onRequest();
    }

    onRequest = (page) => {
        this.punkService.getAllBeers(page)
        .then(this.onBeerListLoaded)
        .catch(this.onError)
    }

    onBeerListLoaded = (newcharList) => {
        let ended = false;
        if (newcharList.length < 9) {
            ended = true;
        }

        this.setState(({charList, page}) => ({
            charList: [...charList, ...newcharList],
            page: page + 1,
            bearEnded: ended,
        }))
    }


    renderItems(arr) {
        const items =  arr.map((item) => {            
            return (
                <li 
                    className="char__item"
                    key={item.id}>
                        <img src={item.img} alt={item.name}/>
                        <div className="char__name">{item.name}</div>
                </li>
            )
        });
        
        return (
            <ul className="char__grid">
                {items}
            </ul>
        )
    }

    render() {
        const {charList, page, bearEnded} = this.state;
        
        const items = this.renderItems(charList);

        const content = items;

        return (
            <div className="char__list">
                {content}
                <button
                    className="button button__main button__long"
                    style={{'display': bearEnded ? 'none' : 'block'}}
                    onClick={() => this.onRequest(page)}>
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

export default BearList;