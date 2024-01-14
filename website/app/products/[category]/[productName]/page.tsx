
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import dynamic from 'next/dynamic'
const ProductFilter = dynamic(() => import('@/components/elements/ProductFilter'), {
    ssr: false,
})
import { getProductDetailByName } from '@/components/data/products_detail'

export default function Home({ params }: { params: { category: string, productName: string } }) {
    const data = getProductDetailByName(params.productName)

    const title = params.productName

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
                                            <div className="link-btn"><Link href={data.pdfUrl} className="theme-btn btn-style-one"><span className="btn-title">Download PDF</span></Link></div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="project-info-wrapper">
                                                {
                                                    Object.entries(data.info).map(([infoTitle, infoSubInfo]) => {
                                                        return <div className="project-info">
                                                            <p> {infoTitle} </p>
                                                            {
                                                                Object.entries(infoSubInfo).map(([infoSubTitle, infoSubValue]) => {
                                                                    return <>
                                                                        <h5>{infoSubTitle}</h5>
                                                                        {
                                                                            infoSubValue.map(value => {
                                                                                return <h6 style={{ paddingLeft: '10px' }}>{value}</h6>
                                                                            })
                                                                        }
                                                                    </>
                                                                })
                                                            }
                                                        </div>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <h4>Description</h4>
                                    <div className="text">
                                        {
                                            data.desc.split('\n').map(content => {
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

                                        <div className="link-btn"><Link href="/contact" className="theme-btn btn-style-one"><span className="btn-title">Contact us to get a FREE quote</span></Link></div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}