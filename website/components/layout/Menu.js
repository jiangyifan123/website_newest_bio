import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

            <ul className="navigation clearfix">
                <li><Link href="/">Home</Link> </li>
                <li><Link href="/about">About</Link></li>
                <li className="dropdown"><Link href="/products">Products</Link>
                    <ul>
                        <li><Link href="/products/agar">Agar</Link></li>
                        <li><Link href="/products/resistant-dextrin">Resistant Dextrin</Link></li>
                        <li><Link href="/products/dextrose-monohydrate">Dextrose Monohydrate</Link></li>
                        <li><Link href="/products/polydextrose">Polydextrose</Link></li>
                        <li><Link href="/products/isomaltooligosaccharide">Isomaltooligosaccharide</Link></li>
                        <li><Link href="/products/prune-juice-concentrate">Prune Juice Concentrate</Link></li>
                        <li><Link href="/products/allulose">Allulose</Link></li>
                    </ul>
                </li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/blogs">Blogs & News</Link></li>
            </ul>
        </>
    )
}
