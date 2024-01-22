import Link from "next/link"

export function Product() {
    return <>
        <section className="team-section-seven">
            <div className="auto-container">
                <div className="top-content row m-0 justify-content-between">
                    <div className="sec-title">
                        <h2>Top 3 Products</h2>
                        <div className="text-decoration">
                            <span className="left" />
                            <span className="right" />
                        </div>
                    </div>
                    <div className="link-btn mb-30 mt-4"><Link href="/products" className="theem-btn btn-style-one text-white"><span className="btn-title">ALL PRODUCTS</span></Link></div>
                </div>
                <div className="row">
                    <div className="team-block-four col-lg-4 col-md-6">
                        <div className="inner-box">
                            <Link href='/products/gums/agar-agar'>
                                <div className="image">
                                    <img src="/assets/newestBiotech/images/products/products_display/agar-agar.png" alt="" />
                                </div>
                                <div className="lower-content">
                                    <div className="author-title">
                                        <h4>Agar-Agar</h4>
                                        <div className="designation">Gums</div>
                                    </div>
                                    {/* <div className="text">Same as saying through shrinking toil and cases are perfectly simple except.</div> */}
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="team-block-four col-lg-4 col-md-6">
                        <div className="inner-box">
                            <Link href='/products/prebiotics/human_milk_oligosaccharides_(hmo)'>
                                <div className="image">
                                    <img src="/assets/newestBiotech/images/products/products_display/human_milk_oligosaccharides_(hmo).png" alt="" />
                                </div>
                                <div className="lower-content">
                                    <div className="author-title">
                                        <h4>Human Milk Oligosaccharides (HMO)</h4>
                                        <div className="designation">Prebiotics</div>
                                    </div>
                                    {/* <div className="text">Undertakes laborious physically exercise except to obtain advantage.</div> */}
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="team-block-four col-lg-4 col-md-6">
                        <div className="inner-box">
                            <Link href='/products/gums/carboxymethyl_cellulose_(cmc)'>
                                <div className="image">
                                    <img src="/assets/newestBiotech/images/products/products_display/carboxymethyl_cellulose_(cmc).png" alt="" />
                                </div>
                                <div className="lower-content">
                                    <div className="author-title">
                                        <h4>Carboxymethyl Cellulose (CMC)</h4>
                                        <div className="designation">Gums</div>
                                    </div>
                                    {/* <div className="text">How to pursue pleasure rationaly counter that are extremely desires.</div> */}
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}