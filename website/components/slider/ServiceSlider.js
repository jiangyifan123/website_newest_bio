'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    // spaceBetween: 30,
    autoplay: {
        delay: 2500,
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

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            // spaceBetween: 30,
        },
    }
}
export default function ServiceSlider() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="service-block-two">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/resource/image-17.jpg" alt="" /></div>
                        <div className="icon"><img src="/assets/newestBiotech/images/applications/beverages.png" /></div>
                        <h4>Beverage</h4>
                        <div className="link-btn"><Link href="/about" className="theme-btn btn-style-two"><span className="btn-title">Read More <i className="flaticon-right" /></span></Link></div>
                        <div className="overlay" style={{ backgroundImage: 'url(assets/images/resource/image-17.jpg)' }}>
                            <div className="text">
                                A natural gelling agent, enhancing texture and stability in various drinks.
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block-two">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/resource/image-18.jpg" alt="" /></div>
                        <div className="icon"><span className="flaticon-insurance" /></div>
                        <h4>Bakery &amp; Confection</h4>
                        <div className="link-btn"><Link href="/about" className="theme-btn btn-style-two"><span className="btn-title">Read More <i className="flaticon-right" /></span></Link></div>
                        <div className="overlay" style={{ backgroundImage: 'url(assets/images/resource/image-18.jpg)' }}>
                            <div className="text">A reliable gelling and thickening agent, contributing to the texture and quality of baked goods. </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block-two">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/resource/image-19.jpg" alt="" /></div>
                        <div className="icon"><span className="flaticon-trolley" /></div>
                        <h4>Diary &amp; Non-Diary</h4>
                        <div className="link-btn"><Link href="/about" className="theme-btn btn-style-two"><span className="btn-title">Read More <i className="flaticon-right" /></span></Link></div>
                        <div className="overlay" style={{ backgroundImage: 'url(assets/images/resource/image-19.jpg)' }}>
                            <div className="text">A key role as a versatile gelling agent, contributing to the texture and quality of a wide range of products. </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block-two">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/resource/image-30.jpg" alt="" /></div>
                        <div className="icon"><span className="flaticon-null-1" /></div>
                        <h4>Cosmetic</h4>
                        <div className="link-btn"><Link href="/about" className="theme-btn btn-style-two"><span className="btn-title">Read More <i className="flaticon-right" /></span></Link></div>
                        <div className="overlay" style={{ backgroundImage: 'url(assets/images/resource/image-30.jpg)' }}>
                            <div className="text">Providing versatile ingredient, contributing to texture, stability, and formulation in skincare and personal care products. </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block-two">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/resource/image-18.jpg" alt="" /></div>
                        <div className="icon"><span className="flaticon-insurance" /></div>
                        <h4>Capsule Production</h4>
                        <div className="link-btn"><Link href="/about" className="theme-btn btn-style-two"><span className="btn-title">Read More <i className="flaticon-right" /></span></Link></div>
                        <div className="overlay" style={{ backgroundImage: 'url(assets/images/resource/image-18.jpg)' }}>
                            <div className="text">Employed as a gelling agent in the production of capsules, providing a natural and vegetarian alternative to traditional gelatin capsules. </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block-two">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/resource/image-18.jpg" alt="" /></div>
                        <div className="icon"><span className="flaticon-insurance" /></div>
                        <h4>Microbes Cultivation</h4>
                        <div className="link-btn"><Link href="/about" className="theme-btn btn-style-two"><span className="btn-title">Read More <i className="flaticon-right" /></span></Link></div>
                        <div className="overlay" style={{ backgroundImage: 'url(assets/images/resource/image-18.jpg)' }}>
                            <div className="text">Utilized in the preparation of culture media for cultivating and studying microorganisms. It provides a solid surface for the growth of bacteria and other microbes in laboratory settings. </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="service-block-two">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/resource/image-18.jpg" alt="" /></div>
                        <div className="icon"><span className="flaticon-insurance" /></div>
                        <h4>Wound Care Products</h4>
                        <div className="link-btn"><Link href="/about" className="theme-btn btn-style-two"><span className="btn-title">Read More <i className="flaticon-right" /></span></Link></div>
                        <div className="overlay" style={{ backgroundImage: 'url(assets/images/resource/image-18.jpg)' }}>
                            <div className="text">Due to its gel-forming properties, agar is incorporated into certain wound care products to aid in wound healing and provide a protective barrier. </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="service-block-two">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/resource/image-18.jpg" alt="" /></div>
                        <div className="icon"><span className="flaticon-insurance" /></div>
                        <h4>Pharmaceutical gels</h4>
                        <div className="link-btn"><Link href="/about" className="theme-btn btn-style-two"><span className="btn-title">Read More <i className="flaticon-right" /></span></Link></div>
                        <div className="overlay" style={{ backgroundImage: 'url(assets/images/resource/image-18.jpg)' }}>
                            <div className="text">Used in the formulation of pharmaceutical gels, contributing to the texture and consistency of topical medications. </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="service-block-two">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/resource/image-18.jpg" alt="" /></div>
                        <div className="icon"><span className="flaticon-insurance" /></div>
                        <h4>Drug Delivery Systems</h4>
                        <div className="link-btn"><Link href="/about" className="theme-btn btn-style-two"><span className="btn-title">Read More <i className="flaticon-right" /></span></Link></div>
                        <div className="overlay" style={{ backgroundImage: 'url(assets/images/resource/image-18.jpg)' }}>
                            <div className="text">Part of controlled-release drug delivery systems, contributing to the controlled release of pharmaceutical substances within the body. </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="service-block-two">
                    <div className="inner-box">
                        <div className="image"><img src="/assets/images/resource/image-18.jpg" alt="" /></div>
                        <div className="icon"><span className="flaticon-insurance" /></div>
                        <h4>Dental Impressions</h4>
                        <div className="link-btn"><Link href="/about" className="theme-btn btn-style-two"><span className="btn-title">Read More <i className="flaticon-right" /></span></Link></div>
                        <div className="overlay" style={{ backgroundImage: 'url(assets/images/resource/image-18.jpg)' }}>
                            <div className="text">Agar hydrocolloids are used in dental impressions for creating molds in prosthodontics. </div>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="swiper-pagination relative" />
            </Swiper>
        </>
    )
}
