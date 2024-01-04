import CounterUp from "@/components/elements/CounterUp"
import VideoPopup from "@/components/elements/VideoPopup"
import Link from "next/link"


export default function About() {
    return (
        <>
            <section className="about-section-three">
                <div className="pattern" style={{ backgroundImage: 'url(assets/images/shape/pattern-10.png)' }} />
                <div className="auto-container">
                    <div className="sec-title style-three text-center">
                        <h5>About Company</h5>
                        <h2>Trusted and reliable partner for ingredient Solutions</h2>
                        <div className="text">We are a high-tech enterprise specializing in innovative seaweed-based ingredient solutions for diverse industries. Count on our expertise in research, production, and innovation for trusted partnerships in delivering quality food ingredients and additives. </div>
                        <Link href="/about" className="read-more-link">More About Company<i className="flaticon-right" /></Link>
                    </div>
                </div>
            </section>
        </>
    )
}
