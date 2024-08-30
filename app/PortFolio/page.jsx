"use client"

import styles from './styles.module.scss'
import Image from 'next/image';
import Link from 'next/link';
import SwiperCarousel from '../../components/SwiperCarouselFood/index.jsx'
// import ParallaxCarousel from '../../components/ParrallaxCaorousel/page.jsx'
const backgroundImage = 'https://concept-theme-tech.myshopify.com/cdn/shop/files/home-countdown.webp?v=1708878029&width=2200';
import ShiftDrop from '../../components/ShiftingDropDown/index.jsx'
import SwiperCarouselFood from '../../components/SwiperCarouselFood/index.jsx'
// import CarouselSlider from '../../components/Carousel/Carousel.tsx'

const myLoader = ({ src, width, quality, placeholder }) => {
    return `https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/${src}?w=${width}?p=${placeholder}`
}





const ProductPost = {
    title: 'Humming Probe UH1',
    description: "The world's pioneer for calibration - free pH measurement, innovatively integrating the principle of electrode measurement on a single test strip electrode for pH measuring",
    image: "https://www.ultraehp.com/images/Products-Detail-Img/UH-1/UH1-02.webp",
    positive01:"Accurate, calibration-free, ready-to-use",
    positive02: "Accuracy can reach ±0.1 pH",
    positive03: "Disposable to avoid sample cross-contamination",
    LogoImg:"https://www.ultraehp.com/images/Products-Detail-Img/UP100/company-logo-mobile.webp",
    BrandName: "UltraE",
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": ""
    }
};









// const { onOpen, onOpenChange } = useDisclosure();
const Product = props => (


    <div className="relative">


        {/* 結構化資料  */}
        


        <link rel="alternate" href="https://www.ultraehp.com/hummingprobe/UH1.html" hreflang="zh-Hant" />
        <link rel="alternate" href="https://www.ultraehp.com/hummingprobe/en/UH1.html" hreflang="en" />

        {/* meta seo tag */}   
        <title>Food
        </title>
        <meta key="description" name="description" content="" />
        <meta name='keywords' content='pH electrode/pH meter/acid-base test/pH test/pH measurement/pH calibration solution' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />


     
        {/* OG metadata */}
        <meta property="og:url" content="https://www.ultraehp.com/hummingprobe/UH1.html" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="
Calibration-free micro disposable pH electrode｜Humming Probe UH1 pH electrode
" />
        <meta property="og:description" content="
" />
        <meta property="og:image" content="https://ultraehp.com/images/Ultra Video/UH1/中文版/YouTube-UH1-中文.jpg" />







        {/*

{/*
        <AnimatedTabs /> */}
        <div>
            {/* <div className='h-[100vh] items-center flex justify-center bg-black'>
               
            </div> */}
          
            {/* <p>{ProductPost.description}</p>
            <p className="hidden">Date Published: {ProductPost.datePublished}</p>
           
            <img src={ProductPost.image} alt={ProductPost.title} /> */}

            {/* JSON-LD for Blog Post */}

            {/* 結構化資料 UH1 */}


            <div className="bg-[#f1f0ee] ">
              {/* <ParallaxCarousel/> */}
              
</div>

</div >

         
</div>


 

);




export default Product;
