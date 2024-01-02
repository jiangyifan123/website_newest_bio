import Link from "next/link"


export default function Cases() {
    return (
        <>
            <section className="cases-section-two">
                {/* <div style={{ backgroundImage: 'url(website/public/assets/newestBiotech/images/1685515255102121.jpg)' }} /> */}
                <div className="auto-container">
                    <div className="sec-title style-three text-center">
                        <h5>Selected Partners</h5>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-md-6 case-block-two">
                                    <div className="inner-box">
                                        <div className="image"><img className="lazy-image owl-lazy" src="/assets/newestBiotech/images/partners/1685515255102121.jpg" alt="" /></div>
                                        {/* <div className="logo"><Link href="#"><img src="/assets/newestBiotech/images/1685515255102121.jpg" alt="" /></Link></div> */}
                                    </div>
                                </div>
                                <div className="col-md-6 case-block-two">
                                    <div className="inner-box">
                                        <div className="image"><img className="lazy-image owl-lazy" src="/assets/newestBiotech/images/partners/1685515296261568.jpg" alt="" /></div>
                                        {/* <div className="logo"><Link href="#"><img src="/assets/newestBiotech/images/1685515296261568.jpg" alt="" /></Link></div> */}
                                    </div>
                                </div>
                                <div className="col-md-6 case-block-two">
                                    <div className="inner-box">
                                        <div className="image"><img className="lazy-image owl-lazy" src="/assets/newestBiotech/images/partners/1685515270199701.jpg" alt="" /></div>
                                        {/* <div className="logo"><Link href="#"><img src="/assets/newestBiotech/images/1685515270199701.jpg" alt="" /></Link></div> */}
                                    </div>
                                </div>
                                <div className="col-md-6 case-block-two">
                                    <div className="inner-box">
                                        <div className="image"><img className="lazy-image owl-lazy" src="/assets/newestBiotech/images/partners/1685515285961617.jpg" alt="" /></div>
                                        {/* <div className="logo"><Link href="#"><img src="/assets/images/resource/client-20.png" alt="" /></Link></div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-md-6 case-block-two">
                                    <div className="inner-box">
                                        <div className="image"><img className="lazy-image owl-lazy" src="/assets/newestBiotech/images/partners/1650717178796311.jpg" alt="" /></div>
                                    </div>
                                </div>

                                <div className="col-md-6 case-block-two">
                                    <div className="inner-box">
                                        <div className="image"><img className="lazy-image owl-lazy" src="/assets/newestBiotech/images/partners/1650717511134465.png" alt="" /></div>
                                    </div>
                                </div>

                                {/* <div className="col-md-6 case-block-two">
                                    <div className="inner-box">
                                        <div className="image"><img className="lazy-image owl-lazy" src="/assets/newestBiotech/images/partners/1650717178796311.jpg" alt="" /></div>
                                    </div>
                                </div>

                                <div className="col-md-6 case-block-two">
                                    <div className="inner-box">
                                        <div className="image"><img className="lazy-image owl-lazy" src="/assets/newestBiotech/images/partners/1650717178796311.jpg" alt="" /></div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="bottom-text">We'd like to work with you, please <Link href="/contact"> contact us</Link> any time.</div>
                </div>
            </section>
        </>
    )
}
