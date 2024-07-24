"use client"
// import fetch from "isomorphic-unfetch";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from 'next/image';
import JsonLd from '../../components/JsonLd.jsx';
import { Card, CardHeader, CardBody, Tooltip, Button } from "@nextui-org/react";

import YouTubePlayer from '../../components/VideoPlayer/UX200en.jsx';

import { card, CardFooter } from '@nextui-org/react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

import OthersProducts from '../../components/ReactSlick/ImageSlider2.jsx'

import { Tabs, Tab} from "@nextui-org/react";

import { useState } from "react";
import CarouselThumbs from "../../components/CarouselThumbs.js";
import SwiperSlider from '../../components/SwiperSliders/page-en.jsx'
import { AdvancedVideo, lazyload, accessibility, responsive, placeholder } from "@cloudinary/react";

import Navigation from "../../components/Products/Navigation.jsx";
import ModalBrn from "../../components/ModalBtn.jsx"
import ModalBtn from "../../components/ModalBtn-1.jsx"
import ModalBtn01 from "../../components/ModalBtn-3.jsx"
import ModalBtn05 from "../../components/ModalBtn-5.jsx"
import ModalBtn04 from "../../components/ModalBtn-4.jsx"
import ModalBtn02 from "../../components/ModalBtn-2.jsx"
import FindSPE from '../../components/FindSPE.jsx'
import WhenUse from '../../components/WhenUse.jsx'

// import { Cloudinary } from "@cloudinary/url-gen";

// import ReactSlick from '../../components/reactSlick.jsx'


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

  const vimeoVideoUrl = 'https://player.vimeo.com/video/959901530?badge=0&autopause=0&player_id=0&app_id=58479';
  const videoTitle = 'UX200中文版'; // Replace with your video title


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
    title: 'Humming Probe UX200 CALIBRATION- FREE pH METER',
    description: "Continuous detection trend calibration-free micro disposable pH meter acid-base detector UX200 with a disposable electrode requires only ultra small sample requirements, and can complete the acid-base test without pH standard solution calibration, and provides continuous acid base detection trend display, suitable for very precious samples and easily contaminated or passivated pH electrode surfaces and special samples. It can be used for continuous detection of exhaust gas, control of experimental conditions, and acid-base titration. Touch screen, intuitive operation, and suitable for outdoor use without power supply. pH sensor/pH meter/pH meter/pH measurement system/pH detector/pH value detector/portable pH meter/desktop pH meter/pH measurement system/pH meter/pH electrode/pH meter/acid-base test/pH measurement/pH test",
    image: "https://www.ultraehp.com/images/Products-Detail-Img/UX200/UX200.png",
    positive01: "7” Color Touchscreen",
    positive02: "Algorithm automatic end point judgment",
    positive03: "Waterproof: IP54",
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

        <link rel="alternate" href="https://www.ultraehp.com/hummingprobe/UX200.html" hreflang="zh-Hant" />
        <link rel="alternate" href="https://www.ultraehp.com/hummingprobe/en/UX200.html" hreflang="en" />

          {/* metadata */}
        <title>Continuous detection trend calibration-free micro disposable pH meter acid-base detector｜Humming Probe UX200</title>
        <meta key="description" name="description" content="Continuous detection trend calibration-free micro disposable pH meter acid-base detector UX200 with a disposable electrode requires only ultra small sample requirements, and can complete the acid-base test without pH standard solution calibration, and provides continuous acid base detection trend display, suitable for very precious samples and easily contaminated or passivated pH electrode surfaces and special samples. It can be used for continuous detection of exhaust gas, control of experimental conditions, and acid-base titration. Touch screen, intuitive operation, and suitable for outdoor use without power supply. pH sensor/pH meter/pH meter/pH measurement system/pH detector/pH value detector/portable pH meter/desktop pH meter/pH measurement system/pH meter/pH electrode/pH meter/acid-base test/pH measurement/pH test" />
        <meta name="keywords" content="pH sensor/pH meter/pH meter/pH measurement system/pH detector/pH value detector/portable pH meter/desktop pH meter/pH measurement system/pH meter/pH electrode/pH meter/acid-base test/pH measurement/pH test" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />


        {/* OG metadata */}
        <meta property="og:url" content="https://www.ultraehp.com/hummingprobe/UX200.html" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Continuous detection trend calibration-free micro disposable pH meter acid-base detector｜Humming Probe UX200" />
        <meta property="og:description" content="Continuous detection trend calibration-free micro disposable pH meter acid-base detector UX200 with a disposable electrode requires only ultra small sample requirements, and can complete the acid-base test without pH standard solution calibration, and provides continuous acid base detection trend display, suitable for very precious samples and easily contaminated or passivated pH electrode surfaces and special samples. It can be used for continuous detection of exhaust gas, control of experimental conditions, and acid-base titration. Touch screen, intuitive operation, and suitable for outdoor use without power supply. pH sensor/pH meter/pH meter/pH measurement system/pH detector/pH value detector/portable pH meter/desktop pH meter/pH measurement system/pH meter/pH electrode/pH meter/acid-base test/pH measurement/pH test" />
        <meta property="og:image" content="https://www.ultraehp.com/images/Products-Detail-Img/UX200/UX200.png" />



      

        <motion.div className="dark:bg-black  bg-gray-100 " initial='initial' animate='animate' exit={{ opacity: 0 }}>


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

            <div class="">
              
            </div>
            <div className="fixed mobile-lang w-full top-[10px] pr-6 md:hidden flex justify-end mx-auto z-[99999] ">
                <a href="https://www.ultraehp.com/hummingprobe/UX200.html">
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
                            <a className='w-full block' href="https://www.ultraehp.com/hummingprobe/en/UX200.html">English</a>
                        </DropdownItem>
                        <DropdownItem key="new">
                            <a className='w-full block' href="https://www.ultraehp.com/hummingprobe/UX200.html ">繁體中文</a>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>


            </div>
            <Navigation />
            <div className='fullscreen relative pt-0  md:pt-[60px]'>
                <Image loader={myLoader001} src='company-logo.webp' width={160} loading='lazy'  className="fixed mt-2 ml-[20px] md:ml-[90px] z-[999] top-[60px] left-10" alt='UltraP-logo' height={60}></Image> 
                <section className="section   mt-0 md:mt-[150px]">
                    <div className="Navgation mb-[30px] hidden md:block mt-[100px] pl-0 lg:pl-[150px]"> <a href="https://www.ultraehp.com/hummingprobe/en/index.html" className="hover:font-bold">Home</a> / <a className="hover: font-bold " href='#'>Humming Probe UX200
                        </a> </div>
                    <div className="container w-full flex px-[0px] md:px-[20px] md:mt-0 mt-[100px] xl:px-[70px] flex-col md:flex-row justify-start items-start">

                        <div className="left  w-full md:w-1/2">
                          
                            <SwiperSlider />
                            


                        </div>

                        <div className="right flex justify-center  md:justify-between   w-full md:w-1/2 flex-col md:pl-[50px] xl:pl-[80px] h-[480px]">
                         <div className="txt ">
                                <h1 className="h1-u md:mt-0 mt-[115px]">Humming Probe UX200
<br></br>
                            </h1>
                                <h3 className="model-u">CALIBRATION-FREE pH METER

                            </h3>
                                <p className="text-middle-u">pH meter/pH Measurement system

                            </p>
                            <ul>
                                    <li>Compatible with a full range of world's first calibration-free pH strip electrodes

</li>
                                    <li>・pH chart

                                </li>
                                    <li>・7” Color Touchscreen

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
                            <div className="btn-wrap ">

                                <div className="w-full md:w-3/4 flex flex-col md:flex-row">
                                    <ModalBtn02 />

                                </div>



                            </div>


                           
                            
                        </div>
                        
                    </div>
                  
                </section>


            </div>

            

            <div className="content-bottom ">
             
               

                
                <section className="section_Accessories px-[20px] sm:px-[70px] xl:px-[200px]" id='inside'>


                    <div className="flex flex-col w-full lg:px-[60px]  xl:px-[200px] bg-gray-150">
                        <div className="w-full text-center mb-3 flex  items-center justify-center flex-col ">
                            <h2 className="h2-u">
                                Description
                            </h2>
                          
                            <p className="">
                                Product
                               


                            </p>
                        </div>
                        
                        
                    </div>





                    <div className="row mx-auto w-full xl:w-[1000px]">
                        <Image src='UX200-09-開箱1920x768.webp' height={600} className="mx-auto" loading="lazy" alt='開箱/UX200' loader={myLoader} width={1000} placeholder="empty"></Image>
                        <b className="text-[26px] mt-[24px] font-extrabold">What's Include ?</b>
                        <ul>
                            <li>
                                1.UX200: pH masurement meter (1 unit)


                            </li>
                            <li>
                                2.UH1: pH test strip electrode (10 pcs in a vial)

                            </li>
                            <li>3.Strip extended connection cable (1 pc)

</li>
                            <li>4.Charger (1 pc)

</li>
                            <li>5.Brief user manual

</li>
                            <li>6.Micro USB cable for charging and data transfer. (1 pc)


                            </li>
                            <li>7.User manual is built inside the meter storage and can be copied to computer for reading.

                            </li>
                        </ul>
                    </div>


                
                </section>






               <section className="section-video">
                    <div className="container px-[15px] flex  2xl:w-[60%] xl:w-[65%] md:w-[80%] w-full mx-auto flex-col justify-center items-center">
                        <div className="row flex flex-col justify-center items-center mb-0  md:mb-5">

                            <h2 className="h2-u">Operation</h2>

                            <a href='https://www.youtube.com/watch?v=Fw0HVXRWcaQ&feature=youtu.be'>
                                <div className="rounded-[40px] bg-[#01a5d3] flex justify-center items-center py-2 text-white w-[150px]">
                                    YouTube Video
                                </div></a>

                        </div>
                        <div>
                          
                            <YouTubePlayer />
                        </div>
                    </div>
                </section>



              
                <section className="section_Accessories" id='inside'>


                    <div className="flex flex-col w-full lg:px-[60px]  xl:px-[200px] bg-gray-150">
                        <div className="w-full text-center mb-3 flex  items-center justify-center flex-col ">
                            <h2 className="h2-u">
                                Appearance
                            </h2>

                            <p className="">
                                Product 


                            </p>
                        </div>
                        <div className="row">
                            <Image src='UX200-en.webp' className="mx-auto" alt='Appearance/UX200' loading="lazy" height={600} width={800} placeholder="empty" loader={myLoader}></Image>
                        </div>


                    </div>



                </section>
                {/* <section className="section_video01 section  m-0 p-0 flex justify-center">
                
                    <div className="container w-full md:w-4/5 lg:w-2/3  ">
                        <div className="row flex flex-col justify-center items-center mb-0  md:mb-5">

                            <h2 className="h2-u">Operation</h2>
                            <p>Video</p>

                        </div>
                        <div className="row">


                            <AdvancedVideo poster='https://www.ultraehp.com/images/Ultra Video/UX200/中文版/YouTube-UX200-中文.webp' plugins={[lazyload({ rootMargin: '10px 20px 10px 30px', threshold: 0.25 })]} className='rounded-2xl mx-auto' preload="flase" controls width={1000} height={600} cldVid={cld.video('/UX200Video/UX200-video中文_w6yl75')} /> 

                        </div>










                    </div>
                </section> */}
                
                <section className="section section_clear_display" id="features">
                    <div className="Container md:px-20">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="flex justify-center items-center">
              
                                       <div className="container mx-auto md:w-full  flex flex-col justify-center items-center center">
                                    <h3 className="h3-u text-center">Meeting the Need for Continuous Recording
</h3>
                                    <p className=" w-full text-center lg:w-2/3 ">In addition to all the functions of the UX100, the UX200 has an added pH/potential trend recording curve, and the potential resolution has been improved to 0.1 mV. The end point of acid-base titration can be more accurately determined. Meets the need for continuous or frequent recording of pH changes. Users do not need to stay beside the instrument to continuously record data, and the pH changes at each time point can be retraced during the experimental stage at any time.</p>
                                       </div>
                            </div>
                            <div className="">
                              
                                        <div className="">
                                          

                                            <Image
                                                loading="lazy"
                                                placeholder="empty"
                                                loader={myLoader}
                                                src="UX200-04-滿足持續記錄-02-1000x1000.webp"
                                                alt="Picture of the author"
                                                className="rounded-2xl border-none"
                                                width={800}
                                                height={500}
                                            />





                            </div>


                            
                        </div>
                    </div>
                    <div className="row">

                            <div className="grid grod-cols-1 md:grid-cols-4 mx-auto md:w-full   lg:w-2/3  ">
                                <div className="p-1 mx-auto lg:p-5">
                                    <Image loader={myLoader} loading="lazy"
                                        placeholder="empty" width={400} height={400} src='UX200.webp' alt='Prepare buffer solution'></Image>
                                    <p className=" text-[16px] text-center">Acid-base titration curve

                                    </p>
                                </div>

                                <div className="p-1 mx-auto lg:p-5">
                                    <Image loader={myLoader} loading="lazy"
                                        placeholder="empty" width={400} height={400} src='application-2.webp' alt='Wastewater Discharge'></Image>
                                    <p className="text-[16px] text-center">Detection

                                    </p>
                                </div>
                                <div className="p-1 mx-auto lg:p-5">
                                    <Image loader={myLoader} placeholder="empty" loading="lazy" width={400} height={400} src='application-3.webp' alt='Electroplating
pH control'></Image>
                                    <p className="text-[16px] text-center">Electroplating
                                        pH control

                                    </p>
                                </div>
                                <div className="p-1 mx-auto lg:p-5">
                                    <Image loader={myLoader} loading="lazy" placeholder="empty" width={400} height={400} src='application-1.webp' alt='Aquaculture Water
Quality Control'></Image>
                                    <p className="text-[16px] text-center">Aquaculture Water
                                        Quality Control</p>
                                </div>
                            </div>




                        </div>

                    </div>
                </section>
                <section>
                    <div className="container section px-5 lg:px-[50px] xl:px-[100px]">
                        <div className="row flex flex-col md:flex-row  justify-center  w-full">
                            <div className="right mt-3 md:mt-0  flex md:hidden  items-center  pt-[20px] md:pt-0  mx-auto w-4/5 md:w-3/4 xl:w-1/2">
                                <div className="container-text-wrap mx-auto">
                                    <h3 className="h3-u text-center">Intuitive operation guide

                                    </h3>
                                    <p className="text-middle-u text-center">With 7 inch of full color touch screen and clear graphic menu that are intuitive to doing the measurement the right away.

</p>
                                </div>

                            </div>
                            <div className="left mt-2 md:mt-0 p-0 md:p-10 w-full md:w-3/4  xl:w-2/3">
                                <Image height={300} loader={myLoader} placeholder='empty'  loading='lazy' alt='Intuitive operation guide
' className="mx-auto" width={500} src='UX200-11-操作指引02-720x540.webp'></Image>

                            </div>
                            <div className="right mt-3 md:mt-0  hidden md:flex  items-center  pt-[20px] md:pt-0  mx-auto w-4/5 md:w-3/4 xl:w-1/2">
                                <div className="container-text-wrap mx-auto">
                                    <h3 className="h3-u text-center">Intuitive operation guide

                                    </h3>
                                    <p className="text-middle-u text-center">With 7 inch of full color touch screen and clear graphic menu that are intuitive to doing the measurement the right away.

</p>
                                </div>
                            
                            </div>
                            
                        </div>
                        <div className="row flex flex-col md:flex-row  justify-center  w-full">
                           
                            <div className="right mt-3 md:mt-0 flex items-center  pt-[20px] md:pt-0  mx-auto w-4/5 md:w-3/4 xl:w-1/2">
                                <div className="container-text-wrap mx-auto">
                                    <h3 className="h3-u text-center">Algorithm automatic interpretation of the end point

                                    </h3>
                                    <p className="text-middle-u text-center">Generally, the final pH value is determined from when the measured value stops fluctuating on the traditional pH meter. The UX100 uses an intelligent end point identification function (Auto read) and an algorithm to automatically determine the results, which can display the measurement results faster and more accurately, reducing human error.

</p>
                                </div>

                            </div>
                            <div className="left mt-2 md:mt-0 p-0 md:p-10 w-full md:w-3/4  xl:w-2/3">
                                <Image loader={myLoader} height={300} placeholder='empty' loading='lazy' width={500} className="mx-auto" src='UX200-03-智能結果判讀720x540.webp' alt='智能結果判讀'></Image>

                            </div>

                        </div>

                        <div className="row flex flex-col md:flex-row  justify-center  w-full">
                            <div className="right mt-3 md:mt-0  flex md:hidden  items-center  pt-[20px] md:pt-0  mx-auto w-4/5 md:w-3/4 xl:w-1/2">
                                <div className="container-text-wrap mx-auto">
                                    <h3 className="h3-u text-center">Power-on Self-checking Calibration
                                        Make sure the reliability for every measurement
                                    </h3>
                                    <p className="text-middle-u text-center">
                                        The Humming Probe contains built-in simulate electrodes for self-checking and validating and will conduct comprehensive self-checking every time it is turned on to eliminate the possibility of system errors.</p>
                                </div>

                            </div>
                            <div className="left mt-2 md:mt-0 p-0 md:p-10 w-full md:w-3/4  xl:w-2/3">
                                <Image loader={myLoader} height={300} placeholder='empty' loading='lazy' width={500} className="mx-auto" src='UX100-開機自檢校正720x540.webp' alt='智能結果判讀'></Image>

                            </div>

                            <div className="right mt-3 md:mt-0 md:flex items-center  hidden  w-full md:w-1/2">
                                <div className="container-text-wrap  mx-auto">
                                    <h3 className="h3-u text-center">Power-on Self-checking Calibration
                                        Make sure the reliability for every measurement
                                    </h3>
                                    <p className="text-middle-u text-center">
                                        The Humming Probe contains built-in simulate electrodes for self-checking and validating and will conduct comprehensive self-checking every time it is turned on to eliminate the possibility of system errors.</p>
                                </div>

                            </div>
                         

                        </div>


                        
                    </div>
                </section>
                <section className="section">
                    <div className="Container px-0 md:px-[20px] xl:px-[200px] ">
                        <div className="grid grid-cols-1">
                         
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

                                <div className="relative w-full grid md:grid-cols-2 ">

                                    <div className="mt-5 px-0 md:px-3">
                                        <Card className="py-4">

                                            <CardBody className="overflow-visible py-2">
                                                <div className="img mt-5">
                                                    <Image placeholder="empty" loader={myLoader01} loading='lazy' src='UX100-img04.webp' width={600} alt="可透過USB連接至電腦" height={600}></Image>
                                                </div>
                                                <div className="txt flex flex-col justify-center items-center mt-4 px-10">
                                                    <h3 className="text-[26px]">
                                                        Strip Port Mode<br/>
                                                        (Strip Port):



                                                    </h3>
                                                    <p className=" text-center">Dip the pH strip in the sample solution or drop the sample on the pH strip
                                                        then insert the pH strip into the pH Meter for pH detection.</p>

                                                </div>

                                            </CardBody>
                                        </Card>
                                    </div>
                                    <div className="mt-5 px-0 md:px-3">
                                        <Card className="py-4">

                                            <CardBody className="overflow-visible py-2">
                                                <div className="img mt-5">
                                                    <Image loader={myLoader} src='UX200-img05.webp' placeholder="empty" loading='lazy' alt="高效充電電池系統
" width={600} height={600}></Image>
                                                </div>
                                                <div className="txt flex flex-col justify-center items-center mt-4 px-10">
                                                    <h3 className="text-[26px] text-center">
                                                        Cable Socket Mode<br/>
                                                        (Cable Socket)


                                                    </h3>
                                                  


                                                </div>
                                                <p className="text-center ">Strip port can be extended by cable socket that<br/> is similar to traditional pH meter measurement.

                                                </p>
                                               

                                            </CardBody>
                                        </Card>
                                    </div>







                                </div>


                                {/* 

                                    </motion.h2>


                                </motion.div> */}



                            </div>



                        </div>
                    </div>
                </section>
                <section className="section_banner02 section h-[450px] relative mt-[50px] overflow-hidden lg:h-[576px] 2xl:h-[700px]">
                    <Image className="absolute hidden xl:block z-[8] top-0 left-0" src='UX200-10-方便攜帶-無字版-1920x768.webp' placeholder='empty' loader={myLoader} loading='lazy' alt="輕鬆手持方便攜帶" width={1920} height={768}></Image>
                    <Image className="absolute hidden sm:block xl:hidden z-[8] top-0 left-0" src='UX100-11-方便攜帶-無字版-1024x576.webp' placeholder='empty' loader={myLoader} loading='lazy' alt="輕鬆手持方便攜帶" width={1024} height={576}></Image>
                    <Image className="absolute block sm:hidden z-[8] top-0 left-0" src='UX100-11-方便攜帶-無字版-640x640.webp' placeholder='empty' loader={myLoader} loading='lazy' alt="輕鬆手持方便攜帶" width={640} height={640}></Image>


                    <div className="txt  absolute left-[15px] md:left-[50px] z-[8] w-[90%] md:w-2/5 top-[25%] md:top-[14%] lg:top-[33%]">
                        <h3>Easy for hand-held, portable

                        </h3>

                        <p className="text-white xl:text-[18px] text-left mx-auto">Lightweight 540g, size suitable for handheld operation. Leather texture anti-slip design is easy to operate with one hand and disposable Humming Probe pH electrode <a href="https://www.ultraehp.com/hummingprobe/en/UX100.html" className="hover:text-orange-500">(learn more)</a>is portable without protection. </p>
                    </div>
                </section>
                <section>
                    <div className="container section px-5 lg:px-[50px] xl:px-[100px]">
                        <div className="row  mt-4 md:mt-0 flex flex-col md:flex-row  justify-center  w-full">
                            <div className="right mt-3 md:mt-0 flex md:hidden items-center w-full md:w-1/2">
                                <div className="container-text-wrap mx-auto">
                                    <h3 className="h3-u text-center">Can provide clear display in various fields

                                    </h3>
                                    <p className="text-middle-u text-center">The color monitor is large and clear, so you can find relevant information at a glance. The 350 cd/m2 brightness LCD screen with backlight allows you to read results or browse menus in direct sunlight or in dark areas.

</p>
                                </div>

                            </div>
                            <div className="left mt-2 md:mt-0 p-0 md:p-10 w-full md:w-1/2">
                                <Image height={300} loader={myLoader} placeholder='empty' loading='lazy' alt='Can provide clear display in various fields
' className="mx-auto" width={500} src='UX200-05-手拿方便-720x540.webp'></Image>

                            </div>
                            <div className="right hidden  md:flex items-center w-full md:w-1/2">
                                <div className="container-text-wrap mx-auto">
                                    <h3 className="h3-u text-center">Can provide clear display in various fields

                                    </h3>
                                    <p className="text-middle-u text-center">The color monitor is large and clear, so you can find relevant information at a glance. The 350 cd/m2 brightness LCD screen with backlight allows you to read results or browse menus in direct sunlight or in dark areas.</p>
                                </div>

                            </div>

                        </div>
                        <div className="row  mt-4 md:mt-0 flex flex-col md:flex-row  justify-center  w-full">

                            <div className="right mt-3 md:mt-0 flex items-center  w-full md:w-1/2">
                                <div className="container-text-wrap mx-auto">
                                    <h3 className="h3-u text-center">High Efficiency Rechargeable Battery System

                                    </h3>
                                    <p className="text-middle-u text-center">The built-in high-efficiency rechargeable battery can be used for several hours after charging, which can meet various mobile detection needs for laboratories or outdoor environments without power system.

</p>
                                </div>

                            </div>
                            <div className="left mt-2 md:mt-0 p-0 md:p-10 w-full md:w-1/2">
                                <Image loader={myLoader} height={300} placeholder='empty' loading='lazy' width={500} className="mx-auto" src='UX200-08-高校充電電池720x540.webp' alt='High Efficiency Rechargeable Battery System'></Image>

                            </div>

                        </div>
                        <div className="row  mt-4 md:mt-0 flex flex-col md:flex-row justify-center   w-full">
                            <div className="right mt-3 md:mt-0  flex md:hidden  items-center  w-full md:w-1/2">
                                <div className="container-text-wrap mx-auto">
                                    <h3 className="h3-u text-center">Build-in camera


                                    </h3>
                                    <p className="text-middle-u text-center">On-site sample status and test environment can be recorded at any time.



</p>
                                </div>

                            </div>
                            <div className="left mt-2 md:mt-0 p-0 md:p-10 w-full md:w-1/2">
                                <Image loader={myLoader} height={300} placeholder='empty' loading='lazy' width={500} className="mx-auto" src='UX200-07-手持拍照-720x540.webp' alt='Build-in camera
'></Image>

                            </div>
                            <div className="right hidden  md:flex items-center  w-full md:w-1/2">
                                <div className="container-text-wrap mx-auto">
                                    <h3 className="h3-u text-center">Build-in camera

                                    </h3>
                                    <p className="text-middle-u text-center">On-site sample status and test environment can be recorded at any time.

</p>
                                </div>

                            </div>


                        </div>
                        <div className="row  mt-4 md:mt-0 flex flex-col md:flex-row  justify-center  w-full">

                            <div className="right mt-3 md:mt-0 flex items-center  w-full md:w-1/2">
                                <div className="container-text-wrap mx-auto">
                                    <h3 className="h3-u text-center">Can be connected to a computer via USB


                                    </h3>
                                    <p className="text-middle-u text-center">Built-in large memory capacity for recording a large amount of live raw data (photos, documents, etc.). It can also be used as a general mobile hard disk.



                                    </p>
                                </div>

                            </div>
                            <div className="left mt-2 md:mt-0 p-0 md:p-10 w-full md:w-1/2">
                                <Image loader={myLoader} height={300} placeholder='empty' loading='lazy' width={500} className="mx-auto" src='UX200-06-USB-720x540.webp' alt='Can be connected to a computer via USB'></Image>

                            </div>

                        </div>
                        
                    </div>
                </section>
              


               

                <section className="section">
                    <div className="Container px-0 md:px-[20px] xl:px-[200px] ">
                        <div className="grid grid-cols-1">
                            <div className="row  flex items-center flex-col  justify-center">


                            </div>
                            <div className="row">
                               

                                <div className="relative w-full grid md:grid-cols-2  md:px-0 lg:px-20">

                                    <div className="mt-5 px-0 md:px-3">
                                        <Card className="py-4">
                                            <CardHeader className="pb-0 pt-2 px-4 flex-col  items-center">

                                                <h3 className="text-[26px] text-center">Easy to use with facility


                                                </h3>


                                                <p className="text-default-500 text-gray-900">Long-term continuous monitoring

                                                </p>
                                                <p className="text-default-500 text-gray-900">Triangular Adjustable Stand

                                                </p>
                                                <p className="text-default-500 text-gray-900">Convenient and stable fixation

                                                </p>


                                            </CardHeader>
                                            <CardBody className="overflow-visible py-2">
                                                <Image
                                                    alt="Easy to use with facility
"
                                                    className="object-cover rounded-xl"
                                                    placeholder="empty"
                                                    loading="lazy"
                                                    loader={myLoader01}

                                                    src="UX200-img03.webp"
                                                    width={970}
                                                    height={500}
                                                />
                                            </CardBody>
                                        </Card>
                                    </div>
                                    <div className="mt-5 px-0 md:px-3">
                                        <Card className="py-4">
                                            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                                                <h3 className="text-[26px]">IP54 waterproof and <br/> dustproof rating
                                                </h3>
                                                <p className=" text-gray-900">Unaffected by weather
</p>
                                                <p className=" text-gray-900">Suitable for every application
</p>
                                                <p className=" text-gray-900">Firm and sturdy
</p>


                                            </CardHeader>
                                            <CardBody className="overflow-visible py-2">
                                                <Image
                                                    loader={myLoader01}
                                                    alt="IP54 waterproof and  dustproof rating"
                                                    className="object-cover rounded-xl"
                                                    placeholder="empty"
                                                    loading="lazy"
                                                    src="UX100-img02.webp"
                                                    width={970}
                                                    height={500}
                                                />
                                            </CardBody>
                                        </Card>
                                    </div>







                                </div>


                            </div>



                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="Container px-0 md:px-[20px]  ">
                        <div className="grid grid-cols-1">
                            
                            <div className="row">
                              
    <div className="relative w-full grid lg:grid-cols-2  md:px-0 lg:px-20">

                              



                                        </div>


{/* 

                                    </motion.h2>


                                </motion.div> */}



                            </div>



                        </div>
                    </div>
                </section>
                <section className=" section_slider section  hidden">
                    <div className="mb-10"> 
                        {/* <div className="text-center ">
                            <Link
                                className="text-sm underline underline-offset-2 hover:text-lime-300"
                                href={"https://medium.com/@jeyprox"}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                to the article
                            </Link>
                            <Link
                                className="text-sm underline underline-offset-2 hover:text-lime-300"
                                href={"https://github.com/jeyprox/framer-carousel"}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                to the repo
                            </Link>
                        </div> */}
                        {/* <h1 className="mt-2  text-center text-4xl font-bold uppercase">
                          

                        </h1> */}
                       
                        {/* <motion.div className="card"
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ staggerChildren: 0.3 }}
                        >

                            <motion.h2
                                className="text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white"
                                variants={title01}
                            > */}

                              

                                <h2 id='fff' className="mb-4 dark:text-white text-3xl text-center md:text-5xl leading-none font-bold uppercase">  胃幽門螺旋桿菌的快速尿素呼吸檢測法</h2>
                              

                            {/* </motion.h2> */}



                            {/* <motion.p
                                className="text-m "
                                variants={title02}
                            > */}

                                <div className="px-[20px]">
                                    <p className="text-black w-full md:w-1/2  text-m text-center mx-auto dark:text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. In exercitationem officiis saepe accusamus error, sit maxime commodi officia, rerum temporibus laudantium culpa recusandae dolor, ipsa eveniet cupiditate natus vero non!</p>
                                </div>

                                <div className="flex justify-center">
                                    <p className="text-sm text-center   rounded-full bg-orange-500 inline-block text-gray-100 mt-4 px-3 py-2 mx-auto ">
                                        幽門螺旋桿菌
 
                                    </p>
                                </div>

                            {/* </motion.p>


                        </motion.div>
                        */}

                    </div>

                    <div className="flex w-full p-[15px] px-20 relative">

                   

                    <div className="w-[60%] px-20 ">

                        <div className="txt  pl-[20%]">
                            <h3>
                                    輕鬆手持，方便攜帶
                            </h3>
                                <p className="mt-2 dark:text-white text-base text-gray-800">250g 的輕巧重量，適合手持操作的大小。皮革質感防滑設計，可輕鬆單手完成操作。配合方便攜帶的拋棄式蜂鳥探針電極  <a href="UH1.html" className="border-b-2 hover:text-orange-500">(瞭解更多)</a> 無需層層保護，輕鬆移動。</p>
                        </div>

                    </div>
                    <div className="w-[40%]  ">
                        {/* <TwoColSlider /> */}

                            <Image src='/截圖_2024-02-01_下午3.59.25_gfj4te.webp' alt='輕鬆手持' width={400}height={1000} ></Image>
                    </div>
                    </div>
                  
                </section>



                <section className="section_banner01 section relative  h-[450px] lg:h-[500px] xl:h-[768px]">
                    <Image className="absolute hidden md:block z-[8] top-0 left-0" placeholder="empty" loading="lazy" alt='Optimized Mobile Laboratory
' loader={myLoader} src='UX200-13-最佳的行動實驗室-無字版-1920x768.webp' width={1920} height={768}></Image>
                    <Image className="absolute z-[8] block md:hidden top-0 left-0" placeholder="empty" loading="lazy" alt='Optimized Mobile Laboratory
' loader={myLoader} src='UX200-13-最佳的行動實驗室-無字版-640x640.jpg' width={1920} height={768}></Image>
                    <div className="txt  absolute right-[15px] md:right-[80px] z-[8] w-[90%] md:w-2/5 top-[25%] md:top-[14%] lg:top-[33%]">
                        <h3 className="text-[32px]">Optimized Mobile Laboratory

</h3>

                        <p className="text-white text-[16px] md:text-[18px]">The UX200 provides a shooting function. For each data, it can take pictures to record the scene environment and the details of the sample number. Satisfy the management requirements of the source of the result analysis and the original data. Data can be easily transferred to a computer for backup

</p>
                    </div>
                </section>

                <WhenUse/>


                    <FindSPE/>

            
                <section className="m-0 section p-0">
                    <div className="Container ">
                        <div className="grid grid-cols-1">
                        
                            <div className="row">
                                       
                               

                            </div>



                        </div>
                    </div>
                </section>
                <div className="">
                    <ModalBtn />
                </div>

                <section className="section">
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

                                        <h2 className="h2-u">Humming Probe UX200
</h2>
                                      
                                    </motion.h2>



                                    <motion.p
                                        className="justify-center text-m flex center "
                                        variants={title02}
                                    >

                                        <a download='https://www.ultraehp.com/images/DM/UltraE-DM-v2.pdf' href='https://www.ultraehp.com/images/DM/UltraE-DM-v2.pdf' className="rounded-full w-[150px] text-center font-black bg-orange-500 text-white py-2 px-4 mx-auto mb-[50px]">
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
                                                       
                                                <Tab key="Technical Specifications
" title="Technical Specifications
">
                                                            <Card>
                                                                <CardBody>
                                                                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                                                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                                            
                                                                            <tbody>
                                                                        <tr class="bg-gray-800 ">
                                                                            <th scope="row" colSpan={2} class="px-6 py-4 font-medium text-white whitespace-nowrap  text-center">
                                                                                Range
                                                                            </th>


                                                                        </tr>
                                                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                       pH Value：
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
                                                                                10 ~ 40°C ( &lt; 10°C or &#62; 40°C will show warning)
                                                                                    </td>

                                                                                </tr>





                                                                        <tr class="bg-gray-800 ">
                                                                            <th scope="row" colSpan={2} class="px-6 py-4 font-medium text-white whitespace-nowrap  text-center">
                                                                                Resolution
                                                                            </th>


                                                                        </tr>

                                                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                pH Value：
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                0.01pH
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
                                                                                Temperature：
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                ± 0.5°C
                                                                            </td>

                                                                        </tr>



                                                                        <tr class="bg-gray-800 ">
                                                                            <th scope="row" colSpan={2} class="px-6 py-4 font-medium text-white whitespace-nowrap  text-center">
                                                                                pH chart(For UX200)

                                                                            </th>


                                                                        </tr>
                                                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                Time interval	
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                0.1,0.5,1,5,10 Sec

                                                                            </td>

                                                                        </tr>
                                                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                Max runtime	
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                2hr~280hr




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
                                                                                7” Color Touchscreen
                                                                            </td>


                                                                        </tr>
                                                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                Water Proof:
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                IP54
                                                                            </td>


                                                                        </tr>
                                                                        {/* <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                Water Proof:
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                IP54
                                                                            </td>



                                                                        </tr> */}
                                                                        <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                Camera:
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
                                                                                5V DC，2A(Input 100/240V AC)
                                                                            </td>


                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                Dimension：
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                129 x 214 x 25 mm
                                                                            </td>

                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                Weight：
                                                                            </th>
                                                                            <td class="px-6 text-gray-800 py-4">
                                                                                540g
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
                {/* <ReactSlick /> */}
                <section className="section section_others hidden md:block">
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
                                        <p className="text-lg text-gray-800  md:w-2/3 w-full mx-auto">Others Products
                                        </p>

                                    </motion.h2>



                                    <motion.p
                                        className="text-m "
                                        variants={title02}
                                    >




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
