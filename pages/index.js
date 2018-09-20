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
                    <MainHome />
                    <MainCenima />
                    <MainRomance />
                    <MainAnime />
                    <MainComedy />
                    <MainNews />
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

// Index.getInitialProps = async function () {
//     const data_1 = fetchData._getData_1()
//     let result = await Promise.all([data_1])

//     return {
//       data_1: result[0]
//     }
// }