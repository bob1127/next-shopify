
"use client"

import Tooltip from "../components/Tooltip"
import { CldImage } from 'next-cloudinary';
import Image from 'next/image'
import { AdvancedVideo, lazyload, accessibility, responsive, placeholder } from "@cloudinary/react";

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import JsonLd from '../components/JsonLd.jsx';
import FooterScroll from '../components/FooterScroll/index.jsx'
import TWO from '../components/two-colum/Double.jsx'
import TextScroll from '../components/textScroll/TextScroll.jsx'
import AroundImg from '../components/AroundImg/index.jsx'

import Hero from '@/components/hero'
import Link from "next/link";
// import PageFramer from '../components/PageFramer/index'
import { motion } from "framer-motion";
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import MailchimpForm  from '../components/MailchimpForm.jsx'
import Head from "next/head";
import ReactSlick from '../components/ReactSlick/ImageSlider.jsx'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import ModalBtn from "../components/ModalBtn-6.jsx"
import Carousel from '../components/Carousel';
import SlickCard from '../components/SlickCarousel/SlickCarousel.jsx'
// import DragImg from '../components/DragImg/index.jsx'
// import Features from '@/components/features'
// import FeaturesBlocks from '@/components/features-blocks'
// import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
// import Features from '../components/features'

// import Testimonials from '@/components/testimonials'
// import Newsletter from '@/components/newsletter'
import ApplicateCard from '../components/Application/ApplicateCard'
// import CardHover from '../components/CardHover'
// import Cards from '../components/Cards/Cards.js'
// import { properties } from "../constants/data";
// import Accordion from "../components/Accordion/Accordion"
import SwiperCard from "../components/SwiperCarousel/SwiperCard"
// import { CldVideoPlayer } from 'next-cloudinary';



// import Head from "next/head"



// import SlickCard from '../components/slickCard/SlickCard'


import 'cloudinary-video-player/cld-video-player.min.css';

// import TabComponent from "../components/Tabs/TabComponent";
// import tabs from "../components/Tabs/tabs";
import '../styles/additional-styles/tab.css'

import {Cloudinary} from '@cloudinary/url-gen'
const cld = new Cloudinary ({
  cloud:{
    cloudName: 'dc9veqqhp'
  }
})


//carousel slider
const slides = [
  { image: '/slide1.jpg', alt: 'Slide 1' },
  { image: '/slide2.jpg', alt: 'Slide 2' },
  { image: '/slide3.jpg', alt: 'Slide 3' },
  // Add more slides as needed
];



const myLoader = ({ src, width, quality, placeholder }) => {
  return `https://www.nikoand.jp/wp-content/themes/theme-nikoand2024/assets/img/top//${src}?w=${width}?p=${placeholder}`
}
const myLoader00 = ({ src, width, quality, placeholder }) => {
  return `https://www.ultraehp.com/images/Products-Detail-Img/UX200/${src}?w=${width}?p=${placeholder}`
}
const myLoader06 = ({ src, width, quality, placeholder }) => {
  return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}?p=${placeholder}`
}
const myLoader01 = ({ src, width, quality, placeholder }) => {
  return `https://www.zensor.com.tw/images//Products-Detail-Img/ECWP100S/${src}?w=${width}?p=${placeholder}`
}
const myLoader02 = ({ src, width, quality, placeholder }) => {
  return `https://www.zensor.com.tw/images//Products-Detail-Img/ECWP100S/${src}?w=${width}?p=${placeholder}`
}
const myLoader03 = ({ src, width, quality, placeholder }) => {
  return `https://www.ultraehp.com/images/index/${src}?w=${width}?p=${placeholder}`
}

const myLoader04 = ({ src, width, quality, placeholder }) => {
  return `https://www.ultraehp.com/images/index/carousel-img/640x640/${src}?w=${width}?p=${placeholder}`
}
const myLoader10 = ({ src, width, quality, placeholder }) => {
  return `https://www.ultraehp.com/images/index/carousel-img/1024x576/${src}?w=${width}?p=${placeholder}`
}
const myLoader05 = ({ src, width, quality, placeholder }) => {
  return `https://www.ultraehp.com/images/index/carousel-img/1920x768/${src}?w=${width}?p=${placeholder}`
}
const myLoader07 = ({ src, width, quality, placeholder }) => {
  return `https://www.ultraehp.com/images/index/icon/${src}?w=${width}?p=${placeholder}`
}

const myLoader001 = ({ src, width, quality, placeholder }) => {
  return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}?p=${placeholder}`
}
const myLoader09 = ({ src, width, quality, placeholder }) => {
  return `https://www.ultraehp.com/images/${src}?w=${width}?p=${placeholder}`
}
export default async function Home() {

  const url = "//us14.admin.mailchimp.com/subscribe/post?u=zefzefzef&id=fnfgn";
  const SimpleForm = () => <MailchimpSubscribe url={url} />
  const CustomForm = () => (
    <MailchimpSubscribe
      url={url}
      render={({ subscribe, status, message }) => (
        <div>
          <SimpleForm onSubmitted={formData => subscribe(formData)} />
          {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
          {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{ __html: message }} />}
          {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
        </div>
      )}
    />
  )



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
  let easing = [0.6, -0.05, 0.01, 0.99];

  const fadeInUp = {
    initial: {
      y: 100,
      opacity: 0,
      transition: { duration: 0.6, ease: easing }
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2.6,
        ease: easing
      }
    }
  };
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  // const fadeInUp = {
  //   initial:{
  //     y:60,
  //     opacity: 0,
  //     transition: { duration: 0.6, ease: easing }


  //   }
  // }



  const ProductPost = {
    title: 'UltraE ｜ Instant H.pylori BUT test, Disposable calibration-free pH meter ｜UltraPeace & hunmming probe',
    description: "Ultra Micro-electrode,Ultra Healty-life. Our proud PotentioStrip patented technology brings you two major brands. The first is Ultrapeace, designed for medical and health care-Instant BUT for H.pylori. The second is the Disposable Calibration-free pH Testing Series, designed to enhance the testing experience.",
    image: "https://www.ultraehp.com/images/index/carousel-img/1920x768/UltraP%E5%B9%BD%E9%96%80%E6%A1%BF%E8%8F%8C%E4%BA%BA%E9%AB%94%E8%83%83%E7%97%9B%E8%A6%96%E8%A6%BA%E5%9C%96-%E7%84%A1%E5%AD%971920X768.webp?w=1920?p=undefined%201x,%20https://www.ultraehp.com/images/index/carousel-img/1920x768/UltraP%E5%B9%BD%E9%96%80%E6%A1%BF%E8%8F%8C%E4%BA%BA%E9%AB%94%E8%83%83%E7%97%9B%E8%A6%96%E8%A6%BA%E5%9C%96-%E7%84%A1%E5%AD%971920X768.webp",
    positive01: "7” Color Touchscreen",
    positive02: "Algorithm automatic end point judgment",
    positive03: "Waterproof: IP54",
    LogoImg: "https://www.ultraehp.com/images/Products-Detail-Img/UP100/Ultrae-logo.png",
    BrandName: "UltraE",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": ""
    }
  };




  return (


    <div className=''>



      <link rel="alternate" href="https://www.ultraehp.com/index.html" hreflang="zh-Hant" />
      <link rel="alternate" href="https://www.ultraehp.com/en/index.html" hreflang="en" />


      {/* metadata */}
      <title>Next | Shopify</title>
      <meta key="description" name="description" content="Ultra Micro-electrode,Ultra Healty-life. Our proud PotentioStrip patented technology brings you two major brands. The first is Ultrapeace, designed for medical and health care-Instant BUT for H.pylori. The second is the Disposable Calibration-free pH Testing Series, designed to enhance the testing experience.   " />
      <meta name="keywords" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />


      {/* OG metadata */}
      <meta property="og:url" content="https://www.ultraehp.com" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="UltraE ｜ Instant H.pylori BUT test, Disposable calibration-free pH meter ｜UltraPeace & hunmming probe" />
      <meta property="og:description" content="Ultra Micro-electrode,Ultra Healty-life. Our proud PotentioStrip patented technology brings you two major brands. The first is Ultrapeace, designed for medical and health care-Instant BUT for H.pylori. The second is the Disposable Calibration-free pH Testing Series, designed to enhance the testing experience.  " />
      <meta property="og:image" content="https://www.ultraehp/images/nav/UX200.web" />



      <div className="outWrap overflow-hidden ">

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


      
   <div className=" my-[150px]">
    <Hero/>
    <section className="section_HotProducts">
      <div className="wrapper flex flex-col md:flex-row justify-center items-center px-[35px] w-full">
         <div className="w-full md:w-[45%] flex flex-col justify-center items-center">
            <div className="top hover:scale-90 flex  justify-center items-center border-1 border-gray-900 duration-200  duration-200 p-1">
              <img src="https://www.nikoand.jp/wp-content/uploads/2024/07/UP_main_-W1226%C3%97H1226.jpg" className="w-full md:w-full" alt="" />
              
            </div>
            <div className="bottom">
              <img src="" alt="" />

            </div>
          
         </div>
        <div className="w-full md:w-[55%] flex flex-col md:flex-col p-[20px]">
           <div className="top border flex-col border-black w-full flex md:flex-row">
              <div className="left m-2 duration-200 hover:scale-90 p-5 w-full md :w-1/2 border-1 border-black">
                
                <img src="https://www.nikoand.jp/wp-content/uploads/2024/07/mu_thumbnail.jpg" className=" w-[500px] md:w-[300px] h-[300px]" alt="" /> 
                
              </div>
            

 <div className="left m-2 p-5 duration-200 hover:scale-90 w-full md:w-1/2 border-1 border-black">

                    {/* <img src="https://www.nikoand.jp/wp-content/uploads/2024/07/MAIN_VISUAL-1024x1024.jpg" className="w-[300px] h-[300px]" alt="" /> */}
                    {/* <PageFramer/> */}
              </div>

           
             
            
           </div>
           <div className="bottom p-2">
            <div className="wrap p-8 bg-[#2b72e5] rounded-[10px]">
              <div className="top border-b-2 flex justify-start items-center border-black py-4">
                <p className="text-[20px] text-white">Hot Sales</p><b className="ml-2 text-[12px]">人気の記事</b>
              </div>
              <div className="bottom">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum impedit accusantium iusto vel? Laboriosam sequi optio consequuntur, distinctio eveniet consequatur cum sapiente cumque odit officiis fugit quod rerum totam illo.</p>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum impedit accusantium iusto vel? Laboriosam sequi optio consequuntur, distinctio eveniet consequatur cum sapiente cumque odit officiis fugit quod rerum totam illo.</p>
              </div>
            </div>
            
           </div>
          
         </div>
         
      </div>
       
    </section>
       <h1>Hellow </h1>
        <section className="section_SharpImg">
          <div className="gird grid-cols-3">
            <div className="relative">
              <Image className="absolute" src='fish-frame.png' loader={myLoader} width={350} height={350}/>
               <Image className="absolute" src='fish1.png' loader={myLoader} width={300} height={300}/>
                <Image className="absolute left-[]" src='fish2.png' loader={myLoader} width={150} height={150}/>
                 <Image className="absolute" src='fish4.png' loader={myLoader} width={150} height={150}/>

            </div>
            <div></div>
            <div></div>
             
          </div>
           <div className="gird grid-cols-2">
            <div>
              
            </div>
            <div></div>
          
             
          </div>

        </section>

        <section className="hidden">
          <TextScroll/>
        </section>

        <section className="hidden">
           <TWO/>
        </section>


        <section>
          <h4 className="text-center">spline</h4>

          <div className="w-[80%] mx-auto">
            <div className="left"></div>
      

          </div>
        

        </section>
        <section className="section_ScrollPallax px-[20px] sm:px-[30px] w-full flex flex-col md:flex-row justify-center items-start">
          <div className="left w-[40%] relative">
            
             <SlickCard/>
            
          </div>
          <div className="middle relative w-full md:w-[30%] overflow-y-scroll bg-[#ECECEC] h-[97.5vh] pb-[30px]">

            <div className="sideBar absolute h-full right-0 top-0 ">
              <div className="items  flexed right-0 left-3 top-3 ">
                <a href="" className=" block w-[60px] border-black border-2 rounded-[30px] my-6 bg-white rotate-[-90deg] text-center transform origin-center">
                  MEN
                </a>
                 <a href="" className=" block w-[60px] border-black border-2 rounded-[30px]   my-6 bg-white rotate-[-90deg] text-center transform origin-center">
                  KIDS
                </a>
                  <a href="" className=" block w-[60px] border-black border-2 rounded-[30px]  my-6 bg-white rotate-[-90deg] text-center transform origin-center">
                  WOMEM
                </a>
              </div>
            </div>
            <div className="inner h-auto flex flex-col justify-center items-center">
             <div className="bg-[#c0c67f] py-6">
               <img src="https://www.globalwork.jp//static/pages/women/2023aw_lightwarm_outerseries/assets/images/pic_menu_about.gif" alt="" className="w-[80%] mx-auto"/>
              <h3 className="text-[32px] text-white text-center mt-4">LIGHT WARM 保暖衣</h3>
              <p className="text-white  mt-2 text-[13px] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi natus eaque, tempora et minus inventore totam quod accusantium excepturi consequuntur repudiandae. Iste delectus totam quibusdam soluta asperiores dicta exercitationem vitae!</p>
             </div>
             <div className="w-full flex flex-row px-3">
                <div className="p-2 w-1/3">
                   <img src="https://ace-industry.co.jp/danikuru/img/detail1.png" alt="" className="" />
                </div>
               <div className="p-2 w-1/3">
                   <img src="https://ace-industry.co.jp/danikuru/img/detail2.png" alt="" className="" />
                </div>
                <div className="p-2 w-1/3">
                   <img src="https://ace-industry.co.jp/danikuru/img/detail3.png" alt="" className="" />
                </div>
             </div>


             <div className="txt">
               <b className="font-bold text-center text-[30px]">PLAY  SWITCH</b>
             </div>
            {/* <p className="text-[30px] text-center text-black">HOT SALE</p> */}


             <h4 className="text-[#333]">
              其他配件
             </h4>
            </div>
          </div>
          <div className="right w-[30%]">

          </div>


        </section>
        <section className="section_FooterScroll mt-[200px]">
          <FooterScroll/>

        </section>
        <ApplicateCard/>

        <div className="w-full  flex-col  md:flex-row flex justify-center items-center border  bg-white border-black">
          <div className="left w-full md:w-1/2 border border-green">


               <div>
                  <div className="top">
                    <div className="title py-4 flex mx-auto  w-2/3 justify-center items-center flex-col">
                      <b className="text-[12px]">高い機能美を
デイリーなデザインに投影</b>
                      <b className="text-[12px] text-center">高耐久繊維のCORDURA®︎を贅沢にも二重織りでデザイン。
裏地だけ糸の太さを変えることで、袖を通した瞬間から
暖かみとソフトな肌当たりが実感できる。
パンツはセンタークリースのないイージーなスラックスタイプ。</b>
                      <Link href="/toys" className="text-[12px] border border-black mt-2 py-1 px-2 text-center w-[100px] block"> More</Link>


                      
                    </div>
                    
                  </div>
                  <div className="bottom">
                    
                  </div>
               </div>
               <SwiperCard/>
            
          </div>



          <div className="right overflow-hidden relative w-full md:w-1/2 border border-green">
              <img src='https://www.dot-st.com/static/docs/studioclip/pages/kazumi_2023september/assets/img/ballet/img_day02_main.jpg' className="w-full "></img>
              <div className="txt left-[10%] bottom-[20%] absolute z-[99999]">
                <div className="flex mx-auto flex-col justify-center items-center">
                   <b className="font-extrabold text-white text-[22px]">中田 慎介</b>

                <p className="text-white text-[16px] font-normal">
                  CREAT DERECT
                  
                  </p>          
                  <p className="font-light w-3/4 text-center text-[13px] text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima rerum facilis exercitationem nisi aut rem odio veniam dolores 
                  </p>
                  <a href="" className="text-[#85dc1c] font-bold w-[180px] text-center py-2 duration-75 mt-4 hover:text-[#fff] hover:bg-[#85dc1c] px-4 border border-[#85dc1c]"> READ MORE</a>
                </div>


                     
              </div>
            
          </div>
        </div>







         <div className="w-full  flex-col  md:flex-row flex justify-center items-center border  bg-white border-black">
          <div className="left w-full md:w-1/2 border border-green">

<img src='https://www.dot-st.com/static/docs/studioclip/pages/kazumi_2023september/assets/img/img_mv.jpg' className="w-full "></img>
              <div className="txt left-[0%] bottom-[20%] absolute z-[99999]">
                <div className="flex mx-auto flex-col justify-center items-center">
                   <b className="font-extrabold text-white text-[22px]">中田 慎介</b>

                <p className="text-white text-[16px] font-normal">
                  CREAT DERECT
                  
                  </p>          
                  <p className="font-light w-2/5 text-center text-[13px] text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima rerum facilis exercitationem nisi aut rem odio veniam dolores 
                  </p>
                  <a href="" className="text-[#85dc1c] font-bold w-[180px] text-center py-2 duration-75 mt-4 hover:text-[#fff] hover:bg-[#85dc1c] px-4 border border-[#85dc1c]"> READ MORE</a>
                </div>


                     
              </div>







               
            
          </div>



          <div className="right overflow-hidden relative w-full md:w-1/2 border border-green">
              <div>
                  <div className="top">
                    <div className="title py-4 flex mx-auto  w-2/3 justify-center items-center flex-col">
                      <b className="text-[12px]">高い機能美を
デイリーなデザインに投影</b>
                      <b className="text-[12px] text-center">高耐久繊維のCORDURA®︎を贅沢にも二重織りでデザイン。
裏地だけ糸の太さを変えることで、袖を通した瞬間から
暖かみとソフトな肌当たりが実感できる。
パンツはセンタークリースのないイージーなスラックスタイプ。</b>
                      <Link href="/toys" className="text-[12px] border border-black mt-2 py-1 px-2 text-center w-[100px] block"> More</Link>


                      
                    </div>
                    
                  </div>
                  <div className="bottom">
                    
                  </div>
               </div>
               <SwiperCard/>
            
          </div>
        </div>

        <div>
        {/* <ApplicateCard/> */}
        </div>

        <div className="w-full flex flex-col  md:flex-row">
          <div className="left iframe-drag w-full md:w-[60%]">
             
     <iframe src='https://my.spline.design/capcopy-d422eebc2e9d45431ef1d4d7c6edf749/' frameborder='0' width='100%' height='500px'></iframe>
     
             
          </div>
          <div className="right w-full  flex flex-col justify-center items-center md:w-[40%]">
           
            
            <h2 className="text-center font-extrabold">
              The snackback
            </h2>
            <p className="text-center w-2/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus tempore nemo qui voluptas placeat! Dolor.

            </p>
             
             <Link href="/toys" className="border-2 mt-3 py-1 px-4 border-black  text-[20px] text-center"> Others Products</Link>
            
          </div>
        </div>

        



         
        {/* <Cards/> */}
   </div>
        


      
{/* 
        <section className="section_features">
          <div className="container">
            <div className="row">
              <Features/>
            </div>
            
          </div>
          
          
        </section> */}




{/* 
        <div className="row py-20 lg:px-10 px-5 xl:px-20 ">
          <SwiperCard />
       

        </div> */}
        {/* <MailchimpForm/> */}



     </div>
    </div>
  )
}
