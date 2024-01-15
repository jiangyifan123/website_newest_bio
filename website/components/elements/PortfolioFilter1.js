
'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"
import {getData, getUniqueCategories} from "@/components/data/products"

export default function PortfolioFilter1() {
    // Isotope
    const isotope = useRef()
    const [filterKey, setFilterKey] = useState("*")
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".items-container", {
                itemSelector: ".masonry-item",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".masonry-item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])
    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey])
    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key)
    },
        []
    )

    const activeBtn = (value) => (value === filterKey ? "filter active" : "filter")

    const data = getData()
    const categoriesMap = getUniqueCategories(data)
    return (
        <>

            <div className="filters clearfix">
                <ul className="filter-tabs filter-btns clearfix">
                    <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>All</li>
                    {
                        categoriesMap.map(
                            (categoryMap, index) => <li className={activeBtn(categoryMap.idx)} onClick={handleFilterKeyChange(categoryMap.idx)} key={index+1}>{categoryMap.name}</li>
                        )
                    }
                </ul>
            </div>
            <div className="items-container row clearfix">
                {
                    data.map(
                        (content, index) => {
                            const categoryClasses = content.category_idx.join(' ');
                            return <div className={`case-block-one masonry-item all col-lg-4 col-md-6 col-sm-12 ${categoryClasses}`} key={content.title+index}>
                                <div className="inner-box">
                                    <div className="image">
                                        <img src={content.image} alt="" />
                                    </div>
                                    <div className="overlay">
                                        <div className="title"><span className="icon"><img src={content.overlay} alt="" /></span>{content.title}</div>
                                        <div className="link-btn"><Link href={`/products/${categoryClasses}/${content.pid}`}><i className="flaticon-right-arrow" /></Link></div>
                                        <div className="content">
                                            <h5>{content.content_top_header}</h5>
                                            <h4>{content.content_secondary_header}</h4>
                                        </div>
                                    </div>
                                </div>
                                </div>
                        }
                    )
                }
            </div>
        </>
    )
}
