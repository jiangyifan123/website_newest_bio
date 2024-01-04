
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import dynamic from 'next/dynamic'
const ProductFilter = dynamic(() => import('@/components/elements/ProductFilter'), {
    ssr: false,
})

export default function Home() {
    const agarProductList = [
        {
            img: "/assets/newestBiotech/images/products/prune_juice_concentrate.jpeg",
            title: "Prune juice concentrate",
            desc: "Learn more",
            url: "#",
        },
    ]

    const desc = ``

    const title = "Prune juice concentrate"

    return (
        <>
            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle={title} wrapperCls="home_3">
                <section className="project-details">
                    <div className="auto-container">
                        <div className="top-box">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h2>{title}</h2>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="project-info-wrapper">
                                                <div className="project-info">
                                                    <p>Product type:</p>
                                                    <h5>Prune juice concentrate</h5>
                                                </div>
                                                <div className="project-info">
                                                    <p>Share:</p>
                                                    <ul className="social-links clearfix">
                                                        <li><Link href="#"><span className="fab fa-facebook-f" /></Link></li>
                                                        <li><Link href="#"><span className="fab fa-twitter" /></Link></li>
                                                        <li><Link href="#"><span className="fab fa-google-plus-g" /></Link></li>
                                                        <li><Link href="#"><span className="fab fa-skype" /></Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <h4>Description</h4>
                                    <div className="text">
                                        {
                                            desc.split('\n').map(content => {
                                                if (content.trim().length > 0) {
                                                    return <>
                                                        <p>{content}</p>
                                                        <br></br>
                                                    </>
                                                }
                                            })
                                        }
                                    </div>
                                    <div className="link-btn"><Link href="#" className="theme-btn btn-style-one"><span className="btn-title">INTERESTED</span></Link></div>
                                </div>
                            </div>
                        </div>
                        <ProductFilter
                            productList={agarProductList}
                        />
                    </div>
                </section>

            </Layout>
        </>
    )
}