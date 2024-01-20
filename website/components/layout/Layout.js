
'use client'
import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import DataBg from "../elements/DataBg"
import Breadcrumb from './Breadcrumb'
import SearchPopup from "./SearchPopup"
import Sidebar from "./Sidebar"
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Header1 from "./header/Header1"
import Header10 from "./header/Header10"
import Header11 from "./header/Header11"
import Header12 from "./header/Header12"
import Header13 from "./header/Header13"
import Header14 from "./header/Header14"
import Header15 from "./header/Header15"
import Header2 from './header/Header2'
import Header3 from "./header/Header3"
import Header4 from "./header/Header4"
import Header5 from "./header/Header5"
import Header6 from "./header/Header6"
import Header7 from "./header/Header7"
import Header8 from "./header/Header8"
import Header9 from "./header/Header9"
import Footer3 from "./footer/Footer3"
import Footer4 from "./footer/Footer4"
import Footer5 from "./footer/Footer5"
import Footer6 from "./footer/Footer6"
import Footer7 from "./footer/Footer7"
import Footer8 from "./footer/Footer8"
import Footer9 from "./footer/Footer9"
import Footer10 from "./footer/Footer10"
import Footer11 from "./footer/Footer11"
import Footer12 from "./footer/Footer12"
import Footer13 from "./footer/Footer13"
import Footer14 from "./footer/Footer14"
import Footer15 from "./footer/Footer15"

export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children, wrapperCls }) {
    const [scroll, setScroll] = useState(0)
    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu)
        !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible")
    }

    // Popup
    const [isPopup, setPopup] = useState(false)
    const handlePopup = () => setPopup(!isPopup)

    // Sidebar
    const [isSidebar, setSidebar] = useState(false)
    const handleSidebar = () => setSidebar(!isSidebar)

    useEffect(() => {
        const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false
        })
        window.wow.init()

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    }, [])
    return (
        <>
            <DataBg />
            <div className={`page-wrapper ${wrapperCls ? wrapperCls : ""}`} id="#top">
                <Header3 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} />
                
                <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
                <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />

                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

                {children}
                < Footer3 />
            </div>
            <BackToTop scroll={scroll} />
        </>
    )
}
