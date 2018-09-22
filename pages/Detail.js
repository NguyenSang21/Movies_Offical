import React, { Component } from 'react'
import SideBarLeft from '../components/SideBar/SideBarLeft';
import Header from '../components/Header/Header';

export default class Detail extends Component {
    render() {
        return (
            <div id="wrap" class="light main-wrap clearfix">
                <SideBarLeft />
                <Header />
                <div id="site-content">
                    <div id="site-content-inner">
                        <div className="album-wrap">
                            <div class="container">
                                <div class="album-spacer"></div>
                                <div class="row">
                                    <div class="col-md-3 flex-column-sidebar-md text-center text-md-left">
                                        <div class="album-image">
                                            <div class="music-img-box d-inline-block">
                                                <div class="img-box">
                                                    <img class="retina box-rounded-md" src="/static/assets/images/single/single-2.jpg" data-2x="/static/assets/images/single/single-2@2x.jpg" alt="" />
                                                </div>
                                                <div class="absolute-info">
                                                    <a class="btn btn-60-60 btn-primary absolute-center adonis-album-button round-btn text-light" data-album-id="1" role="button" tabindex="0">
                                                        <span class="adonis-icon icon-play icon-2x"><svg id="icon-brand-play" viewBox="0 0 27 32" width="100%" height="100%">
                                                            <path d="M2.594 0.275c-0.257-0.166-0.571-0.265-0.908-0.265-0.932 0-1.688 0.756-1.688 1.688 0 0.028 0.001 0.055 0.002 0.082l-0-0.004v13.246l16.702-6.219zM26.030 14.49l-4.184-2.541-21.846 8.102v10.154c-0.001 0.024-0.002 0.051-0.002 0.079 0 0.927 0.752 1.679 1.679 1.679 0.319 0 0.617-0.089 0.871-0.243l-0.007 0.004c1.501-0.888 22.21-13.433 23.489-14.214 0.52-0.316 0.863-0.88 0.863-1.524s-0.342-1.207-0.855-1.519l-0.008-0.004z"></path>
                                                        </svg></span>
                                                        <span class="adonis-icon icon-pause icon-2x"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 29 32"><path d="M19.2 0h8c0.884 0 1.6 0.716 1.6 1.6v28.8c0 0.884-0.716 1.6-1.6 1.6h-8c-0.884 0-1.6-0.716-1.6-1.6v-28.8c0-0.884 0.716-1.6 1.6-1.6z"></path><path d="M1.6 0h8c0.884 0 1.6 0.716 1.6 1.6v28.8c0 0.884-0.716 1.6-1.6 1.6h-8c-0.884 0-1.6-0.716-1.6-1.6v-28.8c0-0.884 0.716-1.6 1.6-1.6z"></path></svg></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="pb-4 d-inline-block album-likes">
                                            <span class="adonis-icon pr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span>
                                            <span class="pr-2">1256</span>
                                            <span class="adonis-icon pr-2 icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-brand-play"></use></svg></span>
                                            <span>125K</span>
                                        </div>
                                        <div class="about">
                                            <h4>About this album</h4>
                                            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                                Suspendisse faucibus sed dolor eget posuere.Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet
                                    Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. Nam ac elit a ante commodo tristique. </p>
                                        </div>
                                        <div class="pt-e-20 pt-e-lg-40"></div>
                                    </div>
                                    <div class="col-md-9 flex-column-content-md pl-e-xl-40">
                                        <div class="album-top-box text-center text-md-left">
                                            <h6 class="inactive-color">ALBUM</h6>
                                            <h1 class="album-title">The Ones That Like Me</h1>
                                            <p class="mb-2">By: <a href="#">Danielle Bradberry</a>  Classical</p>
                                            <div class="separator mb-4 mt-4">
                                                <span class="separator-md"></span>
                                            </div>
                                            <p class="mb-2">14 Songs - 30 minutes</p>
                                            <p class="mb-2">Released on November 12, 2017</p>
                                        </div>

                                        <ul class="adonis-album-list pb-5 pt-e-30">
                                            <li>
                                                <div class="item-number h6 inactive-color">#</div>
                                                <div class="item-title h6 inactive-color">Song</div>
                                                <div class="item-genre h6 inactive-color">Genre</div>
                                                <div class="item-duration h6 inactive-color">Time</div>
                                                <div class="item-tools">
                                                    <span class="adonis-icon h6 inactive-color icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span>
                                                </div>
                                            </li>
                                            <li class="item hover-bg-item">
                                                <div class="item-number">
                                                    <span class="hover-hide">01</span>
                                                    <span class="hover-show adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-brand-play"></use></svg> </span>
                                                </div>
                                                <div class="item-title">Begining To See The Light</div>
                                                <div class="item-genre"><span class="hover-hide hover-lg-show">Classical</span></div>
                                                <div class="item-duration"><span class="hover-hide">14:13</span></div>
                                                <div class="item-tools">
                                                    <span class="hover-hide">1245</span>
                                                    <div class="hover-show d-flex flex-nowrap hover-tools">
                                                        <span class="adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span>
                                                        <span class="ml-3 adonis-icon icon-3x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-plus"></use></svg> </span>
                                                        <span class="ml-3 adonis-icon pointer dropdown-menu-toggle"> <span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                                <div class="hover-bg gradient-adonis"></div>
                                            </li>
                                            <li class="item hover-bg-item">
                                                <div class="item-number">
                                                    <span class="hover-hide">02</span>
                                                    <span class="hover-show adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-brand-play"></use></svg> </span>
                                                </div>
                                                <div class="item-title">Ugly Christmas Sweater</div>
                                                <div class="item-genre"><span class="hover-hide hover-lg-show">Classical</span></div>
                                                <div class="item-duration"><span class="hover-hide">10:14</span></div>
                                                <div class="item-tools">
                                                    <span class="hover-hide">1010</span>
                                                    <div class="hover-show d-flex flex-nowrap hover-tools">
                                                        <span class="adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span>
                                                        <span class="ml-3 adonis-icon icon-3x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-plus"></use></svg> </span>
                                                        <span class="ml-3 adonis-icon pointer dropdown-menu-toggle"> <span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                                <div class="hover-bg gradient-adonis"></div>
                                            </li>
                                            <li class="item hover-bg-item">
                                                <div class="item-number">
                                                    <span class="hover-hide">03</span>
                                                    <span class="hover-show adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-brand-play"></use></svg> </span>
                                                </div>
                                                <div class="item-title">Feliz Navidad</div>
                                                <div class="item-genre"><span class="hover-hide hover-lg-show">Classical</span></div>
                                                <div class="item-duration"><span class="hover-hide">11:08</span></div>
                                                <div class="item-tools">
                                                    <span class="hover-hide">1110</span>
                                                    <div class="hover-show d-flex flex-nowrap hover-tools">
                                                        <span class="adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span>
                                                        <span class="ml-3 adonis-icon icon-3x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-plus"></use></svg> </span>
                                                        <span class="ml-3 adonis-icon pointer dropdown-menu-toggle"> <span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                                <div class="hover-bg gradient-adonis"></div>
                                            </li>
                                            <li class="item hover-bg-item">
                                                <div class="item-number">
                                                    <span class="hover-hide">04</span>
                                                    <span class="hover-show adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-brand-play"></use></svg> </span>
                                                </div>
                                                <div class="item-title">What are You Doing New Year&#39;s Eve?</div>
                                                <div class="item-genre"><span class="hover-hide hover-lg-show">Classical</span></div>
                                                <div class="item-duration"><span class="hover-hide">14:13</span></div>
                                                <div class="item-tools">
                                                    <span class="hover-hide">1245</span>
                                                    <div class="hover-show d-flex flex-nowrap hover-tools">
                                                        <span class="adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span>
                                                        <span class="ml-3 adonis-icon icon-3x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-plus"></use></svg> </span>
                                                        <span class="ml-3 adonis-icon pointer dropdown-menu-toggle"> <span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                                <div class="hover-bg gradient-adonis"></div>
                                            </li>
                                            <li class="item hover-bg-item">
                                                <div class="item-number">
                                                    <span class="hover-hide">05</span>
                                                    <span class="hover-show adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-brand-play"></use></svg> </span>
                                                </div>
                                                <div class="item-title">Mashmallow World</div>
                                                <div class="item-genre"><span class="hover-hide hover-lg-show">Classical</span></div>
                                                <div class="item-duration"><span class="hover-hide">12:14</span></div>
                                                <div class="item-tools">
                                                    <span class="hover-hide">1245</span>
                                                    <div class="hover-show d-flex flex-nowrap hover-tools">
                                                        <span class="adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span>
                                                        <span class="ml-3 adonis-icon icon-3x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-plus"></use></svg> </span>
                                                        <span class="ml-3 adonis-icon pointer dropdown-menu-toggle"> <span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                                <div class="hover-bg gradient-adonis"></div>
                                            </li>
                                            <li class="item hover-bg-item">
                                                <div class="item-number">
                                                    <span class="hover-hide">06</span>
                                                    <span class="hover-show adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-brand-play"></use></svg> </span>
                                                </div>
                                                <div class="item-title">Hard Candy Christmas</div>
                                                <div class="item-genre"><span class="hover-hide hover-lg-show">Classical</span></div>
                                                <div class="item-duration"><span class="hover-hide">13:15</span></div>
                                                <div class="item-tools">
                                                    <span class="hover-hide">1325</span>
                                                    <div class="hover-show d-flex flex-nowrap hover-tools">
                                                        <span class="adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span>
                                                        <span class="ml-3 adonis-icon icon-3x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-plus"></use></svg> </span>
                                                        <span class="ml-3 adonis-icon pointer dropdown-menu-toggle"> <span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                                <div class="hover-bg gradient-adonis"></div>
                                            </li>
                                            <li class="item hover-bg-item">
                                                <div class="item-number">
                                                    <span class="hover-hide">07</span>
                                                    <span class="hover-show adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-brand-play"></use></svg> </span>
                                                </div>
                                                <div class="item-title">Baby, It&#39;s Cold Outside</div>
                                                <div class="item-genre"><span class="hover-hide hover-lg-show">Classical</span></div>
                                                <div class="item-duration"><span class="hover-hide">16:16</span></div>
                                                <div class="item-tools">
                                                    <span class="hover-hide">1980</span>
                                                    <div class="hover-show d-flex flex-nowrap hover-tools">
                                                        <span class="adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span>
                                                        <span class="ml-3 adonis-icon icon-3x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-plus"></use></svg> </span>
                                                        <span class="ml-3 adonis-icon pointer dropdown-menu-toggle"> <span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                                <div class="hover-bg gradient-adonis"></div>
                                            </li>
                                            <li class="item hover-bg-item">
                                                <div class="item-number">
                                                    <span class="hover-hide">08</span>
                                                    <span class="hover-show adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-brand-play"></use></svg> </span>
                                                </div>
                                                <div class="item-title">The Man With The Bag</div>
                                                <div class="item-genre"><span class="hover-hide hover-lg-show">Classical</span></div>
                                                <div class="item-duration"><span class="hover-hide">18:14</span></div>
                                                <div class="item-tools">
                                                    <span class="hover-hide">1745</span>
                                                    <div class="hover-show d-flex flex-nowrap hover-tools">
                                                        <span class="adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span>
                                                        <span class="ml-3 adonis-icon icon-3x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-plus"></use></svg> </span>
                                                        <span class="ml-3 adonis-icon pointer dropdown-menu-toggle"> <span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                                <div class="hover-bg gradient-adonis"></div>
                                            </li>
                                            <li class="item hover-bg-item">
                                                <div class="item-number">
                                                    <span class="hover-hide">09</span>
                                                    <span class="hover-show adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-brand-play"></use></svg> </span>
                                                </div>
                                                <div class="item-title">What I&#39;m Thankful for</div>
                                                <div class="item-genre"><span class="hover-hide hover-lg-show">Classical</span></div>
                                                <div class="item-duration"><span class="hover-hide">19:26</span></div>
                                                <div class="item-tools">
                                                    <span class="hover-hide">1428</span>
                                                    <div class="hover-show d-flex flex-nowrap hover-tools">
                                                        <span class="adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span>
                                                        <span class="ml-3 adonis-icon icon-3x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-plus"></use></svg> </span>
                                                        <span class="ml-3 adonis-icon pointer dropdown-menu-toggle"> <span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                                <div class="hover-bg gradient-adonis"></div>
                                            </li>
                                            <li class="item hover-bg-item">
                                                <div class="item-number">
                                                    <span class="hover-hide">10</span>
                                                    <span class="hover-show adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-brand-play"></use></svg> </span>
                                                </div>
                                                <div class="item-title">What I&#39;ve Done - One More Light Live</div>
                                                <div class="item-genre"><span class="hover-hide hover-lg-show">Classical</span></div>
                                                <div class="item-duration"><span class="hover-hide">14:13</span></div>
                                                <div class="item-tools">
                                                    <span class="hover-hide">1563</span>
                                                    <div class="hover-show d-flex flex-nowrap hover-tools">
                                                        <span class="adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span>
                                                        <span class="ml-3 adonis-icon icon-3x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-plus"></use></svg> </span>
                                                        <span class="ml-3 adonis-icon pointer dropdown-menu-toggle"> <span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                                <div class="hover-bg gradient-adonis"></div>
                                            </li>
                                            <li class="item hover-bg-item">
                                                <div class="item-number">
                                                    <span class="hover-hide">11</span>
                                                    <span class="hover-show adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-brand-play"></use></svg> </span>
                                                </div>
                                                <div class="item-title">Talking to Myself - One More Light Live</div>
                                                <div class="item-genre"><span class="hover-hide hover-lg-show">Classical</span></div>
                                                <div class="item-duration"><span class="hover-hide">17:16</span></div>
                                                <div class="item-tools">
                                                    <span class="hover-hide">1536</span>
                                                    <div class="hover-show d-flex flex-nowrap hover-tools">
                                                        <span class="adonis-icon icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span>
                                                        <span class="ml-3 adonis-icon icon-3x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-plus"></use></svg> </span>
                                                        <span class="ml-3 adonis-icon pointer dropdown-menu-toggle"> <span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                                <div class="hover-bg gradient-adonis"></div>
                                            </li>
                                        </ul>
                                        <p class="mb-2">Released on November 12, 2017</p>
                                        <p class="mb-2">&copy; 2018 Adonis Inc.</p>
                                    </div>
                                </div>
                                <div class="more-items">
                                    <div class="pt-e-20 pt-e-lg-40"></div>
                                    <div class="title-box">
                                        <h2 class="title h3-md">More By Danielle Bradbery</h2>
                                    </div>
                                    <div class="adonis-carousel auto-fit-columns" data-auto-width="no" data-item-parent=".owl-carousel" data-auto-fit-items=".item" data-dots="yes" data-items-responsive="0:1|400:2|600:3|900:4|1200:5">
                                        <div class="gutter-30">
                                            <div class="owl-carousel owl-theme-adonis">
                                                <div class="item hover-bg-item">
                                                    <div class="music-img-box">
                                                        <div class="img-box box-rounded-sm">
                                                            <img class="retina" src="/static/assets/images/new-releases/new-releases-1.jpg" data-2x="/static/assets/images/new-releases/new-releases-1@2x.jpg" alt="" />
                                                            <div class="hover-state">
                                                                <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                                    <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                                </div>
                                                                <div class="absolute-top-right pr-e-20 pt-e-20">
                                                                    <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 class="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                        <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                    </div>
                                                </div>
                                                <div class="item hover-bg-item">
                                                    <div class="music-img-box">
                                                        <div class="img-box box-rounded-sm">
                                                            <img class="retina" src="/static/assets/images/new-releases/new-releases-2.jpg" data-2x="/static/assets/images/new-releases/new-releases-2@2x.jpg" alt="" />
                                                            <div class="hover-state">
                                                                <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                                    <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                                </div>
                                                                <div class="absolute-top-right pr-e-20 pt-e-20">
                                                                    <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 class="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                        <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                    </div>
                                                </div>
                                                <div class="item hover-bg-item">
                                                    <div class="music-img-box">
                                                        <div class="img-box box-rounded-sm">
                                                            <img class="retina" src="/static/assets/images/new-releases/new-releases-3.jpg" data-2x="/static/assets/images/new-releases/new-releases-3@2x.jpg" alt="" />
                                                            <div class="hover-state">
                                                                <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                                    <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                                </div>
                                                                <div class="absolute-top-right pr-e-20 pt-e-20">
                                                                    <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 class="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                        <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                    </div>
                                                </div>
                                                <div class="item hover-bg-item">
                                                    <div class="music-img-box">
                                                        <div class="img-box box-rounded-sm">
                                                            <img class="retina" src="/static/assets/images/new-releases/new-releases-4.jpg" data-2x="/static/assets/images/new-releases/new-releases-4@2x.jpg" alt="" />
                                                            <div class="hover-state">
                                                                <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                                    <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                                </div>
                                                                <div class="absolute-top-right pr-e-20 pt-e-20">
                                                                    <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 class="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                        <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                    </div>
                                                </div>
                                                <div class="item hover-bg-item">
                                                    <div class="music-img-box">
                                                        <div class="img-box box-rounded-sm">
                                                            <img class="retina" src="/static/assets/images/new-releases/new-releases-5.jpg" data-2x="/static/assets/images/new-releases/new-releases-5@2x.jpg" alt="" />
                                                            <div class="hover-state">
                                                                <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                                    <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                                </div>
                                                                <div class="absolute-top-right pr-e-20 pt-e-20">
                                                                    <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 class="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                        <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                    </div>
                                                </div>
                                                <div class="item hover-bg-item">
                                                    <div class="music-img-box">
                                                        <div class="img-box box-rounded-sm">
                                                            <img class="retina" src="/static/assets/images/new-releases/new-releases-6.jpg" data-2x="/static/assets/images/new-releases/new-releases-6@2x.jpg" alt="" />
                                                            <div class="hover-state">
                                                                <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                                    <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                                </div>
                                                                <div class="absolute-top-right pr-e-20 pt-e-20">
                                                                    <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 class="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                        <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                    </div>
                                                </div>
                                                <div class="item hover-bg-item">
                                                    <div class="music-img-box">
                                                        <div class="img-box box-rounded-sm">
                                                            <img class="retina" src="/static/assets/images/new-releases/new-releases-7.jpg" data-2x="/static/assets/images/new-releases/new-releases-7@2x.jpg" alt="" />
                                                            <div class="hover-state">
                                                                <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                                    <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                                </div>
                                                                <div class="absolute-top-right pr-e-20 pt-e-20">
                                                                    <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 class="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                        <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                    </div>
                                                </div>
                                                <div class="item hover-bg-item">
                                                    <div class="music-img-box">
                                                        <div class="img-box box-rounded-sm">
                                                            <img class="retina" src="/static/assets/images/new-releases/new-releases-8.jpg" data-2x="/static/assets/images/new-releases/new-releases-8@2x.jpg" alt="" />
                                                            <div class="hover-state">
                                                                <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                                    <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                                </div>
                                                                <div class="absolute-top-right pr-e-20 pt-e-20">
                                                                    <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 class="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                        <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                    </div>
                                                </div>
                                                <div class="item hover-bg-item">
                                                    <div class="music-img-box">
                                                        <div class="img-box box-rounded-sm">
                                                            <img class="retina" src="/static/assets/images/new-releases/new-releases-9.jpg" data-2x="/static/assets/images/new-releases/new-releases-9@2x.jpg" alt="" />
                                                            <div class="hover-state">
                                                                <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                                    <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                                </div>
                                                                <div class="absolute-top-right pr-e-20 pt-e-20">
                                                                    <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h6 class="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                        <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pt-e-5 pt-e-lg-10"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
