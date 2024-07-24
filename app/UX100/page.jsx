"use client"
// import fetch from "isomorphic-unfetch";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from 'next/image';
import YouTubePlayer from '../../components/VideoPlayer/UX100en.jsx';

// import img05 from 'https://www.ultraehp.com/images/Products-Detail-Img/UP100/up111111.png'
import { DefaultSeo } from 'next-seo';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import TextScroll from '../../components/textScroll/TextScroll01.jsx';
import { Card, CardHeader, CardBody, Tooltip, Button } from "@nextui-org/react";
// import AnimatedTabs from '../../components/TabLink/index.jsx'
import CelebrateBTN from '../../components/CelebrateBtn/index.jsx';
// import 'cloudinary-video-player/cld-video-player.min.css';
import { card, CardFooter } from '@nextui-org/react';
// import MobileMenu from '../../components/mobileMenu/index.jsx'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import OthersProducts from '../../components/ReactSlick/ImageSlider2.jsx'
import SwiperSliders from '../../components/SwiperSliders/page.jsx'
import { Tabs, Tab } from "@nextui-org/react";
import { Table } from "@nextui-org/react";
import { useState } from "react";
// import Head from "next/head";
import CarouselThumbs from "../../components/CarouselThumbs.js";

import SwiperSlider from '../../components/SwiperSliders/UX100Slider-en.jsx'
import { AdvancedVideo, lazyload, accessibility, responsive, placeholder } from "@cloudinary/react";
import { CldImage } from 'next-cloudinary';
import HeroImg from '../../public/images/7.jpg'
import Carousel from "../../components/Products/ProductCarouselUX200.jsx";

import JsonLd from '../../components/JsonLd.jsx';
import Navigation from "../../components/Products/Navigation.jsx";

import ModalBtn from "../../components/ModalBtn-1.jsx"
import ModalBtn01 from "../../components/ModalBtn-3.jsx"
import ModalBtn05 from "../../components/ModalBtn-5.jsx"
import ModalBtn04 from "../../components/ModalBtn-4.jsx"
import ModalBtn02 from "../../components/ModalBtn-2.jsx"
import FindSPE from '../../components/FindSPE.jsx'
import WhenUse from '../../components/WhenUse.jsx'

import { Cloudinary } from "@cloudinary/url-gen";
const cld = new Cloudinary({
    cloud: {
        cloudName: 'ducasbzsc'
    }
})

const myLoader = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UX200/${src}?w=${width}?p=${placeholder}`
}
const myLoader001 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}?p=${placeholder}`
}
const myLoader01 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UX100/${src}?w=${width}?p=${placeholder}`
}
const myLoader02 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/product-01/${src}?w=${width}?p=${placeholder}`
}
const myLoader05 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/nav/${src}?w=${width}?p=${placeholder}`
}
const myLoader03 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/index/${src}?w=${width}?p=${placeholder}`
}
const myLoader04 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UH-1/${src}?w=${width}?p=${placeholder}`
}




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

const gallery = [
    { id: 1, imgUrl: "/images/Bed-1.webp" },
    { id: 2, imgUrl: "/images/Bed-2.webp" },
    { id: 3, imgUrl: "/images/Bed-3.webp" },
    { id: 4, imgUrl: "/images/Oak.webp" },
];



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


const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
};
const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
};






const ProductPost = {
    title: 'Humming Probe UX100',
    description: "The world's pioneer for calibration - free pH measurement, innovatively integrating the principle of electrode measurement on a single test strip electrode for pH measuring",
    image: "https://www.ultraehp.com/images/Products-Detail-Img/UH-1/UH1-02.webp",
    positive01: "Accurate, calibration-free, ready-to-use",
    positive02: "Accuracy can reach ±0.1 pH",
    positive03: "Disposable to avoid sample cross-contamination",
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
        <link rel="alternate" href="https://www.ultraehp.com/hummingprobe/UX100.html" hreflang="zh-Hant" />
        <link rel="alternate" href="https://www.ultraehp.com/hummingprobe/en/UX100.html" hreflang="en" />

        {/*metadata */}
        <title>Calibration-free micro disposable｜pH meter｜acid-base detector - UX100

</title>
        <meta key="description" name="description" content="Calibration-free micro disposable pH meter acid-base detector UX100 with a disposable electrode only requires ultra small sample requirements, and can complete the acid-base test without pH standard solution calibration. Suitable for very precious samples and easily contaminated or passivated pH electrode surfaces and special samples. Can be held with one hand, touch screen, intuitive operation, and suitable for outdoor use without power supply. pH sensor/pH measurement system/pH meter/pH indicator/pH detector/pH value detector/portable pH meter/desktop pH meter/pH meter/pH electrode/pH meter/acid-base test/ pH test" />

        <meta name="keywords" content="pH detector/pH value detector/portable pH meter/desktop pH meter/pH meter/pH electrode/pH meter/acid-base test/ pH test"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
        {/* OG metadata */}
        <meta property="og:url" content="https://www.ultraehp.com/hummingprobe/UX100.html" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Calibration-free micro disposable｜pH meter｜acid-base detector - UX100" />
        <meta property="og:description" content="Calibration-free micro disposable pH meter acid-base detector UX100 with a disposable electrode only requires ultra small sample requirements, and can complete the acid-base test without pH standard solution calibration. Suitable for very precious samples and easily contaminated or passivated pH electrode surfaces and special samples. Can be held with one hand, touch screen, intuitive operation, and suitable for outdoor use without power supply. pH sensor/pH measurement system/pH meter/pH indicator/pH detector/pH value detector/portable pH meter/desktop pH meter/pH meter/pH electrode/pH meter/acid-base test/ pH test" />
        <meta property="og:image" content="https://www.ultraehp.com//images/Products-Detail-Img/UX100/UX100.webp" />


       

        {/* 
        <AnimatedTabs /> */}
        {/* <MobileMenu/> */}

        {/* 
          <div className="flex justify-center items-center">
            <CardSlider/>
          </div> */}
        <div>
            {/* <div className='h-[100vh] items-center flex justify-center bg-black'>
               
            </div> */}

            {/* <p>{ProductPost.description}</p>
            <p className="hidden">Date Published: {ProductPost.datePublished}</p>
           
            <img src={ProductPost.image} alt={ProductPost.title} /> */}

            {/* JSON-LD for Blog Post */}

            {/* 結構化資料 UX100 */}


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





        <motion.div className="dark:bg-black bg-gray-100 " initial='initial' animate='animate' exit={{ opacity: 0 }}>
            <div className="fixed mobile-lang w-full top-[10px] pr-6 md:hidden flex justify-end mx-auto z-[99999] ">
                <a href="https://www.ultraehp.com/hummingprobe/UX100.html">
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
                            <a className='w-full block' href="https://www.ultraehp.com/hummingprobe/en/UX100.html">English</a>
                        </DropdownItem>
                        <DropdownItem key="new">
                            <a className='w-full block' href="https://www.ultraehp.com/hummingprobe/UX100.html">繁體中文</a>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>


            </div>
            <Navigation />
            <div className='fullscreen relative pt-[60px]'>
                <Image loader={myLoader001} src='company-logo.webp' width={160} loading='lazy' placeholder='empty' className="fixed mt-2 ml-[20px] md:ml-[90px] z-[999] top-[60px] left-10" alt='UltraP-logo' height={60}></Image> 

                <section className="section   mt-0 md:mt-[150px]">
                    <div className="Navgation mb-[30px] pl-0 hidden md:block lg:pl-[150px]"> <a href="https://www.ultraehp.com/hummingprobe/en/" className="hover:font-bold">Home</a> / <a className="hover: font-bold " href='#'>Humming Probe UX100
                        </a> </div>
                    <div className="container w-full flex px-[0px] md:px-[20px] xl:px-[70px] flex-col md:flex-row justify-start items-start">
                        <div className="left   w-full md:w-1/2">
                            <SwiperSlider />



                        </div>

                        {/* <div className="block md:hidden left border border-black w-full md:w-1/2">
                            
                            <SlickCarousel/>
                    </div>  */}
                        <div className="right flex justify-center  md:justify-between  md:pl-[50px] xl:pl-[80px] w-full md:w-1/2 flex-col  h-[480px]">
                            <div className="txt">
                                <h1 className="h1-u md:mt-0 mt-[115px]">Humming Probe UX100
                                  <br/>  CALIBRATION-FREE pH METER</h1>
                                <h2 className="model-u">pH meter/pH Measurement system

                                </h2>
                                <p className="text-middle-u">Compatible with a full range of world's first calibration-free pH strip electrodes


                                </p>
                                <ul>
                                    <li>・4.3” Color Touchscreen

                                    </li>
                                    <li>・Algorithm automatic end point judgment

                                    </li>
                                    <li>・Waterproof: IP54

                                    </li>
                                    <li>・Dual Mode Inspection Design

                                    </li>
                                    <li>・Built-In 5M Pixels Camera, recordable and editable data


                                    </li>
                                    <li>・Anti-slip Leather Pattern Design


                                    </li>
                                    <li>・Built-In Adjustable Stand



                                    </li>
                                </ul>
                            </div>
                            <div className="btn-wrap">

                                <div className="w-full xl:w-3/4 flex flex-col md:flex-row">
                                    <ModalBtn02 />
                                </div>



                            </div>
                        </div>
                    </div>
                </section>


            </div>


            <div className="content-bottom">

                
                <section className="section_description   m-0 p-0 flex justify-center">

                    <div className="container w-full md:w-4/5 lg:w-2/3   ">
                        <div className="row">

                            <h2 className="h2-u">Product</h2>
                            <p>Description</p>

                        </div>
                        <div className="row flex justify-center ">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div>
                                    <Image src='UX100-Unboxing.webp' loader={myLoader01} width={600} height={600} placeholder="empty" alt='The unboxing & the contents of the calibration-free micro disposable pH meter/pH measurement system/Humming Probe UX100/UltraE ' loading="lazy"></Image>
                                </div>
                                <div className="flex justify-center pl-[30px] items-center">
                                   <div>
                                        <h4 className="h3-u text-left">What's Include ?


                                        </h4>
                                        <ul>
                                            <li>1.UX100: pH measurement meter (1 unit)

                                            </li>
                                            <li>2.UH1: pH test strip electrode (10 pcs in a vial)

                                            </li>
                                            <li>3.Strip extended connection cable (1 pc)

                                            </li>
                                            <li>4.Charger (1 pc)

                                            </li>
                                            <li>5.Micro USB cable for charging and data transfer. (1 pc)
                                            </li>

                                            <li>6.Brief user manual


                                            </li>
                                            <li>7.User manual is built inside the meter storage <br/> and can be copied to computer for reading.

                                            </li>
                                        </ul>
                                   </div>
                                </div>

                            </div>


                          

                        </div>










                    </div>
                </section>




                <section className="section_Appearance    m-0 p-0 flex justify-center">

                    <div className="container w-full md:w-4/5 lg:w-2/3   ">
                        <div className="row flex flex-col justify-center items-center mb-0  md:mb-5">

                            <h2 className="h2-u">Product 
</h2>
                            <p>Appearance</p>

                        </div>
                        <div className="row flex px-[20px] md:px-0 justify-center ">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div>
                                    <Image src='/UX100-en-2.webp' placeholder="empty" width={650} height={400} loading="lazy" loader={myLoader01} alt='The introduction of the dimension and the interfaces of the calibration-free micro disposable pH meter/pH measurement system/ Humming Probe UX100/UltraE  '></Image>

                                </div>
                                <div>
                                    <Image src='UX100-13-產品說明-機身en-720x540_工作區域 1 2.webp' placeholder="empty" width={650} height={400} loading="lazy" loader={myLoader01} alt='The introduction of the dimension and the interfaces of the calibration-free micro disposable pH meter/pH measurement system/ Humming Probe UX100/UltraE  '></Image>

                                </div>

                            </div>
                            </div>
                      








                    </div>
                </section>



               <section className="section-video">
                    <div className="container px-[15px] flex  2xl:w-[60%] xl:w-[65%] md:w-[80%] w-full mx-auto flex-col justify-center items-center">
                        <div className="row flex flex-col justify-center items-center mb-0  md:mb-5">

                            <h2 className="h2
                            -u">Operation</h2>

                            <a href='https://www.youtube.com/watch?v=Ur5FsgcG-HI&feature=youtu.be'>
                            <div className="rounded-[40px] bg-[#01a5d3] flex justify-center items-center py-2 text-white w-[150px]">
                              YouTube Video
                                </div></a>

                        </div>
                        <div>

                            <YouTubePlayer />
                        </div>
                    </div>
                </section>


{/*                 
                <section className="section_video01 section  m-0 p-0 flex justify-center">

                    <div className="container w-full md:w-4/5 lg:w-2/3   ">
                        <div className="row flex flex-col justify-center items-center mb-0  md:mb-5">

                            <h2 className="">Introduction video
</h2>
                            <p>Operation</p>

                        </div>
                        <div className="row flex justify-center ">


                            <AdvancedVideo poster='https://www.ultraehp.com/images/Ultra Video/UX100/中文版/YouTube-UX100-中文.webp' plugins={[lazyload({ rootMargin: '10px 20px 10px 30px', threshold: 0.25 })]} className='rounded-2xl' preload="flase" controls width={1000} height={600} cldVid={cld.video('/UX100Video/UX100中文版_fhhsj1')} /> 

                        </div>










                    </div>
                </section> */}

                <section className="">
                    <div className="container  px-5 lg:px-[50px] xl:px-[100px]">
                        <div className="row flex mt-5 sm:mt-4 md:mt-0 flex-col md:flex-row  justify-center  w-full">
                            <div className="right mt-3 md:mt-0 flex md:hidden items-center w-full md:w-2/3">
                                <div className="container-text-wrap mx-auto">
                                    <h2 className="h3-u text-center">Intuitive operation guide

                                    </h2>
                                    <p className=" text-center mx-auto  w-3/4 lg:w-full ">With 4.3 inch of full color touch screen and clear graphic menu that are intuitive to do the measurement right away.

</p>
                                </div>

                            </div>
                            <div className="left   mt-2 md:mt-0 p-0 md:p-10 w-full md:w-1/2">
                                <Image height={300} loader={myLoader01} placeholder='empty' className="mx-auto" loading='lazy' alt='免校正微量拋棄式pH計酸鹼檢測儀觸控熒幕的操作Humming Probe UX100/超極生技UltraE' width={500} src='UX100-02-手拿方便-02-720x540.webp'></Image>

                            </div>
                            <div className="right hidden  md:flex items-center w-full md:w-2/3">
                                <div className="container-text-wrap mx-auto">
                                    <h3 className="h3-u text-center">Intuitive operation guide

                                    </h3>
                                    <p className="text-center w-full mx-auto">With 4.3 inch of full color touch screen and clear graphic menu that are intuitive to do the measurement right away.

</p>
                                </div>

                            </div>

                        </div>
                        <div className="row flex mt-5 sm:mt-4 md:mt-0 flex-col md:flex-row  justify-center  w-full">

                            <div className="right mt-3 md:mt-0 flex items-center  w-full md:w-2/3">
                                <div className="container-text-wrap mx-auto">
                                    <h3 className="h3-u text-center">Algorithm automatic interpretation of the end point
                                    </h3>
                                    <p className="text-center  w-full lg:w-full mx-auto">Generally, the final pH value is determined from when the measured value stops fluctuating on the traditional pH meter. The UX100 uses an intelligent end point identification function (Auto read) and an algorithm to automatically determine the results, which can display the measurement results faster and more accurately, reducing human error.</p>
                                </div>

                            </div>
                            <div className="left mt-2 md:mt-0 p-0 md:p-10 w-full  md:w-2/3">
                                <Image loader={myLoader01} height={300} placeholder='empty' className="mx-auto mt-3" loading='lazy' width={500} src='UX100-08-智能結果判讀720x540.webp' alt='免校正微量拋棄式pH計酸鹼檢測儀演算法自動判讀pH值Humming Probe UX100/超極生技UltraE'></Image>

                            </div>

                        </div>
                        <div className="row flex mt-5 sm:mt-4 md:mt-0 flex-col md:flex-row justify-center   w-full">
                            <div className="right mt-3 lg:mt-0  flex md:hidden  items-center  w-full md:w-2/3">
                                <div className="container-text-wrap mx-auto">
                                    <h3 className="h3-u w-full text-center">Power-on Self-checking Calibration
                                        Make sure the reliability for every measurement
                                    </h3>
                                    <p className="mx-auto text-center w-full">The Humming Probe contains built-in simulate electrodes for self-checking and validating and will conduct comprehensive self-checking every time it is turned on to eliminate the possibility of system errors.</p>
                                </div>

                            </div>
                            <div className="left mt-2 lg:mt-0 p-0 md:p-10 w-full md:w-2/3">
                                <Image loader={myLoader01} height={300} placeholder='empty' className="mx-auto" loading='lazy' width={500} src='UX100-開機自檢校正720x540.webp' alt='免校正微量拋棄式pH計酸鹼檢測儀開機自動自檢校正Humming Probe UX100/超極生技UltraE'></Image>

                            </div>
                            <div className="right hidden  md:flex items-center  w-full md:w-2/3">
                                <div className="container-text-wrap mx-auto">
                                    <h3 className="h3-u w-full text-center">Power-on Self-checking Calibration
                                        Make sure the reliability for every measurement
                                    </h3>
                                    <p className="text-center">The Humming Probe contains built-in simulate electrodes for self-checking and validating and will conduct comprehensive self-checking every time it is turned on to eliminate the possibility of system errors.</p>
                                </div>

                            </div>


                        </div>



                        <section className="  ">
                            <div className="Container px-0 md:px-[20px]  ">
                                <div className="grid  grid-cols-1">
                                   
                                    <div className="row">


                                        <div className="relative w-full grid md:grid-cols-2  ">

                                            <div className="mt-5 px-0 md:px-2">
                                                <Card className="py-4">

                                                    <CardBody className="overflow-visible py-2">
                                                        <div className="img mt-5">
                                                            <Image placeholder="empty" loader={myLoader01} loading='lazy' src='UX100-img04.webp' width={600} alt="免校正微量拋棄式pH計酸鹼檢測儀的試片插槽模式Humming Probe UX100/超極生技UltraE" height={600}></Image>
                                                        </div>
                                                        <div className="txt flex flex-col justify-center items-center mt-4 px-10">
                                                            <h3 className="h3-u text-center">
                                                                Strip Port Mode 

<br></br>(Strip Port):



                                                            </h3>
                                                            <p className=" text-center">Dip the pH strip in the sample solution or drop the sample on the pH strip
                                                                then insert the pH strip into the pH Meter for pH detection.</p>

                                                        </div>

                                                    </CardBody>
                                                </Card>
                                            </div>
                                            <div className="mt-5 px-0 md:px-2">
                                                <Card className="py-4">

                                                    <CardBody className="overflow-visible py-2">
                                                        <div className="img mt-5">
                                                            <Image loader={myLoader01} src='UX100-img05.webp' placeholder="empty" loading='lazy' alt="免校正微量拋棄式pH計酸鹼檢測儀的外接傳輸線模式Humming Probe UX100/超極生技UltraE
" width={600} height={600}></Image>
                                                        </div>
                                                        <div className="txt flex flex-col justify-center items-center mt-4 px-10">
                                                            <h3 className="h3-u text-center">
                                                                Cable Socket Mode <br />(Cable Socket)


                                                            </h3>
                                                            {/* <h3 className="h3-u opacity-0 text-center">
                                                                外接傳輸線


                                                            </h3> */}



                                                        </div>
                                                        <p className="text-center ">Strip port can be extended by cable socket that is similar to traditional pH meter measurement.



                                                        </p>
                                                        

                                                    </CardBody>
                                                </Card>
                                            </div>







                                        </div>





                                    </div>



                                </div>
                            </div>
                        </section>





{/* 
                        <section className="grid section md:w-full mx-auto lg:w-4/5 grid-cols-1">
                            <div className="row flex items-center flex-col  justify-center">


                                <div className="container flex flex-col justify-center items-center center">
                                    <h2 className="">各種場都可提供清晰顯示

                                    </h2>
                                    <p className=" w-full text-center lg:w-2/3 ">彩色顯示器大又清楚，一眼就能找到相關資訊。具背光的350 cd/m2亮度的 LCD熒幕，無論在陽光直射下，或是在黑暗的區域，也能辨讀結果或瀏覽選單。

</p>
                                </div>




                            </div>
                            <div className="row">

                                <div className="container center relative w-full mt-2 md:mt-0 border flex justify-center">


                                    <Image placeholder="empty" loader={myLoader} loading="lazy" alt="免校正微量拋棄式pH計酸鹼檢測儀的高亮度熒幕適合戶外使用Humming Probe UX100/超極生技UltraE" src='UX100-02-手拿方便-03-720x540.webp' width={1100} height={400} className="rounded-2xl mt-3" />




                                </div>


                            </div>



                        </section>
                        
                        <section className="row section flex flex-col md:flex-row  justify-center  w-full">

                            <div className="right mt-3 md:mt-0 flex items-center  w-full md:w-1/2">
                                <div className="container-text-wrap mx-auto">
                                    <h2 className="mt-4 md:mt-0 text-[26px]">可透過USB連接至電腦

                                    </h2>
                                    <p className="text-center">內嵌大容量移記憶體空間，可記錄大量現場原始數據（照片，文件等）。也可作為一般移動硬碟使用。

</p>
                                </div>

                            </div>
                            <div className="left mt-2 md:mt-0 p-0 md:p-10 w-full md:w-1/2">
                                <Image loader={myLoader01} height={300} placeholder='empty' className="mx-auto" loading='lazy' width={500} src='UX100-09-USB-720x540.webp' alt='免校正微量拋棄式pH計酸鹼檢測儀有大容量記憶空間可透過USB連接至電腦Humming Probe UX100/超極生技UltraE'></Image>

                            </div>

                        </section> */}
                        {/* <div className="row flex flex-col md:flex-row justify-center   w-full">
                            <div className="right mt-3 lg:mt-0  flex md:hidden  items-center  w-full md:w-1/2">
                                <div className="container-text-wrap mx-auto">
                                    <h2 className="text-[26px] mt-4 lg:mt-0">高效充電電池系統

                                    </h2>
                                    <p className="text-center">內建高效充電電池，，充電後可使用數小時，滿足實驗室及野外，無電力系統環境下的各種移動檢測需求。

</p>
                                </div>

                            </div>
                            <div className="left mt-2 lg:mt-0 p-0 md:p-10 w-full md:w-1/2">
                                <Image loader={myLoader01} height={300} placeholder='empty' className="mx-auto" loading='lazy' width={500} src='UX100-01-高校充電電池720x540.webp' alt='免校正微量拋棄式pH計酸鹼檢測儀可不插電使用且有大容量電池系統Humming Probe UX100/超極生技UltraE'></Image>

                            </div>
                            <div className="right hidden  md:flex items-center  w-full md:w-1/2">
                                <div className="container-text-wrap mx-auto">
                                    <h2 className="text-[26px] mt-4 md:mt-0">開機自檢校正
                                        確保每次測量的可靠性
                                    </h2>
                                    <p className="text-center">內置自檢確效模擬電極，每次開機會全面自我檢測，排除系統誤差的可能性。</p>
                                </div>

                            </div>


                        </div> */}
                    </div>
                </section>
                <section className="section_banner02 section h-[450px] relative mt-[50px] overflow-hidden lg:h-[576px] 2xl:h-[700px]">
                    <Image className="absolute hidden md:block z-[8] top-0 left-0" src='UX200-10-方便攜帶-無字版-1920x768.webp' placeholder='empty' loader={myLoader} loading='lazy' alt="免校正微量拋棄式pH計酸鹼檢測儀的便攜設計適合隨身攜帶Humming Probe UX100/超極生技UltraE" width={1920} height={768}></Image>
                    <Image className="absolute block md:hidden z-[8] top-0 left-0" src='UX100-11-方便攜帶-無字版-640x640.webp' placeholder='empty' loader={myLoader} loading='lazy' alt="免校正微量拋棄式pH計酸鹼檢測儀的便攜設計適合隨身攜帶Humming Probe UX100/超極生技UltraE" width={1920} height={768}></Image>


                    <div className="txt bg-[] absolute left-[15px] md:left-[80px] z-[8] w-[90%] md:w-2/5 top-[25%] md:top-[14%] lg:top-[33%]">
                        <h3 className="text-[32px] font-semibold">Easy for hand-held, portable

                        </h3>

                        <p className="text-white xl:w-4/5 w-full">Lightweight 250g, size suitable for handheld operation. Leather texture anti-slip design is easy to operate with one hand and disposable Humming Probe pH electrode <a href="https://www.ultraehp.com/hummingprobe/en/UH1.html" className="border-b-2 hover:text-orange-500">(learn more)</a> is portable without protection. </p>
                    </div>
                </section>


                <section className="">
                    <div className="container  px-5 lg:px-[50px] xl:px-[100px]">
                        <div className="row flex mt-4 md:mt-0 py-0 md:py-8 flex-col md:flex-row  justify-center  w-full">

                            <div className="right mt-3 md:mt-0 flex items-center  w-full md:w-2/3">
                                <div className="container-text-wrap mx-auto">
                                    <h3 className="h3-u text-center">Can provide clear display in various fields



                                    </h3>
                                    <p className="text-center">The color monitor is large and clear, so you can find relevant information at a glance. The 350 cd/m2 brightness LCD screen with backlight allows you to read results or browse menus in direct sunlight or in dark areas.


                                    </p>
                                </div>

                            </div>
                            <div className="left mt-2 md:mt-0 p-0  w-full md:w-1/2">
                                <Image loader={myLoader01} height={300} placeholder='empty' className="mx-auto" loading='lazy' width={500} src='UX100-02-手拿方便-03-720x540.webp' alt='免校正微量拋棄式pH計酸鹼檢測儀的高亮度熒幕適合戶外使用Humming Probe UX100/超極生技UltraE'></Image>

                            </div>

                        </div>
                        <div className="row flex mt-4 md:mt-0 py-0 md:py-8  flex-col md:flex-row  justify-center  w-full">
                            <div className="right mt-3 md:mt-0 flex md:hidden items-center w-full md:w-2/3">
                                <div className="container-text-wrap mx-auto">
                                    <h2 className="h3-u text-center">Can provide clear display in various fields

                                    </h2>
                                    <p className="text-center">The color monitor is large and clear, so you can find relevant information at a glance. The 350 cd/m2 brightness LCD screen with backlight allows you to read results or browse menus in direct sunlight or in dark areas.

</p>
                                </div>

                            </div>
                            <div className="left   mt-2 md:mt-0 p-0 w-full md:w-1/2">
                                <Image height={300} loader={myLoader01} placeholder='empty' className="mx-auto" loading='lazy' alt='免校正微量拋棄式pH計酸鹼檢測儀可不插電使用且有大容量電池系統Humming Probe UX100/超極生技UltraE' width={500} src='UX100-01-高校充電電池720x540.webp'></Image>

                            </div>
                            <div className="right hidden  md:flex items-center w-full md:w-2/3">
                                <div className="container-text-wrap mx-auto">
                                    <h3 className="h3-u text-center">High Efficiency Rechargeable Battery System


                                    </h3>
                                    <p className="text-center">The built-in high-efficiency rechargeable battery can be used for several hours after charging, which can meet various mobile detection needs for laboratories or outdoor environments without power system.


</p>
                                </div>

                            </div>

                        </div>
                        <div className="row flex mt-4 md:mt-0  py-0 md:py-8  flex-col md:flex-row  justify-center  w-full">

                            <div className="right mt-3 md:mt-0 flex items-center  w-full md:w-2/3">
                                <div className="container-text-wrap mx-auto">
                                    <h3 className="h3-u text-center">Build-in camera


                                    </h3>
                                    <p className="text-center">On-site sample status and test environment can be recorded at any time.




</p>
                                </div>

                            </div>
                            <div className="left mt-2 md:mt-0 p-0  w-full md:w-1/2">
                                <Image loader={myLoader01} height={300} placeholder='empty' className="mx-auto" loading='lazy' width={500} src='UX100-10-手持拍照-720x540.webp' alt='免校正微量拋棄式pH計酸鹼檢測儀具有鏡頭可以記錄原始數據Humming Probe UX100/超極生技UltraE'></Image>

                            </div>

                        </div>
                        <div className="row flex mt-4 md:mt-0 py-0 md:py-8  flex-col md:flex-row justify-center   w-full">
                            <div className="right mt-3 lg:mt-0  flex md:hidden  items-center  w-full md:w-2/3">
                                <div className="container-text-wrap mx-auto">
                                    <h3 className="h3-u text-center">Can be connected to a computer via USB

                                    </h3>
                                    <p className="text-center">Built-in large memory capacity for recording a large amount of live raw data (photos, documents, etc.). It can also be used as a general mobile hard disk.



</p>
                                </div>

                            </div>
                            <div className="left mt-2 lg:mt-0 p-0 w-full md:w-1/2">
                                <Image loader={myLoader01} height={300} placeholder='empty' className="mx-auto" loading='lazy' width={500} src='UX100-09-USB-720x540.webp' alt='免校正微量拋棄式pH計酸鹼檢測儀有大容量記憶空間可透過USB連接至電腦Humming Probe UX100/超極生技UltraE'></Image>

                            </div>
                            <div className="right hidden  md:flex items-center  w-full md:w-1/2">
                                <div className="container-text-wrap mx-auto">
                                    <h3 className="h3-u text-center">Can be connected to a computer via USB


                                    </h3>
                                    <p className="text-center">Built-in large memory capacity for recording a large amount of live raw data (photos, documents, etc.). It can also be used as a general mobile hard disk.



</p>
                                </div>

                            </div>


                        </div>
                        </div>
                        </section>





               




                <section className="section  ">
                    <div className="Container px-0 md:px-[20px]  ">
                        <div className="grid grid-cols-1">

                            <div className="row md:px-[60px] xl:px-[150px]">


                                <div className="relative w-full grid md:grid-cols-2  ">

                                    <div className="mt-5 px-0 md:px-3">
                                        <Card className="py-4">

                                            <CardBody className="overflow-visible py-2">
                                                <div className="img mt-5">
                                                    <Image
                                                        alt="免校正微量拋棄式pH計酸鹼檢測儀可使用三角架實現桌上型pH計Humming Probe UX100/超極生技UltraE"
                                                        className="object-cover rounded-xl"
                                                        placeholder="empty"
                                                        loading="lazy"
                                                        loader={myLoader01}

                                                        src="UX100-img03.webp"
                                                        width={970}
                                                        height={500}
                                                    />
                                                </div>
                                                <div className="txt flex flex-col justify-center items-center mt-4 px-10">
                                                    <h3 className="h3-u text-center">Easy to use with facility


                                                    </h3>


                                                    <p className="text-default-500 text-gray-900">Long-term continuous monitoring

                                                    </p>
                                                    <p className="text-default-500 text-gray-900">Triangular Adjustable Stand

                                                    </p>
                                                    <p className="text-default-500 text-gray-900">Convenient and stable fixation

                                                    </p>

                                                </div>

                                            </CardBody>
                                        </Card>
                                    </div>
                                    <div className="mt-5 px-0 md:px-3">
                                        <Card className="py-4">

                                            <CardBody className="overflow-visible py-2">
                                                <div className="img mt-5">
                                                    <Image
                                                        loader={myLoader01}
                                                        alt="免校正微量拋棄式pH計酸鹼檢測儀具有防水防塵，適合戶外使用Humming Probe UX100/超極生技UltraE"
                                                        className="object-cover rounded-xl"
                                                        placeholder="empty"
                                                        loading="lazy"
                                                        src="UX100-img02.webp"
                                                        width={970}
                                                        height={500}
                                                    />
                                                </div>
                                                <div className="txt flex flex-col justify-center items-center mt-4 px-10">
                                                    <h3 className="h3-u text-center">IP54 waterproof and dustproof rating
                                                    </h3>
                                                    <p className=" text-gray-900">Unaffected by weather
</p>
                                                    <p className=" text-gray-900">Suitable for every application
</p>
                                                    <p className=" text-gray-900">Firm and sturdy







</p>
                                                    </div>

                                            </CardBody>
                                        </Card>
                                    </div>







                                </div>





                            </div>



                        </div>
                    </div>
                </section>

                <section className="section  ">
                    <div className="Container px-0 md:px-[20px]  ">
                        <div className="grid grid-cols-1">
                            <div className="row  flex items-center flex-col  justify-center">

                              

                                <motion.p
                                    className="text-m "
                                    variants={title03}
                                >

                                </motion.p>


                            </div>
                           



                        </div>
                    </div>
                </section>
                <section className=" section_slider section  hidden">
                    <div className="mb-10">
                      


                        <h2 id='fff' className="mb-4 dark:text-white text-3xl text-center md:text-5xl leading-none font-bold uppercase">  胃幽門螺旋桿菌的快速尿素呼吸檢測法</h2>



                        <div className="px-[20px]">
                            <p className="text-black w-full md:w-1/2  text-m text-center mx-auto dark:text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. In exercitationem officiis saepe accusamus error, sit maxime commodi officia, rerum temporibus laudantium culpa recusandae dolor, ipsa eveniet cupiditate natus vero non!</p>
                        </div>

                        <div className="flex justify-center">
                            <p className="text-sm text-center   rounded-full bg-orange-500 inline-block text-gray-100 mt-4 px-3 py-2 mx-auto ">
                                幽門螺旋桿菌

                            </p>
                        </div>

                     

                    </div>

                    <div className="flex w-full p-[15px] px-20 relative">



                        <div className="w-[60%] px-20 ">

                            <div className="txt  pl-[20%]">
                                <h3>
                                    輕鬆手持，方便攜帶
                                </h3>
                                <p className="mt-2 dark:text-white text-base text-gray-800">250g 的輕巧重量，適合手持操作的大小。皮革質感防滑設計，可輕鬆單手完成操作。配合方便攜帶的拋棄式蜂鳥探針電極 (瞭解更多) 無需層層保護，輕鬆移動。</p>
                            </div>

                        </div>
                        <div className="w-[40%]  ">
                            {/* <TwoColSlider /> */}

                            <Image src='/截圖_2024-02-01_下午3.59.25_gfj4te.webp' alt='輕鬆手持' width={400} height={1000} ></Image>
                        </div>
                    </div>

                </section>



                <section className="section_banner02 section h-[450px] relative mt-[50px] overflow-hidden lg:h-[576px] 2xl:h-[700px]">
                    <Image className="absolute hidden md:block z-[8] top-0 left-0" placeholder="empty" loading="lazy" alt='最佳化的行動實驗室' loader={myLoader} src='UX200-13-最佳的行動實驗室-無字版-1920x768.webp' width={1920} height={768}></Image>
                    <Image className="absolute z-[8] block md:hidden top-0 left-0" placeholder="empty" loading="lazy" alt='最佳化的行動實驗室' loader={myLoader} src='UX200-13-最佳的行動實驗室-無字版-640x640.jpg' width={1920} height={768}></Image>
                    <div className="txt  absolute right-[15px] md:right-[50px] z-[8] w-[90%] md:w-2/5 top-[25%] md:top-[14%] lg:top-[33%]">
                        <h3 className="h3-u ">Optimized Mobile Laboratory

                        </h3>

                        <p className="text-white mt-4 text-[14px] md:text-[18px]">The UX100 provides a shooting function. For each data, it can take pictures to record the scene environment and the details of the sample number. Satisfy the management requirements of the source of the result analysis and the original data. Data can be easily transferred to a computer for backup







</p>
                    </div>
                </section>
                   <WhenUse/>
   
                    <FindSPE/>

            
                <div className="p-0 mt-[50px]">
                    <ModalBtn />
                </div>
              
                         
                              



                <section className=" px-[20px] lg:px-[50px] 2xl:px-[140px] pt-0">
                    <div className="Container md:px-20">
                        <div className="grid grid-cols-1">
                            <div className="row  flex items-center flex-col  justify-center">
                                <motion.div className="card"
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.3 }}
                                >

                                    <motion.h2
                                        className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                        variants={title01}
                                    >

                                        <h2 className="h2-u">Humming Probe UX100

                                        </h2>
                                        {/* <p className="text-lg text-gray-800 md:w-2/3 w-full mx-auto">免校正酸鹼檢測儀
                                        </p> */}

                                    </motion.h2>



                                    <motion.p
                                        className="text-m flex center "
                                        variants={title02}
                                    >

                                        <a href='https://www.ultraehp.com/images/DM/UltraE-DM-en.pdf' 

                                        className="rounded-full w-[150px] mx-auto  text-center bg-orange-500 font-black text-white py-2 px-4 mx-auto mb-[50px]">

                                            DM Download

                                        </a>
                                     

                                    </motion.p>


                                </motion.div>


                                <motion.p
                                    className="text-m "
                                    variants={title03}
                                >

                                </motion.p>


                            </div>
                            <div className="row">
                             

                                <div className="grid grid-cols-1 lg:grid-cols-2">
                                    <div className="p-10 items-end flex flex-col">
                                        <Image loader={myLoader01} src='UX100 酸鹼檢測器-尺寸圖.webp' className="mr-0 md:mr-[100px] w-full  md:w-1/2" placeholder="empty" alt='UX100_酸鹼檢測器-尺寸圖' width={600} height={600}></Image>
                                        <Image src='UX100-en-01.png' loader={myLoader01} placeholder="empty" className="mr-0 md:mr-[100px] w-full  md:w-1/2" alt='UX100_酸鹼檢測器-尺寸圖' width={600} height={600}></Image>

                                    </div>
                                    <div>

                                        <div className="flex w-full flex-col">
                                            <Tabs aria-label="Options">

                                                <Tab key="Humming Probe UX100
" title="Humming Probe UX100
">
                                                    <Card>
                                                        <CardBody>
                                                            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                                                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                                                                    <tbody>
                                                                        <tr class="bg-gray-800 ">
                                                                            <th scope="row" colSpan={2} class="px-6 py-4 font-medium text-white whitespace-nowrap  text-center">
                                                                                Range:
                                                                            </th>


                                                                        </tr>
                                                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                pH Value:
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                0.00~14.00 pH

                                                                            </td>


                                                                        </tr>
                                                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                Electric Potential:
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                ± 1000.0 mV
                                                                            </td>



                                                                        </tr>
                                                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                Temperature:
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                10 ~ 40°C ( &lt; 10°C or &gt; 40°C will show warning)
                                                                            </td>

                                                                        </tr>




                                                                        <tr class="bg-gray-800 ">
                                                                            <th scope="row" colSpan={2} class="px-6 py-4 font-medium text-white whitespace-nowrap  text-center">
                                                                                Resolution:
                                                                            </th>


                                                                        </tr>

                                                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                pH Value：
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                0.01 pH
                                                                            </td>


                                                                        </tr>
                                                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                Electric Potential：
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                0.1 mV
                                                                            </td>



                                                                        </tr>
                                                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                Temperature：
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                0.1 °C
                                                                            </td>

                                                                        </tr>


                                                                        <tr class="bg-gray-800 ">
                                                                            <th scope="row" colSpan={2} class="px-6 py-4 font-medium text-white whitespace-nowrap  text-center">
                                                                                Accuracy

                                                                            </th>


                                                                        </tr>

                                                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                pH Value：
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                ± 0.1 pH
                                                                            </td>


                                                                        </tr>
                                                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                Electric Potential：
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                0.05 %
                                                                            </td>



                                                                        </tr>
                                                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                Temperature:
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                ± 0.5°C
                                                                            </td>

                                                                        </tr>






                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </CardBody>
                                                    </Card>
                                                </Tab>
                                                <Tab key="Appearance" title="Appearance">
                                                    <Card>
                                                        <CardBody>
                                                            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                                                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                                                                    <tbody>
                                                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                Display：
                                                                            </th>
                                                                            <td class="px-6 py-4 text-gray-800">
                                                                                4.3” Color Touchscreen
                                                                            </td>


                                                                        </tr>
                                                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                Water Proof：
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                IP54
                                                                            </td>


                                                                        </tr>
                                                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                Camera：
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                5M Pixels

                                                                            </td>



                                                                        </tr>

                                                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                Power supply：
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                5V DC，2A (Input 100/240V AC) (Battery Capacity 2500 mAh)

                                                                            </td>


                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                Dimension:
                                                                                
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                87 x 152 x 21 mm
                                                                            </td>

                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                Weight:
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                250g
                                                                            </td>

                                                                        </tr>

                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </CardBody>
                                                    </Card>
                                                </Tab>

                                            </Tabs>
                                        </div>  









                                    </div>

                                </div>






                                {/* 

                                    </motion.h2>


                                </motion.div>
 */}


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
            
                <section className="section_others  hidden md:block">
                    <div className="Container">

                        <div className="grid grid-cols-1">
                            <div className="row  flex items-center flex-col  justify-center">

                       

                                <motion.div className="card"
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.3 }}
                                >

                                    <motion.h2
                                        className="h2-u"
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


export default Product;
