'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react';

export default function Home() {
    const [fields, setFields] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        website: '',
        subject: '',
        message: ''
    });



    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log("Submitting form:",fields)
        const res = await fetch("/api/sendgrid", {
            body: JSON.stringify(fields),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });

        const { error } = await res.json();
        if (error) {
            console.log(error);
            return;
        }
        onComplete();
    };

    const onComplete = () => {
        // Your onComplete logic goes here
        console.log('Form submission completed!');
        // You can trigger any additional actions or state changes after form submission
    };
    return (
        <>
            <Layout headerStyle={3} footerStyle={3} breadcrumbTitle="Get in touch" wrapperCls="home_3" backgroundImage={'assets/newestBiotech/images/contact_us_banner.jpeg'}>
                <div>
                    {/* Contact Form Section Two */}
                    <section className="contact-form-section-two">
                        <div className="auto-container">
                            <div className="sec-title text-center">
                                <h2>Send your message to us</h2>
                                <div className="text-decoration">
                                    <span className="left" />
                                    <span className="right" />
                                </div>
                            </div>
                            <form method="post" action="sendemail.php" className="contact-form" onSubmit={handleFormSubmit}>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 form-group">
                                        <input type="text" name="firstname" placeholder="First Name" onChange={(e) => setFields({ ...fields, firstname: e.target.value })}
                                            required />
                                    </div>
                                    <div className="col-lg-4 col-md-6 form-group">
                                        <input type="text" name="lastname" placeholder="Last Name" onChange={(e) => setFields({ ...fields, lastname: e.target.value })}
                                            required />
                                    </div>
                                    <div className="col-lg-4 col-md-6 form-group">
                                        <input type="email" name="email" placeholder="Email Address" onChange={(e) => setFields({ ...fields, email: e.target.value })}
                                            required />
                                    </div>
                                    <div className="col-lg-4 col-md-6 form-group">
                                        <input type="text" name="phone" placeholder="Phone" onChange={(e) => setFields({ ...fields, phone: e.target.value })}
                                            required />
                                    </div>
                                    <div className="col-lg-4 col-md-6 form-group">
                                        <input type="text" name="website" placeholder="Website" onChange={(e) => setFields({ ...fields, website: e.target.value })} />
                                    </div>
                                    <div className="col-lg-4 col-md-6 form-group">
                                        <input type="text" name="subject" placeholder="Subject" onChange={(e) => setFields({ ...fields, subject: e.target.value })} />

                                    </div>
                                    <div className="col-md-12 form-group">
                                        <textarea name="message" placeholder="Message goes here" onChange={(e) => setFields({ ...fields, message: e.target.value })} />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <div className="text-center">
                                            <button className="theme-btn btn-style-one" type="submit" name="submit-form"><span className="btn-title">SEND MESSAGE</span></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                    {/* Contact Details Section Four */}
                    <section className="contact-details-section-four pt-0">
                        <div className="auto-container">
                            <div className="row">
                                <div className="col-lg-4 contact-info-block-two">
                                    <div className="inner-box">
                                        <div className="icon"><img src="/assets/images/icons/icon-50.png" alt="" /></div>
                                        <h4>California</h4>
                                        <ul>
                                            <li>12500 Slauson Ave, b1a, Santa Fe Springs, CA 90670</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 contact-info-block-two">
                                    <div className="inner-box">
                                        <div className="icon"><img src="/assets/images/icons/icon-51.png" alt="" /></div>
                                        <h4>Call us on</h4>
                                        <ul>
                                            <li><Link href="tel:+16268183130">+1 (626) 818 3130</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 contact-info-block-two">
                                    <div className="inner-box">
                                        <div className="icon"><img src="/assets/images/icons/icon-52.png" alt="" /></div>
                                        <h4>Mail at</h4>
                                        <ul>
                                            <li><Link href="mailto:info@Envolve.com">info@newestbio.com</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}
