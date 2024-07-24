"use client"
// import fetch from "isomorphic-unfetch";
import { motion } from "framer-motion";
import Link from "next/link";
// import { CldImage } from 'next-cloudinary';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import Image from 'next/image'
import HummingProbePH from '../../components/HummingProbePH.jsx'
import JsonLd from '../../components/JsonLd.jsx';
// import { AdvancedVideo, lazyload, accessibility, responsive, placeholder } from "@cloudinary/react";
// import img05 from 'https://www.ultraehp.com/images/Products-Detail-Img/UP100/up111111.png'
import YoutubeUh2 from '../../components/VideoPlayer/UH2.jsx'
import CarouselThumbs from "../../components/CarouselThumbs.js";
import { DefaultSeo } from 'next-seo';
import SwiperSlider from '../../components/SwiperSliders/UH2Slider'
import TextScroll from '../../components/textScroll/TextScroll01.jsx';
import { Card, CardHeader, CardBody, Tooltip, Button } from "@nextui-org/react";
// import AnimatedTabs from '../../components/TabLink/index.jsx'
import CelebrateBTN from '../../components/CelebrateBtn/index.jsx';
// import 'cloudinary-video-player/cld-video-player.min.css';
import { card, CardFooter } from '@nextui-org/react';
// import MobileMenu from '../../components/mobileMenu/index.jsx'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import OthersProducts from '../../components/ReactSlick/ImageSlider2.jsx'
import Marquee from 'react-fast-marquee';
import FindSPE from '../../components/FindSPE.jsx'
import WhenUse from '../../components/WhenUse.jsx'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

import { Tabs, Tab } from "@nextui-org/react";
import ReadMoreReact from 'read-more-react';
import { useState } from "react";
import YouTubePlayer from '../../components/VideoPlayer/UH2en.jsx';

import ProductImage from "../../components/ProductImage.js";
 

import { AdvancedVideo, lazyload, accessibility, responsive, placeholder } from "@cloudinary/react";
import { CldImage } from 'next-cloudinary';

import Carousel from "../../components/Products/ProductCarouselUH2.jsx";
import Navigation from "../../components/Products/Navigation.jsx";
import TwoColSlider from '../../components/TwoColumnSlider/app/page01.tsx'
import styles from '../../components/two-colum/twoColumn.module.scss'
import { projects } from '../../components/two-colum/data.js';

import Double from '../../components/two-colum/Double.jsx';
import ModalBtn from "../../components/ModalBtn-2.jsx"
import ModalBtn01 from "../../components/ModalBtn-3.jsx"
import ModalBtn05 from "../../components/ModalBtn-5.jsx"
import ModalBtn04 from "../../components/ModalBtn-4.jsx"
import ModalBtn02 from "../../components/ModalBtn-2.jsx"
// import { Cloudinary } from "@cloudinary/url-gen";
import { title } from "process";
import UP10001 from '../../public/images/zensor__jogging__black_background_style--v_6.0_728c5804-1334-4d8f-b6de-fabeefed4b4f.png'
// import IMG01 from 'https://www.ultraehp.com/images/Products-Detail-Img/UH-1/UH1-07-%E6%84%9F%E6%B8%AC%E5%85%83%E4%BB%B6720x540.webp'
import { CldVideoPlayer } from "next-cloudinary";
  
import SlickCarousel from '../../components/SlickCarousel/SlickCarousel.jsx'
  
import ReactSlick from '../../components/reactSlick.jsx'
import { Cloudinary } from "@cloudinary/url-gen";


//Image Loader 
const myLoader = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UH-2/${src}?w=${width}?p=${placeholder}`
}

const myLoader001 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}?p=${placeholder}`
}
const myLoader01 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UH-1/${src}?w=${width}?p=${placeholder}`
}
const myLoader02 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/iso certification/${src}?w=${width}?p=${placeholder}`
}
const myLoader03 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/brand/${src}?w=${width}?p=${placeholder}`
}
const myLoader04 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/product-01/${src}?w=${width}?p=${placeholder}`
}




//cloudinary CDN -- vairible
const cld = new Cloudinary({
    cloud: {
        cloudName: 'ducasbzsc'
    }
})

//framer motion 
const textAnimate = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "FadeUp",
            bounce: 0.4,
            duration: 1
        }
    }

}
const title01 = {
    offscreen: { y: 150, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "FadeUp",
            bounce: 0.4,
            duration: 1.4,
            delay: 0,
        }
    }

}
const title02 = {
    offscreen: { y: 150, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "FadeUp",
            bounce: 0.4,
            duration: 1.4,
            delay: .3,
        }
    }

}
const title03 = {
    offscreen: { y: 150, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "FadeUp",
            bounce: 0.4,
            duration: 1,
            delay: .9,
        }
    }

}

const card01
    = {
    offscreen: { y: 150, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "FadeUp",
            bounce: 0.4,
            duration: .8,
            delay: 0,
        }
    }

}
const card02 = {
    offscreen: { y: 150, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "FadeUp",
            bounce: 0.4,
            duration: .8,
            delay: .3,
        }
    }

}
const card03 = {
    offscreen: { y: 150, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "FadeUp",
            bounce: 0.4,
            duration: .8,
            delay: .6,
        }
    }

}
const card04 = {
    offscreen: { y: 150, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "FadeUp",
            bounce: 0.4,
            duration: .8,
            delay: .9,
        }
    }

}
const card05 = {
    offscreen: { y: 150, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "FadeUp",
            bounce: 0.4,
            duration: .8,
            delay: 1.2,
        }
    }

}
const card06 = {
    offscreen: { y: 150, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "FadeUp",
            bounce: 0.4,
            duration: .8,
            delay: 1.5,
        }
    }

}
const ImageAnimate = {
    offscreen: { y: 200, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "FadeUp",
            bounce: 0.4,
            duration: 1.4,
            delay: 0.5,
        }
    }

}

// const gallery = [
//     { id: 1, imgUrl: "/images/Bed-1.webp" },
//     { id: 2, imgUrl: "/images/Bed-2.webp" },
//     { id: 3, imgUrl: "/images/Bed-3.webp" },
//     { id: 4, imgUrl: "/images/Oak.webp" },
// ];



let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.05
        }
    }
};

const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0,
        transition: { duration: 0.6, ease: easing }
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: easing
        }
    }
};






//結構化資料

const ProductPost = {
    title: 'Humming Probe UH2',
    description: "Calibration-free ultramicro disposable pH acid-base detection electrode / Humming Probe UH2 has a disposable design that does not need to be calibrated with calibration solution. Ready to use ,ultra small sample requirement of 1 microliter is suitable for very precious samples and easily contaminated or passivated pH electrode surfaces and special samples. There is no need to use electrode preservation solution, is portable and suitable for outdoor use without power supply. Acid-base test electrode/pH electrode/pH meter/acid-base test/pH test/pH calibration solution",
    image: "https://www.ultraehp.com/images/Products-Detail-Img/UH-2/UH2-4-%E4%B8%80%E6%BB%B4%E9%87%8F%E6%B8%AC1000x1000.webp",
    positive01: "Accurate, calibration-free, ready=to-use",
    positive02: "Disposable to avoid sample cross-contamination",
    positive03: "Accuracy can reach ±0.1 pH",
    LogoImg: "https://www.ultraehp.com/images/Products-Detail-Img/UP100/company-logo-mobile.webp",
    BrandName: "UltraE",
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": ""
    }
};




// const { onOpen, onOpenChange } = useDisclosure();
const Product = props => (


    <div className="relative">
   
        {/* metadata */}
        <title>Calibration-free micro disposable｜pH electrode｜Humming Probe UH2 pH electrode
        </title>
        <link rel="alternate" href="https://www.ultraehp.com/hummingprobe/UH2.html" hreflang="zh-Hant" />
        <link rel="alternate" href="https://www.ultraehp.com/hummingprobe/en/UH2.html" hreflang="en" />

        <meta key="description" name="description" content="Calibration-free ultramicro disposable pH acid-base detection electrode / Humming Probe UH2 has a disposable design that does not need to be calibrated with calibration solution. Ready to use ,ultra small sample requirement of 1 microliter is suitable for very precious samples and easily contaminated or passivated pH electrode surfaces and special samples. There is no need to use electrode preservation solution, is portable and suitable for outdoor use without power supply. Acid-base test electrode/pH electrode/pH meter/acid-base test/pH test/pH calibration solution" />
        <meta name='keywords' content='pH electrode/pH meter/acid-base test/pH test/pH calibration solution' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* OG metadata */}
        <meta property="og:url" content="https://www.ultraehp.com/hummingprobe/UH2-GAS.html" />
    
        <meta property="og:type" content="website" />
        <meta property="og:title" content="
Calibration-free micro disposable｜pH electrode｜Humming Probe UH2 pH electrode
" />
        <meta property="og:description" content="Calibration-free ultramicro disposable pH acid-base detection electrode / Humming Probe UH2 has a disposable design that does not need to be calibrated with calibration solution. Ready to use ,ultra small sample requirement of 1 microliter is suitable for very precious samples and easily contaminated or passivated pH electrode surfaces and special samples. There is no need to use electrode preservation solution, is portable and suitable for outdoor use without power supply. Acid-base test electrode/pH electrode/pH meter/acid-base test/pH test/pH calibration solution
" />
        <meta property="og:image" content="https://www.ultraehp.com/images/Products-Detail-Img/UH-2/UH2-4-一滴量測1000x1000.webp" />

     
        {/*

{/*
        <AnimatedTabs /> */}
        {/* <MobileMenu/> */}


        <div>
            {/* <div className='h-[100vh] items-center flex justify-center bg-black'>
               
            </div> */}

            {/* <p>{ProductPost.description}</p>
            <p className="hidden">Date Published: {ProductPost.datePublished}</p>
           
            <img src={ProductPost.image} alt={ProductPost.title} /> */}

            {/* JSON-LD for Blog Post */}

            {/* 結構化資料 UH2 */}




            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "Product",
                "name": "HummingProbe",
                "headline": ProductPost.title,
                "description": ProductPost.description,
                "datePublished": ProductPost.datePublished,
                "author": {
                    "@type": "Person",
                    "name": "HummingProbe"
                },
                "image": [ProductPost.image],
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "5",
                    "ratingCount": "5"
                },

                "brand": {
                    "@type": "Brand",
                    "name": ProductPost.BrandName,
                    "logo": ProductPost.LogoImg,
                },
                "positiveNotes": {
                    "@type": "ItemList",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "position": 1,
                            "name": ProductPost.positive01
                        },
                        {
                            "@type": "ListItem",
                            "position": 2,
                            "name": ProductPost.positive02
                        }, {
                            "@type": "ListItem",
                            "position": 3,
                            "name": ProductPost.positive03
                        }
                    ]
                },


                "mainEntityOfPage": ProductPost.mainEntityOfPage
            }} />

        </div>




    

        <motion.div className="" initial='initial' animate='animate' exit={{ opacity: 0 }}>
            <Navigation />

            <div className="fixed mobile-lang w-full top-[10px] pr-6 md:hidden flex justify-end mx-auto z-[99999] ">
                <a href="https://www.ultraehp.com/hummingprobe/UH2.html">
                    <div className='w-[40px] h-[40px] text-[18px] bg-white    text-black rounded-full flex justify-start pl-[11.5px] items-center '>cn</div>
                </a>
            </div>

            <div className="langDropdown w-[10px]  text-right ml-[87.5vw]  top-[15px] fixed z-[999]">

                <Dropdown>
                    <DropdownTrigger>
                        <Button
                            variant="bordered p-0"
                            className="w-[10px] p-0 m-0"
                        >
                            <Image className='mb-3 pr-20' src='earth.png' loader={myLoader03} loading='lazy' placeholder='empty' alt='language-switch' width={33} height={33} />
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                        <DropdownItem key="new">
                            <a className='w-full block' href="https://www.ultraehp.com/hummingprobe/en/UH2.html">English</a>
                        </DropdownItem>
                        <DropdownItem key="new">
                            <a className='w-full block' href="https://www.ultraehp.com/hummingprobe/UH2.html">繁體中文</a>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>


            </div>
            <div className='fullscreen relative mt-[20px] md:mt-[0px] pt-[60px]'>

                <a href="https://www.ultraehp.com/en/hummingprobe/">
                    <Image loader={myLoader001} src='company-logo.webp' width={160} loading='lazy' placeholder='empty' className="fixed mt-2 ml-[20px] md:ml-[90px] z-[999] top-[60px] left-10" alt='UltraP-logo' height={60}></Image> 
                </a>
              

                
                <section className="section  mt-0 md:mt-[150px]">
                    <div className="Navgation mb-[30px]  hidden md:block pl-[150px]"> <a href="https://www.ultraehp.com/hummingprobe/en/" className="hover:font-bold">Home</a> / <a className="hover: font-bold " href="#">Humming Probe UH2 </a> </div>
                    <div className="container w-full flex px-[0px] md:px-[20px] xl:px-[70px] flex-col md:flex-row justify-start items-start">

                        <div className="left  w-full md:w-1/2">
                            <SwiperSlider />


                        </div>

                        {/* <div className="block md:hidden left border border-black w-full md:w-1/2">
                            
                            <SlickCarousel/>
                    </div>  */}
                        <div className="right flex justify-center  md:justify-between  md:pl-[50px] xl:pl-[80px] w-full md:w-1/2 flex-col  h-[480px]">
                            <div className="txt">
                                <h1 className="h1-u md:mt-0 mt-[115px]">Humming Probe UH2<br/>
                                Micro pH Strip Electrode

    </h1>
                                <h2 className="model-u">pH-test paper/ pH test strip/ pH measurement/ pH strip electrode/ single use pH sensor



                                </h2>
                                <p className="text-middle-u">pH-test paper/ pH test strip/ pH measurement/ pH strip electrode/ single use pH sensor



                                </p>
                                <ul>
                                    <li>・Accurate, calibration-free, ready=to-use

                                    </li>
                                    <li>・The industry's minimum sample usage(1-2 μL)


                                    </li>
                                    <li>・Disposable to avoid sample cross-contamination
H

                                    </li>
                                
                                    <li>・Accuracy can reach ±0.1 pH


                                    </li>
                                    <li>・Each strip has a built-in temperature sensing element


                                    </li>
                                    <li>・Portable



                                    </li>
                                    <li>・Long shelf life single use pH sensor




                                    </li>
                                </ul>
                            </div>
                            <div className="btn-wrap ">

                                <div className="w-full md:w-3/4 flex flex-col md:flex-row">
                                    <ModalBtn02 />

{/* 
                                    <ModalBtn01 /> */}
                                </div>



                            </div>

                        </div>
                    </div>
                </section>


            </div>


            <div className="content-bottom ">

              
                <section className="section-video mt-[50px] md:mt-0">
                    <div className="container px-[15px] flex  2xl:w-[60%] xl:w-[65%] md:w-[80%] w-full mx-auto flex-col justify-center items-center">
                        <div className="row flex flex-col justify-center items-center mb-0  md:mb-5">

                            <h2 className="h2-u">Operation</h2>
                            <a href='https://www.youtube.com/watch?v=9rpF9iOZSi0&feature=youtu.be'>
                                <div className="rounded-[40px] bg-[#01a5d3] flex justify-center items-center py-2 text-white w-[150px]">
                                    YouTube Video
                                </div></a>

                        </div>
                        <div>

                            {/* <YouTubePlayer /> */}

                            <YoutubeUh2/>
                        </div>
                    </div>
                </section>
                {/* <section className="section_video01 px-0 mx-0 section   flex justify-center">

                    <div className="container w-full md:w-4/5 lg:w-2/3  ">
                        <div className="row ">

                            <h2 className="h2-u">Introduction video</h2>
                            <p className="text-model-u text-center">Operation</p>

                        </div>
                        <div className="row flex mt-3 justify-center items-center mx-auto">


                            <AdvancedVideo poster='https://www.ultraehp.com/images/Ultra Video/UH2/中文版/YouTube-UH2-中文.webp' plugins={[lazyload({ rootMargin: '10px 20px 10px 30px', threshold: 0.25 })]} className='rounded-2xl' preload="flase" controls width={1000} height={600} cldVid={cld.video('/UH2Video/UH2中文版_zab9g7')} /> 

                        </div>










                    </div>
                </section> */}

                <section className="section">

                    <Image loader={myLoader} className="hidden  xl:block  " placeholder="empty" loading="lazy" alt='UH1' src='UH2-banner-1020x768.webp' width={1920} height={768}></Image>

                    <Image loader={myLoader} className="hidden  md:block  xl:hidden  " placeholder="empty" loading="lazy" alt='UH1' src='UH2-banner-1020x768.webp' width={1024} height={768}></Image>

                    <Image loader={myLoader} className="block  md:hidden  " placeholder="empty" loading="lazy" alt='UH1' src='UH2-banner-640x640.webp' width={1920} height={768}></Image>
                </section>
                <HummingProbePH/>
                <section className="section_special section">
                    <div className="container mt-[40px] lg:px-10 xl:px-20 mx-auto ">
                        <h2 className="w-4/5 md:w-2/3  text-center mx-auto ">What makes the Humming Probe special
                            <br />in addition to being free of calibration?
</h2>
                        <div className="bottom  mt-[20px] flex flex-col  md:flex-row fjustify-start items-start">
                            <div className="left md:w-[80%] xl:w-1/2">
                                <Image loader={myLoader} alt="IMG" src='UH2-1.webp' className="rounded-2xl" placeholder="empty" loading='lazy' width={800} height={800}></Image>

                            </div>
                            <div className="right  md:w-[80%] xl:w-1/2">
                                <div className="top px-[27px]  py-[70px]  rounded-2xl p-5 bg-orange-500 ml-0 md:ml-4">
                                    <b className="text-white text-[20px]">The industry's minimum sample usage

                                    </b>
                                    <br />
                                    <b>UH2 electrode size is reduced to 2mm

                                        Sample requirements can be reduced to 1 microliters
</b>
                                    <p className="mt-3 text-[14px]">Biological samples such as blood, saliva, cerebrospinal fluid, tissue fluid, etc…cannot be sampled in large quantities. Usually such small quantities of samples require the purchase of expensive ultra-small glass electrodes of pH meter to complete the test. UH2 can detected samples with no damage to the specimen and no pretreatment required.

                                    </p>

                                </div>
                                <div className="bottom flex ml-2 flex-col md:flex-row justify-start items-start">
                                    <div className="left w-full md:w-1/2">
                                        <Image 
                                            loader={myLoader} 
                                            alt="Calibration-free ultramicro disposable pH electrode/Humming Probe pH electrode can be used in living body detection /Humming Probe UH2/UltraE"
                                            placeholder="empty" loading="lazy" height={550} width={550} src='UH2-01.webp'></Image>
                                        <p className="text-center">Living body (fish blood) detection



</p>
                                    </div>
                                    <div className="right w-full  md:w-1/2">
                                        <Image 
                                            alt="Calibration-free ultramicro disposable pH electrode/Humming Probe pH electrode can be used in body fluid detection/Humming Probe UH2/UltraE"
                                        loader={myLoader01}
                                            placeholder="empty" loading="lazy" width={550} height={550} src='UH1-31.webp'></Image>
                                        <p className="text-center">Body fluid (perspiration) detection





                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="container mt-[40px] lg:px-10 xl:px-20 mx-auto  ">

                        <div className="bottom flex flex-col  md:flex-row fjustify-start items-start">
                            <div className="right p-0 md:w-[80%] xl:w-1/2">
                                <div className="top  mr-2 px-[27px]  py-[70px]  rounded-2xl p-5 bg-orange-500">
                                    <b className="text-white text-[20px]">Disposable design and single use pH sensor, broaden the application in various fields


                                    </b>
                                    <br />

                                    <p className="mt-3 text-[14px]">A brand-new test strip can be taken from the vial for each use and requires no time-consuming cleaning or maintenance after testing. For viscous or easily adsorbed samples or in combination with various special treatments, it breaks through the limitations of traditional glass electrodes and provides you with more applications.




                                    </p>

                                </div>
                                <div className="bottom flex flex-col md:flex-row justify-center items-center">
                                    <div className="left w-full md:w-1/2">
                                        <Image 
                                            alt="Special treatment such as sterilization and inactivation can be carried out to test culture medium pH value by the calibration-free micro disposable pH electrode/Humming Probe pH electrode/Humming Probe UH1/UltraE"
                                            loader={myLoader01} placeholder="empty" loading="lazy" height={550} width={550} src='UH1-03.webp'></Image>
                                        <p className="text-center">Allows special treatment such as sterilization and inactivation


</p>
                                    </div>
                                    <div className="right w-full  md:w-1/2">
                                        <Image 
                                        loader={myLoader01}
                                            alt="Calibration-free ultramicro disposable pH electrode/Humming Probe pH electrode can be used in viscous samples that are difficult to clean up/Humming Probe UH2/UltraE"
                                            placeholder="empty" loading="lazy" width={550} height={550} src='UH1-04.webp'></Image>
                                        <p className="text-center">Test viscous samples that are difficult to clean up</p>
                                    </div>
                                </div>

                            </div>

                            <div className="left ml-0  md:ml-3 md:w-[80%] xl:w-1/2">
                                <Image alt="Calibration-free ultramicro disposable pH electrode/Humming Probe pH electrode can be used in viscous samples detection and will not contaminate the pores of the pH electrode surface /Humming Probe UH2/UltraE" src='UH2-02-拋棄式720x540.webp' className="rounded-2xl" placeholder="empty" loading='lazy' loader={myLoader} width={800} height={800}></Image>

                            </div>

                        </div>

                    </div>
                </section>
                <section className="section  md:px-[100px] xl:px-0 ">
                    <div className="card-wrap  justify-center flex flex-wrap ">
                        <div className="card shadow-xl  md:m-3 overflow-hidden border rounded-2xl w-full md:w-[340px] p-6">
                            <div className="txt ">
                                <b className="text-[18px] text-center font-black">Disposable Design


                                </b>
                                

                                <ReadMoreReact text="We provide high precision pH measurement. The values can be displayed to 0.01, and the accuracy can reach ±0.1 pH. Testing pH values from 0 to 14 can be satisfied.
"
                                    min={40}
                                    ideal={60}
                                    max={100}
                                    readMoreText="...." />
                            </div>
                            <div className="img">
                                <Image  loader={myLoader} width={400} alt='便於攜帶' className="rounded-2xl mt-3" height={400} src='UH2-3-正精確720x540.webp' placeholder="empty" loading='lazy'></Image>
                            </div>
                        </div>
                        <div className="card  shadow-xl md:m-3 overflow-hidden border rounded-2xl w-full md:w-[340px] p-6">
                            <div className="txt">
                                <b className="text-[18px] text-center font-black">Slim detection electrode design

                                </b>
                            

                                <ReadMoreReact text="The slim electrode design is convenient to be put in narrow channels, sampling ports, or inserted into living organisms.
"
                                    min={40}
                                    ideal={60}
                                    max={100}
                                    readMoreText="...." />
                            </div>
                            <div className="img">
                                <Image width={400} alt='便於攜帶' className="rounded-2xl mt-3" height={400} src='UH1-20-不使用液體的內參比電極720x540.webp' placeholder="empty" loading='lazy' loader={myLoader}></Image>
                            </div>
                        </div>
                        <div className="card shadow-xl md:m-3 overflow-hidden border rounded-2xl  w-full md:w-[340px] p-6">
                            <div className="txt ">
                                <b className="text-[18px] text-center font-black">Portable and easy storage

                                </b>
                                <p className="text-normal text-[14px]"></p>

                                <ReadMoreReact text="The thickness of traditional glass electrode’s glass film is only 0.1-0.3mm, so it is easy to break. For storage, it needs to be continuously immersed in liquid storage solution, so special care is needed for carrying. The special design of the Humming Probe does not contain any filling liquid. Small size, portable, just put it in the vial with a tight lid, suitable for mobile outdoor testing environment.
"
                                    min={80}
                                    ideal={120}
                                    max={160}
                                    readMoreText="...." />
                            </div>
                            <div className="img">
                                <Image loader={myLoader01} width={400} alt='便於攜帶' className="rounded-2xl mt-3" height={400} src='便於攜帶和保存-720x540.webp' placeholder="empty" loading='lazy'></Image>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="section">
                    <div className="container mx-auto ">
                        <div className="section_table flex flex-col justify-center items-center" >
                            <h2 className="w-full md:w-1/2 ">How accurate is the Humming Probe pH Measurement System?

                            </h2>

                            <b className="text-[14px] w-full md:w-1/2 mt-[20px] mb-3 text-center text-gray-700 font-light">Compare the measured data with the NIST standard pH buffer value, and obtain the correlation coefficient according to the linear regression equation

</b>
                            <div className="wrap">

                            </div>
                        </div>



                        <div className="wrap p-0   xl:px-[200px] md:px-[60px] px-0" >
                            <Table aria-label="Example w-full md:w-[80%] lg:w-[70%]  static collection table">
                                <TableHeader>
                                    <TableColumn className="bg-orange-500 text-white">NIST standard pH buffer	</TableColumn>
                                    <TableColumn className="bg-orange-500 text-white">2	</TableColumn>
                                    <TableColumn className="bg-orange-500 text-white">7</TableColumn>
                                    <TableColumn className="bg-orange-500 text-white">12</TableColumn>
                                </TableHeader>
                                <TableBody>
                                    <TableRow key="1">
                                        <TableCell>Sampling number	</TableCell>
                                        <TableCell>10</TableCell>
                                        <TableCell>10</TableCell>
                                        <TableCell>10</TableCell>
                                    </TableRow>
                                    <TableRow key="2">
                                        <TableCell >AVG(pH)	</TableCell>
                                        <TableCell>1.99	</TableCell>
                                        <TableCell>6.99	</TableCell>
                                        <TableCell>11.97	</TableCell>
                                    </TableRow>
                                    <TableRow key="3">
                                        <TableCell >SD(pH)	</TableCell>
                                        <TableCell>0.01 </TableCell>
                                        <TableCell>0.02</TableCell>
                                        <TableCell>0.03</TableCell>
                                    </TableRow>
                                    <TableRow key="4">
                                        <TableCell >CV(%)		</TableCell>
                                        <TableCell>0.75%</TableCell>
                                        <TableCell>0.35%</TableCell>
                                        <TableCell>0.26%</TableCell>
                                    </TableRow>
                                    <TableRow key="5">
                                        <TableCell >Accuracy Rrange(pH)		</TableCell>
                                        <TableCell>0.05</TableCell>
                                        <TableCell>0.08</TableCell>
                                        <TableCell>0.09</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </div>

                    <div className="bottom-table px-0 lg:px-[60px]  mt-5 w-full flex flex-col  justify-center items-center lg:flex-row ">
                        <div className="left pl-0 md:pl-[50px] xl:pl-[180px]  flex justify-center  items-center w-full lg:w-1/2   ">
                            <div className=" w-full  px-0 md:px-10">
                                <Table aria-label="Example  static collection table">
                                    <TableHeader className="bg-none">
                                        <TableColumn colSpan={5} className=" border-b-black bg-white  border-b-2  text-center font-extrabold text-gray-800 text-[18px]">	Compare the measured data of UH1 <br />with the NIST pH buffer value


                                        </TableColumn>
                                        <TableColumn className="bg-white">	</TableColumn>

                                    </TableHeader>
                                    <TableBody>
                                        <TableRow key="1">
                                            <TableCell className="">Measurement range:			</TableCell>
                                            <TableCell>pH0 - 14*
                                            </TableCell>

                                        </TableRow>
                                        <TableRow key="2">
                                            <TableCell >Slope:			</TableCell>
                                            <TableCell>	1.0029
                                            </TableCell>

                                        </TableRow>
                                        <TableRow key="3">
                                            <TableCell >Intercept:		</TableCell>
                                            <TableCell>-0.0521
                                            </TableCell>

                                        </TableRow>
                                        <TableRow key="4">
                                            <TableCell >Correlation coefficient:				</TableCell>
                                            <TableCell>0.9999
                                            </TableCell>

                                        </TableRow>

                                    </TableBody>
                                </Table>
                                <p className="text-[14px] mt-1">*pH 0 solution is 1.0 M HCl solution

                                </p>
                                <p className="text-[14px] mt-1">pH 14 solution is 1.0 M NaOH solution SGS

                                </p>

                            </div>

                        </div>
                        <div className="right w-full  md:justify-start md:items-start justify-center items-center  mt-3 md:mt-0 lg:w-1/2 flex  ">
                            <Image alt="IMG" width={400} height={300} loader={myLoader04} src='form-02.webp' loading="lazy" ></Image>
                        </div>
                    </div>


                </section>
                <section className="p-0 mt-[50px]">
                    <div className="card-wrap justify-center flex flex-wrap ">
                        <div className="card shadow-xl  md:m-3 overflow-hidden border rounded-2xl w-[340px] p-6">
                            <div className="txt h-[70px]">
                                <p className="text-[18px] text-center font-black">Linearity



                                </p>
                                <p className="text-normal text-center text-[14px] ">Linearity</p>
                            </div>
                            <div className="img">
                                <Image loader={myLoader01} width={400} alt='便於攜帶' className="rounded-2xl mt-3" height={400} src='線性關係.webp' placeholder="empty" loading='lazy'></Image>
                            </div>
                        </div>
                        <div className="card  shadow-xl md:m-3 overflow-hidden border rounded-2xl w-[340px] p-6">
                            <div className="txt h-[70px]">
                                <p className="text-[18px] text-center font-black">Precision


                                </p>
                                <p className="text-normal text-[14px] text-center ">Precision</p>
                            </div>
                            <div className="img">
                                <Image loader={myLoader} width={400} alt='便於攜帶' className="rounded-2xl mt-3" height={400} src='精密度.webp' placeholder="empty" loading='lazy'></Image>
                            </div>
                        </div>
                        <div className="card shadow-xl md:m-3 overflow-hidden border rounded-2xl w-[340px] p-6">
                            <div className="txt h-[70px]">
                                <p className="text-[18px] text-center   font-black">Accuracy
                                </p>
                                <p className="text-normal text-center text-[14px]">Accuracy</p>
                            </div>
                            <div className="img">
                                <Image loader={myLoader} width={400} alt='便於攜帶' className="rounded-2xl mt-3" height={400} src='精確度.webp' placeholder="empty" loading='lazy'></Image>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="section md:px-0  px-[30px]">
                    <div className="section_SSG">
                        <div className="container flex flex-col  sm:flex-row justify-center  mx-auto  w-full  xl:w-[80%]">
                            <div className="left flex flex-col justify-center items-center m-3 border rounded-2xl p-10 w-full xl:w-1/2">
                                <Image   loader={myLoader02} placeholder="empty" loading="lazy" alt="ISO 認證標籤" src='ISO-LOGO.png' width={600} height={600} className="rounded-2xl md:w-full lg:w-2/3 " />
                                <div className="txt font-normal text-[14px] text-center">
                                    In terms of quality control, the production of all test strips and instruments is performed by UltraE. In addition to accurately mastering the production technology, we also control the product quality throughout the process. The test strips start from the raw material, through the substrate bare chip printing, to the high polymer film process and temperature sensor assembly process, and follows 100% full inspection process to ensure product stability. We are also officially ISO 9001:2015 certified, assuring our partners of quality and standardized processes.


                                </div>
                                <div href="" className="bg-orange-500 rounded-full w-[220px] text-center px-4 py-2  mt-3 text-white ">ISO Certification
</div>

                            </div>
                            <div className="right m-3 flex flex-col justify-center border rounded-2xl  p-10 items-center w-full xl:w-1/2">
                                <Image loader={myLoader04} placeholder="empty" loading="lazy" alt="SGS 實驗室測試報告" src='SGS-big.webp'  width={400} height={700} className="rounded-2xl md:w-full lg:w-2/3 " />
                                <div href="" className="bg-orange-500 rounded-full w-[220px] text-center px-4 py-2  text-white mt-3">SGS Laboratory Test Report
</div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='hidden'>
                    <div className="section_brand">
                        <div className="container">
                            <h2 className="text-center w-2/3">Trusted by precision laboratory in universities and enterprises
                            </h2>
                            <div className="marqee">
                                <div className="relative flex overflow-x-hidden">
                                    <div className="py-12 animate-marquee whitespace-nowrap">
                                        <span className="mx-4 text-4xl">Marquee Item 1</span>
                                        <span className="mx-4 text-4xl">Marquee Item 2</span>
                                        <span className="mx-4 text-4xl">Marquee Item 3</span>
                                        <span className="mx-4 text-4xl">Marquee Item 4</span>
                                        <span className="mx-4 text-4xl">Marquee Item 5</span>
                                    </div>

                                    <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                                        <span className="mx-4 text-4xl">Marquee Item 1</span>
                                        <span className="mx-4 text-4xl">Marquee Item 2</span>
                                        <span className="mx-4 text-4xl">Marquee Item 3</span>
                                        <span className="mx-4 text-4xl">Marquee Item 4</span>
                                        <span className="mx-4 text-4xl">Marquee Item 5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <div className="row">
                            <h2 className="text=[26px]">Trusted by precision laboratory in universities and enterprises
                            </h2>
                        </div>
                        <div className="row ">
                            <Marquee>
                                <div className="img mx-4">
                                    <Image loader={myLoader03} placeholder='empty' width={150} height={30} alt="IMG" src='brand-08.png' />
                                </div>
                                <div className="img mx-4">
                                    <Image loader={myLoader03} placeholder='empty' width={150} height={30} alt="IMG" src='brand-09.png' />
                                </div>
                                <div className="img mx-4">
                                    <Image loader={myLoader03} placeholder='empty' width={150} height={30} alt="IMG" src='brand-03.png' />
                                </div>
                                <div className="img mx-4">
                                    <Image loader={myLoader03} placeholder='empty' width={150} height={30} alt="IMG" src='brand-01.png' />
                                </div>
                                <div className="img mx-4">
                                    <Image loader={myLoader03} placeholder='empty' width={150} height={30} alt="IMG" src='brand-02.png' />
                                </div>
                                <div className="img mx-4">
                                    <Image loader={myLoader03} placeholder='empty' width={150} height={30} alt="IMG" src='brand-03.png' />
                                </div>
                                <div className="img mx-4">
                                    <Image loader={myLoader03} placeholder='empty' width={150} height={30} alt="IMG" src='brand-12.png' />
                                </div>
                                <div className="img mx-4">
                                    <Image loader={myLoader03} placeholder='empty' width={150} height={30} alt="IMG" src='brand-07.png' />
                                </div>
                                <div className="img mx-4">
                                    <Image loader={myLoader03} placeholder='empty' width={150} height={30} alt="IMG" src='brand-04.png' />
                                </div>
                            </Marquee>
                        </div>


                    </div>
                </section>


                <section className="section">
                    <div className="container w-full xl:w-[1000px]  ">
                        <h2>How to use the Humming Probe <br/> pH Measurement System?

                        </h2>
                        <p className="w-full px-[20px] md:px-0 md:w-3/4 text-center mx-auto">All products are calibrated and inspected using NIST traceability standards before leaving the factory, and each batch of calibration information is printed as QR code on the cap of the vial. Scan the QR Code when using the strip for the first time to load the technical parameter of the pH strip into the meter, and then the pH measurement can be performed directly. Unlike traditional glass electric appliances, the Humming Probe is extremely convenient, not requiring traditional and complicated calibration steps.

</p>
                        <div className="grid  mt-[20px] px-0 md:px-[50px] md: grid-cols-1 md:grid-cols-3">
                            <div className="mr-0 flex justify-center items-center flex-col md:mr-[15px]">
                                <Image alt='The instructions of the calibration-free ultramicro disposable pH electrode/Humming Probe pH electrode /Humming Probe UH2/UltraE
' loader={myLoader} src='UH2-07-商品1000x1000.webp' placeholder="empty" loading="lazy" width={400} height={400}></Image>
                                <b className="text-center mt-3 md:mb-0">Take the pH strip electrode out from the vial.


                                </b>
                            </div>
                            <div className="mt-4 flex justify-center items-center flex-col md:mt-0 mr-0 md:mr-[15px]">
                                <Image loader={myLoader} src='UH2-4-一滴量測1000x1000.webp' alt='The instructions of the calibration-free ultramicro disposable pH electrode/Humming Probe pH electrode /Humming Probe UH2/UltraE' placeholder="empty" loading="lazy" width={400} height={400}></Image>
                                <b className="mt-3">Measuring method 1



                                </b>
                                <br></br>
                                <b className="text-center mb-3 md:mb-0 text-[16px]">Test by directly dropping samples onto the strip

</b>




                            </div>
                            <div className="mt-4 md:mt-0 flex justify-center items-center flex-col">
                                <Image loader={myLoader} src='UH2-06-搭配UX100-1000x1000.webp' placeholder="empty" loading="lazy" alt='The instructions of the calibration-free ultramicro disposable pH electrode/Humming Probe pH electrode /Humming Probe UH2/UltraE' width={400} height={400}></Image>
                                <b className="mt-3">Measuring method 2



                                </b>
                                <br></br>
                                <b className="mb-3 md:mb-0">Put the pH strip electrode into the sample solution.



                                </b>
                            </div>

                        </div>

                    </div>
                </section>
                <WhenUse/>

                <FindSPE/>
                <section className="p-0 m-0">
                    <div className="Container ">
                        <div className="grid grid-cols-1">

                            <div className="row">
                                {/* <ModalBtn /> */}

                                {/* <div className="relative w-full border">
                                           

                                            <Image placeholder="empty" loading="lazy" alt="running people" src='/UX100-1920X768-促銷活動-01-2_mocojp.webp' width={1920} height={600}  />




                                        </div> */}






                            </div>



                        </div>
                    </div>
                </section>
                <section className="section_double section">
                    {/* <Double/> */}
                </section>
                <section className="section">
                    <div className="Container  md:px-20">
                        <div className="grid grid-cols-1">
                            <div className="row  flex items-center flex-col  justify-center">
                           


                                <h2 className="text-[32px]">UH2 pH Strip Electrode

                                        </h2>

                                 

                                <a href='https://www.ultraehp.com/images/DM/UltraE-DM-en.pdf'

                                    className="rounded-full w-[150px] mx-auto  text-center bg-orange-500 font-black text-white py-2 px-4 mx-auto mb-[50px]">
                                            DM Download
                                        </a>
                               


                            </div>
                            <div className="row">
                                {/* <motion.div className="card"
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.3 }}
                                >

                                    <motion.h2
                                        className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                        variants={ImageAnimate}
                                    > */}


                                        <div className="grid grid-cols-1 lg:grid-cols-2">
                                            <div className="p-0 xl:p-10 items-center md:items-end flex flex-col">

                                        <Image loader={myLoader} src='尺寸-UH2.png' loading='lazy' placeholder="empty" className=" w-full" alt='UX100_酸鹼檢測器-尺寸圖' width={600} height={600}></Image>

                                            </div>
                                            <div>


                                                <div className="flex w-full flex-col">
                                                    <Tabs aria-label="Options">
                                                <Tab key="UH2 pH Strip Electrode
" title="UH2 pH Strip Electrode
">
                                                            <Card>
                                                                <CardBody>
                                                                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                                                                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                                                                            <tbody>
                                                                                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                Range:	
                                                                                    </th>
                                                                                    <td className="px-6 py-4">
                                                                                pH 0 - 14

                                                                                    </td>


                                                                                </tr>
                                                                                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                     Accuracy:	                                                                                   </th>
                                                                                    <td className="px-6 py-4">
                                                                                ± 0.1 pH
                                                                                    </td>


                                                                                </tr>
                                                                                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                Minimum Sample<br /> volume:	
                                                                                    </th>
                                                                                    <td className="px-6 py-4">
                                                                                1 - 2μL

                                                                                    </td>



                                                                                </tr>
                                                                                                                                       <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                Sample <br />temperature:	                                                                                    </th>
                                                                                    <td className="px-6 py-4">
                                                                                10 - 40℃

                                                                                    </td>


                                                                                </tr>
                                                                                <tr>
                                                                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                Dimension<br /> (W x L x T ):	
                                                                                    </th>
                                                                                    <td className="px-6 py-4">
                                                                                12.6 x 50.0 x 1.0 mm
                                                                                    </td>

                                                                                </tr>


                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </CardBody>
                                                            </Card>
                                                        </Tab>



                                                    </Tabs>
                                            <p className="text-[14px] text-left">Note:The pH Test Strip Electrode should always be capped and stored in the vial and only to be taken out when using. Each vial contains 25 pieces of pH test strip electrodes, and each box contains 2 vials.



</p>
                                                </div>





                                            </div>

                                        </div>






{/* 

                                    </motion.h2>


                                </motion.div> */}



                            </div>



                        </div>
                    </div>
                </section>

                <section className="section px-5">
                    <div className="Container mb-6 md:mb-0 md:px-20">

                        <div className="flex sm:flex-row flex-col justify-center items-center">
                            <div className="mt-4  mx-3 w-full  md:w-2/3">
                                <ModalBtn05 />
                            </div>

                        </div>
                    </div>
                </section>

                {/* <ReactSlick /> */}
                <section className="section_others section hidden md:block">
                    <div className="Container">

                        <div className="grid grid-cols-1">
                            <div className="row  flex items-center flex-col  justify-center">

                                {/* <motion.div className="card"
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ staggerChildren: 0.3 }}
                        >

                            <motion.h2
                                className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                variants={textAnimate}
                            > About Helicobacter pylori</motion.h2>


                        </motion.div> */}


                                <motion.div className="card"
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.3 }}
                                >

                                    <motion.h2
                                        className="text-center mb-4 text-[26px] font-extrabold  tracking-tight text-gray-900 md:text-[30px] lg:text-[32px] lg:leading-loose  dark:text-white"
                                        variants={title01}
                                    >You May Also Like

                                        <h2 className="text-black">
                                        </h2>
                                        <p className="text-lg text-gray-800 md:w-2/3 w-full mx-auto">Others Products
                                        </p>

                                    </motion.h2>



                                    <motion.p
                                        className="text-m "
                                        variants={title02}
                                    >


                                        {/* 
                                        <div className="w-full border flex justify-center">
                                            <a href="https://www.ultraehp.com/ultrapeace" className="text-grey-400 text-center mx-auto">read more → </a>
                                        </div> */}


                                    </motion.p>


                                </motion.div>


                                <motion.p
                                    className="text-m "
                                    variants={title03}
                                >

                                </motion.p>


                            </div>
                            <div className="row  sm:px-[30px] xl:px-[80px]">
                                <motion.div className="card"
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.3 }}
                                >

                                    <motion.h2
                                        className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                        variants={ImageAnimate}
                                    >



                                        <OthersProducts />










                                    </motion.h2>


                                </motion.div>



                            </div>



                        </div>
                    </div>
                </section>




            </div>




        </motion.div>

    </div>

);


// Product.getInitialProps = async function (context) {
//     const { id } = context.query;
//     const res = await fetch(
//         `https://my-json-server.typicode.com/bob1127/next/products/${id}`
//     );
//     const product = await res.json();
//     return { product };


// };

export default Product;
