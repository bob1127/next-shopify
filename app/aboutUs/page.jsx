
"use client"

import Tooltip from "../../components/Tooltip"
import './ultrae.scss'


import TimeLine from '../../components/TimeLine/timeLine.jsx'


import Marquee from 'react-fast-marquee'


import Image from 'next/image'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

// import Img01 from '../../public/images/wix.jpg'
// import Img02 from '../../public/images/up100-banner01.png'
import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import ApplicateCard from '../../components/Application/ApplicateCard'
import CardHover from '../../components/CardHover'
import Cards from '../../components/Cards/Cards'
import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { properties } from "../../constants/data";
import TabWrap from '../../components/Tabs/Tabs'
import scan from '../../public/images/scan.png'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";
import Link from 'next/link'
import CardPage from '../../components/CardParallax/CardPage'
import Carousel from '../../components/Carousel/index.tsx'

import ModalBtn from '../../components/ModalBtn-2'

import '../../styles/additional-styles/tab.css'
const myLoader = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/nav/${src}?w=${width}?p=${placeholder}`
}
const myLoader001 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}?p=${placeholder}`
}

const myLoader01 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/index/${src}?w=${width}?p=${placeholder}`
}

const myLoader03 = ({ src, width, quality }) => {
    return `https://www.ultraehp.com/images/nav/${src}?w=${width}&q=${quality || 75}`
}

const myLoader05 = ({ src, width, quality }) => {
    return `https://www.ultraehp.com/images/about/${src}?w=${width}&q=${quality || 75}`
}


export default async function Home() {

    return (


        <div className="dark:bg-black   bg-white mx-auto ">

        



            {/* 結構化資料  */}
            <title>AboutUs｜UltraE
            </title>

            <meta name="keywords" content="蜂鳥探針｜pH感測器、pH測量儀、pH meter、酸鹼度計、pH檢測器、pH值檢測計、可攜式 pH計、桌上型pH計、pH測量儀 、pH電極、酸鹼度計、酸鹼測試、pH測試" />
            <meta key="description" name="description" content="超極生技UltraE以專利技術開發的的免校正蜂鳥探針pH meter 酸鹼度計。具有拋棄式的電極設計，微升級的樣品需求量，以IS9001的高規格生產提供您高精準度的測試結果適合珍貴及特殊樣品，可以突破傳統pH測量儀的眾多限制。更可客製化訂製此微型pH檢測感測元件，將其嵌入新的產品(OEM/ODM)| 關於我們 aboutus" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="https://www.ultraehp.com/ultra-logo.ico" type="image/ico"></link>


            <link rel="alternate" href="https://www.ultraehp.com/aboutUs.html" hreflang="zh-Hant" />
            <link rel="alternate" href="https://www.ultraehp.com/en/aboutUs.html" hreflang="en" />

            <meta property="og:url" content="https://www.ultraehp.com/en/aboutUs.html" />
        
            <meta property="og:type" content="website" />
            <meta property="og:title" content="
超極生技以專利技術開發的 
免校正拋棄式 pH meter 酸鹼度計
" />
            <meta property="og:description" content="全球首創免校正酸鹼量測的方法，創新技術將電極量測原理整合在單一試片上。
" />
            <meta property="og:image" content="https://www.ultraehp.com/images/Products-Detail-Img/UH-1/UH1-09-製程操控720x540.webp" />


            <section className="relative w-full flex justify-center ">
                <div className="fixed mobile-lang w-full top-[10px] pr-6 md:hidden flex justify-end mx-auto z-[99999] ">
                    <a href="https://www.ultraehp.com/aboutUs.html">
                        <div className='w-[40px] h-[40px] text-[18px] bg-white    text-black rounded-full flex justify-start pl-[11.5px] items-center '>cn</div>
                    </a>
                </div>


                {/* <TimeLine /> */}
                <section className=" w-full xl:w-[90%] px-0 md:px-[20px] md:px-0 pt-[100px]">
                    <div className=" md:py-[50px] py-[20px] flex justify-center items-center rounded-2xl  mx-auto  flex-col   w-[95%] ">



                        <div className="row">
                            <div className="cintaiber flex flex-col justify-center items-center md:flex-row ">
                                <div className="txt mx-auto w-full  rounded-2xl border-gray-800 border-3  px-0 md:px-10 py-10  mt-20">

                                    <h2 className=" mx-auto w-full  md:w-1/2 text-center text-black dark:text-rose-500  font-bold ">

                                        ABOUT US



                                    </h2>

                                    <div className="content w-[80%] mx-auto">
                                        <p className="text-gray-800 text-[15px]">UltraE Co., Ltd. was established in 2016, with a team dedicating 30 years of experience in the development and mass production of biosensors. Leveraging its patented Potentiostrip® technology platform, the company focuses on the research, development, and manufacturing of water quality testing and in vitro diagnostic (IVD) medical devices. In 2019, UltraE Co., Ltd. launched its first brand, Humming Probe, a calibration-free disposable micro-electrode pH measurement system, providing solutions to the challenges of cumbersome pH meter calibration and micro-sample measurement.</p><br />

                                        <p className="text-gray-800 text-[15px]">In 2021, the company introduced its second brand, UltraPeace, the Instant H. pylori Urea Breath Test Kit System. This non-invasive system can accurately detect H. pylori infection within 30 minutes, enabling medical professionals to quickly diagnose, determine the appropriate medications, and conduct follow-up testing after treatment.</p><br />

                                        <p className="text-gray-800 text-[15px]">UltraE Co., Ltd. upholds the entrepreneurial spirit of "Ultra-Micro Electrode, Ultra-Healthy Life" as its core value and guiding principle, aiming to develop sustainable businesses that contribute to human health.</p>


                                    </div>




                                    <p className="text-m mx-auto text-center  w-full  md:w-3/4 lg:w-2/4 dark:text-slate-200">

                                    </p>


                                    <div className="img-wrap my-6 flex flex-row justify-center items-center ">
                                       <div className="mx-2">
                                            <Image loader={myLoader05} src='下載.png'   loading='lazy' width={340} height={340}/> 
                                       </div>
                                        <div className="mx-2">
                                            <Image loader={myLoader05} src='9001.png' loading='lazy' width={340} height={340} />
                                        </div>
                                    </div>


                                    <div className="flex w-[240px] z-50 mx-auto justify-center">
                                        <ModalBtn /> </div>


                                </div>


                            </div>
                        </div>





                        <h2 className="text-center mx-auto mt-[80px]">Company Milestones</h2>

                        {/* <div className="row">
                            <h2 className="absolute  left-[22%] top-[140px]">公司里程碑</h2>
                        </div> */}

                        <div className="row mx-auto w-[90%]  pb-[90px] flex flex-col ">

                            <div className="items flex flex-col  ">

                                <div className="item  px-0 md:px-[20px] py-[10px]   border-black flex flex-col  md:flex-row justify-start items-center ">
                                    <div className="left font-bold text-[18px] p-2 rounded-[40px]date">
                                        2024：


                                    </div>
                                    <div className="right w-full description">
                                        <div className="border-b-1  block w-full border-black py-2">- Obtained ISO 13485 certification for international medical device quality management systems

                                        </div>
                                        <div className=" py-2 w-full border-b-1  border-black block ">
                                            - Received four patents, including the first U.S. patent
                                        </div>

                                    </div>

                                </div>

                                <div className="item  px-0 md:px-[20px] py-[10px]   border-black flex justify-start items-center flex-col md:flex-row">
                                    <div className="left font-bold text-[18px] p-2 rounded-[40px]date">
                                        2023：


                                    </div>
                                    <div className="right w-full description">
                                        <div className="border-b-1  block w-full border-black py-2">- Launched the UltraPeace – Instant H. pylori Urea Breath Test Kit System

                                        </div>


                                    </div>

                                </div>
                                <div className="item  px-0 md:px-[20px] py-[10px]   border-black flex justify-start items-center flex-col md:flex-row">
                                    <div className="left font-bold text-[18px] p-2 rounded-[40px]date">
                                        2022：


                                    </div>
                                    <div className="right w-full description">
                                        <div className="border-b-1  block w-full border-black py-2">- Received four patents

                                        </div>


                                    </div>

                                </div>
                                <div className="item  px-0 md:px-[20px] py-[10px]   border-black flex justify-start items-center flex-col md:flex-row">
                                    <div className="left font-bold text-[18px] p-2 rounded-[40px]date">
                                        2021：


                                    </div>
                                    <div className="right w-full description">
                                        <div className="border-b-1  block w-full border-black py-2">- Achieved ISO 9001:2015 certification for quality management systems
                                          


                                        </div>
                                        <div className="border-b-1  block w-full border-black py-2">-   Received four patents

                                        </div>


                                    </div>

                                </div>
                                <div className="item  px-0 md:px-[20px] py-[10px]   border-black flex justify-start items-center flex-col md:flex-row">
                                    <div className="left font-bold text-[18px] p-2 rounded-[40px]date  ml-3">
                                        2020：


                                    </div>
                                    <div className="right w-full description">
                                        <div className="border-b-1  block w-full border-black py-2">- Expanded international business to Japan, China, Thailand, and India

                                        </div>
                                        <div className="border-b-1  block w-full border-black py-2">- Received three patents

                                        </div>


                                    </div>

                                </div>

                                <div className="item  px-0 md:px-[20px] py-[10px]   border-black flex justify-start items-center flex-col md:flex-row">
                                    <div className="left font-bold text-[18px] p-2 rounded-[40px]date ml-3">
                                        2018-<br/>2019:


                                    </div>
                                    <div className="right w-full description">
                                        <div className="border-b-1  block w-full border-black py-2">- Launched the Humming Probe pH measurement system in the Taiwanese market

                                        </div>
                                        <div className="border-b-1  block w-full border-black py-2">- Received eight patents

                                        </div>


                                    </div>

                                </div>

                                <div className="item  px-0 md:px-[20px] py-[10px]   border-black flex justify-start items-center flex-col md:flex-row">
                                    <div className="left font-bold text-[18px] p-2 rounded-[40px]date">
                                        2017：


                                    </div>
                                    <div className="right w-full description">
                                        <div className="border-b-1  block w-full border-black py-2">- Established the factory and introduced automated production lines


                                        </div>



                                    </div>

                                </div>



                                <div className="item  px-0 md:px-[20px] py-[10px]   border-black flex justify-start items-center flex-col md:flex-row">
                                    <div className="left font-bold text-[18px] p-2 rounded-[40px]date">
                                        2016：


                                    </div>
                                    <div className="right w-full description">
                                        <div className="border-b-1  block w-full border-black py-2">- UltraE Co., Ltd. was founded through the Taiwan Germination Program ( a startup initiative)


                                        </div>
                                        <div className="border-b-1  block w-full border-black py-2">- Received the first domestic patent


                                        </div>



                                    </div>
                                 

                                </div>












                            </div>
                        </div>
                    </div>
                </section>

            </section>




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
                            <a className='w-full block'  href="https://www.ultraehp.com/en/aboutUs.html ">English</a>
                        </DropdownItem>
                        <DropdownItem key="new">
                            <a className='w-full block'  href="https://www.ultraehp.com/aboutUs.html ">繁體中文</a>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>


            </div>


            <a href="https://www.ultraehp.com/en"><Image loader={myLoader001} src='Ultrae-logo.png' width={80} loading='lazy' placeholder='empty' className="fixed mt-3 ml-[20px] md:ml-[90px] z-50 top-[60px] left-10" alt='Ultrae-logo' height={40}></Image> </a>

            <section className="section_showcase  w-full relative px-5 py-0  md:px-10 lg:px-20">
                <div className="row">




                </div>


                <div className="row">

                </div>


                <div className="row  mx-0 md:mx-[40px] lg:mx-[60px] 2xl:mx-[150px]">


                    <div>

                    </div>



                    <div className="flex w-full pt-20 flex-col">
                        {/* <TabWrap /> */}

                    </div>
                </div>

            </section>




            <h2 className="text-[32px] mt-[50px] mb-[10px] font-bold">
                Exhibitors - News
            </h2>


             <div className="pb-[80px]">
                <Marquee className="py-[50px]">

                    <div className=" w-[600px] mx-5 flex justify-center">
                        <div className="card-item h-[630px] border border-gray-200 rounded-2xl bg-white hover:scale-[1.05] duration-500 p-10 ">
                            <div className="txt flex justify-center items-center flex-col">
                                <div className="txt  w-1/2">
                                    <h2 className="text-[22px] font-bold">
                                        BIO Asia–Taiwan 2021



                                    </h2>
                                    <b>We will be participating in BIO Asia–Taiwan 2021 . You are welcome to join us.




                                    </b>
                                    <p className="text-[14px] font-normal">Location : Taipei Nangang Exhibition Center, Hall 2, 4F



                                    </p>
                                    <p className="text-[14px] font-normal">Date : 2021/11/04 (Thu.) ~ 2021/11/07(Sun.)




                                    </p>
                                    <p className="text-[14px] font-normal">Time:11/04 to 11/07 10:00AM~6:00PM, 11/07 10:00AM~5:00PM





                                    </p>

                                    <b>Booth No:S1234a


                                    </b>
                                </div>
                                <div className="img justify-center items-center flex h-full border w-1/2 ">
                                    <Image width={500} loading="lazy" className="mt-[50px]" height={500} loader={myLoader05} placeholder='empty' src='pic-2021-04-20.jpg'></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" w-[600px] mx-5 flex justify-center">

                        <div className="card-item rounded-2xl bg-white hover:scale-[1.05] duration-500 p-10 border border-gray-200">
                            <div className="txt flex justify-center items-center flex-col">
                                <div className="txt w-[90%] h-[210px]">
                                    <h2 className="text-[22px] font-bold">
                                        2022 Asia Biotechnology Expo


                                    </h2>
                                    <b>We will be participating in BIO Asia–Taiwan 2022 . You are welcome to join us.




                                    </b>
                                    <p className="text-[14px] font-normal">Location : Taipei Nangang Exhibition Center, Hall 2, 4F Add:4F., No.2, Jingmao 2nd Rd., Nangang District, Taipei City 11568, Taiwan




                                    </p>
                                    <p className="text-[14px] font-normal">Date : July 28 (Thu.) - 31 (Sun.), 2022





                                    </p>
                                    <p className="text-[14px] font-normal">Time:10:00 AM ~ 6:00 PM(Closing one hour early on the last day)※Children under 12 are not admitted.






                                    </p>

                                    <b>Booth No:A37



                                    </b>
                                </div>
                                <div className="img w-[90%] h-[260px]">
                                    <Image width={800} loading="lazy" className="mt-[50px]" height={500} placeholder='empty'  loader={myLoader05} src='pic-2021-04-20.jpg'></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" w-[600px]  mx-5 flex justify-center">

                        <div className="card-item rounded-2xl bg-white hover:scale-[1.05] duration-500 p-10 flex-col flex justify-center items-center border border-gray-200">
                            <div className="txt flex justify-center items-center flex-col">
                                <div className="txt w-[90%] h-[210px]">
                                    <h2 className="text-[22px] font-bold">
                                        IE expo china 2021



                                    </h2>
                                    <b>We will be participating in IE expo china 2021 . You are welcome to join us.




                                    </b>
                                    <p className="text-[14px] font-normal">Location : Shanghai new international expo centre hall E4




                                    </p>
                                    <p className="text-[14px] font-normal">Date : 2021/04/20 (Mon.) ~ 2021/04/22(Thu.)





                                    </p>
                                    <p className="text-[14px] font-normal">Time:04/20 to 04/22 09:00AM~6:00PM





                                    </p>

                                    <b>Booth No:G06



                                    </b>
                                </div>
                                <div className="img w-[90%] h-[260px]">
                                    <Image width={800} loading="lazy" className="mt-[50px]" height={500} loader={myLoader05} placeholder='empty'  src='pic-2021-04-20.jpg'></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" w-[600px] mx-5 flex justify-center">
                        <div className="card-item rounded-2xl bg-white hover:scale-[1.05] duration-500 p-10 border border-gray-200">
                            <div className="txt flex justify-center items-center flex-col">
                                <div className="txt w-[90%] h-[210px]">
                                    <h2 className="text-[22px] font-bold">
                                        Chemistry National Meeting 2021


                                    </h2>
                                    <b>We will be participating in Chemistry National Meeting 2021 . You are welcome to join us.


                                    </b>
                                    <p className="text-[14px] font-normal">Location : National Central University



                                    </p>
                                    <p className="text-[14px] font-normal">Date : 2021/03/13 (Sat.) ~ 2021/03/14(Sun.)




                                    </p>
                                    <p className="text-[14px] font-normal">Time:03/13 to 03/14 08:30AM~6:00PM, 03/14 08:30AM~2:00PM




                                    </p>

                                    <b>Booth No:A37


                                    </b>
                                </div>
                                <div className="img w-[90%] h-[260px]">
                                    <Image width={800} placeholder='empty' loading="lazy" className="mt-[50px]" height={500} loader={myLoader05} src='pic-2021-07-22.jpg'></Image>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className=" w-[600px] mx-5 flex justify-center">
                        <div className="card-item rounded-2xl bg-white hover:scale-[1.05] duration-500 p-10 border border-gray-200">
                            <div className="txt flex justify-center items-center flex-col">
                                <div className="txt w-[90%] h-[210px]">
                                    <h2 className="text-[22px] font-bold">
                                        Chemistry National Meeting 2021



                                    </h2>
                                    <b>We will be participating in Chemistry National Meeting 2021 . You are welcome to join us.


                                    </b>
                                    <p className="text-[14px] font-normal">Location : National Central University

                                    </p>
                                    <p className="text-[14px] font-normal">Date : 2021/03/13 (Sat.) ~ 2021/03/14(Sun.)


                                    </p>
                                    <p className="text-[14px] font-normal">Time:03/13 to 03/14 08:30AM~6:00PM, 03/14 08:30AM~2:00PM




                                    </p>

                                    <b>Booth No:A37

                                    </b>
                                </div>
                                <div className="img w-[90%] h-[260px]">
                                    <Image width={800} placeholder='empty' loading="lazy" className="mt-[50px]" height={500} loader={myLoader05} src='2022台北生技展bn2328x1162-英文版.webp'></Image>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" w-[600px] mx-5 flex justify-center">

                        <div className="card-item rounded-2xl bg-white hover:scale-[1.05] duration-500 p-10 border border-gray-200">

                            <div className="txt flex justify-center items-center flex-col">

                                <div className="txt h-1/2 w-1/2">
                                    <h2 className="text-[22px] font-bold">
                                        第十五屆台北國際儀器展

                                    </h2>
                                    <b>主辦單位：台北市儀器商業同業公會</b>
                                    <p className="text-[14px] font-normal">展覽日期：111.10.28(五)~10.31(一)
                                    </p>
                                    <p className="text-[14px] font-normal">展覽地點:台北市世貿中心展覽館一館B區

                                    </p>
                                </div>
                                <div className="img w-[90%] h-[260px]">
                                    <Image width={800} placeholder='empty' loading="lazy" className="mt-[50px]" height={500} loader={myLoader05} src='2022台北儀器展bn2328x1162-中英文版-2.jpg'></Image>
                                </div>




                            </div>

                        </div>
                    </div>
                    <div className=" w-[600px] mx-5 flex justify-center">


                        <Image src='pic-2020-12-03.jpg' placeholder='empty' loader={myLoader05} loading='lazy' width={600} height={400} className="rounded-2xl"></Image>



                    </div>
                    <div className=" w-[600px] mx-5 flex justify-center">


                        <Image src='pic-2020-new-1.jpg' placeholder='empty'  loader={myLoader05} loading='lazy' width={600} height={400} className="rounded-2xl"></Image>



                    </div>
                    <div className=" w-[600px] mx-5 flex justify-center">


                        <Image src='pic-2020-new-2.jpg' placeholder='empty'  loader={myLoader05} loading='lazy' width={600} height={400} className="rounded-2xl"></Image>



                    </div>
                    <div className=" w-[600px] mx-5 flex justify-center">


                        <Image src='pic20200110.jpg' placeholder='empty' width={600} height={400} loader={myLoader05} loading='lazy' className="rounded-2xl"></Image>



                    </div>

                    <div className=" w-[600px] mx-5 flex justify-center">


                        <Image src='pic20190711.jpg' placeholder='empty' width={600} height={400} loader={myLoader05} loading='lazy' className="rounded-2xl"></Image>



                    </div>

                    <div className=" w-[600px] mx-5 flex justify-center">


                        <Image src='pic02.jpg' width={600} placeholder='empty' height={400} loader={myLoader05} loading='lazy' className="rounded-2xl"></Image>



                    </div>

                    <div className=" w-[600px] mx-5 flex justify-center">


                        <Image src='pic01.jpg' width={600} height={400} loader={myLoader05} loading='lazy' className="rounded-2xl"></Image>



                    </div>
                </Marquee>
             </div>

            


          


        </div>
    )
}
