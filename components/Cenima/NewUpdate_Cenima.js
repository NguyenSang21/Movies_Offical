import React, { Component } from 'react'
import fetchData from '../../api/api'
import { url } from '../../variables/general'

export default class NewUpdate_Cenima extends Component {
    constructor(datas) {
        super(datas)
        this.state = {
            data: []
        }
    }

    // async componentDidMount() {
    //     const result = await fetchData._getData_3()
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
                        <h4 class="title h3">Mới cập nhật</h4>
                    </div>
                    <div class="adonis-carousel viewport-animate" data-animation="slideUp" data-animation-item=".item" data-dots="yes" data-items="7" data-items-responsive="0:1|300:2|900:4|1200:5|1600:7">
                        <div class="gutter-30">
                            <div class="owl-carousel owl-theme-adonis">
                                <div  class="item">
                                    {!data[0] ? "" :
                                        <div class="music-img-box">
                                            <div class="img-box box-rounded-md">
                                                <img style={{height:200}} class="retina" src={url + data[0].imageMain || ""} data-2x="assets/images/new-releases/new-releases-1@2x.jpg" alt="" />
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title"><a href="#">{data[0].title || ""}</a></h6>
                                            <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div  class="item">
                                    {!data[1] ? "" :
                                        <div class="music-img-box">
                                            <div class="img-box box-rounded-md">
                                                <img style={{height:200}} class="retina" src={url + data[1].imageMain || ""} data-2x="assets/images/new-releases/new-releases-1@2x.jpg" alt="" />
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title"><a href="#">{data[1].title || ""}</a></h6>
                                            <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div  class="item">
                                    {!data[2] ? "" :
                                        <div class="music-img-box">
                                            <div class="img-box box-rounded-md">
                                                <img style={{height:200}} class="retina" src={url + data[2].imageMain || ""} data-2x="assets/images/new-releases/new-releases-1@2x.jpg" alt="" />
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title"><a href="#">{data[2].title || ""}</a></h6>
                                            <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div  class="item">
                                    {!data[3] ? "" :
                                        <div class="music-img-box">
                                            <div class="img-box box-rounded-md">
                                                <img style={{height:200}} class="retina" src={url + data[3].imageMain || ""} data-2x="assets/images/new-releases/new-releases-1@2x.jpg" alt="" />
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title"><a href="#">{data[3].title || ""}</a></h6>
                                            <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div  class="item">
                                    {!data[4] ? "" :
                                        <div class="music-img-box">
                                            <div class="img-box box-rounded-md">
                                                <img style={{height:200}} class="retina" src={url + data[4].imageMain || ""} data-2x="assets/images/new-releases/new-releases-1@2x.jpg" alt="" />
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title"><a href="#">{data[4].title || ""}</a></h6>
                                            <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div  class="item">
                                    {!data[5] ? "" :
                                        <div class="music-img-box">
                                            <div class="img-box box-rounded-md">
                                                <img style={{height:200}} class="retina" src={url + data[5].imageMain || ""} data-2x="assets/images/new-releases/new-releases-1@2x.jpg" alt="" />
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title"><a href="#">{data[5].title || ""}</a></h6>
                                            <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div  class="item">
                                    {!data[6] ? "" :
                                        <div class="music-img-box">
                                            <div class="img-box box-rounded-md">
                                                <img style={{height:200}} class="retina" src={url + data[6].imageMain || ""} data-2x="assets/images/new-releases/new-releases-1@2x.jpg" alt="" />
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title"><a href="#">{data[6].title || ""}</a></h6>
                                            <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div  class="item">
                                    {!data[7] ? "" :
                                        <div class="music-img-box">
                                            <div class="img-box box-rounded-md">
                                                <img style={{height:200}} class="retina" src={url + data[7].imageMain || ""} data-2x="assets/images/new-releases/new-releases-1@2x.jpg" alt="" />
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title"><a href="#">{data[7].title || ""}</a></h6>
                                            <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
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
