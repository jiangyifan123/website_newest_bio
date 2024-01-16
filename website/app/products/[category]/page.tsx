// import PortfolioFilter1 from ""
import dynamic from 'next/dynamic'
const PortfolioFilter1 = dynamic(() => import('@/components/elements/PortfolioFilter1'), {
    ssr: false,
})
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home({ params }: { params: { category: string } }) {
    return (
        <>
            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle={""} wrapperCls="home_3" headTitle="" backgroundImage={undefined} Category={"All Products"}>
                <section className="portfolio-section">
                    <div className="auto-container">
                        {/*Sortable Galery*/}
                        <div className="sortable-masonry">
                            {/*Filter*/}
                            <PortfolioFilter1 category={params.category}/>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}