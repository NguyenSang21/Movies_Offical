import React, { Component } from 'react'
import fetchData from '../api/api'
import { url } from '../variables/general'

export default class MainRomance extends Component {

    constructor(datas) {
        super(datas)
        this.state = {
            data: [],
            isLoading: false
        }
    }
    componentDidUpdate() {
        adonisObj.masonry('.adonis-masonry');
    }

    async componentDidMount() {
        const result = await fetchData._getData_1()
        this.setState({ data: result, isLoading: true })
        console.log(result)
    }

    render() {
        const { data, isLoading } = this.state
        if (!isLoading) {
            return <div class="text-center">Loading ...</div>
        }
        else {
            return (
                <div id="romance" class="inactive-hide" ><main id="main">
                    <div class="title-box text-center mb-5">
                        <h6 class="sub-title inactive-color">Tâm Lý/Tình Cảm</h6>
                        <h2 class="title">Lãng mạn, ngọt ngào phải chăng là đã yêu ?</h2>
                    </div>
                    <section>
                        <div class="adonis-news-articles adonis-masonry row adonis-effect adonis-animate" data-animation="fadeInSkew" data-column-width=".masonry-item" data-animation-item=".masonry-item" data-animation="slideUp" data-column-width=".masonry-item">
                            {!data || data.length === 0 ? "" : data.map((prop, key) => (
                                <div key={key} class="col-sm-6 col-md-4 col-lg-3 masonry-item mb-4">
                                    <article class="news-box">
                                        <div class="box-rounded-sm img-box">
                                            <img src={url + prop.imageMain || ""} alt="" />
                                        </div>
                                        <div class="info-box">
                                            <p class="mb-2"><a href="#" class="color-active fs-1">Tập {prop.episodesCurrent || ""}</a></p>
                                            <h3 class="title"><a href="#">{prop.title || ""}</a> </h3>
                                            <p class="excerpt">{prop.content || ""}</p>
                                            <p> Oct 6th, 2017 by <a href="#"><em>Jon Snow</em></a></p>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
                </div>
            )
        }

    }
}
