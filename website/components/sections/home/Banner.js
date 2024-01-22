
'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}


export default function Banner() {
    return (
        <>
            <section className="banner-section style-three">
                <Swiper {...swiperOptions} className="banner-carousel theme_carousel owl-theme">
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/newestBiotech/images/banner/west-dbq-industrial-complex-full-1.jpg" />
                        <div className="auto-container">
                            <div className="content-box">
                                <div>
                                    <h2>Newest BioTech Inc</h2>
<h3 style={{ color: 'white' }}>A Global Leader raw ingredients and solutions provider</h3>
                                    {/* <div className="text">Every pleasures is to welcomed pain avoided owing <br />Duty the obligations of our business.</div> */}
                                    <div className="btn-box">
                                        <Link href="/about" className="theme-btn btn-style-one"><span className="btn-title">More About Newest BioTechnology <i className="flaticon-right" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="assets/newestBiotech/images/seaweed.png" />
                        <div className="auto-container">
                            <div className="content-box justify-content-end">
                                <div>
                                    <h2>Agar</h2>
                                    <h3 style={{ color: 'white' }}>Agar, derived from seaweed, is a food-grade hydrocolloid celebrated for its remarkable gelling and stabilizing properties</h3>
                                    <div className="btn-box">
                                        <Link href="/products/gums/agar-agar" className="theme-btn btn-style-one"><span className="btn-title">More About Agar <i className="flaticon-right" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="assets/newestBiotech/images/hmo.jpg" />
                        <div className="auto-container">
                            <div className="content-box">
                                <div>
                                    <h2 style={{ color: 'white' }}>Human Milk Oligosaccharides (HMO)</h2>
                                    <h3 style={{ color: 'grey' }}>Human milk oligosaccharides (HMOs) are complex carbohydrates naturally found in human breast milk</h3>
                                    <div className="btn-box">
                                        <Link href="/products/prebiotics/human_milk_oligosaccharides_(hmo)" className="theme-btn btn-style-one"><span className="btn-title">More About HMO <i className="flaticon-right" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Slide Item */}
                    {/* <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images/main-slider/9.jpg" />
                        <div className="auto-container">
                            <div className="content-box">
                                <div>
                                    <h2>Our Goals</h2>
                                    <h3>Continuously Optimize Operations to Support Sustainable Economic Growth.</h3>
                                    <div className="text">We aim to constantly refine our operations, contributing to the ongoing development of a sustainable economy.</div>
                                    <div className="btn-box">
                                        <Link href="/about" className="theme-btn btn-style-one"><span className="btn-title">More About Newest BioTechnology <i className="flaticon-right" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide> */}
                    <div className="owl-nav">
                        <button type="button" className="owl-prev h1p">
                            <span>‹</span>
                        </button>
                        <button type="button" className="owl-next h1n">
                            <span>›</span>
                        </button>
                    </div>
                </Swiper>
            </section>
        </>
    )
}
