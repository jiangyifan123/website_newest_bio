
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home/About"
// import Award from "@/components/sections/home/Award"
import Banner from "@/components/sections/home/Banner"
import Cases from "@/components/sections/home/Cases"
// import Experience from "@/components/sections/home/Experience"
import Features from "@/components/sections/home/Features"
// import MeetUp from "@/components/sections/home/MeetUp"
// import News from "@/components/sections/home/News"
import Services from "@/components/sections/home/Services"
import { Product } from "@/components/sections/home/Product"
// import Subscribe from "@/components/sections/home/Subscribe"
// import Testimonial from "@/components/sections/home/Testimonial"
export default function Home() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={3} wrapperCls="home_3">
                <Banner />
                <Features />
                <About />
                {/* <Experience /> */}
                <Cases />
                <Services />
                <Product />
                {/* <Testimonial /> */}
                {/* <Award /> */}
                {/* <News /> */}
                {/* <MeetUp /> */}
                {/* <Subscribe /> */}
            </Layout>
        </>
    )
}