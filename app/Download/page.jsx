
"use client"
import Hero from '@/components/hero'

import Script from 'next/script'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import Style from '../../styles/additional-styles/range-slider.css'
import Image from 'next/image'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

// import Video01 from '../../public/videos/吹氣袋-吸管插入拷貝.mp4'
import { motion } from 'framer-motion'
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo, lazyload, accessibility, responsive, placeholder } from "@cloudinary/react";


// import video
import YouTubePlayerUH2 from '../../components/VideoPlayer/UH2en.jsx';

import YouTubePlayerUH1 from '../../components/VideoPlayer/UH1en.jsx';

import YouTubePlayerGAS from '../../components/VideoPlayer/UH2-GASen.jsx';

import YouTubePlayerUX100 from '../../components/VideoPlayer/UX100en.jsx';

import YouTubePlayerUX200 from '../../components/VideoPlayer/UX200en.jsx';

import YouTubePlayerCS200 from '../../components/VideoPlayer/CS200.jsx';

import YouTubePlayerUltraP01  from '../../components/VideoPlayer/UltraP01.jsx';

import YouTubePlayerUltraP02 from '../../components/VideoPlayer/UltraP02.jsx';
import YouTubePlayerUltraP03 from '../../components/VideoPlayer/UltraP03.jsx';

const cld = new Cloudinary({
    cloud: {
        cloudName: 'ducasbzsc'
    }
})


const myLoader = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/DM/${src}?w=${width}?p=${placeholder}`
}
const myLoader01 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Download/${src}?w=${width}?p=${placeholder}`
}
const myLoader02 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/nav/${src}?w=${width}?p=${placeholder}`
}


const myLoader001 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}?p=${placeholder}`
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
    
        <div className='flex justify-center items-center border border-blue-600 dark:bg-gray-200'>

            {/* 結構化資料  */}
            <title>Humming Probe UH2
                免校正超微量酸鹼電極 | 超極生技UltraE | pH檢測儀器
            </title>
            <meta key="description" name="description" content="DESCRIPTION" />

            <meta name="viewport" content="width=device-width, initial-scale=1.0" />



            <meta property="og:url" content="https://ithelp.ithome.com.tw/articles/10278469" />
          
            <meta property="og:type" content="website" />
            <meta property="og:title" content="
免校正超微量酸鹼電極
" />
            <meta property="og:description" content="全球首創免校正酸鹼量測的方法，創新技術將電極量測原理整合在單一試片上。採用試片電極檢測pH值，具備以下特色:
" />
            <meta property="og:image" content="https://www.ultraehp.com/images/Products-Detail-Img/UH-1/UH1-09-製程操控720x540.webp" />

            <div className='max-w-[1400px]  w-[100%] md:w-[100%] lg:w-full '>
                <div className="fixed mobile-lang w-full top-[10px] pr-6 md:hidden flex justify-end mx-auto z-[99999] ">
                    <a href="https://www.ultraehp.com/Download.html">
                        <div className='w-[40px] h-[40px] text-[18px] bg-white    text-black rounded-full flex justify-start pl-[11.5px] items-center '>cn</div>
                    </a>
                </div>

                <a href="https://www.ultraehp.com/en"><Image loader={myLoader001} src='Ultrae-logo.png' width={80} loading='lazy' placeholder='empty' className="fixed mt-3 ml-[20px] md:ml-[90px] z-50 top-[60px] left-10" alt='Ultrae-logo' height={40}></Image> </a>

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
                                <a className='w-full block' href="https://www.ultraehp.com/en/Download.html">English</a>
                            </DropdownItem>
                            <DropdownItem key="new">
                                <a className='w-full block' href="https://www.ultraehp.com/Download.html ">繁體中文</a>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>


                </div>
               

                <section className="section_topTabs my-[200px] ">
                    <div className="container">
                        <div className="row flex justify-center">
                            <h1 className='text-[40px] mb-[50px]'>Source Files </h1>

                        </div>
                        <div className="row">
                            <div className="flex w-full flex-col">
                                <Tabs className='' aria-label="Options">
                                    
                                    <Tab key="Videos" title="Videos">
                                        <Card className='outline-none shadow-none'>
                                            <CardBody>

                                                <div className="items flex flex-wrap ">
                                                    <div className='w-[380px] flex justify-center items-center flex-col m-3'>


                                                        <YouTubePlayerUH1 />
                                                        

                                                   
                                                        <div className="txt pt-4">
                                                            <b>Humming Probe UH1

                                                            </b>
                                                            <p>
                                                                pH-test paper/ pH test strip/ pH measurement/ pH strip electrode/ single use pH sensor


                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='w-[380px] m-3'>

                                                        <YouTubePlayerGAS />
                                                        <div className="txt pt-4">
                                                            <b>pH Strip Electrode for Gas-gas


                                                            </b>
                                                            <p>
                                                                pH-test paper / pH test strip / pH measurement / pH strip electrode / single use pH sensor for gas


                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='w-[380px] m-3'>

                                                        <YouTubePlayerUX200 />
                                                        <div className="txt pt-4">
                                                            <b>CALIBRATION-FREE pH METER-UX200



                                                            </b>
                                                            <p>

                                                                pH meter/pH Measurement system


                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='w-[380px] m-3'>

                                                        <YouTubePlayerUX100 />
                                                        <div className="txt pt-4">
                                                            <b>CALIBRATION-FREE pH METER-UX100

                                                            </b>
                                                            <p>
                                                                pH meter/pH Measurement system




                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='w-[380px] m-3'>

                                                        <YouTubePlayerUH2 />
                                                        <div className="txt pt-4">
                                                            <b>pH STRIP ELECTRODE-UH2



                                                            </b>
                                                            <p>
                                                                pH-test paper/ pH test strip/ pH measurement/ pH strip electrode/ single use pH sensor





                                                            </p>
                                                        </div>

                                                    </div>

                                                </div>



                                            </CardBody>
                                        </Card>
                                    </Tab>
                                    <Tab key="Download" title="Download">
                                        <Card className='outline-none shadow-none'>
                                            <CardBody>
                                            
                                                        <div className="download-item flex flex-wrap p-7">
                                                            <a download="https://www.ultraehp.com/images/DM/UltraE-DM-v2.pdf" href="https://www.ultraehp.com/images/DM/UltraE-DM-v2.pdf">
                                                                <div className=' flex flex-col items-center mt-3 hover:scale-105 duration-300  w-full m-2 md:w-[320px] lg:w-[340px] mx-1 overflow-hidden rounded-2xl'>
                                                                    <div className="img">
                                                                        <Image width={260} loader={myLoader01} placeholder='empty' height={200} src='DM.jpg'></Image>

                                                                    </div>
                                                                    <div className="txt p-6">
                                                                        <b className=' text-[16px] font-normal leading-normal'> UltraE DM</b>
                                                                        <p>File size approx: 7.6 Mb
</p>

                                                                    </div>
                                                                </div>
                                                            </a>
                                                    <a download="https://www.ultraehp.com/images/DM/UltraE-DM-v2.pdf" href="https://www.ultraehp.com/images/DM/UltraE-DM-v2.pdf">
                                                                <div className=' flex flex-col items-center mt-3 hover:scale-105 duration-300  w-full m-2 md:w-[320px] lg:w-[340px] mx-1 overflow-hidden rounded-2xl'>
                                                                    <div className="img">
                                                                        <Image placeholder='empty' loading='lazy' loader={myLoader} width={260} height={200} src='UH2-GAS單張DM-v1-OUT.jpeg'></Image>

                                                                    </div>
                                                                    <div className="txt p-6">
                                                                        <b className='leading-normal text-[16px] font-normal'> UH2-Gas DM</b>
                                                                        <p>File size approx: 1 Mb</p>

                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <a href="https://www.ultraehp.com/images/Download/DM/Pdf/UX100_UserManual -1.2.pdf" download="https://www.ultraehp.com/images/Download/DM/Pdf/UX100_UserManual -1.2.pdf">
                                                                <div className=' flex flex-col items-center mt-3 hover:scale-105 duration-300  w-full m-2 md:w-[320px] lg:w-[340px] mx-1 overflow-hidden rounded-2xl'>
                                                                    <div className="img">
                                                                        <Image loading='lazy' loader={myLoader02} placeholder='empty' width={260} height={200} src='UX100.webp'></Image>

                                                                    </div>
                                                                    <div className="txt p-6">
                                                                        <b className='text-[16px] font-normal leading-normal'> Product operating instructions</b>
                                                                        <p className='font-light text-[14px] text-gray-900'>UX100</p>
                                                                        <p className='text-[14px]'>File size approx: 2.4 Mb
</p>

                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <a href="https://www.ultraehp.com/images/Download/DM/Pdf/UX200_UserManual -1.0(英文版).pdf" download="https://www.ultraehp.com/images/Download/DM/Pdf/UX200_UserManual -1.0(英文版).pdf">
                                                                <div className=' flex flex-col items-center mt-3 hover:scale-105 duration-300  w-full m-2 md:w-[320px] lg:w-[340px] mx-1 overflow-hidden rounded-2xl'>
                                                                    <div className="img">
                                                                        <Image width={260} height={200} placeholder='empty' loading='lazy' loader={myLoader02} src='UX200.webp'></Image>

                                                                    </div>
                                                                    <div className="txt p-6">
                                                                        <b className='text-[16px] leading-normal  font-normal'> Product operating instructions
</b>
                                                                        <p className='font-light text-[14px] text-gray-900'>UX200</p>
                                                                        <p className='text-[14px]'>File size approx: 2.4 Mb
</p>

                                                                    </div>
                                                                </div>
                                                            </a>
                                                    <a href="https://www.ultraehp.com/images/Download/DM/Pdf/UH2-User Manaual-1.0.pdf" download="https://www.ultraehp.com/images/Download/DM/Pdf/UH2-User Manaual-1.0.pdf">
                                                                <div className=' flex flex-col items-center mt-3 hover:scale-105 duration-300  w-full m-2 md:w-[320px] lg:w-[340px] mx-1 overflow-hidden rounded-2xl'>
                                                                    <div className="img">
                                                                        <Image width={260} loader={myLoader02} placeholder='empty' loading='lazy' height={200} src='UH2.webp'></Image>

                                                                    </div>
                                                                    <div className="txt p-6">
                                                                        <b className='text-[16px] leading-normal  font-normal'> Product operating instructions
</b>
                                                                        <p className='font-light text-[14px] text-gray-900'>UH2</p>
                                                                        <p className='text-[14px]'>File size approx: 723 Kb
</p>

                                                                    </div>
                                                                </div>
                                                            </a>
                                                    <a href="https://www.ultraehp.com/images/Download/DM/Pdf/UH1-User Manaual-1.3 英文.pdf" download='https://www.ultraehp.com/images/Download/DM/Pdf/UH1-User Manaual-1.3 英文.pdf'>
                                                            <div className=' flex flex-col items-center mt-3 hover:scale-105 duration-300  w-full m-2 md:w-[320px] lg:w-[340px] mx-1 overflow-hidden rounded-2xl'>
                                                                <div className="img">
                                                                    <Image width={260} loader={myLoader02} placeholder='empty' loading='lazy' height={200} src='UH1.webp'></Image>

                                                                </div>
                                                                <div className="txt p-6">
                                                                    <b className='text-[16px] leading-normal font-normal'> Product operating instructions
</b>
                                                                    <p className='font-light text-[14px] text-gray-900'>UH1</p>
                                                                    <p className='text-[14px]'>File size approx: 635 Kb
</p>

                                                                </div>
                                                            </div>
                                                            </a>

                                                        </div>
                                               
                                            </CardBody>
                                        </Card>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </section>





            </div>
        </div>
    )
}
