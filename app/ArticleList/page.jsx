
"use client"
import Hero from '@/components/hero'

import Script from 'next/script'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import Newsletter from '@/components/newsletter'
import Style from '../../styles/additional-styles/range-slider.css'
import Image from 'next/image'
import { Card, CardHeader, CardBody } from "@nextui-org/react";

import {motion} from 'framer-motion'
// import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo, lazyload, accessibility, responsive, placeholder } from "@cloudinary/react";
import { CardFooter, Button } from "@nextui-org/react";

const myLoader = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/Index/${src}?w=${width}?p=${placeholder}`
}

const myLoader001 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}?p=${placeholder}`
}

const cld = new Cloudinary({
    cloud: {
        cloudName: 'dc9veqqhp'
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

            '/UX100/UX100_zp5m5y',

    },
    {
        image:
            '/UX100/UX100-03-UX100機身介紹1000x1000_t6owog'

    },
    {
        image:
            '/UX100/UX100-04-插入電擊1000x1000_fzv84t'

    },
    {
        image:
            '/UX100/UX100-07-雙模式1000x1000_j4twq5'

    },
    {
        image:
            '/UX100/UX100-05-500萬畫素1000x1000_bwb7hf'

    },
    {
        image:
            '/UX100/UX100-06-4.3彩色觸控螢幕1000x1000_bym4dc'

    },


];

export default function Home() {
    return (
        <div className='flex flex-col  justify-center items-center dark:bg-gray-200'>

            {/* metadata */}
            <title>
                Article-List｜UltraE
            </title>
            <link rel="alternate" href="https://www.ultraehp.com/ArticleList.html" hreflang="zh-Hant" />
            <link rel="alternate" href="https://www.ultraehp.com/en/ArticleList.html" hreflang="en" />

            <meta key="description" name="description" content="Continuous detection trend calibration-free micro disposable pH meter acid-base detector UX200 with a disposable electrode requires only ultra small sample requirements, and can complete the acid-base test without pH standard solution calibration, and provides continuous acid base detection trend display, suitable for very precious samples and easily contaminated or passivated pH electrode surfaces and special samples. It can be used for continuous detection of exhaust gas, control of experimental conditions, and acid-base titration. Touch screen, intuitive operation, and suitable for outdoor use without power supply. pH sensor/pH meter/pH meter/pH measurement system/pH detector/pH value detector/portable pH meter/desktop pH meter/pH measurement system/pH meter/pH electrode/pH meter/acid-base test/pH measurement/pH test" />
            <meta name='keywords' content='pH meter/pH electrode/pH meter/acid-base test/pH measurement/pH test' />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {/* OG metadata */}
            <meta property="og:url" content="https://www.ultraehp.com/en/ArticleList.html" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="
文章列表 - 超極生技 UltraE
" />
            <meta property="og:description" content="Continuous detection trend calibration-free micro disposable pH meter acid-base detector UX200 with a disposable electrode requires only ultra small sample requirements, and can complete the acid-base test without pH standard solution calibration, and provides continuous acid base detection trend display, suitable for very precious samples and easily contaminated or passivated pH electrode surfaces and special samples. It can be used for continuous detection of exhaust gas, control of experimental conditions, and acid-base titration. Touch screen, intuitive operation, and suitable for outdoor use without power supply. pH sensor/pH meter/pH meter/pH measurement system/pH detector/pH value detector/portable pH meter/desktop pH meter/pH measurement system/pH meter/pH electrode/pH meter/acid-base test/pH measurement/pH test
" />
            <meta property="og:image" content="https://ultraehp.com/images/Products-Detail-Img/Index/UH1-01-720x540.webp" />



            <div className="fixed mobile-lang w-full top-[10px] pr-6 md:hidden flex justify-end mx-auto z-[99999] ">
                <a href="https://www.ultraehp.com/ArticleList.html">
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
                            {/* <Image className='mb-3 pr-20' src='earth.png' loader={myLoader03} loading='lazy' placeholder='empty' alt='language-switch' width={33} height={33} /> */}
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                        <DropdownItem key="new">
                            <a className='w-full block' href="https://ultraehp.com/en/ArticleList.html">English</a>
                        </DropdownItem>
                        <DropdownItem key="new">
                            <a className='w-full block' href="https://ultraehp.com/ArticleList.html">繁體中文</a>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>


            </div>
            <a href='https://www.ultraehp.com/en/'><Image loader={myLoader001} src='Ultrae-logo.png' width={100} loading='lazy' placeholder='empty' className="fixed mt-2 ml-[40px] md:ml-[130px] z-50 top-[65px] left-15" alt='UltraP-logo' height={40}></Image></a> 




            <div className="title  mt-[200px] ">
             

                <motion.div className="card"
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ staggerChildren: 0.3 }}
                >

                    <motion.h1
                        className="text-center mb-4 text-2xl  tracking-tight text-gray-900 md:text-[32px] lg:text-[32px]  dark:text-white font-bold uppercase bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400  text-transparent bg-clip-text"
                        variants={textAnimate}
                    > Article List</motion.h1>
                    <motion.p
                        className="text-center mb-4 text-[16px]  tracking-tight text-gray-700   "
                        variants={textAnimate}
                    > Ultra-Micro Electrode, <br/>
                        Ultra-Healthy Life</motion.p>
                  



                </motion.div>
            </div>
            <section className='pb-[60px]  2xl:px-[150px]'>
               <div className="cardWrap flex justify-center px-10 flex-wrap">

                    <a className='hover:scale-105 duration-300 ' href="Article04.html">
                    <Card className="py-4 m-4">
                            <CardHeader className="pb-0  md:p-6  w-[340px] pt-2 px-4 flex-col items-start">


                                <h4 className="font-bold text-large">The relation between Nernst equation and pH meter.
                            </h4>
                                <p className="text-tiny">A testing sample was placed onto the Calibration-free pH Strip Electrode to activate reduction–oxidation reaction on the strip’s ...</p>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                            <Image

                                fetchPriority='high'
                                priority={true}
                                loading='eager'
                                

                                loader={myLoader}
                                alt="Card background"
                                className="object-cover rounded-xl"
                                    src="UH1-01-720x540.webp"
                                width={320}
                                height={600}

                            />
                        </CardBody>
                    </Card>
                    </a>

                    <a className='hover:scale-105 duration-300 ' href="Article02.html">
                        <Card className="py-4 m-4 ">
                            <CardHeader className="pb-0  md:p-6  w-[340px] pt-2 px-4 flex-col items-start">
                               
                             
                                <h4 className="font-bold text-large">How to use a single drop to measuring pH value with micro sample?
                                </h4>
                                <p className="text-tiny">In the laboratory or manufacturing process, samples are sometimes small volumes or expensive ,for example...</p>
                            </CardHeader>
                            <CardBody className="overflow-visible py-2">
                                <Image

                                    loader={myLoader}
                                    alt="Card background"
                                    className="object-cover rounded-xl"
                                    src="UH1-12-試片一滴720x540.webp"
                                    width={320}
                                    height={600}

                                />
                            </CardBody>
                        </Card>
                    </a>
                    <a className='hover:scale-105 duration-300 ' href="Article05.html">
                    <Card className="py-4 m-4">
                            <CardHeader className="pb-0 w-[340px]  md:p-6  pt-2 px-4 flex-col items-start">


                                <h4 className="font-bold text-large">Testing and Control pH Value of water based UL Varnishes
                            </h4>
                                <p className="text-tiny">Varnish is resin. What we want to talk about in this article is the vanish which is applied in insulating processes ...</p>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                                <Image

                                    loader={myLoader}
                                    alt="Card background"
                                    className="object-cover rounded-xl"
                                    src="UH1沾凡立水720x540.jpg"
                                    width={320}
                                    height={600}

                                />
                        </CardBody>
                    </Card>
                    </a>
                    <a className='hover:scale-105 duration-300 ' href="Article03.html">
                    <Card className="py-4 m-4">
                            <CardHeader className="pb-0  md:p-6  w-[340px] pt-2 px-4 flex-col items-start">


                                <h4 className="font-bold text-large">You don’t need to calibarate your pH meter any more after you read this article

                            </h4>
                                <p className="text-tiny">The precision and the lifetime of the pH meter depends on the pH electrode. Sometimes, the pH measurement is inaccurate when using inappropriately. After a period of use ...</p>
                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                                <Image

                                    loader={myLoader}
                                    alt="Card background"
                                    className="object-cover rounded-xl"
                                    src="免校正-720x540.webp"
                                    width={320}
                                    height={600}

                                />
                        </CardBody>
                    </Card>
                    </a>
               </div>
            </section>

            
        </div>
    )
}
