"use client"
// import fetch from "isomorphic-unfetch";
import { motion } from "framer-motion";
import { Suspense } from 'react'
import Link from "next/link";
import Example from '../../components/Drag/Example.jsx'
import Styles from "./style.css";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { Typewriter } from 'react-simple-typewriter'
import ShiftTime from "../../components/ShiftingCountdown/index.jsx"
// import VideoComponent from '../../components/VideoComponents/VideoComponent.jsx'
import SmoothParallaxScroll from '../../components/SmoothParallaxScroll/index.js'
import { Parallax } from 'react-parallax';
import SwiperCarousel from '../../components/SwiperCarousel/SwiperCardAbout.jsx'
import DragCarousel from '../../components/DragCarousel/index.tsx'
import JsonLd from '../../components/JsonLd.jsx';
import YoutubeUH1 from '../../components/VideoPlayer/UH1.jsx'
// import { CldImage } from 'next-cloudinary';
import Image from 'next/image'
// import { AdvancedVideo, lazyload, accessibility, responsive, placeholder } from "@cloudinary/react";
// import img05 from 'https://www.ultraehp.com/images/Products-Detail-Img/UP100/up111111.png'
import YouTubePlayer from '../../components/VideoPlayer/UH1en.jsx';
import Cards from '../../components/Cards/Cards.js'
import { DefaultSeo } from 'next-seo';
import ReadMoreReact from 'read-more-react';
import TextScroll from '../../components/textScroll/TextScroll01.jsx';
import { Card, CardHeader, CardBody, Tooltip } from "@nextui-org/react";
// import AnimatedTabs from '../../components/TabLink/index.jsx'
import CelebrateBTN from '../../components/CelebrateBtn/index.jsx';
// import 'cloudinary-video-player/cld-video-player.min.css';
import { card, CardFooter } from '@nextui-org/react';
// import MobileMenu from '../../components/mobileMenu/index.jsx'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import OthersProducts from '../../components/ReactSlick/ImageSlider2.jsx'
import Marquee from 'react-fast-marquee';
import SwiperSlider from '../../components/SwiperSliders/UH1Slider.jsx'
import FindSPE from '../../components/FindSPE.jsx'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

import { Tabs, Tab } from "@nextui-org/react";

import { useState } from "react";
// import Head from "next/head";
import CarouselThumbs from "../../components/CarouselThumbs.js";
import ProductImage from "../../components/ProductImage.js";
 

import { AdvancedVideo, lazyload, accessibility, responsive, placeholder } from "@cloudinary/react";
import { CldImage } from 'next-cloudinary';

import Carousel from "../../components/Products/ProductCarouselUH1.jsx";
import Navigation from "../../components/Products/Navigation.jsx";
// import TwoColSlider from '../../components/TwoColumnSlider/app/page01.tsx'
import styles from '../../components/two-colum/twoColumn.module.scss'
import { projects } from '../../components/two-colum/data.js';

import Double from '../../components/two-colum/Double.jsx';
import ModalBrn from "../../components/ModalBtn.jsx"
import ModalBtn from "../../components/ModalBtn-1.jsx"
import ModalBtn01 from "../../components/ModalBtn-3.jsx"
import ModalBtn05 from "../../components/ModalBtn-5.jsx"
import ModalBtn04 from "../../components/ModalBtn-4.jsx"
import ModalBtn02 from "../../components/ModalBtn-2.jsx"
import WhenUse from '../../components/WhenUse.jsx'
// import { Cloudinary } from "@cloudinary/url-gen";
import { title } from "process";

// import IMG01 from 'https://www.ultraehp.com/images/Products-Detail-Img/UH-1/UH1-07-%E6%84%9F%E6%B8%AC%E5%85%83%E4%BB%B6720x540.webp'
import { CldVideoPlayer } from "next-cloudinary";
  

  
import ReactSlick from '../../components/reactSlick.jsx'


const backgroundImage = 'https://concept-theme-tech.myshopify.com/cdn/shop/files/home-countdown.webp?v=1708878029&width=2200';


    

const myLoader = ({ src, width, quality, placeholder }) => {
    return `https://www.dot-st.com/static/docs/nikoand/pages/2022_city_creek_v2/assets/images/${src}?w=${width}?p=${placeholder}`
}
const myLoader06 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UH-1/${src}?w=${width}?p=${placeholder}`
}
const myLoader07 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/image/DM/${src}?w=${width}?p=${placeholder}`
}
const myLoader01 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UH-1/${src}?w=${width}?p=${placeholder}`
}

import { Cloudinary } from "@cloudinary/url-gen";
const cld = new Cloudinary({
    cloud: {
        cloudName: 'ducasbzsc'
    }
})

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



const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
};
const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
};









// const { onOpen, onOpenChange } = useDisclosure();
const Product = props => (


    <div className="relative">


        {/* 結構化資料  */}
        


        <link rel="alternate" href="https://www.ultraehp.com/hummingprobe/UH1.html" hreflang="zh-Hant" />
        <link rel="alternate" href="https://www.ultraehp.com/hummingprobe/en/UH1.html" hreflang="en" />

        {/* meta seo tag */}   
        <title>toy
        </title>
        <meta key="description" name="description" content="Calibration-free micro disposable pH electrode/Humming Probe UH1 pH electrode has a disposable design that does not require pH calibration solution.  Ready to use ,ultra small sample requirement ,suitable for precious samples and easily contaminated or passivated pH electrode surfaces and special samples.There is no need to use electrode preservation solution, portable and suitable for outdoor use without power supply. Acid-base test electrode/pH electrode/pH meter/acid-base test/pH test/pH measurement/pH calibration solution" />
        <meta name='keywords' content='pH electrode/pH meter/acid-base test/pH test/pH measurement/pH calibration solution' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />


     
        {/* OG metadata */}
        <meta property="og:url" content="https://www.ultraehp.com/hummingprobe/UH1.html" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="
Calibration-free micro disposable pH electrode｜Humming Probe UH1 pH electrode
" />
        <meta property="og:description" content="Calibration-free micro disposable pH electrode/Humming Probe UH1 pH electrode has a disposable design that does not require pH calibration solution.  Ready to use ,ultra small sample requirement ,suitable for precious samples and easily contaminated or passivated pH electrode surfaces and special samples.There is no need to use electrode preservation solution, portable and suitable for outdoor use without power supply. Acid-base test electrode/pH electrode/pH meter/acid-base test/pH test/pH measurement/pH calibration solution
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

            <div className="bg-white ">
              
                <div className="sideBar z-[999999] bottom-[23%] right-[-85%] fixed inline-flex border h-[1px]  flex-col justify-center  items-center ">
                    <p className="font-bold inline-block rotate-[90deg] border border-black text-[13px] ml-[90px] text-black">CHAPTER-1  KIDS COORRDINATE 8DAYS</p>  
                    <a className="fixLink mt-[90px] w-[160px] pc is-visible" id="fixLink" href="https://www.beams.co.jp/tag/kids24ss_all/" target="_blank"><span class="link">
<svg id="_レイヤー_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 195 195">
<path class="cls-1" d="m0,173.67456c0,11.77771,9.54772,21.32544,21.32544,21.32544h152.34912c11.77771,0,21.32544-9.54772,21.32544-21.32544V21.32544c0-11.77771-9.54772-21.32544-21.32544-21.32544"></path>
</svg></span> <div className="absolute border border-green-400  top-[65%] right-[52px] rotate-[-45deg] z-[99999999]">
    <p className="text text-white text--1 font-extabold  text-[16px] f-Futura-Demi">ONLINE SHOP</p> <p className="text text-white text--1  text-[11px] f-Futura-Demi">関連アイテムを</p>
    </div> <span class="yajirushi">
</span></a>
                </div>
                <h1 className="text-[50px] text-center mt-[200px]">
                  The toys for Childs

                </h1>
                <DragCarousel/>

                
            </div>

        </div>
 <Parallax className="mt-[100px] pb-[100px]" bgImage={backgroundImage} strength={500}>
    <section className="section_Timer bg-cover bg-center mt-[30px] py-[20px]">
      <div className="flex flex-col justify-center items-center">
        <div className="txt">
          <div>
          </div>
          <h1 style={{ fontSize: '50px', fontWeight: '800', paddingTop: '5rem', color: 'white', margin: 'auto 0', fontWeight: 'normal' }}>
            限時特價{' '}
            <Typewriter
              words={['Switch周邊', '公仔扭蛋', '兒童玩具', '倒數計時特價!']}
              loop={55}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={80}
              delaySpeed={1400}
              className="custom-typewriter"
            />
            <h2 style={{ color: 'red', fontWeight: 'bold' }}>
              {/* Style will be inherited from the parent element */}
            </h2>
          </h1>
        </div>
        <div className="bottom_txt mx-auto w-[700px]">
          <p className="text-gray-300 mt-3 mb-[40px] mx-auto text-[12px] w-2/3 text-center  font-normal ">
            Note:在限時特價中，賣家有權保留一切更改規則的措辭通常是指賣家在進行限時特價活動時保留調整或修改活動條件的權利
          </p>
          <div className="flex justify-center items-center">
            <Example/>
          </div>
          <a href='/' className="flex mx-auto flex-col border-2 border-white rounded-[50px] w-[220px] py-2 text-white justify-center items-center mt-[30px]">
            Go Shopee
          </a>
        </div>
      </div>
      <div>
        <ShiftTime/>
      </div>
    </section>
  </Parallax>
  <section className="rounded-[30px]  relative z-[999999999] bg-white mt-[-100px] py-[100px]">
    <div>
        <div className="txt p-8">
            <h4 className="text-[32px] font-semibold">Premium Speakers</h4>
            <h5>Bring Quality Sound into Your Home</h5>
        </div>
        <div className="bottom-wrap flex flex-col lg:flex-row p-8">
            <div className="left w-full lg:w-[62%] pb-5 lg:pb-0  pr-0 lg:pr-6">
                <Image src='scene_02_kv.jpg' width={1000} height={420}  placeholder="empty" className="rounded-xl" loading="lazy" loader={myLoader}></Image>
            </div>
            <div className="right w-full lg:w-[38%]">
                <div className="card rounded-2xl flex flex-col justify-center items-center h-full p-5 border-2 border-gray-800">
                    <div className="title">
                        <b className="text-center">GOODS FOR HAMBURGER SHOP</b>
                        <p className="text-center">Premium Speakers</p>
                    </div>
                    <div className="slider">
                        <SwiperCarousel/>
                    </div>

                </div>

            </div>
        </div>
    </div>

  </section>
        <section className="mt-[100px]">
            <div className="txt">
                <h1 className="text-[50px] text-center leading-normal font-extrabold text-black"> ENJOY THE TIME <br/>KIDS & DULTS</h1>
                <Link href='/' className="w-[200px] font-extrabold py-2  border-2 mx-auto text-center border-black">BUY</Link>
            </div>
        <iframe src='https://my.spline.design/nintendoswitchcopy-90747e739d7d06f2a2ae34d6bf3789bd/' frameborder='0' width='100%' height='600px'></iframe>



        <div className="flex left flex-row w-full">
           <div className="left w-1/2">
              <img></img>
            
           </div>
           <div className="right w-1/2">
             <h1 className="text-[50px] font-extrabold">LOREM</h1>
           </div>
        </div>
            <div className="left"></div>
        </section>
        <section>
            
     <Double/>

        </section>
       <section>
        <div className="relative">
            <div className="txt bg-[#85dc1c] text-white font-semibold
 absolute left-[38%] py-5  px-10 top-[45%] z-[9999]">
                <h4 className="">折扣連連！最後機會，立即行動！</h4>
                
            </div>
            <SmoothParallaxScroll/>
        </div>
            
     

        </section> 




    </div>

);




export default Product;
