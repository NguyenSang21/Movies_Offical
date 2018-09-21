import React, { Component } from 'react'
import fetchData from '../../api/api'
import { url } from '../../variables/general'

export default class Trends extends Component {
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
        const result = await fetchData._getData_13()
        this.setState({ data: result })
    }

    render() {
        const { data } = this.state
        if(!data || data.length === 0)
        {
            return <div className="text-center">Loading fail ...</div>
        }
        else
        {
            return (
                <section>   
                    <div class="title-box">
                        <h4 class="title h3">Xu hướng</h4>
                    </div>
                    <div class="adonis-carousel auto-fit-columns adonis-animate" data-animation="slideUp" data-animation-item=".music-img-box" data-item-width="460" data-item-max-width="480" data-auto-fit-items=".item" data-dots="yes" data-auto-width="yes">
                        <div class="gutter-30">
                            <div class="owl-carousel owl-theme-adonis">
    
                                <div class="item">
                                    {!data[0] || data[0].length === 0 ? "" :
                                        <div  class="music-img-box">
                                            <div class="img-box">
                                                <img style={{height:300}}class="retina box-rounded-lg" src={ url + data[0].imageMain || ""} data-2x="assets/images/radios/radio-browse-01@2x.jpg" alt="" />
                                                <div class="absolute-info">
                                                    <div class="absolute-center">
                                                        <h4 class="fs-10 m-0 text-light text-center"><span class="font-weight-bold">Chichi</span></h4>
                                                        <h4 class="fs-10 m-0 text-light text-center"><em><span class="font-weight-light">Daily Radio</span></em></h4>
                                                    </div>
                                                </div>
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-30 pb-e-30">
                                                        <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-30 pt-e-30">
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
                                    {!data[1] || data[1].length === 0 ? "" :
                                        <div  class="music-img-box">
                                            <div class="img-box">
                                                <img style={{height:300}}class="retina box-rounded-lg" src={ url + data[1].imageMain || ""} data-2x="assets/images/radios/radio-browse-01@2x.jpg" alt="" />
                                                <div class="absolute-info">
                                                    <div class="absolute-center">
                                                        <h4 class="fs-10 m-0 text-light text-center"><span class="font-weight-bold">Chichi</span></h4>
                                                        <h4 class="fs-10 m-0 text-light text-center"><em><span class="font-weight-light">Daily Radio</span></em></h4>
                                                    </div>
                                                </div>
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-30 pb-e-30">
                                                        <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-30 pt-e-30">
                                                        <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title"><a href="#">{data[1].title || ""}</a></h6>
                                            <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
    
                                <div class="item">
                                    {!data[2] || data[2].length === 0 ? "" :
                                        <div  class="music-img-box">
                                            <div class="img-box">
                                                <img style={{height:300}} class="retina box-rounded-lg" src={ url + data[2].imageMain || ""} data-2x="assets/images/radios/radio-browse-01@2x.jpg" alt="" />
                                                <div class="absolute-info">
                                                    <div class="absolute-center">
                                                        <h4 class="fs-10 m-0 text-light text-center"><span class="font-weight-bold">Chichi</span></h4>
                                                        <h4 class="fs-10 m-0 text-light text-center"><em><span class="font-weight-light">Daily Radio</span></em></h4>
                                                    </div>
                                                </div>
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-30 pb-e-30">
                                                        <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-30 pt-e-30">
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
                                    {!data[3] || data[3].length === 0 ? "" :
                                        <div  class="music-img-box">
                                            <div class="img-box">
                                                <img style={{height:300}}class="retina box-rounded-lg" src={ url + data[3].imageMain || ""} data-2x="assets/images/radios/radio-browse-01@2x.jpg" alt="" />
                                                <div class="absolute-info">
                                                    <div class="absolute-center">
                                                        <h4 class="fs-10 m-0 text-light text-center"><span class="font-weight-bold">Chichi</span></h4>
                                                        <h4 class="fs-10 m-0 text-light text-center"><em><span class="font-weight-light">Daily Radio</span></em></h4>
                                                    </div>
                                                </div>
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-30 pb-e-30">
                                                        <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-30 pt-e-30">
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
                                    {!data[4] || data[4].length === 0 ? "" :
                                        <div  class="music-img-box">
                                            <div class="img-box">
                                                <img style={{height:300}}class="retina box-rounded-lg" src={ url + data[4].imageMain || ""} data-2x="assets/images/radios/radio-browse-01@2x.jpg" alt="" />
                                                <div class="absolute-info">
                                                    <div class="absolute-center">
                                                        <h4 class="fs-10 m-0 text-light text-center"><span class="font-weight-bold">Chichi</span></h4>
                                                        <h4 class="fs-10 m-0 text-light text-center"><em><span class="font-weight-light">Daily Radio</span></em></h4>
                                                    </div>
                                                </div>
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-30 pb-e-30">
                                                        <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-30 pt-e-30">
                                                        <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title"><a href="#">{data[4].title || ""}</a></h6>
                                            <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pb-e-15 pb-e-lg-40"></div>
                </section>
            )
        }
    }
}
