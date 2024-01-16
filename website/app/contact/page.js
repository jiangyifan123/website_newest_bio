'use client'
import Layout from "@/components/layout/Layout"
import ContactUs from "@/components/elements/ContactUs"

export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Get in touch" wrapperCls="home_3" backgroundImage={'assets/newestBiotech/images/contact_us_banner.jpeg'}>
                <ContactUs />
            </Layout>
        </>
    )
}
