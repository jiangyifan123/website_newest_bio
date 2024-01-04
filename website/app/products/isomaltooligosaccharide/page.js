
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import dynamic from 'next/dynamic'
const ProductFilter = dynamic(() => import('@/components/elements/ProductFilter'), {
    ssr: false,
})

export default function Home() {
    const agarProductList = [
        {
            img: "/assets/newestBiotech/images/products/Isomaltooligosaccharide.jpeg",
            title: "Pincredit IMO Powder High Qual...",
            desc: "Learn more",
            url: "#",
        },
    ]

    const desc = ``

    const title = "Isomaltooligosaccharide"

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