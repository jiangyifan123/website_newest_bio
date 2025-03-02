import "@/node_modules/react-modal-video/css/modal-video.css"
import { SpeedInsights } from "@vercel/speed-insights/next"

import "public/assets/css/bootstrap.css"
import "public/assets/css/color.css"
import "public/assets/css/color-2.css"
import "public/assets/css/color-3.css"
import "public/assets/css/color-4.css"
import "public/assets/css/color-5.css"
import "public/assets/css/color-6.css"
import "public/assets/css/color-7.css"
import "public/assets/css/color-8.css"
import "public/assets/css/color-9.css"
import "public/assets/css/color-10.css"
import "public/assets/css/color-11.css"
import "public/assets/css/color-12.css"
import "public/assets/css/color-13.css"
import "public/assets/css/color-14.css"
import "public/assets/css/color-15.css"
import "public/assets/css/style.css"
import "public/assets/css/icomoon-3.css"
import "public/assets/css/responsive.css"

import 'swiper/css'
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { Analytics } from '@vercel/analytics/react';
import { Barlow, Fira_Sans } from 'next/font/google'
import Script from "next/script";

const firaSans = Fira_Sans({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--fira-sans",
    display: 'swap',
})
const barlow = Barlow({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--barlow",
    display: 'swap',
})

export const metadata = {
    title: 'Newest BioTech Inc',
    description: 'Newest Biotech Inc.-Global Suppliers Of Food Raw Materials',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${firaSans.variable} ${barlow.variable}`}>
            <Script
                strategy="lazyOnload"
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            />

            <Script strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                    page_path: window.location.pathname,
                    });
                `}
            </Script>
            <body>{children}</body>
            <Analytics />
            <SpeedInsights />

        </html>
    )
}
