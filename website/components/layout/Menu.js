import Link from "next/link"
// import { useRouter } from "next/router"
import {getUniqueCategories} from "@/components/data/products"

export default function Menu() {
    // const router = useRouter()
    const categories = getUniqueCategories()
    return (
        <>
            <ul className="navigation clearfix">
                <li><Link href="/">Home</Link> </li>
                <li><Link href="/about">About</Link></li>
                <li className="dropdown"><Link href="/products">Products</Link>
                    <ul>
                        {
                            categories.map(
                                (categoryMap, index) => <li key={index+1}><Link href={`/products/${categoryMap.idx}`}>{categoryMap.name}</Link></li>
                            )
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
