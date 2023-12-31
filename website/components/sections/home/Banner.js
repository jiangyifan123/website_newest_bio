
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
                        <div className="image-layer lazy-image" data-bg="/assets/images/main-slider/7.jpg" />
                        <div className="auto-container">
                            <div className="content-box">
                                <div>
                                    <h2>Newest BioTechnology Inc</h2>
                                    <h3>A Global Leader raw ingredients and solutions provider</h3>
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
                        <div className="image-layer lazy-image" data-bg="/assets/images/main-slider/8.jpg" />
                        <div className="auto-container">
                            <div className="content-box justify-content-end">
                                <div>
                                    <h2>Our Mission</h2>
                                    <h3>Cultivating Natural Sources for the Benefit of Human Health.</h3>
                                    {/* <div className="text">Every pleasures is to welcomed pain avoided owing <br /> Duty the obligations of our business.</div> */}
                                    <div className="btn-box">
                                        <Link href="/about" className="theme-btn btn-style-one"><span className="btn-title">More About Newest BioTechnology <i className="flaticon-right" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
                        <div className="image-layer lazy-image" data-bg="/assets/images/main-slider/9.jpg" />
                        <div className="auto-container">
                            <div className="content-box">
                                <div>
                                    <h2>Our Vision</h2>
                                    <h3>Leading in Green, Technology, and Natural Hydrocolloids.</h3>
                                    <div className="text">As pioneers in natural hydrocolloids, we envision a future where green technology takes the lead.</div>
                                    <div className="btn-box">
                                        <Link href="/about" className="theme-btn btn-style-one"><span className="btn-title">More About Newest BioTechnology <i className="flaticon-right" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Slide Item */}
                    <SwiperSlide className="slide-item">
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
                    </SwiperSlide>
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
