'use client'
import { useCallback, useState } from "react"

export default function PortfolioFilter4({ title_list, setTitle }) {
    const [filterKey, setFilterKey] = useState("")
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
