'use client'
import { useEffect, useRef, useState, useCallback } from 'react'

export default function PortfolioFilter4({ title_list, setTitle }) {
    const isotope = useRef()
    const [filterKey, setFilterKey] = useState("")
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
            if (category) {
                setFilterKey(category)
            }
        }, 200)
    }, [])
    useEffect(() => {
        if (isotope.current) {
            isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey])
    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key)
        setTitle(key)
    },
        []
    )
    const activeBtn = (value) => (value === filterKey ? "filter active" : "filter")

    return (
        <>
            <div className="filters2 clearfix">
                <ul className="filter-tabs filter-btns clearfix">
                    {
                        title_list && 
                        title_list.map(title => {
                            return <li className={activeBtn(title)} onClick={handleFilterKeyChange(title)}>{title}</li>
                        })
                    }
                </ul>
            </div>
        </>
    )
}
