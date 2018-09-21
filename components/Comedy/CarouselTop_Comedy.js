import React, { Component } from 'react'
import fetchData from '../../api/api'
import { url } from '../../variables/general'

export default class CarouselTop_Comedy extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isLoading: false
        }
    }
    
    // async componentDidMount() {
    //     const result = await fetchData._getData_6()
    //     this.setState({ data: result, isLoading: true })
    // }

    render() {
        const { data } = this.props
        if(!data || data.length === 0)
        {
            return <div className="text-center"></div>
        }
        else
        {
            return (
                <div className="adonis-carousel mb-3" data-auto-width="yes" data-loop="yes" data-center="yes" data-dots="yes" data-responsive-width="0:70%|600:580px">
                    <div className="gutter-30">
                        <div className="owl-carousel owl-theme-adonis">
                            <div class="item">
                                <div class="img-box-text-over lg box-rounded-lg">
                                    <a href="#">
                                        <img class="resize1" style={{ height: 350 }} src={data.length === 0 ? "" : url + data[0].imageMain} data-2x="assets/images/store/store-featured-01@2x.jpg" alt="" />
                                        <div class="absolute-info">
                                            <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                <span class="adonis-highlight-dark">Featured</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="item">
                                <div class="radio">
                                    <div class="img-box-text-over lg box-rounded-lg">
                                        <a href="#">
                                            <img class="resize1" style={{ height: 350 }} src={data.length === 0 ? "" : url + data[1].imageMain} data-2x="assets/images/store/store-featured-02@2x.jpg" alt="" />
                                            <div class="absolute-info">
                                                <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                    <span class="adonis-highlight-dark">Featured</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="item">
                                <div class="img-box-text-over lg box-rounded-lg">
                                    <a href="#">
                                        <img class="resize1" style={{ height: 350 }} src={data.length === 0 ? "" : url + data[2].imageMain} data-2x="assets/images/store/store-featured-03@2x.jpg" alt="" />
                                        <div class="absolute-info">
                                            <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                <span class="adonis-highlight-dark">Featured</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div class="item">
                                <div class="radio">
                                    <div class="img-box-text-over lg box-rounded-lg">
                                        <a href="#">
                                            <img class="resize1" style={{ height: 350 }} src={data.length === 0 ? "" : url + data[3].imageMain} data-2x="assets/images/store/store-featured-04@2x.jpg" alt="" />
                                            <div class="absolute-info">
                                                <div class="absolute-bottom-left pl-e-20 pb-e-20">
                                                    <span class="adonis-highlight-dark">Featured</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </div>
            )
        }
    }
}
