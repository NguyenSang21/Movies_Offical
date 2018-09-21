import React, { Component } from 'react'
import fetchData from '../../api/api'
import { url } from '../../variables/general'

export default class Feature extends Component {
    constructor(datas) {
        super(datas)
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
    //     const result = await fetchData._getData_2()
    //     this.setState({ data: result })
    // }

    render() {
        const { data } = this.props
        if(!data || data.length === 0)
        {
            return <div className="text-center"> Loading fail ...</div>
        } 
        else{
            return (
                <section>
                    <div class="d-flex">
                        <div class="title-box">
                            <h6 class="sub-title inactive-color">Feature</h6>
                            <h2 class="title h3-md">Đặc sắc</h2>
                        </div>
                        <div class="button-right ml-auto ml-auto d-flex align-items-end">
                            <a href="#" class="mb-4">See all <span class="adonis-icon pl-1 icon-arrow icon-1x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-see-all-arrow-right" /></svg></span></a>
                        </div>
                    </div>
                    <div class="adonis-carousel" data-animation-item=".owl-item.active" data-dots="yes" data-auto-width="yes" data-responsive-width="0:100%|300:50%|560:33%|820:25%|980:20%|1240:16.66%">
                        <div class="gutter-30">
                            <div class="owl-carousel owl-theme-adonis">
                                <div class="item">
                                    {!data[0] || data[0].length === 0 ? "" : 
                                        <div class="music-img-box">
                                            <div class="img-box box-rounded-md">
                                                <img class="resize2" style={{ height: 200 }}  src={url + data[0].imageMain || ""}  alt="" />
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title"><a href="#">{data[0].title}</a></h6>
                                            <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div class="item">
                                    {!data[1] || data[1].length === 0 ? "" : 
                                        <div class="music-img-box">
                                            <div class="img-box box-rounded-md">
                                                <img class="resize2" style={{ height: 200 }}  src={url + data[1].imageMain || ""}  alt="" />
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title"><a href="#">{data[1].title}</a></h6>
                                            <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div class="item">
                                    {!data[2] || data[2].length === 0 ? "" : 
                                        <div class="music-img-box">
                                            <div class="img-box box-rounded-md">
                                                <img class="resize2" style={{ height: 200 }}  src={url + data[2].imageMain || ""}  alt="" />
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title"><a href="#">{data[2].title}</a></h6>
                                            <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div class="item">
                                    {!data[3] || data[3].length === 0 ? "" : 
                                        <div class="music-img-box">
                                            <div class="img-box box-rounded-md">
                                                <img class="resize2" style={{ height: 200 }}  src={url + data[3].imageMain || ""}  alt="" />
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title"><a href="#">{data[3].title}</a></h6>
                                            <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div class="item">
                                    {!data[4] || data[4].length === 0 ? "" : 
                                        <div class="music-img-box">
                                            <div class="img-box box-rounded-md">
                                                <img class="resize2" style={{ height: 200 }}  src={url + data[4].imageMain || ""}  alt="" />
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title"><a href="#">{data[4].title}</a></h6>
                                            <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div class="item">
                                    {!data[5] || data[5].length === 0 ? "" : 
                                        <div class="music-img-box">
                                            <div class="img-box box-rounded-md">
                                                <img class="resize2" style={{ height: 200 }}  src={url + data[5].imageMain || ""}  alt="" />
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title"><a href="#">{data[5].title}</a></h6>
                                            <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div class="item">
                                    {!data[6] || data[6].length === 0 ? "" : 
                                        <div class="music-img-box">
                                            <div class="img-box box-rounded-md">
                                                <img class="resize2" style={{ height: 200 }}  src={url + data[6].imageMain || ""}  alt="" />
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title"><a href="#">{data[6].title}</a></h6>
                                            <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div class="item">
                                    {!data[7] || data[7].length === 0 ? "" : 
                                        <div class="music-img-box">
                                            <div class="img-box box-rounded-md">
                                                <img class="resize2" style={{ height: 200 }}  src={url + data[7].imageMain || ""}  alt="" />
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title"><a href="#">{data[7].title}</a></h6>
                                            <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div class="item">
                                    {!data[8] || data[8].length === 0 ? "" : 
                                        <div class="music-img-box">
                                            <div class="img-box box-rounded-md">
                                                <img class="resize2" style={{ height: 200 }}  src={url + data[8].imageMain || ""}  alt="" />
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title"><a href="#">{data[8].title}</a></h6>
                                            <p class="sub-title category"><a href="#">Adonis Music Pop</a></p>
                                        </div>
                                    }
                                </div>
                                <div class="item">
                                    {!data[9] || data[9].length === 0 ? "" : 
                                        <div class="music-img-box">
                                            <div class="img-box box-rounded-md">
                                                <img class="resize2" style={{ height: 200 }}  src={url + data[9].imageMain || ""}  alt="" />
                                                <div class="hover-state">
                                                    <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                        <span class="pointer play-btn-dark round-btn"><i class="play-icon"></i></span>
                                                    </div>
                                                    <div class="absolute-top-right pr-e-20 pt-e-20">
                                                        <span class="pointer dropdown-menu-toggle"><span class="adonis-icon icon-4x"><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><use xlinkHref="#icon-horizontal-dots"></use></svg></span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 class="title"><a href="#">{data[9].title}</a></h6>
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
