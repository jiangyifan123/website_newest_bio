
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} wrapperCls="home_1">
                <section className="sidebar-page-container">
                    <div className="auto-container">
                        <div className="row">
                            <div className="col-lg-12 content-side">
                                <div className="blog-single-post">
                                    <div className="top-content">
                                        <div className="image"><img src="/assets/newestBiotech/images/aphanizomenon-flos-aquae.jpg" alt="" /></div>
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
                                        <div className="title">
                                            <h1>How to manage business’s online reputation</h1>
                                        </div>
                                        <div className="text">
                                            The research report named “Agar Agar Gum Market Share, Size, Trends, & Industry Analysis Report, [By Product (Square, Strips, Powder), By Application (Microbiological and molecular, Meat, Confectionery, Retail, Others), By Regions]: Segment Forecast, 2018 – 2026”, recently published by Polaris Market Research, is an excellent combination of industry insight, smart & practical solutions, latest technology to determine a higher consumer experience. The report is an in-depth analysis of market characteristics, size, share, growth, segmentation, regional and country breakdowns, competitive landscape, trends, and strategies for this market. The report aims to analyze the global Agar Agar Gum market’s historic and forecast market growth by geography. It gives an accurate picture of trade regulation, expansion, new product launches, and innovations.

“According to the research report published by Polaris Market Research, the Global Agar Agar Gum Market Size Is Anticipated To Reach USD 338.1 Million By 2026, at a CAGR of 5.0% during the forecast period.”

Important Dynamics:

The research highlights various factors influencing the global Agar Agar Gum market, such as critical overall trends, opportunities, risks, and challenges. These factors appear to have a significant impact on revenue generation in the industry. The study further evaluates sales and revenue by region, manufacturing cost analysis, industrial chain, market effect factors analysis, market data & graphs and statistics, tables, bar &pie charts, and many more for business intelligence.
                                        </div>
                                        {/* Blog Post Pagination */}
                                        <div className="blog-post-pagination">
                                            <div className="clearfix">
                                                <div className="float-left prev-post">
                                                    <Link href="#"><i className="flaticon-right" /> Prev Post</Link>
                                                    <div className="image-box">
                                                        <img src="/assets/images/resource/news-40.jpg" alt="" />
                                                        <h4>How to Manage Business <br /> Online Reputation</h4>
                                                    </div>
                                                </div>
                                                <div className="float-right next-post">
                                                    <Link href="#">Next Post <i className="flaticon-right" /> </Link>
                                                    <div className="image-box">
                                                        <img src="/assets/images/resource/news-41.jpg" alt="" />
                                                        <h4>Is your Business Ready for <br /> Integration?</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comment-form">
                                            <h3>Leave a Reply</h3>
                                            <form method="post" action="contact">
                                                <div className="row clearfix">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                        <input type="text" name="username" placeholder="Your Name" required />
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                        <input type="email" name="email" placeholder="Your Email" required />
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                        <textarea name="message" placeholder="Comment" />
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="note"><input type="checkbox" />Save my name &amp; email in this browser for the next time I comment.</div>
                                                    </div>
                                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                        <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">Post Comment</span></button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
            </Layout>
        </>
    )
}