import Link from "next/link"
import { searchProductsByName } from "../data/products"
import { useState } from "react"

export default function SearchPopup({ isPopup, handlePopup }) {
    const [searchText, setSearchText] = useState("");
    const [relatedSearchList, setRelatedSearchList] = useState([]);
    const HandlerSearchButton = () => {
        setRelatedSearchList(searchProductsByName(searchText));
    }
    const handlerKeywordDown = (e) => {
        if (e && e.keyCode === 13) {
            HandlerSearchButton();
        }
    }
    return (
        <>
            <div id="search-popup" className={`search-popup ${isPopup ? "popup-visible" : ""}`}>
                <div className="close-search theme-btn" onClick={handlePopup}><span className="flaticon-remove" /></div>
                <div className="popup-inner">
                    <div className="overlay-layer" />
                    <div className="search-form">
                        {/* <form method="post" action=""> */}
                            <div className="form-group">
                                <fieldset>
                                    <input type="search" className="form-control" name="search-input" placeholder="Search Here" onChange={(e) => setSearchText(e.target.value)} onKeyDown={(e) => handlerKeywordDown(e)} required />
                                    <input type="submit" className="theme-btn" onClick={HandlerSearchButton}/>
                                </fieldset>
                            </div>
                        {/* </form> */}
                        <br />
                        <h3>Related Search</h3>
                        <ul className="recent-searches">
                            {
                                !relatedSearchList && searchText === '' && <li>no related data</li>
                            }
                            {
                                relatedSearchList && relatedSearchList.map(product => {
                                    return Object.entries(product.infos).map(([category, product_info]) => {
                                        return <li>
                                            <Link href={product_info.url}>{product.title}&nbsp;({category})</Link>
                                        </li>
                                    })
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}
