"use client"
// import fetch from "isomorphic-unfetch";
import { motion } from "framer-motion";
import Link from "next/link";
import ReadMoreReact from 'read-more-react';
import Image from 'next/image'
import YouTubePlayer from '../../components/VideoPlayer/UH2-GASen.jsx';

import HummingProbePH from '../../components/HummingProbePH.jsx'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
// import { AdvancedVideo, lazyload, accessibility, responsive, placeholder } from "@cloudinary/react";
// import img05 from 'https://www.ultraehp.com/images/Products-Detail-Img/UP100/up111111.png'
import { DefaultSeo } from 'next-seo';
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
import JsonLd from '../../components/JsonLd.jsx';


import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";

import { Tabs, Tab } from "@nextui-org/react";

import { useState } from "react";
// import Head from "next/head";
import CarouselThumbs from "../../components/CarouselThumbs.js";
import ProductImage from "../../components/ProductImage.js";
 

import { AdvancedVideo, lazyload, accessibility, responsive, placeholder } from "@cloudinary/react";
import { CldImage } from 'next-cloudinary';
import SwiperSlider from '../../components/SwiperSliders/UH2-gasSlider.jsx';
import Carousel from "../../components/Products/ProductCarousel.jsx";
import Navigation from "../../components/Products/Navigation.jsx";
import TwoColSlider from '../../components/TwoColumnSlider/app/page01.tsx'
import styles from '../../components/two-colum/twoColumn.module.scss'
import { projects } from '../../components/two-colum/data.js';

import Double from '../../components/two-colum/Double.jsx';
import ModalBrn from "../../components/ModalBtn.jsx"
import ModalBtn from "../../components/ModalBtn-1.jsx"
import ModalBtn01 from "../../components/ModalBtn-3.jsx"
import ModalBtn05 from "../../components/ModalBtn-5.jsx"
import ModalBtn04 from "../../components/ModalBtn-4.jsx"
import ModalBtn02 from "../../components/ModalBtn-2.jsx"
// import { Cloudinary } from "@cloudinary/url-gen";
import { title } from "process";
import UP10001 from '../../public/images/zensor__jogging__black_background_style--v_6.0_728c5804-1334-4d8f-b6de-fabeefed4b4f.png'
// import IMG01 from 'https://www.ultraehp.com/images/Products-Detail-Img/UH-1/UH1-07-%E6%84%9F%E6%B8%AC%E5%85%83%E4%BB%B6720x540.webp'
import { CldVideoPlayer } from "next-cloudinary";
  
import FindSPE from '../../components/FindSPE.jsx'
  
import ReactSlick from '../../components/reactSlick.jsx'
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
const myLoader05 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/index/${src}?w=${width}?p=${placeholder}`
}

const myLoader06 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/nav/${src}?w=${width}?p=${placeholder}`
}

const myLoader08 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UH2-Gas/${src}?w=${width}?p=${placeholder}`
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


const data = [
    {
        image:

            'UH2-4-一滴量測1000x1000.webp',

    },
    {
        image:
            'UH2-05-即插即測1000x1000.webp'

    },
    {
        image:
            'UH2-06-搭配UX100-1000x1000.webp'

    },
    {
        image:
            'UH2-03.webp'

    },
    {
        image:
            'UH2-07-商品1000x1000.webp'

    },

    // {
    //     image:
    //         '/UP100/輪播圖-06-05_q9bepc'

    // },


];
const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
};
const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
};









//結構化資料

const ProductPost = {
    title: "Humming Probe UH2-Gas pH Strip Electrode for Gas",
    description: "The innovative calibration-free disposable pH acid-base detection electrode for gas/ Humming Probe UH2-Gas has a disposable design that requires no pre-collected gas, no need to use calibration solution for calibration, and is ready to use.The design of measuring pH directly without collecting gas is suitable for continuous gas pH detection. Acid-base test electrode/pH electrode/pH meter/acid-base test/pH test/pH measurement/continuous detection of gas acid-base value/pH value/exhaust gas detection/ammonia+sulfur dioxide concentration detection",
    image: "https://www.ultraehp.com/images/Products-Detail-Img/UH2-Gas/UH2-GAS+UX100.webp",
    positive01: "Accurate, calibration-free, ready-to-use",
    positive02: "Suitable for gas samples",
    positive03: "Disposable electrode to avoid multi-sample cross-contamination",
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


        {/* 結構化資料  */}
        <title>The innovative calibration-free disposable pH acid-base detection electrode for gas/ Humming Probe UH2-Gas 
        </title>
        <meta key="description" name="description" content="The innovative calibration-free disposable pH acid-base detection electrode for gas/ Humming Probe UH2-Gas has a disposable design that requires no pre-collected gas, no need to use calibration solution for calibration, and is ready to use.The design of measuring pH directly without collecting gas is suitable for continuous gas pH detection. Acid-base test electrode/pH electrode/pH meter/acid-base test/pH test/pH measurement/continuous detection of gas acid-base value/pH value/exhaust gas detection/ammonia+sulfur dioxide concentration detection" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="keywords" content="pH electrode/pH meter/acid-base test/pH test/pH measurement/continuous detection of gas acid-base value/pH value/exhaust gas detection/ammonia+sulfur dioxide concentration detection"/>


        <meta property="og:url" content="https://ithelp.ithome.com.tw/articles/10278469" />


        <meta property="og:type" content="website" />
        <meta property="og:title" content="
The innovative calibration-free disposable pH acid-base detection electrode for gas/ Humming Probe UH2-Gas 
" />

        <link rel="alternate" href="https://www.ultraehp.com/hummingprobe/UH2-GAS.html" hreflang="zh-Hant" />
        <link rel="alternate" href="https://www.ultraehp.com/hummingprobe/en/UH2-GAS.html" hreflang="en" />
        <meta property="og:description" content="The innovative calibration-free disposable pH acid-base detection electrode for gas/ Humming Probe UH2-Gas has a disposable design that requires no pre-collected gas, no need to use calibration solution for calibration, and is ready to use.The design of measuring pH directly without collecting gas is suitable for continuous gas pH detection. Acid-base test electrode/pH electrode/pH meter/acid-base test/pH test/pH measurement/continuous detection of gas acid-base value/pH value/exhaust gas detection/ammonia+sulfur dioxide concentration detection
" />
        <meta property="og:image" content="https://www.ultraehp.com/images/Products-Detail-Img/UH-1/UH1-09-製程操控720x540.webp" />



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






      

        <motion.div className="dark:bg-black bg-gray-100 " initial='initial' animate='animate' exit={{ opacity: 0 }}>
            <div className="fixed mobile-lang w-full top-[10px] pr-6 md:hidden flex justify-end mx-auto z-[99999] ">
                <a href="https://www.ultraehp.com/hummingprobe/UH2-GAS.html">
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
                            <a className='w-full block' href="https://www.ultraehp.com/hummingprobe/en/UH2-GAS.html">English</a>
                        </DropdownItem>
                        <DropdownItem key="new">
                            <a className='w-full block' href="https://www.ultraehp.com/hummingprobe/UH2-GAS.html">繁體中文</a>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>


            </div>
            <Navigation />
            <div className='fullscreen relative pt-[60px]'>
                <Image loader={myLoader001} src='company-logo.webp' width={160} loading='lazy' placeholder='empty' className="fixed mt-2 ml-[20px] md:ml-[90px] z-[999] top-[60px] left-10" alt='UltraP-logo' height={60}></Image> 

                <section className="section   mt-0 md:mt-[150px]">
                    <div className="Navgation mb-[30px] hidden md:block pl-[150px]"> <a href="https://www.ultraehp.com/hummingprobe/en/" className="hover:font-bold">Home</a> / <a className="hover: font-bold " href='# '>Humming Probe UH2-Gas
                    </a> </div>

                    <div className="container w-full flex px-[0px] md:px-[20px] xl:px-[70px] flex-col md:flex-row justify-start items-start">

                        <div className="left   w-full md:w-1/2">
                            <SwiperSlider />



                        </div>

                        {/* <div className="block md:hidden left border border-black w-full md:w-1/2">
                            
                            <SlickCarousel/>
                    </div>  */}
                        <div className="right flex justify-center  md:justify-between md:pl-[50px] xl:pl-[80px] w-full md:w-1/2 flex-col  h-[480px]">
                            <div className="txt">
                                <h1 className="h1-u md:mt-0 mt-[200px]">Humming Probe UH2-Gas
                                  <br/>  pH Strip Electrode for Gas</h1>
                                <h3 className="model-u">pH-test paper / pH test strip / pH measurement / pH strip electrode / single use pH sensor for gas

                                </h3>
                                <p className="text-middle-u">The industry’s first gas pH measurement method, using a special gas exchange membrane, combined with the tiny characteristics of the test strip electrode, can quickly and easily measure the gas pH. It is the world's first professional measurement technology and innovative solution.


                                </p>
                                <ul>
                                    <li>・Accurate, calibration-free, ready-to-use


                                    </li>
                                    <li>・Suitable for gas samples


                                    </li>
                                    <li>・Disposable electrode to avoid multi-sample cross-contamination
                                    </li>
                                    <li>・Accuracy can reach ±0.1 pH

                                    </li>
                                    <li>・Each strip has a built-in temperature sensing element


                                    </li>
                                    <li>・Portable


                                    </li>
                                    <li>・Long shelf life single use pH sensor for gas



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


            <div className="content-bottom">

                <section className="section_appearance section">
                    {/* <div className="container ">
                        <div className="flex justify-center  px-20 ">

                            <div className="mx-auto">
                                <Image src='/UX200/UX100-12-產品說明-720x540_工作區域_1_qfpity' width={700} height={1000}></Image>

                            </div>
                        </div>

                    </div>
 */}



                    {/* <div className="flex justify-center bg-black py-4 mt-5">
                        <div className="color-bar w-2/4  grid grid-cols-3">
                            <div className="text-center">
                                <a href="" className="text-white text-center">產品概述</a>
                            </div>
                            <div className="text-center">
                                <a href="" className="text-white text-center">使用方式

</a>
                            </div>
                            <div className="text-center">
                                <a href="#fff" className="text-white text-center">You May Also Like</a>


                            </div>
                        </div>
                       
                        
                    </div>
                     */}
                </section>
               <section className="section-video mt-[150px] md:mt-0">
                    <div className="container px-[15px] flex  2xl:w-[60%] xl:w-[65%] md:w-[80%] w-full mx-auto flex-col justify-center items-center">
                        <div className="row flex flex-col justify-center items-center ">

                            <h2 className="h2-u">Operation</h2>
                            <a href='https://www.youtube.com/watch?v=uTyWvGKuXJw'>
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
                <section className="section_video01 px-0 mx-0 section   flex justify-center">

                    <div className="container  w-full md:w-4/5 lg:w-2/3  ">
                        <div className="row mb-5">

                            <h2 className="text-[32px]">Introduction video
</h2>
                            <p className="text-[16px] text-center">Operation</p>

                        </div>
                        <div className="row flex justify-center items-center">


                            <AdvancedVideo poster='https://www.ultraehp.com/images/Ultra Video/UH2-gas/中文版/YouTube-UH2-gas-中文.webp' plugins={[lazyload({ rootMargin: '10px 20px 10px 30px', threshold: 0.25 })]} className='rounded-2xl' preload="flase" controls width={1000} height={600} cldVid={cld.video('/UH2Video/UH2中文版_zab9g7')} /> 

                        </div>










                    </div>
                </section> */}

                <section className="section">
                    <div className="row">
                        <h2 className=" w-full md:w-1/2 mx-auto text-[32px] text-center leading-normal">How the original gas pH test strip works?

</h2>
                    </div>
                    <div className="pb-[50px] operation mt-3 px-0 md:px-[70px] lg:px-[90px] xl:px-[150px] 2xl:px-[300px]  w-full flex flex-col md:flex-row  ">
                        
                        <div className="left mr-3 flex flex-col overflow-hidden rounded-2xl w-full md:w-1/2">
                            <div className="wrap bg-[#f0f1f7]  shadow-xl ">
                                <div className="img">
                                    <Image loading="lazy" alt='水凝膜|超極生技UltraE' src='UH1-06-水凝膜720x540.webp' width={650} height={500} loader={myLoader08}></Image>
                                </div>
                                <div className="txt flex flex-col px-[30px] justify-center    p-[40px]">
                                    <b className="text-[18px] text-center font-extrabold">Patented porous gas-exchange hydrogel membrane design
</b>
                                    <p className="text-orange-500 text-center font-bold">Detect gas sample without pretreatment
</p>
                                    <p className="text-[14px]">Traditional pH measurement usually operates in aqueous phase systems. If you want to know the pH value of volatile substances in the air, you need to dissolve them in solution before measurement. With the porous gas-exchange hydrogel membrane, the pH value of volatile substances can be measured directly by hydrolyzing the gas.

</p>
                                </div>
                                
                            </div>
                            <div className="wrap  bg-[#f0f1f7] mt-4 lg:mt-[50px] shadow-xl ">
                                <div className="txt flex flex-col justify-center    p-[40px]">
                                    <b className="text-[18px] text-center font-extrabold">Fast adsorption-desorption gas exchange
</b>
                                    <p className="text-orange-500 font-bold text-center">Equilibrium is reached in a short time
</p>
                                    <p className="text-[14px]">Traditional methods of collecting gas samples and pretreating into an aqueous solution to detect the pH value cannot continuously detect the change of the gas pH value. The porous hydrogel membrane of the Humming Probe cooperates with the ion adsorption membrane, which can quickly adsorb and desorb the gas to reach an equilibrium state in a short period of time, to provide continuous detection of the pH value of the gas.

</p>
                                </div>
                                <div className="img">
                                    <Image loading="lazy" alt='氣體樣品無需預處理即可檢測|超極生技UltraE' src='UH2gas-03-氣體交換720x540-01.webp' width={650} height={500} loader={myLoader08}></Image>
                                </div>
                               

                            </div>
                        </div>
                        <div className="right mt-4 lg:mt-0 flex flex-col justify-center items-center bg-[#f0f1f7] rounded-2xl w-full md:w-1/2">
                             <div className="img">
                                <Image src='UH2gas-03.webp' alt='專利氫離子吸附膜設計|超極生技UltraE' width={600} height={700} loader={myLoader08} loading="lazy"></Image>
                            
                             </div>
                            <div className="txt flex flex-col justify-center    p-[40px]">
                                <b className="text-[18px] font-extrabold text-center">Patented hydrogen ion adsorption film design

</b>
                                <p className="text-orange-500 text-center font-bold">Precise maintenance of surface-exchangeable hydrogen ion content

</p>
                                <p className="text-[14px]">We use the patented hydrogen ion adsorption film, in addition to selectively allowing hydrogen ions in the sample to pass through, to avoid the passivation caused by the adsorption of other matrices in the sample on the surface of the electrode and simplifies the sample processing steps. Furthermore, the surface-exchangeable hydrogen ion content in the Nernst equation, which affects the Ek' value, can be precisely controlled by the design of the hydrogen ion adsorption film.



</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section_four m-[20px] md:m-10 ">
                    <div className="row grid  grid-cols-2 gap-3  mx-auto 2xl:w-[900px] xl:w-[600px] md:w-[500px] w-full md:grid-cols-4">
                        <div className="flex p-2 md:p-0 flex-col justify-center items-center">
                            <Image src='UH2gas-07-新鮮度檢測1000x1000.webp' loading="lazy" loader={myLoader08} width={190} className="rounded-xl mx-3" height={190}></Image>
                            <span className="mt-2" alt='新鮮度檢測-UltraE'>Freshness
                                examination</span>
                        </div>
                        <div className="flex p-2 md:p-0 flex-col justify-center items-center">
                            <Image src='UH2gas-08-廢氣排放檢測1000x1000.webp' loading="lazy" loader={myLoader08} width={190} alt='廢氣排放檢測|UltraE' className="rounded-xl mx-3" height={190}></Image>
                            <span className="mt-2" alt='廢棄排放檢測-UltraE'>Exhaust emission
                                examination</span>
                        </div>
                        <div className="flex p-2 md:p-0 flex-col justify-center items-center">
                            <Image src='UH2gas-09-發酵過程監測1000x1000.webp' loading="lazy" loader={myLoader08} width={190} className="rounded-xl mx-3" alt='發酵過程監測-UltraE' height={190}></Image>
                            <span className="mt-2">Fermentation process
                                monitoring</span>
                        </div>
                        <div className="flex p-2 md:p-0 flex-col justify-center items-center">
                        <Image src='UH2gas-06-連續氣體檢測1000x1000.webp' loading="lazy" loader={myLoader08} width={190} className="rounded-xl mx-3" alt='連續氣體檢測-UltraE' height={190}></Image>
                            <span className="mt-2">Continuous Gas Detection


</span>
                        </div>
                       
                    </div>
                    <div className="row flex flex-row justify-center items-center">
                        <Image className="my-4" alt='UH2-GAS-試片電極測試數據' src='test-data.webp' width={850} height={500} loader={myLoader08} loading="lazy"></Image>
                    </div>
                    
                </section>

              
                <HummingProbePH/>

                <section className="section_special px-[20px] md:px-0">
                    <h2 className="h2-u ">What makes the Humming Probe pH Strip – UH2 GAS <br/> special in addition to being free of calibration?

</h2>
                    <div className="card-wrap justify-center flex flex-wrap ">
                        <div className="card shadow-xl  md:m-3 overflow-hidden border rounded-2xl w-full md:w-[340px] p-6">
                            <div className="txt ">
                                <b className="text-[18px] text-center font-black">Disposable Design



                                </b>

                                <ReadMoreReact text="A brand-new test strip can be taken from the vial for each use and requires no time-consuming cleaning or maintenance after testing. For viscous or easily adsorbed samples or in combination with various special treatments, it breaks through the limitations of traditional glass electrodes and provides you with more applications.
"
                                    min={40}
                                    ideal={60}
                                    max={80}
                                    readMoreText="...." />
                              
                            </div>
                            <div className="img">
                                <Image loader={myLoader08} width={400} alt='不怕汙染' className="rounded-2xl mt-3" height={400} src='UH1-18-不怕汙染720x540-2.webp' placeholder="empty" loading='lazy'></Image>
                            </div>
                        </div>
                        <div className="card  shadow-xl md:m-3 overflow-hidden border rounded-2xl w-full md:w-[340px] p-6">
                            <div className="txt ">
                                <b className="text-[18px] text-center font-black">Slim detection electrode design



                                </b>
                                <ReadMoreReact text="The slim electrode design is convenient to be put in narrow channels, sampling ports, or inserted into living organisms.
"
                                    min={40}
                                    ideal={60}
                                    max={80}
                                    readMoreText="...." />
                              
                            </div>
                            <div className="img">
                                <Image width={400} alt='The calibration-free disposable pH electrode for gas/Humming Probe pH electrode for gas has a ultra small size slim electrode,can be put in narrow channels to test gas pH/Humming Probe UH2-Gas/UltraE' className="rounded-2xl mt-3" height={400} src='UH2gas-04-纖細電極設計720x540.webp' placeholder="empty" loading='lazy' loader={myLoader08}></Image>
                            </div>
                        </div>
                        <div className="card shadow-xl md:m-3 overflow-hidden border rounded-2xl  w-full md:w-[340px] p-6">
                            <div className="txt  ">
                                <b className="text-[18px] text-center font-black">Portable and easy storage


                                </b>

                                <ReadMoreReact text="The thickness of traditional glass electrode’s glass film is only 0.1-0.3mm, so it is easy to break. For storage, it needs to be continuously immersed in liquid storage solution, so special care is needed for carrying. The special design of the Humming Probe does not contain any filling liquid. Small size, portable, just put it in the vial with a tight lid, suitable for mobile outdoor testing environment.
"
                                    min={40}
                                    ideal={60}
                                    max={80}
                                    readMoreText="...." />

                            
                            </div>
                            <div className="img">
                                <Image loader={myLoader01} width={400} alt='The calibration-free disposable pH electrode for gas/Humming Probe pH electrode for gas is portable and maintenance-free/Humming Probe UH2-Gas/UltraE' className="rounded-2xl mt-3" height={400} src='便於攜帶和保存-720x540.webp' placeholder="empty" loading='lazy'></Image>
                            </div>
                        </div>
                    </div>

                </section>

               



                    <FindSPE/>

                <section className="section">
                    <div className="Container  md:px-20">
                        <div className="grid grid-cols-1">
                            <div className="rowflex items-center flex-col  justify-center">
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
                                        className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                        variants={title01}
                                    >

                                        <h2 className="h2-u">UH2-Gas pH Strip Electrode


                                        </h2>

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


                                        <div className="grid grid-cols-1 lg:grid-cols-2">
                                            <div className="p-0 xl:p-10 items-end flex flex-col">

                                                <Image loader={myLoader08} src='尺寸-UH2-GAS.webp' loading='lazy' placeholder="empty" className=" mr-0 mx-auto md:mr-[100px] w-full" alt='UX100_酸鹼檢測器-尺寸圖' width={600} height={600}></Image>

                                            </div>
                                            <div>


                                                <div className="flex w-full flex-col">
                                                    <Tabs aria-label="Options">
                                                        <Tab key="UH2-Gas pH Strip Electrode


" title="UH2-Gas pH Strip Electrode


">
                                                            <Card>
                                                                <CardBody>
                                                                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                                                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                                                                            <tbody>
                                                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                        Range:	
                                                                                    </th>
                                                                                    <td class="px-6 py-4 font-normal">
                                                                                        pH 0 - 14

                                                                                    </td>


                                                                                </tr>
                                                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                                    <th scope="row" class="px-6 py-4 font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                                                     Accuracy:                                                                                  </th>
                                                                                    <td class="px-6 py-4 font-normal">
                                                                                        ± 0.1 pH
                                                                                    </td>


                                                                                </tr>
                                                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                                    <th scope="row" class="px-6 py-4 font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                                                        Sample <br />temperature:	
                                                                                    </th>
                                                                                    <td class="px-6 font-normal py-4">
                                                                                        10-40°C( When the temperature is less than 10°C or greater than 40°C, a warning message will be displayed)

                                                                                    </td>



                                                                                </tr>
                                                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                        Dimension <br />(W x L x T ):	
                                                                                    </th>
                                                                                    <td class="px-6 py-4 font-normal">
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
                                                    <p className="text-[14px] text-left">Note: The pH Test Strip Electrode should always be capped and stored in the vial and only to be taken out when using. Each vial contains 25 pieces of pH test strip electrodes, and each box contains 2 vials.



</p>
                                                </div>





                                            </div>

                                        </div>








                                    </motion.h2>


                                </motion.div>



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
                <section className="section_others hidden md:block section">
                    <div className="Container px-0 xl:px-10 ">

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
                {/* <iframe
                    src="https://player.cloudinary.com/embed/?public_id=shoes_video&cloud_name=demo"
                    width="640"
                    height="360"
                    style="height: auto; width: 100%; aspect-ratio: 640 / 360;"
                    allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                    frameborder="0"
                ></iframe> */}
                {/* <CldVideoPlayer
                    id="drmonozsf"
                    width="1920"
                    height="1080"
                    src="samples/sea-turtle`"
                />  */}




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
