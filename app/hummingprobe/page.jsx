
"use client"
import Tooltip from "../../components/Tooltip"
import JsonLd from '../../components/JsonLd.jsx';
import ReadMoreReact from 'read-more-react';
import Image from 'next/image'
import Img01 from '../../public/images/wix.jpg'
import Img02 from '../../public/images/c2.jpg'
import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import ApplicateCard from '../../components/Application/ApplicateCard'
import CardHover from '../../components/CardHover'
import Cards from '../../components/Cards/Cards'
import Marquee from 'react-fast-marquee'
import fetchUI from '../../components/ui/fetchUI.jsx'
import SwiperCard1 from '../../components/SwiperCarousel/SwiperCardAbout'
import SlickCarousel from '../../components/SlickCarousel/SlickCarousel'
import FindSPE from '../../components/FindSPE.jsx'


import ArticleBottomSection from '../../components/ArticleBottomSection.jsx'

import React from "react";
import HeroCarousel from '../../components/Carousel/index'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

// import Lottie from "react-lottie";
// import LoadingSpinner from "../../../public/Lottie/contact.json";
import { Card, CardHeader, CardBody } from "@nextui-org/react";

import { properties } from "../../constants/data";
import { Button } from "@nextui-org/react";
// import TabComponent from "../components/Tabs/TabComponent";
// import tabs from "../components/Tabs/tabs";
import '../../styles/additional-styles/tab.css'
// import '../../public/images/demo.png'
const myLoader = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/index/carousel-img/1920x768/${src}?w=${width}?p=${placeholder}`
}

const myLoader01 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/brand/${src}?w=${width}?p=${placeholder}`
}
const myLoader001 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}?p=${placeholder}`
}

const myLoader02 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/${src}?w=${width}?p=${placeholder}`
}

const myLoader03 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/Index/${src}?w=${width}?p=${placeholder}`
}

const myLoader06 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/index/${src}?w=${width}?p=${placeholder}`
}

const myLoader04 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UH-1/${src}?w=${width}?p=${placeholder}`
}

const myLoader05 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/index/icon/${src}?w=${width}?p=${placeholder}`
}

const myLoader07 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/index/icon/${src}?w=${width}?p=${placeholder}`
}

export default async function Home() {


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



    return (



        <div className="dark:bg-black bg-gray-100">
          

            {/* 結構化資料  */}
            <title>hunmming probe ｜ pH meter｜Calibration free、Ultramicro、Disposable、Portable、｜ Humming probe｜UltraE
            </title>

            <meta name="keywords" content="pH meter/pH measuring instrument/pH detector/pH value detector/portable pH meter/desktop pH meter/Benchtop pH meter/pH meter/pH electrode/pH meter/acid-base test/ pH measurement/pH test" />
            <meta key="description" name="description" content="Calibration-free Humming Probe pH meter developed by UltraE with patented technology. disposable  electrode design,ultra small sample requirement , provide you with high-precision test results with the high-standard production of IS9001 ,many limitations of traditional pH meters can be overcome. It is also possible to customize this miniature pH detection sensing element,embed it  in a new product (OEM/ODM).pH sensor/pH meter/pH measuring instrument/pH detector/pH value detector/portable pH meter/desktop pH meter/Benchtop pH meter/pH meter/pH electrode/pH meter/acid-base test/ pH measurement/pH test" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="https://www.ultraehp.com/ultra-logo.ico" type="image/ico"></link>


            <link rel="alternate" href="https://www.ultraehp.com/hummingprobe/" hreflang="zh-Hant" />
            <link rel="alternate" href="https://www.ultraehp.com/hummingprobe/en/" hreflang="en"></link>



            <meta property="og:url" content="https://ithelp.ithome.com.tw/articles/10278469" />
       
            <meta property="og:type" content="website" />
            <meta property="og:title" content="
免校正超微量酸鹼電極
" />
            <meta property="og:description" content="Calibration-free Humming Probe pH meter developed by UltraE with patented technology. disposable  electrode design,ultra small sample requirement , provide you with high-precision test results with the high-standard production of IS9001 ,many limitations of traditional pH meters can be overcome. It is also possible to customize this miniature pH detection sensing element,embed it  in a new product (OEM/ODM).pH sensor/pH meter/pH measuring instrument/pH detector/pH value detector/portable pH meter/desktop pH meter/Benchtop pH meter/pH meter/pH electrode/pH meter/acid-base test/ pH measurement/pH test
" />
            <meta property="og:image" content="https://www.ultraehp.com/images/Products-Detail-Img/UH-1/UH1-09-製程操控720x540.webp" />




           
            <a href="https://www.ultraehp.com/en/hummingprobe/">
                <Image loader={myLoader001} src='company-logo.webp' width={160} loading='lazy' placeholder='empty' className="fixed mt-2 ml-[20px] md:ml-[90px] z-[999] top-[60px] left-10" alt='UltraP-logo' height={60}></Image>
            </a>
            <div className="fixed mobile-lang w-full top-[10px] pr-6 md:hidden flex justify-end mx-auto z-[99999] ">
                <a href="https://www.ultraehp.com/hummingprobe/">
                    <div className='w-[40px] h-[40px] text-[18px] bg-white    text-black rounded-full flex justify-start pl-[11.5px] items-center '>cn</div>
                </a>
            </div>
<div>
    
</div>
  
            <div className="langDropdown w-[10px]  text-right ml-[87.5vw]  top-[15px] fixed z-[999]">



                <Dropdown>
                    <DropdownTrigger>
                        <Button
                            variant="bordered p-0"
                            className="w-[10px] p-0 m-0"
                        >
                            {/* <Image className='mb-3 pr-20' src='earth.png' loader={myLoader03} loading='lazy' placeholder='empty' alt='language-switch' width={33} height={33} /> */}
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                        <DropdownItem key="new">
                            <a className='w-full block' href="https://www.ultraehp.com/hummingprobe/en/">English</a>
                        </DropdownItem>
                        <DropdownItem key="new">
                            <a className='w-full block' href="https://www.ultraehp.com/hummingprobe/">繁體中文</a>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>


            </div>


            <section className="section_HeroVideo relative" >


            </section>





            <section className=" mt-[10px] h-[450px]  2xl:h-[768px] md:h-[576px] md:mt-0 ">
                <SlickCarousel />

            </section>
            <section className="section_marquee section  w-full flex-col  justify-center items-center px-20">
                <div>
                    <h2 className="text-[32px] font-semibold text-center">
                        Trusted by precision flaboratory in universities and enterprises
                    </h2>
                </div>
                <div className=" w-full lg:w-4/5  py-10 mx-auto ">
                    <Marquee>

                        <div className=" w-[200px] mx-5 flex justify-center ">

                            <Image loading="lazy" alt='banner07' height={50} width={140} loader={myLoader01} src='brand-07.png' />
                        </div>
                        <div className=" w-[200px] mx-5 flex justify-center ">   <Image loading="lazy" height={50} width={140} loader={myLoader01} alt='banner03' src='brand-03.png' /></div>
                        <div className=" w-[200px] mx-5 flex justify-center ">   <Image loading="lazy" height={50} width={140} loader={myLoader01} alt='banner-4' src='brand-04.png' /></div>
                        <div className=" w-[200px] mx-5 flex justify-center ">   <Image loading="lazy" height={50} width={140} loader={myLoader01} alt='banner-5' src='brand-05.png' /></div>
                    </Marquee>
                </div>
                <div className="flex justify-center">
                    <div className="grid  w-[90%] md:w-[70%] grid-cols-1 md:grid-cols-3 ">
                        <div className="text-center font-extrabold">
                            Analytical Laboratory


                        </div>
                        <div className="text-center font-extrabold">Colleges and universities

                        </div>
                        <div className="text-center font-extrabold">Enterprise

                        </div>

                    </div>
                </div>

            </section>

            <div>
                <FindSPE />
            </div>
            <section className="section_whate section ">
                <div className="container">
                    <div className="row">
                        <h2 className="text-center leading-normal mx-auto w-full  md:w-1/2">What is the Humming Probe pH Measurement System ?
                        </h2>
                    </div>
                    <div className=" mt-4 flex justify-center">
                        <div className="card-wrap grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-0 md:px-[40px] lg:px-[70px] 2xl:px-[150px] ">

                            <div className="">
                                <Card className="py-4">
                                    <CardHeader className="pb-0 pt-2 px-[40px] flex-col overflow-y-scroll  items-start">
                                        <h4 className="font-bold text-large">pH calibration solution not required – ready-to-use

                                        </h4>
                                        <ReadMoreReact text="Traditional pH meters can have systematic errors after every use due to variations in the exchangeable hydrogen ions on the glass membrane surface and the hydrogen ion concentration in the glass membrane. Thus, glass electrode must be calibrated for precise measurements. However, every piece of our electrode has already been calibrated, so you can use the humming probe directly  ↑
"
                                            min={80}
                                            ideal={100}
                                            duration={500}
                                            max={120}
                                            readMoreText="...." />
                                       

                                    </CardHeader>
                                    <CardBody className="overflow-visible py-2">
                                        <Image
                                            loader={myLoader03}
                                            alt="Use brand new electrode everytime and no worry about hole contamination or wear on the electrode surface for Calibration-free micro disposable pH electrodes - Humming Probe-UltraE    "
                                            className="object-cover mx-auto rounded-xl"
                                            placeholder="empty"
                                            loading="lazy"
                                            src="UH1-18-不怕汙染720x540-2.webp"
                                            width={500}
                                            height={300}
                                        />
                                    </CardBody>
                                </Card>

                            </div>
                            <div>
                                <Card className="py-4">
                                    <CardHeader className="pb-0 pt-2 px-[40px] flex-col overflow-y-scroll  items-start">
                                        <h4 className="font-bold text-large">Use brand new electrode every time
                                            - no worry about contamination</h4>

                                        <ReadMoreReact text="The wear and tear of the glass electrode often comes from the blockage in the glass membrane or improper cleaning of the glass surface. The disposable design of the Humming Probe is especially suitable for protein samples that will react with the reference solution and for viscous samples that are difficult to clean. In addition, it can also meet the demands for outdoor use and carrying long distances  ↑
"
                                            min={80}
                                            ideal={100}
                                            duration={500}
                                            max={120}
                                            readMoreText="...." />
                                       
                                    </CardHeader>
                                    <CardBody className="overflow-visible py-2">

                                        <Image
                                            loader={myLoader03}
                                            alt=" There is no need to use pH calibration standard solution and pH electrode preservation solution for the Calibration-free micro disposable pH acid-base detection electrode / Humming Probe-UltraE    "
                                            className="object-cover mx-auto rounded-xl"
                                            placeholder="empty"
                                            loading="lazy"
                                            src="無需pH校正標準液.webp"
                                            width={500}
                                            height={300}
                                        />
                                    </CardBody>
                                </Card>
                            </div>
                            <div>
                                <Card className="py-4">
                                    <CardHeader className="pb-0 pt-2 px-[40px] flex-col overflow-y-scroll  items-start">
                                        <h4 className="font-bold text-large">Temperature sensing element, precise calibration on every strip
                                        </h4>
                                        <ReadMoreReact text="The same pH solution will change its pH at different temperatures due to different dissociation constant, so the temperature compensation mode is used to correct the pH value at different temperatures back to 25℃. Each piece of Humming Probe has an independent temperature sensing element which can accurately measure the sample temperature and make intelligent data compensation to precisely display the pH value of the sample  ↑
"
                                            min={80}
                                            ideal={100}
                                            duration={500}
                                            max={120}
                                            readMoreText="...." />
                                      

                                    </CardHeader>
                                    <CardBody className="overflow-visible py-2">
                                        <Image
                                            loader={myLoader03}
                                            alt="Calibration-free micro disposable pH electrodes with temperature compensation function/Humming Probe-UltraE "
                                            className="object-cover mx-auto rounded-xl"
                                            placeholder="empty"
                                            loading="lazy"
                                            src="免校正微量拋棄式pH酸鹼電極.webp"
                                            width={500}
                                            height={300}
                                        />
                                    </CardBody>
                                </Card>
                            </div>
                            <div>
                                <Card className="py-4">
                                    <CardHeader className="pb-0 pt-2 px-[40px] flex-col overflow-y-scroll  items-start">
                                        <h4 className="font-bold text-large">Portable, easy storage, no maintenance required

                                        </h4>
                                        <ReadMoreReact text="Humming Probe acid-base detection test strip (pH meter) uses the patented hydrogen ion adsorption membrane design to replace the design of the reference electrode in the traditional glass electrode. Therefore, there is no filling liquid, no maintenance required, and no need to store in a preservation liquid   ↑
"
                                            min={80}
                                            ideal={100}
                                            duration={500}
                                            max={120}
                                            readMoreText="...." />
                                      

                                    </CardHeader>
                                    <CardBody className="overflow-visible py-2">
                                        <Image
                                            loader={myLoader03}
                                            alt="Portable calibration-free micro disposable pH electrodes/Humming Probe-UltraE will not break like glass electrodes and doesn't need electrode preservation solution"
                                            className="object-cover mx-auto rounded-xl"
                                            placeholder="empty"
                                            loading="lazy"

                                            src="無需pH電極保存液.webp"
                                            width={500}
                                            height={300}
                                        />
                                    </CardBody>
                                </Card>
                            </div>
                            <div><Card className="py-4">
                                <CardHeader className="pb-0 pt-2 px-[40px] flex-col overflow-y-scroll items-start">
                                    <h4 className="font-bold text-large">International Certification


                                    </h4>
                                    <ReadMoreReact text="UltraE has been officially certified in accordance with ISO 9001:2015 quality management system and obtained the certificate. Comprehensive quality control, automatic equipment production, and strict production process control ensure the accuracy of each inspection. Fully supports the need for GLP certification  ↑
"
                                        min={80}
                                        ideal={100}
                                        duration={500}
                                        max={120}
                                        readMoreText="...." />
                                  

                                </CardHeader>
                                <CardBody className="overflow-visible py-2">
                                    <Image
                                        loader={myLoader03}
                                        alt="Calibration-free micro disposable pH electrodes/Humming Probe-UltraE are also officially ISO 9001:2015 certified"
                                        className="object-cover mx-auto rounded-xl"
                                        placeholder="empty"
                                        loading="lazy"
                                        src="SGS ISO9001品質管理系統認證.webp"
                                        width={500}
                                        height={300}
                                    />
                                </CardBody>
                            </Card></div>
                            <div><Card className="py-4">
                                <CardHeader className="pb-0 pt-2 px-[40px] flex-col overflow-y-scroll  items-start">
                                    <h4 className="font-bold text-large">Sample size is down to microliters



                                    </h4>
                                    <ReadMoreReact text="Biological samples such as blood, saliva, cerebrospinal fluid, tissue fluid, etc… cannot be sampled in large quantities. Therefore, the electrode size of the Humming Probe can be reduced to 1 mm, and the sample requirement can be as small as 1 microliter (μL). It is very helpful for situations where extremely small samples are used, especially in the fields of cell engineering, genetic engineering, and life science  ↑

"
                                        min={80}
                                        ideal={100}
                                        duration={500}
                                        max={120}
                                        readMoreText="...." />

                                 

                                </CardHeader>
                                <CardBody className="overflow-visible py-2">
                                    <Image
                                        loader={myLoader03}
                                        placeholder="empty"
                                        loading="lazy"
                                        alt="Calibration-free micro disposable pH electrodes/Humming Probe-UltraE requires only a few microliters or a drop of liquid to complete pH detection/pH test "
                                        className="object-cover mx-auto rounded-xl"
                                        src="一滴可量測.webp"
                                        width={500}
                                        height={300}
                                    />
                                </CardBody>
                            </Card></div>





                        </div>
                    </div>
                </div>
            </section>




            <section className="section_contact">
                <div>
                    <div>
                        {/* <div>
                            <Lottie options={options} height={400} width={400} />
                        </div> */}
                    </div>
                    <div></div>
                </div>
            </section>
            <section className="section_feature section px-[100px]">
                <div className="container">
                    <div className="row mx-auto w-[95%] md:w-[90%] xl:w-[85%]">
                        <div className="top mt-5">
                            <div className="left  flex-col flex md:flex-row  items-center justify-center w-full">
                                <div className="top  w-full  md:w-[40%]  flex flex-col  items-center justify-center">
                                    <p className="text-[22px] font-bold">Hello OEM/ODM Customers

                                    </p>
                                    <div className="img flex  justify-center w-full md:w-2/5">
                                        <Image alt='oem-icon' src='oem-icon.webp' loader={myLoader07} width={300} placeholder="empty"
                                            loading="lazy" height={300}></Image>
                                    </div>
                                </div>

                                <div className="txt w-full md:w-[60%]">
                                    <div className="border mt-4 rounded-xl border-black p-10">
                                        <h4 className="text-[26px] font-semibold">
                                            Original Equipment Manufacturing/OEM
                                        </h4>
                                        <p>
                                            Original Equipment Manufacturing/OEM


                                        </p>

                                    </div>
                                    <div className="mt-4">
                                        <div className="border rounded-xl border-black p-10">
                                            <h4 className="text-[26px] font-semibold">
                                                Original Design Manufacturing/ODM
                                            </h4>
                                            <p>
                                                Original Design Manufacturing/ODM


                                            </p>
                                        </div>

                                    </div>

                                </div>

                            </div>


                        </div>
                        <div className="bottom mt-5">
                            <div className="right flex-col md:flex-row flex w-full">
                                <div className="top  w-full md:w-[40%]  flex flex-col  items-center justify-center">
                                    <p className="text-[22px] font-bold">Hello Product Designer



                                    </p>
                                    <div className="img flex  justify-center w-2/5">
                                        <Image src='designer-icon.webp' alt='oem-icon' loader={myLoader05} width={300} placeholder="empty"
                                            loading="lazy" height={300}></Image>
                                    </div>
                                </div>

                                <div className="txt w-full md:w-3/5">
                                    <div className="border rounded-xl bg-gray-800 mt-4 border-black p-10">
                                        <h4 className="text-[26px] text-white font-bold">
                                            Placement of Miniature Acid-base pH Detecting Components

                                        </h4>
                                        <p className=" text-white ">
                                            Our pH detection module can be added to your product design


                                        </p>

                                    </div>
                                    <div className="mt-4">
                                        <div className="border bg-gray-800 rounded-xl border-black p-10">
                                            <h4 className="text-[26px] text-white font-bold"> Water Quality Monitoring Device

                                            </h4>
                                            <p className="text-white">
                                                pH value/ Dissolved Oxygen/ Temperature disposable device


                                            </p>
                                        </div>

                                    </div>

                                    <div className="mt-4">
                                        <div className="border bg-gray-800 rounded-xl border-black p-10">
                                            <h4 className="text-[26px] text-white font-bold">IVD Medical Device Cooperation Development

                                            </h4>
                                            <p className="text-white">

                                                Sample or target with pH value shift






                                            </p>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="section_toolip section px-0 md:px-20 flex  flex-col justify-center items-center">
                <div className="wrap flex flex-col  md:flex-row px-[20px] 2xl:px-[150px]  bg-slate-100   rounded-3xl w-full py-[100px]">
                    <div className="w-full  md:w-1/2 ">
                        <Image src='contact-man.webp' loading="lazy" loader={myLoader02} width={400} alt='contact-man' height={400}></Image>

                    </div>
                    <div className="txt w-full md:w-1/2 flex flex-col justify-center items-center">
                        <h4 className="text-[32px] font-bold">
                            Come and talk to us!
                        </h4>
                        <p className="text-center w-3/4">If you're not sure if it's right for you, contact us today to try it out.
                           </p>.

                        <a href="ContactUs.html" className="bg-orange-500 mt-4 px-5 py-1 text-white rounded-full">Contact Us</a>
                        <div className="icon-wrap">



                        </div>
                    </div>

                </div>

            </section>


        </div>
    )
}
