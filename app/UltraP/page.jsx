"use client"
// import fetch from "isomorphic-unfetch";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from 'next/image';
import Video from 'next-video';
// import UltraPVideo from '../../videos/UltraP.mp4'
import YouTubePlayer01 from '../../components/VideoPlayer/UltraP01en.jsx';

import YouTubePlayer02 from '../../components/VideoPlayer/UltraP02en.jsx';

import YouTubePlayer03 from '../../components/VideoPlayer/UltraP03en.jsx';

import JsonLd from '../../components/JsonLd.jsx';
// import img05 from 'https://www.ultraehp.com/images/Products-Detail-Img/UP100/up111111.png'
import { DefaultSeo } from 'next-seo';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import 'next-cloudinary/dist/cld-video-player.css';
import TextScroll from '../../components/textScroll/TextScroll01.jsx';
import { Card, CardHeader, CardBody, Tooltip, Button } from "@nextui-org/react";
// import AnimatedTabs from '../../components/TabLink/index.jsx'
import CelebrateBTN from '../../components/CelebrateBtn/index.jsx';
// 
import OthersProducts from '../../components/ReactSlick/ImageSlider2.jsx'
import { card, CardFooter } from '@nextui-org/react';
// import MobileMenu from '../../components/mobileMenu/index.jsx'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";

import SwiperSlider from '../../components/SwiperSliders/UltraPSlider.jsx'

import { Tabs, Tab} from "@nextui-org/react";
import { Table } from "@nextui-org/react";
import { useState } from "react";
// import Head from "next/head";
import CarouselThumbs from "../../components/CarouselThumbs.js";
import ProductImage from "../../components/ProductImage.js";
 


import Carousel from "../../components/Products/ProductCarousel.jsx";
import Navigation from "../../components/Products/Navigation.jsx";
import TwoColSlider from '../../components/TwoColumnSlider/app/page01.tsx'
import styles from '../../components/two-colum/twoColumn.module.scss'
import { projects } from '../../components/two-colum/data.js';

import Double from '../../components/two-colum/Double.jsx';
import ModalBrn from "../../components/ModalBtn.jsx"
import ModalBtn from "../../components/ModalBtn-1.jsx"
// import { Cloudinary } from "@cloudinary/url-gen";
import { title } from "process";
import UP10001 from '../../public/images/zensor__jogging__black_background_style--v_6.0_728c5804-1334-4d8f-b6de-fabeefed4b4f.png'
// import ModalBtn from "../../components/ModalBtn-1.jsx"
import ModalBtn01 from "../../components/ModalBtn-3.jsx"
import ModalBtn05 from "../../components/ModalBtn-5.jsx"
import ModalBtn04 from "../../components/ModalBtn-4.jsx"
import ModalBtn02 from "../../components/ModalBtn-2.jsx"

  

  
import ReactSlick from '../../components/reactSlick.jsx'
// iframe video 

import { Suspense } from "react";
import VideoComponent01 from '../../components/ui/VideoComponent01.jsx'
// import {Cloudinary} from '@cloudinary/url-gen';
// import { AdvancedVideo, lazyload, accessibility, responsive, placeholder } from "@cloudinary/react";
// import { Video, CloudinaryContext } from "cloudinary-react";
// import { useEffect, memo } from "react";
// import { useInView } from "react-intersection-observer";
// import { VideoPlayer } from "../../components/VideoPlayer.jsx";
import { CldVideoPlayer } from "next-cloudinary";
import { Cloudinary } from "@cloudinary/url-gen";
const cld = new Cloudinary({
    cloud: {
        cloudName: 'ducasbzsc'
    }
})
const myLoader = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}?p=${placeholder}`
}


const myLoader001 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}?p=${placeholder}`
}

const myLoader03 = ({ src, width, quality }) => {
    return `https://www.ultraehp.com/images/nav/${src}?w=${width}&q=${quality || 75}`
}
// import realize import 
import { fill } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { Gravity } from "@cloudinary/url-gen/qualifiers";
import { AutoFocus } from "@cloudinary/url-gen/qualifiers/autoFocus";


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
    title: 'UltraPeace-Instant H. Pylori Urea Breath Test kit-Pro',
    description: "Suitable for diagnosis and detection of Helicobacter pylori, a non-invasive detection method, and the test results are obtained immediately in 30 minutes. It can be used to evaluate the effect before and after treatment, get test results e automatically . There are two versions: professional version/home test version",
    image: "https://www.ultraehp.com/images/Products-Detail-Img/UH-1/UH1-02.webp",
    positive01: "Non-invasive testing method",
    positive02: "Obtain results within 30 minutes",
    positive03: "Assess treatment effect before and after",
    LogoImg: "https://www.ultraehp.com/images/Products-Detail-Img/UP100/ultraP-logo.webp",
    BrandName: "UltraPeace",
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": ""
    }
};

// const { onOpen, onOpenChange } = useDisclosure();
const Product = props => (
    

    <div className="relative">

        <link rel="alternate" href="https://www.ultraehp.com/ultrapeace/" hreflang="zh-Hant" />
        <link rel="alternate" href="https://www.ultraehp.com/ultrapeace/en/" hreflang="en" />

        <title>Ultrapeace｜ Instant H.pylori BUT test kit</title>

        <meta name="keywords" content='pH electrode/pH meter/acid-base test/pH test/pH measurement/pH calibration solution'/>
        <meta key="description" name="description" content="Suitable for  diagnosis and detection of Helicobacter pylori, a non-invasive detection method, and the test results are obtained immediately in 30 minutes. It can be used to evaluate the effect before and after treatment, get test results e automatically . There are two versions: professional version/home test version" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />



        <meta property="og:url" content="https://www.ultraehp.com/next/UltraP.html" />
       
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ultrapeace｜ Instant H.pylori BUT test kit" />
        <meta property="og:description" content="Suitable for  diagnosis and detection of Helicobacter pylori, a non-invasive detection method, and the test results are obtained immediately in 30 minutes. It can be used to evaluate the effect before and after treatment, get test results e automatically . There are two versions: professional version/home test version" />
        <meta property="og:image" content="https://www.ultraehp.com/images/Products-Detail-Img/UP100/%E8%BC%AA%E6%92%AD%E5%9C%9601.webp" />


        {/* <AnimatedTabs /> */}
      {/* <MobileMenu/> */}


      
        <motion.div className="dark:bg-black bg-gray-100 " initial='initial' animate='animate' exit={{ opacity: 0 }}>

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
                    "name": "UltraPeace",
                    "headline": ProductPost.title,
                    "description": ProductPost.description,
                    "datePublished": ProductPost.datePublished,
                    "author": {
                        "@type": "Person",
                        "name": "UltraPeace"
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




            <div className="fixed mobile-lang w-full top-[10px] pr-6 md:hidden flex justify-end mx-auto z-[99999] ">
                <a href="https://www.ultraehp.com/ultrapeace/">
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
                            <a className='w-full block' href="https://www.ultraehp.com/ultrapeace/en/">English</a>
                        </DropdownItem>
                        <DropdownItem key="new">
                            <a className='w-full block' href="https://www.ultraehp.com/ultrapeace ">繁體中文</a>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>


            </div>
            <div className='fullscreen relative mt-[30px] pt-[60px]'>
                <Image loader={myLoader001} src='ultraP-logo.webp' width={160} loading='lazy'  className="fixed mt-2 ml-[20px] md:ml-[90px] z-[999] top-[60px] left-10" alt='UltraP-logo' height={60}></Image>
                <div className="Navgation mt-[30px]  hidden md:block pl-[150px]"> <a href="#" className="hover:font-bold">Home</a> / <a className="hover: font-bold " href="#"> Instant H. Pylori UBT test kit</a> </div>

                <section className="section   mt-0 ">
                    <SwiperSlider />

                </section>


            </div>
           

            <div className="content-bottom md:p/x-10 xl:px-15 2xl:px-20">
                <div className="mainTitle">
                    <h2 className="">About Helicobacter pylori
</h2>
                </div>

                {/* <section>
                    <Image src='Untitled-Camera.png' loadeing='lazy' loader={myLoader} height={600} width={1920} ></Image>
                </section> */}
              




                <section className="section_about" id="features">
                  

                    <div className="Container px-5 md:px-20">
                        <div className="grid grid-cols-1">
                            <div className="row flex items-center flex-col  justify-center">
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
                                        className="text-center  text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                        variants={title01}
                                    >

                                        <div className="container flex justify-center flex-col items-center align-middle">
                                           

                                            <h3 className="h3-Hp">What is Helicobacter pylori?

</h3>
                                            <p className="container-text-wrap text-Hp">Helicobacter pylori is a type of tiny Gram-negative bacterium. It has a spiral shape and flagella, which allows it to move around in the gastric mucosa. The adhesive molecules on its surface can bind to receptors on the surface of gastric mucosal cells, helping them to attach to the gastric mucosa and avoid being washed away. These characteristics enable Helicobacter pylori to survive and colonize in the stomach environment, leading to infections and related stomach problems.
</p>
                                        </div>

                                    </motion.h2>
                                  

                                </motion.div>


                             

                            </div>
                            



                        </div>
                    </div>


                </section>
                <Image src='H.PyloriInfect.webp' loading="lazy" placeholder="empty" loader={myLoader} width={1920} height={768} alt='What is H. pylori and its pathogenic causes - UltraPeace/UltraE' className="hidden lg:block"/>

                <Image src='H.PyloriInfect向量圖-1024x576.webp' loading="lazy" placeholder="empty" loader={myLoader} width={1024} height={576} alt='What is H. pylori and its pathogenic causes - UltraPeace/UltraE' className="hidden md:block lg:hidden" />

                <Image src='H.PyloriInfect向量圖-640x640.webp' loading="lazy" placeholder="empty" loader={myLoader} width={640} height={640} alt='What is H. pylori and its pathogenic causes - UltraPeace/UltraE' className="block md:hidden" />


                <section className="section_infection px-[20px]" id="features">
                    <div className="Container  md:px-20">
                        <div className="grid grid-cols-1">
                            <div className="row  flex items-center flex-col  justify-center">
                          
                                <motion.div className="card"
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.3 }}
                                >

                                    <motion.h2
                                        className="text-center text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                        variants={title01}
                                    >

                                        <div className="container flex flex-col justify-center items-center center ">


                                            <h3 className="h3-Hp">Infection with Helicobacter pylori


                                            </h3>
                                            <p className=" container-text-wrap text-Hp">Infection with Helicobacter pylori can lead to varied responses among different individuals. Some individuals may not exhibit noticeable symptoms even if they are infected with Helicobacter pylori. Others might experience an overproduction of stomach acid due to the infection, leading to complications like antral gastritis and duodenal ulcers. Yet another group of individuals who contract Helicobacter pylori may develop chronic gastritis, further elevating the risk of developing gastric cancer.

</p>
                                          
                                        </div>

                                      

                                    </motion.h2>


                                </motion.div>
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

                                            <div className="container center relative w-full  flex justify-center">
                                              

                                                <Image loader={myLoader} loading="lazy" src='胃癌演化階段.webp' alt='The process and ratio of H. pylori infection developing into cancer or other diseases - UltraPeace/UltraE' placeholder="empty" width={1000} height={768}></Image>




                                            </div>




                                        </motion.h2>


                                    </motion.div>



                                </div>





                            </div>




                        </div>
                    </div>
                </section>


                <section className="section_global" id="features">
                    <div className="Container px-[20px] md:px-20">
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

                                        <div className="container flex flex-col justify-center items-center center ">


                                            <h3 className="h3-Hp">Nearly half of the global population is estimated to be infected with H. pylori


                                            </h3>
                                            <p className="  container-text-wrap text-Hp">The primary modes of transmission for Helicobacter pylori infection are through diet and oral contact. This bacterium can be present in the saliva, oral cavity, vomit, or feces of infected individuals. It can spread through direct contact, sharing utensils, consuming contaminated food or water, and more. Additionally, infection can occur through contact with the vomit or feces of an infected person.


                                            </p>

                                        </div>



                                    </motion.h2>


                                </motion.div>
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

                                            <div className="container center relative w-full  flex justify-center">
                                               
                                                <Image loader={myLoader} src='世界地圖-01.webp' alt="Latest global population ratio of H. pylori infection - UltraPeace/UltraE" placeholder="empty" loading="lazy" width={1000} height={768} />
                                              



                                            </div>
                                            <div>
                                                <ul>
                                                    <li className="text-xs text-gray-800 font-normal text-left">Ref：</li>
                                                    <li className="text-xs text-gray-800 font-normal text-left">1.JGH Open, Volume: 7, Issue: 1, Pages: 3-15, First published: 21 November 2022, DOI: (10.1002/jgh3.12843)</li>
                                                    <li className="text-xs text-gray-800 font-normal text-left">2. Ali Pormohammad, J Cell Physiol, 2019;234:1208–1218</li>
                                                </ul>
                                              
                                            </div>





                                        </motion.h2>


                                    </motion.div>



                                </div>





                            </div>




                        </div>
                    </div>
                </section>


                <section className="section-video">
                    <div className="container px-[15px] flex  2xl:w-[60%] xl:w-[65%] md:w-[80%] w-full mx-auto flex-col justify-center items-center">
                     
                        <div>

                            <YouTubePlayer01 />
                            <div className='w-full flex justify-center items-center'>
                            <a href='https://www.youtube.com/watch?v=SzesGisbA04' className="mt-[20px]">
                                <div className="rounded-[40px] bg-[#01a5d3] mt-2 md:mt-5 flex justify-center items-center py-2 text-white w-[150px]">
                                    YouTube Video
                                </div></a></div>
                        </div>
                    </div>
                </section>


{/* 
                <section className="section_video01 flex justify-center">
                   <div className="w-full md:w-4/5 px-[20px] lg:w-2/3  blank  ">

                      
                         
                    

                        <AdvancedVideo poster='https://www.ultraehp.com/images/UP100/極安檢測 介紹胃幽門螺旋桿菌由來-中文.webp' plugins={[lazyload({ rootMargin: '10px 20px 10px 30px', threshold: 0.25 })]} className='border rounded-xl' preload="flase" controls width={1000} height={600} cldVid={cld.video('/UP100/極安檢測_介紹胃幽門螺旋桿菌由來-中文_ifyy3m')} />
                        
                   </div>
                </section> */}
          


                <section className="section_global" id="features">
                    <div className="Container px-5 md:px-20">
                        <div className="grid grid-cols-1">
                            <div className="row  flex items-center flex-col  justify-center">

                                <motion.div className="card"
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ staggerChildren: 0.3 }}
                                >


                                    <h3 className="h3-Hp text-center">Diagnose for Helicobacter pylori Infection



                                    </h3>

                                </motion.div>
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

                                            <div >

                                              
                                                <div className="flex px-0 md:pr-[40px] md:pl-[40px]  flex-col">
                                                    <div className="overflow-x-auto w-[430px] sm:w-[550px]  md:w-[920px] lg:w-[100%] ">
                                                        <div className="inline-block   py-2 sm:px-6 lg:px-8">
                                                            <div className="overflow-x-scroll w-full">
                                                                <table
                                                                    
                                                                    className="p-2  md:ml-[0px] w-[1000px] md:w-[1100px] border text-center text-sm font-light dark:border-neutral-500">
                                                                   
                                                                    <tbody>
                                                                        <tr className="border-b dark:border-neutral-500">
                                                                            <td
                                                                                
                                                                                rowSpan={2}
                                                                                className=" 
                                                                                bg-t-color-1
                                                                                
                                                                                border-r  font-medium dark:border-neutral-800">
                                                                                Invasive / Non-invasive	
                                                                            </td>
                                                                            <td
                                                                                className=" border-r  font-medium dark:border-neutral-800 bg-t-color-2">
                                                                                Invasive
                                                                            </td>
                                                                            <td
                                                                                 colSpan={4}
                                                                                className=" border-r  font-medium dark:border-neutral-800 bg-t-color-2">
                                                                                Non-invasive	
                                                                            </td>
                                                                           
                                                                        </tr>
                                                                        <tr className="border-b dark:border-neutral-500">
                                                                            <td
                                                                                className=" border-r p-0 md:p-4  font-medium dark:border-neutral-500">
                                                                                <Image src='內視鏡.webp' 
                                                                                loader={myLoader} className="mx-auto" loading='lazy' placeholder="empty" alt="內視鏡-icon" width={80} height={80}/>
                                                                            </td>
                                                                            <td
                                                                                className=" border-r  p-0 md:p-4 dark:border-neutral-500">
                                                                                <Image src='糞便抗體檢測.webp' className="mx-auto" alt="內視鏡-icon" width={80} loader={myLoader} height={80} />
                                                                            </td>
                                                                            <td
                                                                                className=" border-r  p-0 md:p-4  dark:border-neutral-500">
                                                                                <Image src='血清檢測.webp' alt="檢測ICON_工作區-icon" width={80} loading="lazy" placeholder="empty" height={80} className="mx-auto" loader={myLoader} />
                                                                            </td>
                                                                            <td
                                                                                className=" border-r p-0 md:p-4 dark:border-neutral-500">
                                                                                <Image src='13C尿素呼吸法.webp' loader={myLoader} alt="13C尿素呼吸法-icon" width={80} loading="lazy" placeholder="empty"  height={80} className="mx-auto" />
                                                                            </td>
                                                                            <td
                                                                                className=" border-r  p-0 md:p-4 dark:border-neutral-500">
                                                                                <Image src='快速尿素呼吸法-UBTIW.webp' alt="快速尿素呼吸法-icon" width={80} loader={myLoader} loading="lazy" placeholder="empty"  height={80} className="mx-auto" />
                                                                            </td>
                                                                        </tr>
                                                                        <tr className="border-b dark:border-neutral-500">
                                                                            <td
                                                                                className=" border-r  font-medium bg-t-color-2 dark:border-neutral-500">
                                                                                Test method
                                                                            </td>
                                                                            <td
                                                                            
                                                                                className=" border-r bg-t-color-3  dark:border-neutral-500">
                                                                                Gastroscopy	
                                                                            </td>

                                                                         
                                                                            <td className=" border-r break-words dark:border-neutral-500 bg-t-color-4">Stool Antigen Test			</td>
                                                                            <td className=" border-r bg-t-color-5 break-words dark:border-neutral-500">Serologic test			</td>
                                                                            <td className="bg-t-color-6  border-r break-words dark:border-neutral-500"><sup>13</sup>C Urea breath test</td>
                                                                            <td className="bg-t-color-7  border-r break-words dark:border-neutral-500">Instant-UBT<span >IW</span></td>
                                                                           
                                                                         

                                                                        </tr>
                                                                        <tr className="border-b dark:border-neutral-500">
                                                                            <td
                                                                                className=" border-r  font-medium bg-t-color-2 dark:border-neutral-500">
                                                                                Sample type
                                                                            </td>
                                                                            <td

                                                                                className=" border-r bg-t-color-3  dark:border-neutral-500">
                                                                                Stomach tissue
                                                                            </td>


                                                                            <td className=" border-r  dark:border-neutral-500 bg-t-color-4">Fecal				</td>
                                                                            <td className=" border-r bg-t-color-5  dark:border-neutral-500">Blood		</td>
                                                                            <td className="bg-t-color-6  border-r  dark:border-neutral-500">Exhale breath		</td>
                                                                            <td className="bg-t-color-7  border-r  dark:border-neutral-500">Exhale breath
</td>



                                                                        </tr>

                                                                        <tr className="border-b dark:border-neutral-500">
                                                                            <td
                                                                                className=" border-r  font-medium bg-t-color-2 dark:border-neutral-500">
                                                                                Time
                                                                            </td>
                                                                            <td

                                                                                className=" border-r bg-t-color-3  dark:border-neutral-500">
                                                                                1-2 hr
                                                                            </td>


                                                                            <td className=" border-r bg-t-color-4  dark:border-neutral-500">3-7 days</td>
                                                                            <td className="bg-t-color-5  border-r  dark:border-neutral-500">3-7 days		</td>
                                                                            <td className="bg-t-color-6  border-r  dark:border-neutral-500">3-7 days	</td>
                                                                            <td className="bg-t-color-7  border-r  dark:border-neutral-500">  less than 1 hr
                                                                            </td>



                                                                        </tr>

                                                                        <tr className="border-b dark:border-neutral-500">
                                                                            <td
                                                                                className="bg-t-color-2  border-r  font-medium dark:border-neutral-500">
                                                                                Cost
                                                                            </td>
                                                                            <td

                                                                                className=" border-r bg-t-color-3  dark:border-neutral-500">
                                                                                High
                                                                            </td>


                                                                            <td className=" border-r bg-t-color-4  dark:border-neutral-500">Low</td>
                                                                            <td className="bg-t-color-5  border-r  dark:border-neutral-500">Low		</td>
                                                                            <td className="bg-t-color-6  border-r  dark:border-neutral-500">Medium	</td>
                                                                            <td className="bg-t-color-7  border-r  dark:border-neutral-500"> Medium
                                                                            </td>



                                                                        </tr>
                                                                        <tr className="border-b dark:border-neutral-500">
                                                                            <td
                                                                                className=" border-r  font-medium bg-t-color-2 dark:border-neutral-500">
                                                                                Advantage/ Disadvantage
                                                                            </td>
                                                                            <td

                                                                                className=" border-r bg-t-color-3  dark:border-neutral-500">
                                                                                Uncomfortable
                                                                            </td>


                                                                            <td className=" border-r bg-t-color-4  dark:border-neutral-500">Available before and after teatment		</td>
                                                                            <td className="bg-t-color-5  border-r  dark:border-neutral-500">Not Available after treatment.Does not distinguish <br/>between
                                                                                active and past infection	<br></br>
	</td>
                                                                            <td className="bg-t-color-6  border-r  dark:border-neutral-500">Available before and after teatment			</td>
                                                                            <td className="bg-t-color-7  border-r  dark:border-neutral-500"> Available before and after teatment	

                                                                            </td>



                                                                        </tr>
                                                                        <tr className="border-b dark:border-neutral-500">
                                                                            <td
                                                                                className=" border-r  font-medium bg-t-color-2 dark:border-neutral-500">
                                                                                Accuracy
                                                                            </td>
                                                                            <td

                                                                                className=" border-r bg-t-color-3  dark:border-neutral-500">
                                                                               High
                                                                            </td>


                                                                            <td className=" border-r bg-t-color-4  dark:border-neutral-500">Low	</td>
                                                                            <td className="bg-t-color-5  border-r  dark:border-neutral-500">Low		</td>
                                                                            <td className="bg-t-color-6  border-r  dark:border-neutral-500">High			</td>
                                                                            <td className="bg-t-color-7  border-r  dark:border-neutral-500"> High

                                                                            </td>



                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>



                                            </div>
                                            




                                        </motion.h2>


                                    </motion.div>



                                </div>





                            </div>




                        </div>
                    </div>
                </section>




                <section className="section_Detection " >
                    <div className="Container px-[20px] md:px-20">
                        <div className="grid grid-cols-1">
                            <div className="row  flex items-center flex-col  justify-center">
                                <h2 className=" mainTitle">UltraPeace-instant<br />Helicobacter pylori urea breath test kit</h2>

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

                                        <div className="container flex flex-col px-4 justify-center items-center center ">


                                            <h3 className="h3-Hp">Detection Principle




                                            </h3>
                                            <p className="  container-text-wrap text-Hp">When the stomach is infected with Helicobacter pylori. The orally given urea is hydrolysed by the enzyme urease of H. pylori and carbon dioxide and ammonia gas is expired in breath . By analyzing the concentration of ammonia gas expired through breath and comparing it with the baseline value before drinking urea. It can help to determine the presence of Helicobacter pylori infection.


                                            </p>

                                        </div>



                                    </motion.h2>


                                </motion.div>
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

                                            <div className="container center relative w-full  flex justify-center">


                                                <Image src='HPY胃檢測說明-英文.png' alt='Comparison of UltraPeace detection principle and C13/14 H. pylori urea breath test principle - UltraE' placeholder="empty" loader={myLoader} loading="lazy" width={1000} height={768}></Image>





                                            </div>





                                        </motion.h2>


                                    </motion.div>



                                </div>





                            </div>




                        </div>
                    </div>
                </section>
                <section className="section_Technology " >
                    <div className="Container px-[20px] md:px-20">
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

                                        <div className="container flex flex-col justify-center items-center center ">


                                            <h3 className="h3-Hp">Core Patent Technology<br/>
                                                Disposable Gas pH Electrochemical Test Strip



                                            </h3>
                                            <p className=" container-text-wrap text-Hp">Utilizing patented developed nanoporous hydrogel membrane to capture ammonia gas from exhaled breath, the gas undergoes hydrolysis on the electrode surface. Through electrochemical detection, the pH value of the gas is obtained, enabling the calculation of ammonia gas concentration in the exhaled breath.


                                            </p>

                                        </div>



                                    </motion.h2>


                                </motion.div>
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

                                            <div className="container center relative w-full  flex justify-center">

                                                <Image placeholder="empty" loader={myLoader} loading="lazy" alt="Structure display of patented test strips of UltraPeace H. pylori urea breath test system - UltraE" src='拋棄式氣體pH電化學試片.png' width={1220} height={768}></Image>




                                            </div>





                                        </motion.h2>


                                    </motion.div>



                                </div>





                            </div>




                        </div>
                    </div>
                </section>
                {/* <section className="section_video02 section  flex justify-center">
                    <div className="w-full md:w-4/5 lg:w-2/3 p-3 lg:p-5  ">

                     

                        <AdvancedVideo poster='https://www.ultraehp.com/images/UP100/3C-極安檢測核心技術介紹-中文版.webp' plugins={[lazyload({ rootMargin: '10px 20px 10px 30px', threshold: 0.25 })]} className='border rounded-xl' preload="flase" controls width={1000} height={600}  cldVid={cld.video('/UP100/3C-極安檢測核心技術介紹-中文版_p6omsc')} />
                    </div>
                </section> */}


                <section className="section-video">
                    <div className="container px-[15px] flex  2xl:w-[60%] xl:w-[65%] md:w-[80%] w-full mx-auto flex-col justify-center items-center">

                        <div>

                            <YouTubePlayer02 />
                            <div className='w-full flex justify-center items-center'>
                            <a href='https://www.youtube.com/watch?v=2Orm5d1GOp4' className="mt-[20px]">
                                <div className="rounded-[40px] bg-[#01a5d3] mt-2 md:mt-5 flex justify-center items-center py-2 text-white w-[150px]">
                                    YouTube Video
                                </div></a>

                                </div>
                        </div>
                    </div>
                </section>





                <section className=" section_FastCheck ">
                    <div className="Container px-[20px]  md:px-20">
                        <div className="grid grid-cols-1">
                            <div className="row">

                                <h2 class="mainTitle">UltraPeace vs <sup>13</sup>C Urea Breath Test？</h2>
                            </div>
                           
                            <div className="row ">
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
                                     

                                        <div className="relative w-full grid grid-cols-1 lg:grid-cols-2 px-0 md:px-10 lg:px-20">
                                           
                                            <div className="flex flex-col ">
                                               
                                                <h3 class="h3-Hp">Replace normal urea with <br/>isotope-labeled<sup>13</sup>C<span></span></h3>
                                                <div className="px-0 lg:px-10 flex flex-col items-center m-3  ">
                                                    <Image placeholder="empty" loading="lazy" alt="Comparison of UltraPeace detection principle and C13/14 H. pylori urea breath test principle - UltraE" src='常規尿素替代C13尿素.webp' loader={myLoader} width={600} height={600}></Image>

                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <h3 class="h3-Hp">No need to send samples to a testing center;<br/> Get report on-site within 30 min</h3>
                                                <div className="px-0 lg:px-10 m-3 flex  flex-col items-center ">
                                                    <Image loader={myLoader} src='30分鐘取報告.webp' placeholder="empty" alt='Comparison of detection time between UltraPeace and C13/14 H. pylori urea breath test methods - UltraE' loading="lazy" width={600} height={600}></Image>

                                                </div>
                                            </div>
                                          

                                           




                                        </div>




                                    </motion.h2>


                                </motion.div>



                            </div>



                        </div>
                    </div>
                </section>




                <section className="">
                    <div className="Container px-5 md:px-20">
                        <div className="grid grid-cols-1">
                            <div className="row">

                                <h2 class="mainTitle">Two versions of the Rapid BUT Test Kit
                                    <br />meet different user needs
</h2>
                            </div>
                            
                            <div className="row ">
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


                                        <div className="relative w-full grid grid-cols-1 lg:grid-cols-2 px-0 lg:px-20">

                                            <div className="flex flex-col ">

                                                <h3 class="h3-Hp">One-Button <br/>
                                                    automatic detection
</h3>
                                                <div className="px-0 lg:px-10 flex p-0 lg:p-7 flex-col items-center m-0 lg:m-3  ">
                                                    <Image placeholder="empty" src='專業版產品圖-01.png' loading="lazy" alt='Display of all components of the professional H. pylori urea breath test system - UltraPeace/UltraE' loader={myLoader} width={600} height={600}></Image>

                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <h3 class="h3-Hp ">Patented integrated test strips, <br/>
                                                    No meter required
</h3>
                                                <div className="px-0 lg:px-10 flex p-0 lg:p-7 flex-col items-center m-0 lg:m-3  ">
                                                    <Image placeholder='empty' loading="lazy" src='家用版產品圖-01.png' width={600} alt='Display of all components of the home version H. pylori urea breath test system - UltraPeace/UltraE' loader={myLoader} height={600}></Image>

                                                </div>
                                            </div>







                                        </div>




                                    </motion.h2>


                                </motion.div>



                            </div>



                        </div>
                    </div>
                </section>



              
                <section className="section">
                    
                    <div className="Container px-5 md:px-20">
                        <div className="grid grid-cols-1">
                            <div className="row">
                                <h2 class="mainTitle blank02">How to use UltraPeace UBT kit?
</h2>
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

                                      <div className="flex  justify-center align-middle items-center flex-col">
                                            <Image src='專業版使用說明.png' placeholder="empty" loading="lazy" alt='Usage methods for professional and home versions of H. pylori urea breath test - UltraPeace/UltraE' loader={myLoader} width={1100} height={600}></Image>
                                            <Image className="mt-5" alt="Usage methods for professional and home versions of H. pylori urea breath test - UltraPeace/UltraE" src='家用版使用說明.png' placeholder="empty" loader={myLoader} loading="lazy" width={1100} height={600}></Image>
                                      </div>

                                      <span className="text-[14px] text-center font-normal">For Research Only</span>




                                    </motion.h2>


                                </motion.div>



                            </div>



                        </div>
                    </div>
                </section>
                <section className="section-video mb-[50px] md:mb-0">
                    <div className="container px-[15px] flex  2xl:w-[60%] xl:w-[65%] md:w-[80%] w-full mx-auto flex-col justify-center items-center">

                        <div>

                            <YouTubePlayer03/>

                        <div className='w-full flex justify-center items-center'>
                                <a href='https://www.youtube.com/watch?v=jDeb07Xml58' className="mt-[20px]">
                                    <div className="rounded-[40px] bg-[#01a5d3] mt-2 md:mt-5 flex justify-center items-center py-2 text-white w-[150px]">
                                        YouTube Video
                                    </div></a>
                        </div>
                        </div>
                    </div>
                </section>


                {/* <section className="section_video03 section  flex justify-center">
                    <div className="w-full md:w-4/5 lg:w-2/3 p-3 lg:p-5  ">

                     

                        <AdvancedVideo poster='https://www.ultraehp.com/images/UP100/極安檢測 胃幽門桿菌產品介紹-中文版.webp' plugins={[lazyload({ rootMargin: '10px 20px 10px 30px', threshold: 0.25 })]} className='border rounded-xl' preload="flase" controls width={1000} height={600} cldVid={cld.video('/UP100/極安檢測_胃幽門桿菌產品介紹-中文版20231127_ojx0jd')} />
                    </div>
                   
                </section> */}

                {/* <section>
                    <Image src='A2343211_TD03_V1_3078x.png' loadeing='lazy' loader={myLoader} height={600} width={1920} ></Image>
                </section> */}

                <section className="section_others section hidden md:block">
                    <div className="Container ">

                        <div className="grid grid-cols-1">
                            <div className="row  relative mt-20 flex items-center flex-col  justify-center">
                                {/* <div className="absolute z-[9] top-[-50px] right-[150px] ">
                                    <Image src='untitled62.png' loader={myLoader} width={300} height={120} loading='lazy' className="carousel-img mb-[120px] "></Image>

                                </div>
                                <div className="absolute z-[9] top-[-10px] left-[150px] ">
                                    <Image src='bag.png' loader={myLoader} width={250} height={250} loading='lazy' className="carousel-img mb-[200px]"></Image>

                                </div> */}

                              
                          


                                <motion.div className="card w-full"
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
                            <div className="row mt-[26px] sm:px-[30px] xl:px-[80px]">
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
