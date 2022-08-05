import React, { Component } from 'react';
import PunkService from '../../services/PunkService.js';
import BeerFilters from '../beerFilters/BeerFilters.jsx';

import './beerList.scss';

class BeerList extends Component {

    state = {
        beerList: [],
        page: 1,
        beerEnded: false,
        nmbList: 1,
    }

    punkService = new PunkService();

    componentDidMount() {
        this.onRequest();
    }

    onRequest = () => {
        this.punkService.getAllBeers()
        .then(this.onBeerListLoaded)
        .catch(this.onError)
    }

    onPagination = (nmbList) => {
        this.setState(() => ({           
            nmbList: nmbList,
        }))

    }

    sliceIntoChunks = (arr, chunkSize) => {
        const res = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize);
            res.push(chunk);
        }
        return res;
    }

    onBeerListLoaded = (newbeerList, nmbList) => {
        let ended = false;
        if (newbeerList.length < 9) {
            ended = true;
        }

        const arrNewbeerList = this.sliceIntoChunks(newbeerList, 9) 

        this.setState(() => ({
            beerList: [...arrNewbeerList],
            beerEnded: ended,
            nmbList: nmbList,
        }))
    }


    renderItems(arr, nmbList = 0) {
        console.log(nmbList);
        if (nmbList < arr.length) {
            const items =  arr[nmbList].map((item) => {
                return (
                    <li 
                        className="beer__item"
                        key={item.id}>
                            <img src={item.img} alt={item.name}/>
                            <div className="beer__name">{item.name}</div>
                    </li>
                )
            });

            return (
                <ul className="beer__grid">
                    {items}
                </ul>
            )
        } else {
            return (
                <div>
                    Извите данной страницы нет
                </div>
            )
        }
    }

    render() {
        const {beerList, beerEnded , nmbList} = this.state;
        
        const items = this.renderItems(beerList, nmbList);

        const content = items;

        return (
            <div className="beer__list">
                <BeerFilters/>
                {content}
                <div className='beer__list__btn'>
                    <button
                        className="button button__main button__long"
                        style={{'display': beerEnded ? 'none' : 'block'}}
                        onClick={() => this.onPagination(0)}>
                        <div className="inner">1</div>
                    </button>
                    <button
                        className="button button__main button__long"
                        style={{'display': beerEnded ? 'none' : 'block'}}
                        onClick={() => this.onPagination(1)}>
                        <div className="inner">2</div>
                    </button>
                    <button
                        className="button button__main button__long"
                        style={{'display': beerEnded ? 'none' : 'block'}}
                        onClick={() => this.onPagination(2)}>
                        <div className="inner">3</div>
                    </button>
                    <button
                        className="button button__main button__long"
                        style={{'display': beerEnded ? 'none' : 'block'}}
                        onClick={() => this.onPagination(3)}>
                        <div className="inner">4</div>
                    </button>
                    <button
                        className="button button__main button__long"
                        style={{'display': beerEnded ? 'none' : 'block'}}
                        onClick={() => this.onPagination(4)}>
                        <div className="inner">5</div>
                    </button>
                </div>
            </div>
        )
    }
}

export default BeerList;