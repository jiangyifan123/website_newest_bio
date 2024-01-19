import Link from "next/link"

export default function Menu() {
    return (
        <>
            <ul className="navigation clearfix">
                <li><Link href="/">Home</Link> </li>
                <li><Link href="/about">About</Link></li>
                <li className="dropdown"><Link href="/products">Products</Link>
                    <ul>
                        <li className="dropdown"><Link href="#">Amino Acids</Link>
                            <ul>
                                <li><Link href="/products/food_grade_amino_acids">Food Grade</Link></li>
                                <li><Link href="/products/feed_grade_amino_acids">Feed grade</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/products/antioxidants">Antioxidants</Link></li>
                        <li><Link href="/products/chemicals">Chemicals</Link></li>
                        <li><Link href="/products/dietary_fibers">Dietary Fibers</Link></li>
                        <li><Link href="/products/flavor_enhancers">Flavor Enhancers</Link></li>
                        <li><Link href="/products/gums">Gums</Link></li>
                        <li><Link href="/products/prebiotics">Prebiotics</Link></li>
                        <li><Link href="/products/preservatives">Preservatives</Link></li>
                        <li><Link href="/products/sweeteners">Sweeteners</Link></li>
                        <li><Link href="/products/others">Others</Link></li>
                    </ul>
                </li>
                {/* <li><Link href="/services">Services</Link></li> */}
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/blogs">Blogs & News</Link></li>
            </ul>
        </>
    )
}
