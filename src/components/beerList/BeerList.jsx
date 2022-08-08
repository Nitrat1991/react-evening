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
        nmbBtns: 0
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
            nmbBtns: arrNewbeerList.length,
        }))
    }

    renderButtons = (nmbBtns) => {
        const arrBtns = () => {
            const res = [];
            for (let i = 0; i < nmbBtns; i++) {                
                res.push(
                    <button className="button button__main button__long"
                    key={i}                   
                    onClick={() => this.onPagination(i)}>
                        <div className="inner">{i + 1}</div>
                    </button>
                );
            }
            return res;
        }

        const buttons = arrBtns();
        
        return (
            <div className="beer__list__btn">
                {buttons}
            </div>
        )
    }


    renderItems(arr, nmbList = 0) {
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
        const {beerList, nmbList, nmbBtns} = this.state;
        
        const items = this.renderItems(beerList, nmbList);
        const buttons = this.renderButtons(nmbBtns);

        const content = items;

        return (
            <div className="beer__list">
                <BeerFilters/>
                {content}
                {buttons}
            </div>
        )
    }
}

export default BeerList;