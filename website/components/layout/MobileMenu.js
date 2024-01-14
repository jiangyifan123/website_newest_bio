'use client'
import Link from "next/link"
import { useState } from "react"
export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                <div className="close-btn" onClick={handleMobileMenu}><span className="icon flaticon-remove" /></div>
                <nav className="menu-box">
                    <div className="nav-logo"><Link href="/"><img src="assets/newestBiotech/images/logo.png" alt="" /></Link></div>
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li><Link href="/">Home</Link> </li>
                                <li><Link href="/about">About</Link></li>
                                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}><Link href="/products">Products</Link>
                                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                        <li><Link href="/products/agar">Agar</Link></li>
                                        <li><Link href="/products/resistant-dextrin">Resistant Dextrin</Link></li>
                                        <li><Link href="/products/dextrose-monohydrate">Dextrose Monohydrate</Link></li>
                                        <li><Link href="/products/polydextrose">Polydextrose</Link></li>
                                        <li><Link href="/products/isomaltooligosaccharide">Isomaltooligosaccharide</Link></li>
                                        <li><Link href="/products/prune-juice-concentrate">Prune Juice Concentrate</Link></li>
                                        <li><Link href="/products/allulose">Allulose</Link></li>
                                    </ul>
                                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div>
                                </li>
                                {/* <li><Link href="/services">Services</Link></li> */}
                                <li><Link href="/contact">Contact</Link></li>
                                <li><Link href="/blogs">Blogs & News</Link></li>

                            </ul>
                        </div>

                    </div>
                    {/*Social Links*/}
                    <div className="social-links">
                        <ul className="clearfix">
                            <li><Link href="/#"><span className="fab fa-twitter" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-facebook-square" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-youtube" /></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>{/* End Mobile Menu */}
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />



        </>
    )
}
