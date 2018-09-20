import React, { Component } from 'react'
import fetchData from '../../api/api'
import { url } from '../../variables/general'

export default class TopWeek extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidUpdate(){
        $(".adonis-carousel").each(function () {
            adonisObj.carousel($(this));
          });
    }

    async componentDidMount() {
        const result = await fetchData._getData_1()
        this.setState({ data: result })
    }

    render() {
        const { data } = this.state
        return (
            <section>
                <div class="row">
                    <div class="col-xxl-7 col-lg-8">
                        <div class="d-flex flex-row">
                            <div class="title-box">
                                <h6 class="sub-title inactive-color">Top Week</h6>
                                <h2 class="title h3-md">Top tuần có gì hot ?</h2>
                            </div>
                            <div class="button-right ml-auto ml-auto mt-auto mb-4 d-flex">
                                <a href="#">See all <span class="adonis-icon pl-1 icon-arrow icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-see-all-arrow-right" /></svg></span></a>
                            </div>
                        </div>
                        <div class="adonis-carousel music-img-box-cont-sm viewport-animate" data-animation="slideUp" data-animation-item=".item" data-auto-width="yes" data-loop="no" data-dots="yes" data-responsive-width="0:100%|600:50%|900:33.33%|1200:25%">
                            <div class="gutter-30">
                                <div class="owl-carousel owl-theme-adonis">
                                    <div class="item">
                                        {!data || data.length === 0 ? "" : data.map((prop, key) => {
                                            if (key < 5) {
                                                return (
                                                    <div key={key} class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                        <div class="img-box img-box-sm box-rounded-sm">
                                                            <img style={{ height: 50 }} src={url + prop.imageMain || ""} alt="" />
                                                        </div>
                                                        <div class="des">
                                                            <h6 class="title fs-2"><a href="#">{prop.title || ""}</a></h6>
                                                            <p class="sub-title"><a href="#">Rachel Platten</a></p>
                                                        </div>
                                                        <div class="hover-state d-flex justify-content-between align-items-center">
                                                            <span class="pointer play-btn-dark box-rounded-sm"><i class="play-icon"></i></span>
                                                            <div class="d-flex align-items-center">
                                                                <span class="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                                <span class="pointer dropdown-menu-toggle"><span class="icon-dot-nav-horizontal text-light"></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
                                    <div class="item">
                                        {!data || data.length === 0 ? "" : data.map((prop, key) => {
                                            if (key >= 5 && key < 10) {
                                                return (
                                                    <div key={key} class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                        <div class="img-box img-box-sm box-rounded-sm">
                                                            <img style={{ height: 50 }} src={url + prop.imageMain || ""} alt="" />
                                                        </div>
                                                        <div class="des">
                                                            <h6 class="title fs-2"><a href="#">{prop.title || ""}</a></h6>
                                                            <p class="sub-title"><a href="#">Rachel Platten</a></p>
                                                        </div>
                                                        <div class="hover-state d-flex justify-content-between align-items-center">
                                                            <span class="pointer play-btn-dark box-rounded-sm"><i class="play-icon"></i></span>
                                                            <div class="d-flex align-items-center">
                                                                <span class="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                                <span class="pointer dropdown-menu-toggle"><span class="icon-dot-nav-horizontal text-light"></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
                                    <div class="item">
                                        {!data || data.length === 0 ? "" : data.map((prop, key) => {
                                            if (key >= 10 && key < 15) {
                                                return (
                                                    <div key={key} class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                        <div class="img-box img-box-sm box-rounded-sm">
                                                            <img style={{ height: 50 }} src={url + prop.imageMain || ""} alt="" />
                                                        </div>
                                                        <div class="des">
                                                            <h6 class="title fs-2"><a href="#">{prop.title || ""}</a></h6>
                                                            <p class="sub-title"><a href="#">Rachel Platten</a></p>
                                                        </div>
                                                        <div class="hover-state d-flex justify-content-between align-items-center">
                                                            <span class="pointer play-btn-dark box-rounded-sm"><i class="play-icon"></i></span>
                                                            <div class="d-flex align-items-center">
                                                                <span class="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                                <span class="pointer dropdown-menu-toggle"><span class="icon-dot-nav-horizontal text-light"></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
                                    <div class="item">
                                        {!data || data.length === 0 ? "" : data.map((prop, key) => {
                                            if (key >= 15 && key < 20) {
                                                return (
                                                    <div key={key} class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                        <div class="img-box img-box-sm box-rounded-sm">
                                                            <img style={{ height: 50 }} src={url + prop.imageMain || ""} alt="" />
                                                        </div>
                                                        <div class="des">
                                                            <h6 class="title fs-2"><a href="#">{prop.title || ""}</a></h6>
                                                            <p class="sub-title"><a href="#">Rachel Platten</a></p>
                                                        </div>
                                                        <div class="hover-state d-flex justify-content-between align-items-center">
                                                            <span class="pointer play-btn-dark box-rounded-sm"><i class="play-icon"></i></span>
                                                            <div class="d-flex align-items-center">
                                                                <span class="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                                <span class="pointer dropdown-menu-toggle"><span class="icon-dot-nav-horizontal text-light"></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
                                    <div class="item">
                                        {!data || data.length === 0 ? "" : data.map((prop, key) => {
                                            if (key >= 20 && key < 25) {
                                                return (
                                                    <div key={key} class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                        <div class="img-box img-box-sm box-rounded-sm">
                                                            <img style={{ height: 50 }} src={url + prop.imageMain || ""} alt="" />
                                                        </div>
                                                        <div class="des">
                                                            <h6 class="title fs-2"><a href="#">{prop.title || ""}</a></h6>
                                                            <p class="sub-title"><a href="#">Rachel Platten</a></p>
                                                        </div>
                                                        <div class="hover-state d-flex justify-content-between align-items-center">
                                                            <span class="pointer play-btn-dark box-rounded-sm"><i class="play-icon"></i></span>
                                                            <div class="d-flex align-items-center">
                                                                <span class="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                                <span class="pointer dropdown-menu-toggle"><span class="icon-dot-nav-horizontal text-light"></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
                                    <div class="item">
                                        {!data || data.length === 0 ? "" : data.map((prop, key) => {
                                            if (key >= 25 && key < 30) {
                                                return (
                                                    <div key={key} class="img-box-horizontal music-img-box h-g-bg h-d-shadow">
                                                        <div class="img-box img-box-sm box-rounded-sm">
                                                            <img style={{ height: 50 }} src={url + prop.imageMain || ""} alt="" />
                                                        </div>
                                                        <div class="des">
                                                            <h6 class="title fs-2"><a href="#">{prop.title || ""}</a></h6>
                                                            <p class="sub-title"><a href="#">Rachel Platten</a></p>
                                                        </div>
                                                        <div class="hover-state d-flex justify-content-between align-items-center">
                                                            <span class="pointer play-btn-dark box-rounded-sm"><i class="play-icon"></i></span>
                                                            <div class="d-flex align-items-center">
                                                                <span class="adonis-icon text-light pointer mr-2 icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank" /></svg></span>
                                                                <span class="pointer dropdown-menu-toggle"><span class="icon-dot-nav-horizontal text-light"></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pt-e-20 pt-e-lg-40"></div>
                    </div>
                    <div class="col-xxl-5 col-lg-4">
                        <div class="title pb-e-15">
                            <h6 class="title inactive-color">Video Today</h6>
                            <h2 class="title h3-md">Watch Now</h2>
                        </div>
                        <div class="music-img-box">
                            <div class="img-box box-rounded-md">
                                <img src="/static/assets/images/watch-now/watch-now.jpg" alt="" />
                            </div>
                            <div class="hover-state show">
                                <div class="absolute-top pl-e-15 pr-e-15 pt-e-15 pl-e-md-30 pr-e-md-30 pt-e-md-30">
                                    <h6 class="album-name text-light">Album:  Life Changes</h6>
                                </div>
                                <div class="absolute-bottom pl-e-15 pr-e-15 pb-e-md-15  pl-e-md-30 pr-e-30 pb-e-md-30 d-flex">
                                    <div class="">
                                        <a href="#"><h5 class="album-title text-light">The Ones That Like Me</h5></a>
                                        <a href="#" ><h6 class="artist-name text-light">David Jame</h6></a>
                                    </div>
                                    <div class="ml-auto">
                                        <span class="pointer play-btn-dark play-btn-dark round-btn"><i class="play-icon"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pt-e-30 pt-e-lg-40"></div>
                    </div>
                </div>
            </section>
        )
    }
}
