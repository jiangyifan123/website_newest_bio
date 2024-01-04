
'use client'
import Link from "next/link"

export default function ProductFilter({
    productList,
}) {
    return (
        <>
            <div className="filters clearfix">
                <ul className="filter-tabs filter-btns clearfix">
                    <li className='filter active'>All Products<span className="count">{productList.length}</span></li>
                </ul>
            </div>
            <div className="items-container row clearfix">
                {/* Project Block */}
                {
                    productList.map(product => {
                        return <div className="project-block-five masonry-item all cat-1 col-lg-4 col-md-6 col-sm-12">
                            <div className="inner-box">
                                <div className="image">
                                    <img src={product.img} alt="" />
                                </div>
                                <div className="lower-content">
                                    <div className="link-btn"><Link href={product.url}><i className="flaticon-right-arrow" /></Link></div>
                                    <div className="content">
                                        <h5>{product.title}</h5>
                                        <h4>{product.desc}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
    )
}
