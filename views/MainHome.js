import React, { Component } from 'react'
import CarouselTop from '../components/Home/CarouselTop';
import NewDay from '../components/Home/NewDay';
import Trends from '../components/Home/Trends';
import TopWeek from '../components/Home/TopWeek';
import Feature from '../components/Home/Feature';
import NewUpdate from '../components/Home/NewUpdate';
import CommonMovies from '../components/Home/CommonMovies';

export default class MainHome extends Component {
    render() {
        return (
            <div id="home" class="inactive-hide active">
                <CarouselTop />
                <div class="pb-1 mb-3 pb-xl-4 mb-xl-4"></div>
                <hr />
                <div class="pb-1 mb-3 pb-xl-5 mb-xl-1"></div>
                <NewDay />
                <Trends />
                <TopWeek />
                <Feature />
                <CommonMovies />
                <div class="pt-e-20 pt-e-lg-40"></div>
                <NewUpdate />
            </div>
        )
    }
}
