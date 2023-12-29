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
                <li className="dropdown"><Link href="#">Company</Link>
                    <ul>
                        <li className="dropdown"><Link href="#">About Us</Link>
                            <ul>
                                <li><Link href="/about-1">About Style 01</Link></li>
                                <li><Link href="/about-2">About Style 02</Link></li>
                                <li><Link href="/about-3">About Style 03</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link href="#">Meet Our Team</Link>
                            <ul>
                                <li><Link href="/team-1">Team Style 01</Link></li>
                                <li><Link href="/team-2">Team Style 02</Link></li>
                                <li><Link href="/team-3">Team Style 03</Link></li>
                                <li><Link href="/team-4">Team Style 04</Link></li>
                                <li><Link href="/team-details">Team Details</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><Link href="/advanced-service">Services</Link></li>
                <li><Link href="/contact">Contact</Link></li>

                <li className="dropdown"><Link href="#">Blog</Link>
                    <ul>
                        <li className="dropdown"><Link href="#">Blog Default</Link>
                            <ul>
                                <li><Link href="/blog-1">Full Width</Link></li>
                                <li><Link href="/blog-2">Left Sidebar</Link></li>
                                <li><Link href="/blog-3">Right Sidebar</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link href="#">Blog Grdi View</Link>
                            <ul>
                                <li><Link href="/blog-4">Left Sidebar</Link></li>
                                <li><Link href="/blog-5">Right Sidebar</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link href="#">Blog List View</Link>
                            <ul>
                                <li><Link href="/blog-6">Full Width</Link></li>
                                <li><Link href="/blog-7">Left Sidebar</Link></li>
                                <li><Link href="/blog-8">Right Sidebar</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link href="#">Single Post</Link>
                            <ul>
                                <li><Link href="/blog-details">With Sidebar</Link></li>
                                <li><Link href="/blog-details-2">Without Sidebar</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    )
}
