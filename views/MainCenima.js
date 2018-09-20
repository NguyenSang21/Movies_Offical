import React, { Component } from 'react'
import CarouselTop_Cenima from '../components/Cenima/CarouselTop_Cenima';
import TopViews_Cenima from '../components/Cenima/TopViews_Cenima';
import Recommend_Cenima from '../components/Cenima/Recommend_Cenima';
import NewUpdate_Cenima from '../components/Cenima/NewUpdate_Cenima';

export default class MainCenima extends Component {
  render() {
    return (
      <div id="cenima" class="inactive-hide">
        <CarouselTop_Cenima />
        <NewUpdate_Cenima/>
        <TopViews_Cenima />
        <Recommend_Cenima/>
      </div>
    )
  }
}
