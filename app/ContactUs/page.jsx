
"use client"
import Hero from '@/components/hero'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem,Button } from "@nextui-org/react";
import Script from 'next/script'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import Style from '../../styles/additional-styles/range-slider.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo, lazyload, accessibility, responsive, placeholder } from "@cloudinary/react";
const myLoader05 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/UP100/${src}?w=${width}?p=${placeholder}`
}
const myLoader001 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}?p=${placeholder}`
}

const myLoader03 = ({ src, width, quality }) => {
    return `https://www.ultraehp.com/images/nav/${src}?w=${width}&q=${quality || 75}`
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

        
      <div className='pb-[120px] bg-white'>



            <title>ContactUs|UltraE</title>
            <meta key="description" name="description" content="Ultra Micro-electrode,Ultra Healty-life. Our proud PotentioStrip patented technology brings you two major brands. The first is Ultrapeace, designed for medical and health care-Instant BUT for H.pylori. The second is the Disposable Calibration-free pH Testing Series, designed to enhance the testing experience.   " />
            <meta name="keywords" content="" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />


            {/* OG metadata */}
            <meta property="og:url" content="https://www.ultraehp.com/ContactUs.html" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Contact Us" />
            <meta property="og:description" content="For information about our privacy practices, please Visit Our Website

We use Mailchimp as our marketing platform. By clicking below to submit, you acknowledge that your information will be transferred to Mailchimp for processing. Learn more aboutMailchimp's privacy practices here." />
            <meta property="og:image" content="https://www.ultraehp.com/images/Products-Detail-Img/UX200/UX200.png" />







            <a href='https://www.ultraehp.com/en/'><Image loader={myLoader001} src='Ultrae-logo.png' width={100} loading='lazy' placeholder='empty' className="fixed mt-2 ml-[40px] md:ml-[130px] z-50 top-[65px] left-15" alt='UltraP-logo' height={40}></Image></a> 

            <div className="fixed mobile-lang w-full top-[10px] pr-6 md:hidden flex justify-end mx-auto z-[99999] ">
                <a href="https://www.ultraehp.com/ContactUs.html">
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
                            <a className='w-full block' href="https://ultraehp.com/en/ContactUs.html">English</a>
                        </DropdownItem>
                        <DropdownItem key="new">
                            <a className='w-full block' href="https://ultraehp.com/ContactUs.html ">繁體中文</a>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>


            </div>

            <link rel="alternate" href="https://www.ultraehp.com/ContactUs.html" hreflang="zh-Hant" />
            <link rel="alternate" href="https://www.ultraehp.com/en/ContactUs.html" hreflang="en" />


            <div className='flex  xl:pl-[90px]  mt-[80px] 2xl:pl-[90px]   px-[15px] md:px-[0px]  flex-col justify-center items-center  dark:bg-gray-200'>
                {/* <div className="HeroBanner">
                <Image width={1920} height={768} src='/'></Image>
            </div> */}

                
                <h1 className='font-extrabold  mt-[100px]  md:mt-[70px] xl:mt-[100px] text-[40px]'>Contact Us</h1>
                <iframe src="https://www.ultraehp.com/customized-iframe-en.html" className='w-full p-0 mt-[30px] h-[3800px] md:h-[1100px] xl:h-[1300px] 2xl:h-[2000px ] md:mt-[40px] ' frameborder="0"></iframe>

            </div>
           
      </div>

    )
}
