import React, { Component } from 'react'
import fetchData from '../../api/api'
import { url } from '../../variables/general'

export default class NewUpdate_Anime extends Component {

    constructor(datas) {
        super(datas)
        this.state = {
            data: []
        }
    }

    // async componentDidMount() {
    //     const result = await fetchData._getData_4()
    //     this.setState({ data: result })
    //     console.log(result)
    // }

    render() {
        const { data } = this.props
        if(!data || data.length === 0)
        {
            return <div className="text-center">Loading fail ...</div>
        }
        else
        {
            return (
                <section>
                    <div class="title-box">
                        <h3 class="title">Anime mới cập nhật !</h3>
                    </div>
                    <div class="adonis-carousel viewport-animate" data-animation="slideUp" data-animation-item=".item" data-dots="yes" data-scrollbar="yes" data-loop="no" data-auto-width="yes" data-responsive-width="0:100%|400:50%|730:33.33%|1100:25%|1460:20%">
                        <div class="gutter-30">
                            <div class="owl-carousel owl-theme-adonis">
                                <div class="item">
                                    {!data[0] ? "" :
                                        <div class="music-img-box">
                                            <div class="img-box box-rounded-md">
                                                <img style={{ height: 235 }} class="retina" src={url + data[0].imageMain || ""} data-2x="assets/images/videos/videos-1@2x.jpg" alt="" />
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                    </div>
                                                    <div class="absolute-bottom-right pr-e-20 pb-e-20">
                                                        <span class="mr-2"><span class="adonis-icon text-light pointer icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span></span>
                                                        <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title"><a href="#">{data[0].title || ""}</a></h6>
                                            <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div class="item">
                                    {!data[1] ? "" :
                                        <div class="music-img-box">
                                            <div class="img-box box-rounded-md">
                                                <img style={{ height: 235 }} class="retina" src={url + data[1].imageMain || ""} data-2x="assets/images/videos/videos-1@2x.jpg" alt="" />
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                    </div>
                                                    <div class="absolute-bottom-right pr-e-20 pb-e-20">
                                                        <span class="mr-2"><span class="adonis-icon text-light pointer icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span></span>
                                                        <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title"><a href="#">{data[1].imageMain || ""}</a></h6>
                                            <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div class="item">
                                    {!data[2] ? "" :
                                        <div class="music-img-box">
                                            <div class="img-box box-rounded-md">
                                                <img style={{ height: 235 }} class="retina" src={url + data[2].imageMain || ""} data-2x="assets/images/videos/videos-1@2x.jpg" alt="" />
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                    </div>
                                                    <div class="absolute-bottom-right pr-e-20 pb-e-20">
                                                        <span class="mr-2"><span class="adonis-icon text-light pointer icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span></span>
                                                        <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title"><a href="#">{data[2].title || ""}</a></h6>
                                            <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div class="item">
                                    {!data[3] ? "" :
                                        <div class="music-img-box">
                                            <div class="img-box box-rounded-md">
                                                <img style={{ height: 235 }} class="retina" src={url + data[3].imageMain || ""} data-2x="assets/images/videos/videos-1@2x.jpg" alt="" />
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                    </div>
                                                    <div class="absolute-bottom-right pr-e-20 pb-e-20">
                                                        <span class="mr-2"><span class="adonis-icon text-light pointer icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span></span>
                                                        <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title"><a href="#">{data[3].title || ""}</a></h6>
                                            <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div class="item">
                                    {!data[4] ? "" :
                                        <div class="music-img-box">
                                            <div class="img-box box-rounded-md">
                                                <img style={{ height: 235 }} class="retina" src={url + data[4].imageMain || ""} data-2x="assets/images/videos/videos-1@2x.jpg" alt="" />
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                    </div>
                                                    <div class="absolute-bottom-right pr-e-20 pb-e-20">
                                                        <span class="mr-2"><span class="adonis-icon text-light pointer icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span></span>
                                                        <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title"><a href="#">{data[4].title || ""}</a></h6>
                                            <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div class="item">
                                    {!data[5] ? "" :
                                        <div class="music-img-box">
                                            <div class="img-box box-rounded-md">
                                                <img style={{ height: 235 }} class="retina" src={url + data[5].imageMain || ""} data-2x="assets/images/videos/videos-1@2x.jpg" alt="" />
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                    </div>
                                                    <div class="absolute-bottom-right pr-e-20 pb-e-20">
                                                        <span class="mr-2"><span class="adonis-icon text-light pointer icon-2x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-heart-blank"></use></svg></span></span>
                                                        <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title"><a href="#">{data[5].title || ""}</a></h6>
                                            <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pb-e-10 pb-e-lg-30"></div>
                </section>
            )
        }
    }
}

