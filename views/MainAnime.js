import React, { Component } from 'react'
import CarouselTop_Anime from '../components/Anime/CarouselTop_Anime';
import Recommend_Anime from '../components/Anime/Recommend_Anime';
import TopViews_Anime from '../components/Anime/TopViews_Anime';
import NewUpdate_Anime from '../components/Anime/NewUpdate_Anime';

export default class MainAnime extends Component {
  render() {
    return (
      <div id="anime" class="inactive-hide">
        <CarouselTop_Anime />
        <Recommend_Anime />
        <TopViews_Anime />
        <NewUpdate_Anime />
      </div>
    )
  }
}
