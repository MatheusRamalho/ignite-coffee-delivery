import type { Metadata } from 'next'
import { Baloo_2 as Baloo2 } from 'next/font/google'

import '@/styles/globals.css'

import { Navbar } from '@/components/Navbar'

const baloo2 = Baloo2({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Ignite Coffe delivery',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={baloo2.className}>
                <div className="w-full h-full bg-base-100">
                    <Navbar />

                    <main className=""> {children} </main>
                </div>
            </body>
        </html>
    )
}
