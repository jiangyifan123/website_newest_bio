
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
            title: "Agar",
            desc: "Learn more",
            url: "/products/agar",
        },
    ]

    const desc = `Newest Biotech INC., a leading Agar Manufacturer, excels in producing high-quality agar with a unique capability to melt at 65 degrees Celsius, catering to diverse industries including dietary supplements, foods, and beverages. 
    
    Leveraging years of expertise, we offer unparalleled customer service and customized product specifications to meet clients' unique requirements. Our specialization in various gel strengths sets us apart, enabling us to produce both small and large quantities efficiently, catering to one-time or regular monthly orders. 
    
    Our modern production methods ensure fast delivery without compromising on quality. Committed to customer satisfaction, we provide flexible packaging options and strive to offer the best quality at competitive prices, aiming to be the industry leader.`
    
    const title = "Agar"

    return (
        <>
            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle={title} wrapperCls="home_3" backgroundImage={'/assets/newestBiotech/images/banner/agar_banner.jpeg'}>
                <section className="project-details">
                    <div className="auto-container">
                        <div className="top-box">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h2>{title}</h2>
                                            <div className="link-btn"><Link href="/contact" className="theme-btn btn-style-one"><span className="btn-title">Download PDF</span></Link></div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="project-info-wrapper">
                                                <div className="project-info">
                                                    <p>Our Specialty:</p>
                                                    <h5>Fulfill custom need to produce Agar with melting point as low as 65 degree Celsius</h5>
                                                </div>
                                                <div className="project-info">
                                                    <p>Functionalities:</p>
                                                    <h5>Forms Strong, Brittle Gels</h5>
                                                    <h5>Binds Water</h5>
                                                    <h5>Tolerant of High Solids</h5>
                                                    <h5>Require Heat Activation</h5>
                                                </div>

                                                <div className="project-info">
                                                    <p>Applicable industries:</p>
                                                    <h5>Food Industry</h5>
                                                        <h6 style={{ paddingLeft: '10px' }}>Bakery Products</h6>
                                                        <h6 style={{ paddingLeft: '10px' }}>Dairy Products</h6>
                                                        <h6 style={{ paddingLeft: '10px' }}>Meat Products</h6>
                                                        <h6 style={{ paddingLeft: '10px' }}>Beverages</h6>
                                                        <h6 style={{ paddingLeft: '10px' }}>Health Foods</h6>
                                                        <h6 style={{ paddingLeft: '10px' }}>Vegetarian and Vegan Foods</h6>
                                                        <h6 style={{ paddingLeft: '10px' }}>Sauces and Dressings</h6>
                                                    <h5>Microbiology</h5>
                                                    <h5>Pharmaceutical</h5>
                                                    <h5>Biotechnology</h5>
                                                    <h5>Cosmetics and Personal Care</h5>
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
                                    <div>

                                        <div className="link-btn"><Link href="/contact" className="theme-btn btn-style-one"><span className="btn-title">Contact us to learn more</span></Link></div>
                                    </div>
                                    
                                    
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