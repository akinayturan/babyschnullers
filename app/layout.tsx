import '../assets/style.scss'
import Layout from '@/layout/Layout'
import React from 'react'
import {Poppins} from 'next/font/google'

export const metadata = {
    title: 'BABYSCHNULLERS',
    description: 'Emzikzincirleri & Schnullerketten',
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: 'BABYSCHNULLERS',
        description: 'Emzikzincirleri & Schnullerketten',
        url: 'https://babyschnullers.sub.fyi/',
        siteName: 'BABYSCHNULLERS',
        locale: 'de-DE',
        type: 'website'
    },
}

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin', 'latin-ext']
})

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang='de'>
        <head>
            <meta charSet='UTF-8'/>
            <meta name='viewport' content='width=device-width, initial-scale=1.0'/>
            <meta httpEquiv='X-UA-Compatible' content='ie=edge'/>



        </head>
        <body className={poppins.className}>
        <div className="page-wrapper">
            <Layout>
                {children}
            </Layout>
        </div>
        </body>
        </html>
    )
}
