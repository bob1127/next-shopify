"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import Image from 'next/image';
import { DefaultSeo } from 'next-seo';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

import YouTubePlayer from '../../components/VideoPlayer/CS200en.jsx';

import JsonLd from '../../components/JsonLd.jsx';
import { Card, CardHeader, CardBody, Tooltip, Button } from "@nextui-org/react";
import CarouselThumbs from "../../components/CarouselThumbs.js";
import { card, CardFooter } from '@nextui-org/react';
import OthersProducts from '../../components/ReactSlick/ImageSlider2.jsx'
import { Tabs, Tab} from "@nextui-org/react";
import { AdvancedVideo, lazyload, accessibility, responsive, placeholder } from "@cloudinary/react";

import SwiperSlider from '../../components/SwiperSliders/CS200Slider.jsx';
import Navigation from "../../components/Products/Navigation.jsx";
import ModalBtn from "../../components/ModalBtn-2.jsx"
import ModalBtn01 from "../../components/ModalBtn-3.jsx"
import ModalBtn05 from "../../components/ModalBtn-5.jsx"
import ModalBtn04 from "../../components/ModalBtn-4.jsx"
import ModalBtn02 from "../../components/ModalBtn-2.jsx"
import { Cloudinary } from "@cloudinary/url-gen";
import FindSPE from '../../components/FindSPE.jsx'

const cld = new Cloudinary({
    cloud: {
        cloudName: 'ducasbzsc'
    }
})

const myLoader = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/CS200/${src}?w=${width}?p=${placeholder}`
}
const myLoader001 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}?p=${placeholder}`
}
const myLoader01 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UH-1/${src}?w=${width}?p=${placeholder}`
}
const myLoader03 = ({ src, width, quality }) => {
    return `https://www.ultraehp.com/images/nav/${src}?w=${width}&q=${quality || 75}`
}
const myLoader05 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/index/${src}?w=${width}?p=${placeholder}`
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



const data = [
    {

        caption: '免校正微量拋棄式pH計酸鹼檢測儀的外觀/蜂鳥探針Humming Probe UX100/超極生技UltraE',
        // image:
          
        //     '/UX100/UX100_zp5m5y.webp' ,
       
    },
    {
        caption: '免校正微量拋棄式pH計酸鹼檢測儀的尺寸及接口介紹Humming Probe UX100/超極生技UltraE',
        // image:
        //     '/UX100/UX100-03-UX100機身介紹1000x1000_t6owog'
      
    },
    {
        caption:'免校正微量拋棄式pH計酸鹼檢測儀和連續檢測使用的變頻磁力攪拌器Humming Probe UX100/超極生技UltraE',
        // image:
        //     '/UX100/UX100-04-插入電擊1000x1000_fzv84t'
      
    },
    {
        caption: '免校正微量拋棄式pH計酸鹼檢測儀的兩重電極接口Humming Probe UX100/超極生技UltraE',
        // image:
        //     '/UX100/UX100-07-雙模式1000x1000_j4twq5'
      
    },
    {
        caption: '免校正微量拋棄式pH計酸鹼檢測儀的拍照功能記錄現場數據Humming Probe UX100/超極生技UltraE',
        // image:
        //     '/UX100/UX100-05-500萬畫素1000x1000_bwb7hf'
      
    },
    {
        caption: '免校正微量拋棄式pH計酸鹼檢測儀觸控熒幕Humming Probe UX100/超極生技UltraE',
        // image:
        //     '/UX100/UX100-06-4.3彩色觸控螢幕1000x1000_bym4dc'
      
    },


];
const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
};
const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
};




const ProductPost = {
    title: 'CS200 磁石變頻攪拌器 - Humming Probe 特制版',
    description: "恆速磁石變頻攪拌器/蜂鳥探針特制版CS200可以感應不同粘稠度液體提供穩定恆速的攪拌，具恆溫加熱功能，附有pH電極專用支架。適合連續檢測實驗使用",
    image: "https://www.ultraehp.com/images/Ultra Video/CS200/英文版/YouTube-CS200-英文.jpg",
    positive01: "可感測粘度自動調整的恆速磁力攪拌器",
    positive02: "恆溫定時加熱系統(20 ~ 40°C)",
    positive03: "燒杯適用大小(10 ~ 500 mL) ",
    LogoImg: "https://www.ultraehp.com/images/Products-Detail-Img/UP100/company-logo-mobile.webp",
    BrandName: "HummingProbe",
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": ""
    }
};






// const { onOpen, onOpenChange } = useDisclosure();
const Product = props => (

    
    

    <div className="relative bg-white">
        <div>
        
            <JsonLd data={{
                "@context": "https://schema.org",
                "@type": "Product",
                "headline": ProductPost.title,
                "description": ProductPost.description,
                "datePublished": ProductPost.datePublished,
                "author": ProductPost.author,
                "image": [ProductPost.image],
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
            <a href="https://www.ultraehp.com/hummingprobe/CS200.html">
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
                        <a className='w-full block' href="https://www.ultraehp.com/hummingprobe/en/CS200.html">English</a>
                    </DropdownItem>
                    <DropdownItem key="new">
                        <a className='w-full block'  href="https://www.ultraehp.com/hummingprobe/CS200.html">繁體中文</a>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>


        </div>

        
        <link rel="alternate" href="https://www.ultraehp.com/hummingprobe/CS200.html" hreflang="zh-Hant" />
        <link rel="alternate" href="https://www.ultraehp.com/hummingprobe/en/CS200.html" hreflang="en" />

        {/* metadata */}
        <title>Constant speed magnet variable frequency stirrer - CS200</title>
        <meta key="description" name="description" content="Constant speed magnet variable frequency stirrer/Humming Probe special version CS200 can sense liquids of different viscosity to provide stable and constant speed stirring, with constant temperature heating function, with a special exclusive holder for pH electrode. Suitable for continuous detection experiments" />
        <meta name="keywords" content="CS200 Magnet Inverter Mixer/Variable Frequency Magnetic Stirrer
/pH Measurement Strips/pH Strip Electrode Holder" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* OG metadata */}
        <meta property="og:url" content="https://www.ultraehp.com/hummingprobe/en/CS200.html" />
      
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Constant speed magnet variable frequency stirrer - CS200" />
        <meta property="og:description" content="Constant speed magnet variable frequency stirrer/Humming Probe special version CS200 can sense liquids of different viscosity to provide stable and constant speed stirring, with constant temperature heating function, with a special exclusive holder for pH electrode. Suitable for continuous detection experiments" />
        <meta property="og:image" content="https://www.ultraehp.com/images/Products-Detail-Img/CS200/CS200-首圖機身1000x1000.webp" />

{/* 
        <AnimatedTabs /> */}
      {/* <MobileMenu/> */}
      

        <motion.div className="dark:bg-black bg-gray-100 " initial='initial' animate='animate' exit={{ opacity: 0 }}>
            <Navigation />



            <Image loader={myLoader001} src='company-logo.webp' width={160} loading='lazy' placeholder='empty' className="fixed mt-2 ml-[20px] md:ml-[90px] z-[999] top-[60px] left-10" alt='UltraP-logo' height={60}></Image> 

            

            <div className="content-bottom md:p/x-10 mt-[150px] xl:px-15 2xl:px-20">
                <section className="section  mt-[150px]">
                    <div className="Navgation mb-[30px]  hidden md:block pl-[150px]"> <a href="https://www.ultraehp.com/hummingprobe/en/" className="hover:font-bold">Home</a> / <a className="hover: font-bold " href="#">CS200 MAGNET INVERTER MIXER</a> </div>
                    <div className="container flex px-[0px] md:px-[40px] xl:px-[120px] flex-col md:flex-row justify-start items-start">
                    <div className="left  w-full md:w-1/2">
                            <SwiperSlider />
                    </div>
                        <div className="left flex justify-center  md:justify-between  md:pl-[40px] w-full md:w-1/2 flex-col  h-[480px]">
                            <div className="txt">
                                <h1 className="h1-u ">CS200 MAGNET INVERTER MIXER

                                    <br /> -  (Humming Probe Special Edition)

        </h1>
                                <h2 className="model-u ">pH-test paper/ pH test strip/ pH measurement/ pH strip electrode


        </h2>
                                <p className="text-middle-u">Full-Function Variable Frequency Magnetic Stirrer for Electrochemical Experiments


        </p>
                                <ul>
                                    <li>・Full-Function Variable Frequency Magnetic Stirrer for Electrochemical Experiments


        </li>
                                    <li>・Constant Temperature Control (20-40°C)


        </li>
                                    <li>・Digital Speed Control/Display (400-1500rpm)


        </li>
                                    <li>・Beaker Size Range (10-500 mL)


        </li>
                                    <li>・Clockwise & Counter-Clockwise Design



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
                <section className=" section-about  ">
                    {/* <TextScroll /> */}
                    <div className="Container items-center flex justify-center pt-10">
                        <div className="wrap flex flex-col justify-center items-center w-3/4">


                            <motion.div className="card"
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ staggerChildren: 0.3 }}
                            >

                                <motion.h2
                                    className="text-center mb-4 text-2xl  tracking-tight text-gray-900 md:text-[32px] lg:text-[32px] lg:leading-loose  dark:text-white font-bold uppercase"
                                    variants={textAnimate}
                                > 
                                    <div className="row px-[20px] md:px-0 flex flex-col justify-center items-center">

                                        <h2 className="h2-u"> Product Appearance</h2>
                                        <p>CS200 MAGNET INVERTER MIXER</p>

                                    </div>
                                
                      






</motion.h2>


                            </motion.div>
                        </div>
                    </div>
                </section>

                <section className="section_appearance ">
                   <div className="container ">
                        <div className="flex justify-center flex-col  px-[20px] md:px-10 xl:px-20 ">
                            
                            <div className="mx-auto blank">
                                <Image src='CS200-首圖機身1000x1000.webp' width={500} height={500} loader={myLoader} loading="lazy" placeholder="empty" alt="The constant speed magnet variable frequency mixer/stirrer provides constant stirring rate control/Humming Probe special version CS200/UltraE"></Image>

                            </div>
                            <p className="mt-4 mx-auto text-center w-full md:w-2/3 lg:w-1/2 text-model-u">This is a Magnetic Stirrer specifically designed for electrochemical experiment. In addition to providing constant stirring rate control, the variable frequency magnetic stirrer also comes equipped with additional functions such as constant temperature control and countdown timer in addition to an uniquely designed holder for electrochemical experiments, allowing you to obtain a stable working platform whether using three-electrode system or using screen printed electrodes.



</p>
                        </div>

                   </div>
                      
                          
                    
                
                </section>
               <section className="section-video">
                    <div className="container px-[15px] flex  2xl:w-[60%] xl:w-[65%] md:w-[80%] w-full mx-auto flex-col justify-center items-center">
                        <div className="row flex flex-col justify-center items-center mb-0  md:mb-5">

                            <h2 className="h2-u">Operation</h2>
                            <a href='https://www.youtube.com/watch?v=kCRkBQiQKpc&feature=youtu.be'>
                                <div className="rounded-[40px] bg-[#01a5d3] flex justify-center items-center py-2 text-white w-[150px]">
                                    YouTube Video
                                </div></a>

                        </div>
                        <div>

                            <YouTubePlayer />
                        </div>
                    </div>
                </section>
                
                {/* <section className="section_video01 flex  justify-center">
                
                    <div className="container w-full justify-center flex flex-col  2xl:px-20 lg:px-10 md:px-10 lg:p-5 px-[20px] ">
                     
                        <div className="row flex flex-col justify-center items-center mb-0  md:mb-5">

                            <h2 className="h2-u">Introduction Video
</h2>
                            <p>Operation</p>

                        </div>

                       
                     



                        <AdvancedVideo plugins={[lazyload({ rootMargin: '10px 20px 10px 30px', threshold: 0.25 })]} poster='https://www.ultraehp.com/images/Products-Detail-Img/CS200/YouTube-CS200-中文.webp' className='rounded-2xl mx-auto' preload="true" controls width={1000} height={600} cldVid={cld.video('/CS200Video/CS200中文版-2_bmtgmw')} />
                       










                    </div>
                </section> */}
                
                <section className="section_clear_display" id="features">
                    <div className="Container pl-[20px] md:px-20">
                        <div className="grid grid-cols-1">
                            <div className="row mt-20 flex items-center flex-col  justify-center">
                          


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

                                       <div className="container mx-auto md:w-full  flex flex-col  justify-center items-center center">
                                            <h2 className="h2-u">Constant-temperature heating system <br/>with countdown function

</h2>
                                            <h3 className="text-middle-u">Provide 20~40 ±2°C constant temperature control system, <br/>and equipped with a safe countdown function


</h3>
                                       </div>
                                       <div className="img flex flex-col md:flex-row w-3/4 mx-auto">
                                            <Image loader={myLoader} loading='lazy' width={1000} height={300} alt='Constant-temperature heating system' src='CS100-05拷貝.webp'/>
                                            <Image loader={myLoader} alt='Constant-temperature heating system'  loading='lazy' width={1000} height={300} src='CS100-05-2.webp' />
                                       </div>

                                    </motion.h2>





                                </motion.div>


                                <motion.p
                                    className="text-m "
                                    variants={title03}
                                >

                                </motion.p>


                            </div>
                          


                            
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container xl:px-20 md:px-10 px-0">
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

                                    <h2 className="h2-u">Adjustable electrochemical experiment special holder



                                    </h2>




                                </motion.h2>


                            </motion.div>



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

                                    <div className="container center relative w-full  flex flex-col  md:flex-row justify-center">
                                        <div className="img mx-4">  <Image width={640} loading='lazy' alt='The freely adjustable exclusive holder of the constant speed magnet variable frequency mixer/stirrer for the pH electrode/Humming Probe special version CS200/UltraE' loader={myLoader} height={640} src='CS200-01-UX100機身介紹1000x1000.gif' />
</div>
                                        <div className="img mx-4 mt-4 md:mt-0">   <Image width={640} alt='The freely adjustable exclusive holder of the constant speed magnet variable frequency mixer/stirrer for the pH electrode/Humming Probe special version CS200/UltraE' loading='lazy' loader={myLoader} height={640} src='CS200-03-蜂鳥專用1000x1000.gif' />
                                        </div>


                                    </div>




                                </motion.h2>


                            </motion.div>



                        </div>
                    </div>
                </section>
             

                <section className="  flex center">
                    <div className="mb-10 container mx-auto px-3 md:px-10 lg:px-10">
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



                 


                            </motion.h2>






                
                            

                        </motion.div>


                    </div>

                    

                </section>


                <FindSPE/>










                <section>
                    <div className="Container  md:px-20">
                        <div className="grid grid-cols-1">
                            <div className="row mt-20 flex items-center flex-col  justify-center">
                            


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

                                        <h2 className="h2-u">CS200 MAGNET INVERTER MIXER

</h2>
                                        <p className="text-lg text-gray-800 md:w-2/3 w-full mx-auto">(Humming Probe Special Edition)


</p>

                                    </motion.h2>



                                    <motion.p
                                        className="text-m flex center "
                                        variants={title02}
                                    >

                                        <a download='https://www.ultraehp.com/images/DM/UltraE-DM-v2.pdf' href='https://www.ultraehp.com/images/DM/UltraE-DM-v2.pdf' className="rounded-full text-center w-[150px]  bg-orange-500 text-white py-2 px-4 mx-auto mb-[50px]">
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


                                    <div className="grid grid-cols-1 ">
                                         <div className="p-0 lg:p-10  items-center justify-center flex flex-col">
                                                <Image loading='lazy' src='CS200-03.webp' loader={myLoader} className="mr-[0px] w-1/2" placeholder="empty" alt='The dimensional drawing of the constant speed magnet variable frequency mixer/stirrer/Humming Probe special version CS200/UltraE' width={1000} height={600}></Image>

                                         </div>
                                         <div>


                                                <div className="flex w-full px-2 lg:px-[60px] xl:px-[200px] flex-col">
                                                    <Tabs aria-label="Options">
                                                        <Tab key="CS200 Magnet Inverter Mixer

" title="CS200 Magnet Inverter Mixer

">
                                                            <Card>
                                                                <CardBody>
                                                                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                                                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                                           
                                                                            <tbody>
                                                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                        Temperature Range:	
                                                                                    </th>
                                                                                    <td class="px-6 py-4">
                                                                                        (20-40°C)

                                                                                    </td>


                                                                                </tr>
                                                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                        Speed Control Range:
                                                                                    </th>
                                                                                    <td class="px-6 py-4">
                                                                                        400~1500 rpm

                                                                                    </td>


                                                                                </tr>
                                                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
Beaker Size Range:	                                                                                    </th>
                                                                                    <td class="px-6 py-4">
                                                                                        10~500 mL
                                                                                    </td>



                                                                                </tr>
                                                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                        Working Surface Material:
                                                                                    </th>
                                                                                    <td class="px-6 py-4">
                                                                                        ABS
                                                                                    </td>

                                                                                </tr>
                                                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                                        Dimension (W x L x H ):
                                                                                    </th>
                                                                                    <td class="px-6 py-4">
                                                                                        106 x 165 x 56 mm (with mounting bracket 260 mm)


                                                                                    </td>


                                                                                </tr>
                                                                                <tr className="bg-gray-800">
                                                                                    <th scope="row" class="px-6 py-4 text-white font-mediumtext-white whitespace-nowrap ">
                                                                                        Weight:	
                                                                                    </th>
                                                                                    <td class="px-6 text-white py-4">
                                                                                        500g

                                                                                    </td>

                                                                                </tr>
                                                                                <tr className="bg-gray-800 border-t-2 border-white">
                                                                                    <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-white">
                                                                                        電源：	
                                                                                    </th>
                                                                                    <td class="px-6 text-white py-4">
                                                                                        110/240 V AC, 50~60 Hz, 0.25 A

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




                                       



                                    </motion.h2>


                                </motion.div>



                            </div>



                        </div>
                    </div>
                </section>

                <section className="section px-5">
                    <div className="Container mb-6 md:mb-0 md:px-20">

                        <div className="flex sm:flex-row flex-col justify-center items-center">
                            <div className="mt-4   mx-3 w-full  md:w-2/3">
                                <ModalBtn05 />
                            </div>

                        </div>
                    </div>
                </section>
                {/* <ReactSlick /> */}
                <section className="section_others section  hidden  md:block">
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
