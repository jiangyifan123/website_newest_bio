
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import dynamic from 'next/dynamic'
const ProductFilter = dynamic(() => import('@/components/elements/ProductFilter'), {
    ssr: false,
})

export default function Home() {
    const agarProductList = [
        {
            img: "/assets/newestBiotech/images/products/resistant_dextrin.jpeg",
            title: "RESISTANT DEXTRIN",
            desc: "Learn more",
            url: "#",
        },
    ]

    const desc = `Resistant Dextrin– Newest Biotech INC. is a specialized Resistant Dextrin for various applications, used throughout the food and beverage industry.

    Newest Biotech INC. has many years of experience as a Resistant Dextrin supplier, with facilities throughout the world and here in the US, nothing should stand in our way of  delivering quality Resistant Dextrin speedily and to our client’s specification.
    
    As well as being a Resistant Dextrin supplier, we are also a leader in sourcing other food ingredients, besides Resistant Dextrin and having the best prices on the market!
    
    We will win you over by our cutting-edge technology, our high standards hygiene and as an expert in Resistant Dextrin and other food ingredients!
    
    Being a specialist in Resistant Dextrin, it easy for us to supply larger quantities and smaller quantities, for small orders or large orders. Also, as a major Resistant Dextrin supplier, we can e accommodate our clients specifications effectively and speedily. Our modern methods and systems give us the ability to move Resistant Dextrin fast, at the same time not slacking on quality.
    
    We are overjoyed to accommodate any of you needs, packaging types, order quantity, and packaging! We want to be the absolute best Resistant Dextrin supplier in the world, by giving you the best service, the best quality and having the best Resistant Dextrin prices on the market!
    
    Your satisfaction is our goal, decide on Newest Biotech INC. as your Resistant Dextrin supplier.`

    const title = "Resistant Dextrin"
    
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
                                                    <h5>Resistant Dextrin</h5>
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