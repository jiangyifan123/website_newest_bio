import Link from "next/link"

export default function Footer3() {
    return (
        <>
            <footer className="main-footer style-three">
                <div className="pattern" style={{ backgroundImage: 'url(assets/images/shape/pattern-8.png)' }} />
                <div className="auto-container">
                    {/*Widgets Section*/}
                    <div className="widgets-section">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="footer-widget about-widget">
                                    <h3 className="widget-title">About Company</h3>
                                    <div className="widget-content">
                                        <div className="text">A Global Leader raw ingredients and solutions provider, promoting a new marine healthy lifestyle</div>
                                        <ul className="list">
                                            <li>Professional</li>
                                            <li>Reliable</li>
                                            <li>Made in USA</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="footer-widget links-widget-two">
                                    <h3 className="widget-title">Useful Links</h3>
                                    <div className="widget-content">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <ul>
                                                    <li><Link href="/about">About Us</Link></li>
                                                    <li><Link href="/contact">Contact</Link></li>
                                                    <li><Link href="/service">Services</Link></li>
                                                    <li><Link href="/products">Products</Link></li>
                                                    <li><Link href="/blog">News</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="footer-widget contact-us-widget">
                                    <h3 className="widget-title">Contact Us</h3>
                                    <div className="widget-content">
                                        <p>If you have any questions or inquiries, feel free to reach out to us:</p>
                                        <br></br>
                                        <div className="contact-info">
                                            <h4>Customer Support</h4>
                                            <p>Email: <Link href="mailto:info@newestbio.com">info@newestbio.com</Link></p>
                                            <p>Phone: <Link href="tel:+16268183130">+1 (626) 818 3130</Link></p>
                                            <p>Website: <Link href="https://newestbio.com/">https://newestbio.com/</Link></p>
                                            <p>Address: 12500 Slauson Ave, b1a, Santa Fe Springs, CA 90670</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="footer-bottom-three">
                    <div className="auto-container">
                        <div className="row m-0 justify-content-between">
                            <div className="copyright-text"><Link href="#">© {new Date().getFullYear()} Newest BioTech Inc,</Link> All Rights Reserved.</div>
                            <ul className="menu">
                                <li><Link href="/privacy-policy">Privacy Policy </Link></li>
                                <li><Link href="/terms-and-conditions">Terms &amp; Conditions</Link></li>
                                <li><Link href="#">Site Map</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="bottom-area">
                        <div className="auto-container">
                            <ul className="social-icon row m-0">
                                <li><Link href="https://www.facebook.com/profile.php?id=61555626776648">Facebook</Link></li>
                                <li><Link href="https://www.instagram.com/newestbio/">Instagram</Link></li>
                                <li><Link href="https://www.linkedin.com/company/newest-biotech/about/">Linkedin</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
