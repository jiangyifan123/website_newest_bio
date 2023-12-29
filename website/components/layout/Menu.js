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
                <li><Link href="/advanced-service">Services</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/blogs">Blogs</Link></li>
            </ul>
        </>
    )
}
