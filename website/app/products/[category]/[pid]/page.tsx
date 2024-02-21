
'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { getProductByPid } from '@/components/data/products'
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
const PortfolioFilter3 = dynamic(() => import('@/components/elements/PortfolioFilter3'), {
    ssr: false,
})
const PortfolioFilter4 = dynamic(() => import('@/components/elements/PortfolioFilter4'), {
    ssr: false,
})

export default function Home({ params }: { params: { category: string, pid: string } }) {
    const product = getProductByPid(params.pid);
    const [currentPro, setPro] = useState('')


    if (product === undefined) {
        return notFound()
    }

    const product_detail = params.category === 'all' ? Object.values(product.infos)[0] : product.infos[params.category];

    if (product_detail === undefined) {
        return notFound()
    }

    useEffect(() => {
        const product_detail = params.category === 'all' ? Object.values(product.infos)[0] : product.infos[params.category];
        if (product_detail?.multi_desc && Object.keys(product_detail.multi_desc).length > 0) {
            setPro(Object.keys(product_detail.multi_desc)[0])
        }
    }, [])

    return (
        <>
            <Layout headerStyle={3} footerStyle={3} headTitle={product.title} breadcrumbTitle={product.title} Category={params.category} wrapperCls="home_3" backgroundImage={'/assets/newestBiotech/images/banner/agar_banner.jpeg'}>
                <section className="project-details">
                    {
                        currentPro !== '' && <PortfolioFilter4 title_list={Object.keys(product_detail.multi_desc)} setTitle={setPro}/>
                    }
                    <div className="auto-container">
                        <div className="top-box">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h2>{product.title}</h2>
                                            {
                                                (product_detail.pdfUrl && product_detail.pdfUrl != "#" && product_detail.pdfUrl != "") &&
                                                <div className="link-btn">
                                                    <Link href={product_detail.pdfUrl} className="theme-btn btn-style-one">
                                                        <span className="btn-title">Download PDF</span>
                                                    </Link>
                                                </div>
                                            }
                                        </div>
                                        <div className="col-md-6">
                                            <div className="project-info-wrapper">
                                                {
                                                    Object.entries(product_detail).map(([infoTitle, infoTextList]) => {
                                                        if (['desc', 'pdfUrl', 'url', 'images', 'multi_desc'].indexOf(infoTitle) > -1) {
                                                            return <></>
                                                        }
                                                        return <div className="project-info">
                                                            <p> {infoTitle} </p>
                                                            {
                                                                Object.values(infoTextList).map(text => {
                                                                    return <>
                                                                        <h5>{text.split(':')[0]}</h5>
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
                                            currentPro === '' &&
                                            product_detail.desc.map(content => {
                                                if (content.trim().length > 0) {
                                                    return <>
                                                        <p>{content}</p>
                                                        <br></br>
                                                    </>
                                                }
                                            })
                                        }
                                        {
                                            currentPro !== '' && 
                                            product_detail.multi_desc[currentPro].desc.map(content => {
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
                            {product_detail?.multi_desc?.[currentPro]?.images && <PortfolioFilter3 images_list={product_detail?.multi_desc?.[currentPro]?.images}/>}
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}