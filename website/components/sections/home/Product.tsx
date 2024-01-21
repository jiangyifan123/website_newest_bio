import Link from "next/link"

export function Product() {
    return <>
        <section className="award-section style-two" style={{ backgroundImage: 'url(assets/newestBiotech/images/seaweed.png)' }}>
            <div className="auto-container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="sec-title light">
                            <h2>AGAR</h2>
                            <div className="text-decoration">
                                <span className="left" />
                                <span className="right" />
                            </div>
                            <div className="white-text">
                            Agar, derived from seaweed, is a food-grade hydrocolloid celebrated for its remarkable gelling and stabilizing properties. This natural substance has been a staple in Asian cuisines for centuries and has gained global popularity in the food industry. As a versatile ingredient, agar is prized for its ability to form strong, resilient gels at relatively low concentrations, making it an ideal vegetarian and vegan substitute for gelatin. Its neutral taste, odorless nature, and capacity to set gels at higher temperatures contribute to its widespread use in diverse culinary applications, ranging from desserts and confectionery to savory dishes. Beyond the kitchen, agar finds utility in microbiology laboratories as a solidifying agent for culture media, and in pharmaceuticals for encapsulation purposes. The widespread adoption of agar in various industries reflects its unique combination of natural origin, functionality, and adaptability in creating textures and structures in a myriad of products.
                            </div>
                        </div>
                        <div className="bottom-text"><Link href="products/gums">View more products<i className="flaticon-right" /></Link></div>
                    </div>
                </div>
            </div>
        </section>
        <section className="award-section style-two" style={{ backgroundImage: 'url(assets/newestBiotech/images/honey.jpg)' }}>
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
                        <div className="bottom-text"><Link href="/products/sweeteners">View more products<i className="flaticon-right" /></Link></div>
                    </div>
                </div>
            </div>
        </section>
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