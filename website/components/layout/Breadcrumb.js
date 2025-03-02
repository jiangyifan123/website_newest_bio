import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle, backgroundImage, Category }) {
    const procceedCategory = Category?.replaceAll('_', ' ');
    const sectionStyle = {
        backgroundImage: backgroundImage !== undefined ? `url(${backgroundImage})` : 'url(/assets/newestBiotech/images/banner/banner.jpeg)',
    };    
    
    return (
        <>
            <section className="page-title" style={sectionStyle}>
                <div className="auto-container">
                    <div className="content-box">
                        <div className="content-wrapper">
                            <div className="title">
                                <h1>{breadcrumbTitle}</h1>
                            </div>
                            <ul className="bread-crumb clearfix">
                                <li><Link href="/">Home</Link></li>
                                {Category && <li><Link href={`/products/${Category}`}>{procceedCategory}</Link></li>}
                                <li>{breadcrumbTitle}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
