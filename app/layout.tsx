'use client'
import '../styles/globals.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import FooterMobile from '../components/ui/footerMobile.jsx'
import Footer from '@/components/ui/footer.jsx'
import Banner from '@/components/banner'
import Navbar from '../components/Navbar/Navbar'
import { Cloudinary } from '@cloudinary/url-gen'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from "next-themes"


// 超極生技 cloudinary 
const cld = new Cloudinary({ cloud: { cloudName: 'dc9veqqhp' } });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    })
  }, [])

  return (
    <>
      <html lang="en">
        <head>
         
             <link rel="shortcut icon" href="../public/favicon.ico" />
        </head>
        <body className="relative font-inter mx-auto max-w-[1920px] outer-wrapper antialiased bg-[#fff] text-gray-900 tracking-tight">
          <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
            <NextUIProvider>
              <NextThemesProvider attribute="class" defaultTheme="light">
                <Navbar />
                {children}
              </NextThemesProvider>
            </NextUIProvider>
            <Banner />
            <FooterMobile />
            <Footer />
          </div>
        </body>
      </html>
    </>
  )
}
