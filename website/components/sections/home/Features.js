import Link from "next/link"


export default function Features() {
    return (
        <>
            <section className="features-section-four">
                <div className="auto-container">
                    <div className="wrapper-box">
                        <div className="outer-box">
                            <div className="row m-0">
                                <div className="feature-block-four col-lg-4 col-md-6">
                                    <div className="inner-box">
                                        <div className="icon"><img src="/assets/images/icons/icon-14.png" alt="" /></div>
                                        <h4>Global Leader in Ingredient and Solution provider</h4>
                                        <div className="text">As the #1 ingredient provider, we've earned global trust with our cutting-edge lab ensuring unparalleled quality and innovation. </div>
                                        {/* <Link href="#" className="read-more-link">Read More <i className="flaticon-right" /></Link> */}
                                    </div>
                                </div>
                                <div className="feature-block-four col-lg-4 col-md-6">
                                    <div className="inner-box">
                                        <div className="icon"><img src="/assets/images/icons/icon-16.png" alt="" /></div>
                                        <h4>Cutting-Edge Research Hub</h4>
                                        <div className="text">Elevate your standards with our state-of-the-art research facility, ensuring swift and professional R&D for unparalleled ingredient quality and innovative solution development. </div>
                                    </div>
                                </div>
                                <div className="feature-block-four col-lg-4 col-md-6">
                                    <div className="inner-box">
                                        <div className="icon"><img src="/assets/images/icons/icon-15.png" alt="" /></div>
                                        <h4>Worldwide Business Presence</h4>
                                        <div className="text">Your global partner in culinary innovation – our business spans the globe, providing unmatched ingredient solutions to industries worldwide. </div>
                                        {/* <Link href="#" className="read-more-link">Read More <i className="flaticon-right" /></Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
