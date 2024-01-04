
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import dynamic from 'next/dynamic'
const ProductFilter = dynamic(() => import('@/components/elements/ProductFilter'), {
    ssr: false,
})

export default function Home() {
    const agarProductList = [
        {
            img: "/assets/newestBiotech/images/products/Agar.jpg",
            title: "Agar Manufacturer",
            desc: "Learn more",
            url: "#",
        },
    ]

    const desc = `Agar Manufacturer – Newest Biotech INC. is a specialized Agar Manufacturer of various gel strengths and specifications, used in dietary supplements, foods, and beverages.

    Because of Newest Biotech INC. years of experience as an Agar Manufacturer for various industries, no barriers stand in the way of our customer service and fulfilling our clients’ specific product specifications.
    
    In addition to being an Agar Manufacturer of various gel strengths, we also are here to help clients formulate perfect Agar mixtures or source other key ingredients.
    
    Being a specialized Agar manufacturer of various gel strengths, it is possible for us, unlike many other Agar manufacturers, to produce small quantities, for one-time orders or monthly orders. Also, as the Agar manufacturer, we can easily accommodate a customer’s specifications quickly. We are able to produce larger quantities very cost-efficiently. Our modern systems and production methods allow us to deliver fast, while not sacrificing quality.
    
    We are excited to fulfill individual needs, such as various packaging types or order sizes, when producing and packaging, striving to fulfill our customer’s wishes. We strive to be the best Agar manufacturer in the industry, by providing the best quality and beating our competitor’s prices!`
    
    const title = "Agar Manufacturer"

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
                                                    <p>Service:</p>
                                                    <h5>Fulfil custom need</h5>
                                                </div>
                                                <div className="project-info">
                                                    <p>Product type:</p>
                                                    <h5>Agar</h5>
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