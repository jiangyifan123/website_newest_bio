
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { getProductByPid } from '@/components/data/products'
import { getProductDetailByPid } from '@/components/data/products_detail'
import { notFound } from 'next/navigation';

export default function Home({ params }: { params: { category: string, pid: string } }) {
    const product = getProductByPid(params.pid);
    const product_detail = product.infos[params.category];

    if (product === undefined || product_detail === undefined) {
        return notFound()
    }

    return (
        <>
            <Layout headerStyle={3} footerStyle={3} headTitle={product.title} breadcrumbTitle={product.title} Category={params.category} wrapperCls="home_3" backgroundImage={'/assets/newestBiotech/images/banner/agar_banner.jpeg'}>
                <section className="project-details">
                    <div className="auto-container">
                        <div className="top-box">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h2>{product.title}</h2>
                                            <div className="link-btn"><Link href={product_detail.pdfUrl} className="theme-btn btn-style-one"><span className="btn-title">Download PDF</span></Link></div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="project-info-wrapper">
                                                {
                                                    Object.entries(product_detail).map(([infoTitle, infoTextList]) => {
                                                        if (['desc', 'pdfUrl'].indexOf(infoTitle) > -1) {
                                                            return <></>
                                                        }
                                                        return <div className="project-info">
                                                            <p> {infoTitle} </p>
                                                            {
                                                                Object.values(infoTextList).map(text => {
                                                                    return <>
                                                                        <h5>{text}</h5>
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
                                            product_detail.desc.map(content => {
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