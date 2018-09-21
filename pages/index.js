import React, { Component } from 'react';
import Search from '../components/Search/Search_Box';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Tab_Menu from '../components/Tabs/Tab_Menu';
import MainHome from '../views/MainHome';
import MainCenima from '../views/MainCenima';
import MainRomance from '../views/MainRomance';
import MainAnime from '../views/MainAnime';
import MainComedy from '../views/MainComedy';
import MainNews from '../views/MainNews';
import SideBarLeft from '../components/SideBar/SideBarLeft';
import SvgCustom from '../components/SVG/SvgCustom';
import fetchData from '../api/api'

export default class Index extends Component {
  render() {
    return (
      <div>
        <div id="wrap" class="light main-wrap clearfix">
          <SideBarLeft />
          <Header />
          <div id="site-content">
            <div id="site-content-inner">
              <div class="master-container-fluid">
                <main id="main">
                  <div class="pt-4 pt-lg-5"></div>
                  <Tab_Menu />
                  <div class="tabs-content overflow-h">
                    <MainHome CarouselTop = {this.props.data_6} 
                              CommonMovies = {[this.props.data_4,this.props.data_5,this.props.data_4,this.props.data_5]}
                              Feature = {this.props.data_2}
                              NewDay = {[this.props.data_9,this.props.data_10,this.props.data_11,this.props.data_9,
                                        this.props.data_10,this.props.data_11,this.props.data_9,this.props.data_10,this.props.data_11,this.props.data_9]}
                              NewUpdate = {this.props.data_4}
                              TopWeek = {this.props.data_1}
                              Trends = {this.props.data_13}
                              />
                    <MainCenima CarouselTop_Cenima = {this.props.data_6} 
                                NewUpdate_Cenima = {this.props.data_3}
                                Recommend_Cenima = {[this.props.data_9,this.props.data_10,this.props.data_11,this.props.data_9,
                                  this.props.data_10,this.props.data_11,this.props.data_9,this.props.data_10,this.props.data_11,this.props.data_9]}
                                TopViews_Cenima = {this.props.data_4}/>
                    <MainRomance data={this.props.data_1}/>
                    <MainAnime NewUpdate_Anime={this.props.data_4} 
                                Recommend_Anime={[this.props.data_4,this.props.data_5,this.props.data_4,this.props.data_5,this.props.data_4,this.props.data_5]}
                                TopViews_Anime={this.props.data_3}/>
                    <MainComedy />
                    <MainNews data={this.props.data_1}/>
                  </div>
                </main>
              </div>
            </div>
          </div>
          <Footer />
          <div class="off-canvas-overlay"></div>
          <div class="preloader site-preloader">
            <div class="preloader-overlay"></div>
            <div class="position-absolute center-center"><span class="shadow"></span><div class="icons"> <span class="animate-loading"><span class="adonis-icon icon-5x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-brand-play-gradient"></use></svg></span></span><span class="adonis-icon icon-5x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-brand-play"></use></svg></span></div></div>
          </div>
          <SvgCustom />
        </div>
        <Search />
      </div>
    )
  }
}

Index.getInitialProps = async function () {
  const data_1 = fetchData._getData_1()
  const data_2 = fetchData._getData_2()
  const data_3 = fetchData._getData_3()
  const data_4 = fetchData._getData_4()
  const data_5 = fetchData._getData_5()
  const data_6 = fetchData._getData_6()
  const data_8 = fetchData._getData_8()
  const data_9 = fetchData._getData_9()
  const data_10 = fetchData._getData_10()
  const data_11 = fetchData._getData_11()
  const data_12 = fetchData._getData_12()
  const data_13 = fetchData._getData_13()
  const data_14 = fetchData._getData_14()

  let result = await Promise.all([data_1, data_2, data_3, data_4, data_5, data_6,
    data_8, data_9, data_10, data_11, data_12, data_13, data_14])

  return {
    data_1: result[0],
    data_2: result[1],
    data_3: result[2],
    data_4: result[3],
    data_5: result[4],
    data_6: result[5],
    data_8: result[6],
    data_9: result[7],
    data_10: result[8],
    data_11: result[9],
    data_12: result[10],
    data_13: result[11],
    data_14: result[12],
  }
}