

export default function Cta() {
    return (
        <>
            <section className="cta-home-6">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-5">
                            <div className="text">
                                <div className="icon-box"><i className="fas fa-envelope-open-text" /></div>
                                <h2>Subscribe Our Newsletter &amp; Get Updates.</h2>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="form-inner">
                                <form action="index-6" method="post" className="subscribe-form">
                                    <div className="form-group">
                                        <i className="flaticon-mail" />
                                        <input type="email" name="email" placeholder="Enter your email address..." required />
                                        <button type="submit">Subscribe Us</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
