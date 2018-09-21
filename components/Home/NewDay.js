import React, { Component } from 'react'
import fetchData from '../../api/api'
import { url } from '../../variables/general'

export default class NewDay extends Component {
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

    // async componentDidMount() {
    //     const res = fetchData._getData_9()
    //     const res1 = fetchData._getData_10()
    //     const res2 = fetchData._getData_11()
    //     const res3 = fetchData._getData_9()
    //     const res4 = fetchData._getData_10()
    //     const res5 = fetchData._getData_11()
    //     const res6 = fetchData._getData_9()
    //     const res7 = fetchData._getData_10()
    //     const res8 = fetchData._getData_11()
    //     const res9 = fetchData._getData_9()

    //     let result = await Promise.all([res, res1, res2, res3, res4,
    //         res5, res6, res7, res8, res9])
    //     this.setState({ data: result })
        
    // }

    render() {
        const { data } = this.props
        if(!data || data.length === 0)
        {
            return <div className="text-center"> Loaing fail ...</div>
        }
        else
        {
            return (
                <section>
                    <div class="d-flex">
                        <div class="title-box">
                            <h6 class="sub-title inactive-color">Today</h6>
                            <h2 class="title h3-md">Có thể bạn thích ?</h2>
                        </div>
                        <div class="button-right ml-auto ml-auto d-flex align-items-end">
                            <a href="#" class="mb-4">Xem thêm<span class="adonis-icon pl-1 icon-arrow icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-see-all-arrow-right" /></svg></span></a>
                        </div>
                    </div>
                    <div class="adonis-carousel music-img-box-cont-sm" data-animation-item=".item" data-dots="yes" data-auto-width="yes" data-responsive-width="0:50%|400:33.33%|600:25%|800:20%|1000:16.667%|1200:14.285%|1400:12.5%|1600:10%">
                        <div class="gutter-30">
                            <div class="owl-carousel owl-theme-adonis">
                                <div class="item">
                                    {!data[0] || data[0].length === 0 ? "" : data[0].map((prop, key) => {
                                        if (key === 0) {
                                            return (
                                                <div key={key} class="music-img-box mb-e-30 mb-e-md-40">
                                                    <div class="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} class="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                                        <div class="hover-state">
                                                            <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                            </div>
                                                            <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 class="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={key} class="music-img-box">
                                                    <div class="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} class="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                                        <div class="hover-state">
                                                            <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                            </div>
                                                            <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 class="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>

                                <div class="item">
                                    {!data[1] || data[1].length === 0 ? "" : data[1].map((prop, key) => {
                                        if (key === 0) {
                                            return (
                                                <div key={key} class="music-img-box mb-e-30 mb-e-md-40">
                                                    <div class="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} class="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                                        <div class="hover-state">
                                                            <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                            </div>
                                                            <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 class="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={key} class="music-img-box">
                                                    <div class="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} class="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                                        <div class="hover-state">
                                                            <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                            </div>
                                                            <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 class="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div class="item">
                                    {!data[2] || data[2].length === 0 ? "" : data[2].map((prop, key) => {
                                        if (key === 0) {
                                            return (
                                                <div key={key} class="music-img-box mb-e-30 mb-e-md-40">
                                                    <div class="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} class="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                                        <div class="hover-state">
                                                            <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                            </div>
                                                            <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 class="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={key} class="music-img-box">
                                                    <div class="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} class="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                                        <div class="hover-state">
                                                            <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                            </div>
                                                            <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 class="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div class="item">
                                    {!data[3] || data[3].length === 0 ? "" : data[3].map((prop, key) => {
                                        if (key === 0) {
                                            return (
                                                <div key={key} class="music-img-box mb-e-30 mb-e-md-40">
                                                    <div class="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} class="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                                        <div class="hover-state">
                                                            <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                            </div>
                                                            <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 class="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={key} class="music-img-box">
                                                    <div class="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} class="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                                        <div class="hover-state">
                                                            <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                            </div>
                                                            <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 class="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div class="item">
                                    {!data[4] || data[4].length === 0 ? "" : data[4].map((prop, key) => {
                                        if (key === 0) {
                                            return (
                                                <div key={key} class="music-img-box mb-e-30 mb-e-md-40">
                                                    <div class="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} class="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                                        <div class="hover-state">
                                                            <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                            </div>
                                                            <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 class="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={key} class="music-img-box">
                                                    <div class="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} class="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                                        <div class="hover-state">
                                                            <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                            </div>
                                                            <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 class="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div class="item">
                                    {!data[5] || data[5].length === 0 ? "" : data[5].map((prop, key) => {
                                        if (key === 0) {
                                            return (
                                                <div key={key} class="music-img-box mb-e-30 mb-e-md-40">
                                                    <div class="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} class="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                                        <div class="hover-state">
                                                            <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                            </div>
                                                            <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 class="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={key} class="music-img-box">
                                                    <div class="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} class="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                                        <div class="hover-state">
                                                            <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                            </div>
                                                            <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 class="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div class="item">
                                    {!data[6] || data[6].length === 0 ? "" : data[6].map((prop, key) => {
                                        if (key === 0) {
                                            return (
                                                <div key={key} class="music-img-box mb-e-30 mb-e-md-40">
                                                    <div class="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} class="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                                        <div class="hover-state">
                                                            <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                            </div>
                                                            <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 class="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={key} class="music-img-box">
                                                    <div class="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} class="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                                        <div class="hover-state">
                                                            <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                            </div>
                                                            <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 class="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div class="item">
                                    {!data[7] || data[7].length === 0 ? "" : data[7].map((prop, key) => {
                                        if (key === 0) {
                                            return (
                                                <div key={key} class="music-img-box mb-e-30 mb-e-md-40">
                                                    <div class="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} class="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                                        <div class="hover-state">
                                                            <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                            </div>
                                                            <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 class="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={key} class="music-img-box">
                                                    <div class="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} class="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                                        <div class="hover-state">
                                                            <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                            </div>
                                                            <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 class="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div class="item">
                                    {!data[8] || data[8].length === 0 ? "" : data[8].map((prop, key) => {
                                        if (key === 0) {
                                            return (
                                                <div key={key} class="music-img-box mb-e-30 mb-e-md-40">
                                                    <div class="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} class="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                                        <div class="hover-state">
                                                            <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                            </div>
                                                            <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 class="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={key} class="music-img-box">
                                                    <div class="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} class="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                                        <div class="hover-state">
                                                            <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                            </div>
                                                            <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 class="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                                <div class="item">
                                    {!data[9] || data[9].length === 0 ? "" : data[9].map((prop, key) => {
                                        if (key === 0) {
                                            return (
                                                <div key={key} class="music-img-box mb-e-30 mb-e-md-40">
                                                    <div class="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} class="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-1@2x.jpg" alt="" />
                                                        <div class="hover-state">
                                                            <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                            </div>
                                                            <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 class="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div key={key} class="music-img-box">
                                                    <div class="img-box box-rounded-md img-box-md">
                                                        <img style={{ height: 145 }} class="retina" src={url + prop.imageMain || ""} data-2x="/static/assets/images/playlists/playlist-11@2x.jpg" alt="" />
                                                        <div class="hover-state">
                                                            <div class="absolute-bottom-left pl-e-15 pb-e-15">
                                                                <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                            </div>
                                                            <div class="absolute-top-right pr-e-15 pt-e-15">
                                                                <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6 class="title"><a href="#">Vestibulum nibh lorem ipsum</a></h6>
                                                    <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                                </div>
                                            )
                                        }
                                    })}
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="pt-e-20 pt-e-lg-40"></div>
                </section>
            )
        }
        
    }
}
