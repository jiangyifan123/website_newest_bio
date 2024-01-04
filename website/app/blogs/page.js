
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blogs And News" wrapperCls="home_3" backgroundImage={'/assets/newestBiotech/images/newspaper_banner.jpeg'}>
                <div>
                    <section className="sidebar-page-container">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-8 content-side">
                                    <div className="news-block-six">
                                        <div className="inner-box">
                                            <div className="image">
                                                <Link href="/blog-details"><img className="lazy-image owl-lazy" src="/assets/newestBiotech/images/1650942152134501.jpg" alt="" /></Link>
                                            </div>
                                            <div className="lower-content">
                                                <div className="category">Business</div>
                                                <ul className="post-meta">
                                                    <li><Link href="#">3 January, 2024</Link></li>
                                                    <li>/</li>
                                                    <li>By Andy </li>
                                                    <li>/</li>
                                                    <li><i className="far fa-comment-alt" />0 Comments</li>
                                                </ul>
                                                <h4><Link href="/blog-details">Agar-Agar Gum Market Growth Prospect, Future Trend, Comprehensive Analysis and Forecast</Link></h4>
                                                <div className="text">The research report named “Agar Agar Gum Market Share, Size, Trends, & Industry Analysis Report, [By Product (Square, Strips, Powder), By Application (Microbiological and molecular, Meat, Confectionery, Retail, Others), By Regions]: Segment Forecast, 2018 – 2026”, recently published by Polaris Market Research...</div>
                                                <div className="bottom-content">
                                                    <Link href="/blog-details" className="theme-btn btn-style-one"><span className="btn-title">READ MORE</span></Link>
                                                    <div className="post-share-btn">
                                                        <div className="social-links-wrapper">
                                                            <div className="icon"><span className="flaticon-share-1" /></div>
                                                            <ul className="social-links">
                                                                <li><Link href="#"><span className="fab fa-facebook-f" /></Link></li>
                                                                <li><Link href="#"><span className="fab fa-twitter" /></Link></li>
                                                                <li><Link href="#"><span className="fab fa-google-plus-g" /></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pagination-wrapper text-center">
                                        <ul className="pagination clearfix">
                                            <li><Link href="#"><i className="fas fa-angle-left" /></Link></li>
                                            <li><Link href="#" className="active">1</Link></li>
                                            <li><Link href="#">2</Link></li>
                                            <li><Link href="#"><i className="fas fa-angle-right" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <aside className="col-lg-4 sidebar">
                                    <div className="blog-sidebar">
                                        {/* Instagram Widget */}
                                        <div className="widget instagram-widget">
                                            <h3 className="widget-title">Products</h3>
                                            <div className="inner-box">
                                                <div className="wrapper-box">
                                                    <div className="image">
                                                        <img className="lazy-image owl-lazy loaded" src="/assets/newestBiotech/images/1694918731650243-fotor-20240103235012.jpg" data-bg="/assets/newestBiotech/images/1694918731650243-fotor-20240103235012.jpg" alt="" data-was-processed="true" />
                                                        <div className="overlay-link"><Link href="/assets/newestBiotech/images/1694918731650243.jpg" className="lightbox-image" data-fancybox="gallery"><span className="fa fa-plus" /></Link></div>
                                                    </div>
                                                    <div className="image">
                                                        <img className="lazy-image owl-lazy loaded" src="/assets/newestBiotech/images/1694918542108922-fotor-20240103235611.jpg" data-bg="/assets/newestBiotech/images/1694918542108922-fotor-20240103235611.jpg" alt="" data-was-processed="true" />
                                                        <div className="overlay-link"><Link href="/assets/newestBiotech/images/1694918542108922.jpg" className="lightbox-image" data-fancybox="gallery"><span className="fa fa-plus" /></Link></div>
                                                    </div>
                                                    <div className="image">
                                                        <img className="lazy-image owl-lazy loaded" src="/assets/newestBiotech/images/1694918708210872-fotor-20240103235559.jpg" data-bg="/assets/newestBiotech/images/1694918708210872-fotor-20240103235559.jpg" alt="" data-was-processed="true" />
                                                        <div className="overlay-link"><Link href="/assets/newestBiotech/images/1694918708210872.jpg" className="lightbox-image" data-fancybox="gallery"><span className="fa fa-plus" /></Link></div>
                                                    </div>
                                                </div>{/* /.gallery-wrapper */}
                                            </div>
                                        </div>
                                        {/*Popular Posts*/}
                                        <div className="widget widget_popular_post">
                                            <h3 className="widget-title">Popular Post</h3>
                                            <article className="post">
                                                <figure className="post-thumb"><Link href="/blog-details"><img src="/assets/newestBiotech/images/vegs.jpg" alt="" /></Link></figure>
                                                <h5><Link href="/blog-details">Agar-Agar Gum Market Growth Prospect, Future Trend, Comprehensive Analysis and Forecast</Link></h5>
                                                <div className="post-info">3 January, 2024</div>
                                            </article>
                                        </div>
                                        {/* Newsletter Widget */}
                                        <div className="widget widget_newsletter">
                                            <h3 className="widget-title">Don’t miss anything <br /> keep update.</h3>
                                            <div className="widget-content">
                                                <form action="#">
                                                    <div className="form-group">
                                                        <i className="flaticon-mail" />
                                                        <input type="text" placeholder="Enter your email address..." />
                                                        <button type="submit" className="theme-btn"><span className="flaticon-right" /></button>
                                                    </div>
                                                </form>
                                                <h5>* Email will not be shared</h5>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </section>
                    {/* sidebar-page-container end */}
                    {/* Feature Section Two */}
                    <section className="feature-section-two mt-0">
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
                    </section>
                </div>

            </Layout>
        </>
    )
}