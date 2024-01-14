
import VideoPopup from "@/components/elements/VideoPopup"
import Layout from "@/components/layout/Layout"
import TestimonialSlider16 from "@/components/slider/TestimonialSlider16"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About company" wrapperCls="home_3" backgroundImage={'assets/newestBiotech/images/banner/banner.jpeg'}>
                <div>
                    {/* About Section */}
                    <section className="about-section">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="image-block">
                                        <div className="image-one wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms"><div className="image-box"><img className="lazy-image owl-lazy" src="/assets/newestBiotech/images/banner/top-ten-foods-for-health-2x.webp" alt="" /></div></div>
                                        <div className="image-two wow fadeInLeft" data-wow-delay="300ms" data-wow-duration="1500ms"><div className="image-box"><img className="lazy-image owl-lazy" src="/assets/newestBiotech/images/1650442138214961.jpg" alt="" /></div></div>
                                        <div className="logo"><img src="/assets/images/icons/icon-12.png" alt="" /></div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="sec-title">
                                        <h2>Professional manufacture services</h2>
                                        <div className="text-decoration">
                                            <span className="left" />
                                            <span className="right" />
                                        </div>
                                        <div className="text">Newest Biotech is a high-tech enterprise in professional, scientific research and specializing in ingredients for the food and beverage industry, as well as dietary supplements. We manufacture and supply almost everything from dairy powders, proteins to fibers, oils, shortenings, thinkers, gums, starches, grains, fruit concentrates, savory sauces, and much more! </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Features Section Six */}
                    <section className="features-section-six">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="content">
                                        <div className="sec-title">
                                            <h2>Reason for choosing our <br /> company</h2>
                                            <div className="text-decoration">
                                                <span className="left" />
                                                <span className="right" />
                                            </div>
                                        </div>
                                        <div className="whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-diamond" /></div>
                                                <h4 color="red">Newest Biotech Is The Industry Leaders</h4>
                                                <div className="text">The production of seaweed polysaccharides, plant polysaccharides and related products is our expertise.</div>
                                            </div>
                                        </div>
                                        <div className="whay-choose-block">
                                            <div className="inner-box">
                                                <div className="icon"><span className="flaticon-bot" /></div>
                                                <h4>fulfill individual needs</h4>
                                                <div className="text">We are excited to fulfill individual needs, such as various packaging types or order sizes, when producing and packaging, striving to fulfill our customer’s wishes. We continue to manufacture and source quality ingredients. You can rest on the promise that the ingredients we carry come from thoroughly vetted suppliers and produced by our strict quality standards!</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="video-box">
                                        <div className="image"><img src="/assets/newestBiotech/images/video_detail_image.png" alt="" /></div>
                                        <VideoPopup url='/assets/newestBiotech/videos/detail.mp4'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <section className="award-section style-two" style={{ backgroundImage: 'url(assets/newestBiotech/images/honey.jpg)' }}>
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="sec-title light">
                                        <h2>GLUCOSE MONOHYDRATE</h2>
                                        <div className="text-decoration">
                                            <span className="left" />
                                            <span className="right" />
                                        </div>
                                        <div className="white-text">In the food industry and beverage industry, it is used as sweetener, nutrient and filler. In the pharmaceutical industry, it can be used as a nutrient solution to make oral liquid or intravenous injection. In the leather industry, sole leather and leather case leather are used as reducing agents.</div>
                                    </div>
                                    <div className="bottom-text">We have won 10 more products <Link href="#">View All products<i className="flaticon-right" /></Link></div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    {/* <section className="team-section-seven">
                        <div className="auto-container">
                            <div className="top-content row m-0 justify-content-between">
                                <div className="sec-title">
                                    <h2>Team behind our success</h2>
                                    <div className="text-decoration">
                                        <span className="left" />
                                        <span className="right" />
                                    </div>
                                </div>
                                <div className="link-btn mb-30 mt-4"><Link href="#" className="theem-btn btn-style-one text-white"><span className="btn-title">ALL MEMBERS</span></Link></div>
                            </div>
                            <div className="row">
                                <div className="team-block-four col-lg-4 col-md-6">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="/assets/images/resource/team-9.jpg" alt="" />
                                            <div className="social-links-wrapper">
                                                <div className="icon"><span className="flaticon-share-1" /></div>
                                                <ul className="social-links">
                                                    <li><Link href="#"><span className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><span className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#"><span className="fab fa-google-plus-g" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <div className="author-title">
                                                <h4>Adam Clinton</h4>
                                                <div className="designation">Ceo &amp; Founder</div>
                                            </div>
                                            <div className="text">Same as saying through shrinking toil and cases are perfectly simple except.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-block-four col-lg-4 col-md-6">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="/assets/images/resource/team-10.jpg" alt="" />
                                            <div className="social-links-wrapper">
                                                <div className="icon"><span className="flaticon-share-1" /></div>
                                                <ul className="social-links">
                                                    <li><Link href="#"><span className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><span className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#"><span className="fab fa-google-plus-g" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <div className="author-title">
                                                <h4>Homer Donnie</h4>
                                                <div className="designation">Managing Director</div>
                                            </div>
                                            <div className="text">Undertakes laborious physically exercise except to obtain advantage.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="team-block-four col-lg-4 col-md-6">
                                    <div className="inner-box">
                                        <div className="image">
                                            <img src="/assets/images/resource/team-11.jpg" alt="" />
                                            <div className="social-links-wrapper">
                                                <div className="icon"><span className="flaticon-share-1" /></div>
                                                <ul className="social-links">
                                                    <li><Link href="#"><span className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><span className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#"><span className="fab fa-google-plus-g" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="lower-content">
                                            <div className="author-title">
                                                <h4>Jerome Hobert</h4>
                                                <div className="designation">Chief Executive</div>
                                            </div>
                                            <div className="text">How to pursue pleasure rationaly counter that are extremely desires.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    {/* Feature Section Two */}
                    {/* <section className="feature-section-two">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-6 feature-block-two style-two">
                                    <div className="shape-box">
                                        <div className="inner-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-9.png" alt="" /></div>
                                            <h4>Become a Partner of Envolve</h4>
                                            <div className="text">To take a trivial example, which of us undertakes <br />laborious physical exercise.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 feature-block-two style-two">
                                    <div className="shape-box">
                                        <div className="inner-box">
                                            <div className="icon"><img src="/assets/images/icons/icon-10.png" alt="" /></div>
                                            <h4>Career Opportunities in Envolve</h4>
                                            <div className="text">Who chooses to enjoy a pleasure that has no one <br />annoying consequences.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                </div>

            </Layout>
        </>
    )
}