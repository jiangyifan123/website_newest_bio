import Link from "next/link";
import { getProductsOrderedByCategories } from "@/components/data/products";
import React from "react";
export default function Menu() {
    const categoriesMap = getProductsOrderedByCategories();
    return (
        <>
            <ul className="navigation clearfix">
                 <li><Link href="/">Home</Link> </li>
                <li><Link href="/about">About</Link></li>
                <li className="dropdown">
                    <Link href="/products">Products</Link>
                    <ul>
                        {
                            Object.values(categoriesMap).map((categoryObj, categoryIndex) => {
                                return (
                                    <React.Fragment key={categoryIndex}>
                                        <li className="dropdown">
                                            <Link href={categoryObj.url}>{categoryObj.category}</Link>
                                            <ul>
                                                {
                                                    categoryObj.list.map((product, productIndex) => {
                                                        return <li key={productIndex}><Link href={product.infos[categoryObj.idx].url}>{product.title}</Link></li>
                                                    })
                                                }
                                            </ul>
                                        </li>
                                    </React.Fragment>
                                );
                            })
                        }
                    </ul>
                </li>
                {/* <li><Link href="/services">Services</Link></li> */}
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/blogs">Blogs & News</Link></li>
                
            </ul>
        </>
    )
}
