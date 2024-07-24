
"use client"
import Hero from '@/components/hero'
import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem,Button } from "@nextui-org/react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import OthersProducts from '../../components/ReactSlick/ImageSlider2.jsx'
import Script from 'next/script'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import Style from '../../styles/additional-styles/range-slider.css'
import Image from 'next/image'
import Sticky from 'react-sticky-el';
import StickyBox from "react-sticky-box";
import ArticleBottomSection from '../../components/ArticleBottomSection'
// import SomeChild from '../../components/'




const myLoader = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/blog/${src}?w=${width}?p=${placeholder}`
}
const myLoader01 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UH-2/${src}?w=${width}?p=${placeholder}`
}
const myLoader02 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UH-1/${src}?w=${width}?p=${placeholder}`
}
const myLoader03 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UH2-Gas/${src}?w=${width}?p=${placeholder}`
}

const myLoader04 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UX100/${src}?w=${width}?p=${placeholder}`
}

const myLoader05 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UX200/${src}?w=${width}?p=${placeholder}`
}
const myLoader07 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Article/${src}?w=${width}?p=${placeholder}`
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

            '/UP100/輪播圖01_wudfzj',

    },
    {
        image:
            '/UP100/輪播圖-04_lf1ddj'

    },
    {
        image:
            '/UP100/輪播圖02-01_xcofnr'

    },
    {
        image:
            '/UP100/輪播圖-03_ku18ca'

    },
    {
        image:
            '/UP100/輪播圖-05-02_mgwrn7'

    },

    {
        image:
            '/UP100/輪播圖-06-05_q9bepc'

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



export default function Home() {
    return (
     <div className=' px-0 md:px-[30px]  2xl:px-[150px]'>



            {/* metadata */}
            <title>How to use a single drop to measuring pH value with micro sample?-UltraE
            </title>
            <link rel="alternate" href="https://www.ultraehp.com/Article02.html" hreflang="zh-Hant" />
            <link rel="alternate" href="https://www.ultraehp.com/en/Article02.html" hreflang="en" />

            <meta key="description" name="description" content="In the laboratory or manufacturing process, samples are sometimes small volumes or expensive ,for example: body fluids (including blood, tissue fluid, sweat, etc.). In order to avoid sample contamination and not affect the following operation of manufacture and raw materials, we always just take a little sample out for testing, sometimes just only a few microliters.
" />
            <meta name='keywords' content='酸鹼測試/電極pH電極/酸鹼度計/酸鹼測試/pH測試/氣體酸鹼值連續檢測/尾氣廢氣檢測/氨氣+二氧化硫濃度檢測' />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {/* OG metadata */}
            <meta property="og:url" content="https://www.ultraehp.com/en/Article02.html" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="
How to use a single drop to measuring pH value with micro sample?
" />
            <meta property="og:description" content="In the laboratory or manufacturing process, samples are sometimes small volumes or expensive ,for example: body fluids (including blood, tissue fluid, sweat, etc.). In order to avoid sample contamination and not affect the following operation of manufacture and raw materials, we always just take a little sample out for testing, sometimes just only a few microliters.

" />
            <meta property="og:image" content="https://ultraehp.com/images/blog/傳統pH校正液 1920X1080.jpg" />




            <div className="fixed mobile-lang w-full bg-white top-[10px] pr-6 md:hidden flex justify-end mx-auto z-[99999] ">
                <a href="https://www.ultraehp.com/Article02.html">
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
                            <a className='w-full block' href="https://ultraehp.com/en/Article02.html">English</a>
                        </DropdownItem>
                        <DropdownItem key="new">
                            <a className='w-full block' href="https://ultraehp.com/Article02.html ">繁體中文</a>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>


            </div>


        <div className='flex pt-[70px] md:pt-[80px] xl:pt-[90px] px-[20px] xl:px-[30px] 2xl:px-[60px] bg-white justify-center  items-start  dark:bg-gray-200'>


                <a href="https://www.ultraehp.com/en"><Image loader={myLoader001} src='Ultrae-logo.png' width={80} loading='lazy' placeholder='empty' className="fixed mt-2 ml-[40px] md:ml-[130px] z-50 top-[65px] left-15" alt='Ultrae-logo' height={40}></Image> </a>


            <section className='flex flex-col  lg:flex-row w-full section-article'>

                  
                <div className="left  pr-0 md:pr-10 w-full lg:w-2/3">
                        <section className=' p-0 m-0  md:mt-0 flex flex-col pt-[50px]'>
                            <div className="navgation mt-[20px]">
                                <a href="https://www.ultraehp.com/en/" className='text-gray-500 hover:font-black font-bold hover:text-black'>Home</a> / <a href="https://www.ultraehp.com/en/ArticleList.html" className='text-gray-500 hover:font-black font-bold hover:text-black'>Article List</a> / 
                                <a href="/" className='text-gray-500 hover:font-black font-bold hover:text-black'>How to use a single drop to measuring pH value with micro sample?</a>
                            </div>

                            <a href="https://www.ultraehp.com/hummingprobe/en/UH1.html">



                                <Image fetchPriority='high' alt='Working principle and application of micro disposable pH meter for detecting pH with only microliter (uL) or milliliter (mL)  level samples/calibration-free disposable micro pH electrode/Humming Probe - UltraE' priority={true} src='UH2-10-活魚檢測.webp' placeholder='empty' loader={myLoader01} width={1300} className='rounded-xl mt-5 ' height={500} loading='eager'></Image>



                            </a>


                        </section>


                        <h1 className='article-title mt-[30px]'>How to use a single drop to measuring pH value with micro sample?

                         

                    </h1>
                        <h2 className='article-h2 '>When do you need to test pH value with micro sample?

                    </h2>

                        <p>In the laboratory or manufacturing process, samples are sometimes small volumes or expensive ,for example: body fluids (including blood, tissue fluid, sweat, etc.). In order to avoid sample contamination and not affect the following operation of manufacture and raw materials, we always just take a little sample out for testing, sometimes just only a few microliters.

</p>
                        <Image src='一滴可量測-02-1920X1080.jpg' alt='Appearance of micro disposable pH meter for detecting pH with  only microliter (uL) or milliliter (mL) /calibration-free disposable micro pH electrode/Humming Probe - UltraE' placeholder='empty' loader={myLoader} width={1000}  className='rounded-xl mt-5 ' height={500} ></Image>





                        <h2 className='article-h2'>How to test pH value with micro sample?

</h2>
                        <p>Traditional pH value test use general glass electrode. It needs a lot of sample, about 20mL. There is special small glass electrode for micro sample pH value test on the market. But the price of these special electrode is up from hundreds of dollars. And you need to maintain and store these glass electrode carfully. Another option is to use pH test paper which can roughly detect pH value with single drop of sample. But if you need accurate measurement result or continuously pH detection is required, electrochemcial single use micro-sample pH strip electrode is also a good third choice. It is low price and no need to maintain. The most important, pH strip electrode just need a few microliter sample for test. The principle of single use micro-sample pH strip electrode is the same as the glass electrode. It is also based on electrochemical technology, but it has no inner reference electrode makeing the pH sensor smaller to the size below 3 mm. Even the volume of sample is just a few microliters, that also can provide the pH test with accuracy of ±0.1 pH. It is enough to meet the demand of large parts of the pH measurement.</p>


                 


                    <div class="flex flex-col mt-5">
                        <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div class="overflow-hidden">
                                    <table class="min-w-full rounded-2xl">
                                        <thead class="bg-blue-500 rounded-2xl border-b">
                                            <tr>
                                                <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                                                
                                                </th>
                                                <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                                                        Glass Electrode	
                                                </th>
                                                <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                                                    HUMMING PROBE	
                                                </th>
                                                <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                                                        Test Paper


                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Product

                                                        /

                                                        Item

</td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <Image src='table compare-01.jpg' alt=' Specifications, prices, advantages, and disadvantages of traditional glass pH electrodes/different brand pH detection systems comparison/Humming Probe - UltraE' placeholder='empty' loading='lazy' loader={myLoader07} width={180} height={180}></Image>
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <Image src='table compare-02.jpg' alt=' Specifications, prices, advantages, and disadvantages of traditional glass pH electrodes/different brand pH detection systems comparison/Humming Probe - UltraE' loader={myLoader07} width={180} height={180} placeholder='empty' loading='lazy'></Image>
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    <Image src='table compare-03.jpg' alt=' Specifications, prices, advantages, and disadvantages of traditional glass pH electrodes/different brand pH detection systems comparison/Humming Probe - UltraE' placeholder='empty' loading='lazy' loader={myLoader07} width={180} height={180}></Image>
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Operability		</td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        Difficult	
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        Easy
                                                </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Easy
                                               </td>
                                            </tr>
                                                <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Accuracy			</td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        High
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        High
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Low
                                                    </td>
                                                </tr>








                                            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Calibration	</td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        Needed
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        No Needed
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        No Needed
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Sample Volume		</td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        More(5~10 mL)	
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        Less(10~20 μL)	
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        Less(10~20 μL)
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Maintenance		</td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        Difficult
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        Easy
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        Easy
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Cross-contamination			</td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        Possible
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        Impossible	
                                                </td>
                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        Impossible
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>


                        <h2 className='article-h2'>The principle of detecting pH value with glass pH electrode

                    </h2>
                        <p>According to Nernst Equation, the H+ ion exchange through the glass membrane to produce the inner and outer potential E1 & E2. By measuring the boundary potential (Eb) you will get relation between Eb and pH.



</p>


                        <a href="Article04.html" className='mt-3 hover:font-bold text-orange-500'>Click here to Learn more about Nernst Equation</a>

                        <Image className='img-article ' loading='lazy' alt='Nernst equation - pH electrode working principle, potential difference generated by ion exchange inside and outside the glass membrane/calibration-free disposable micro pH electrode/Humming Probe - UltraE' loader={myLoader07} src='Article02-2.png' width={580} placeholder='empty' height={400}  ></Image>


                        <h2 className='article-h2'>The principle of detecting pH value with strip pH electrode


                    </h2>
                        <p>The principle of micro pH strip electrode is similar to pH glass electrode. By measuring the potential different, the concentration of the hydrogen ion can be measured and transfered to pH value via Nernst Equation. The diameter of the acid-base detection film of strip pH electrode is below 3 mm. So it just needs very little sample to contact with the sensing layer and gets accurate measurement of the pH value. Even the volum of sample is so small, the accuracy of pH measurement can be ±0.1, sensitity can be 0.01. The specification of strip pH electrode is as good as expensive high-end pH glass electrode in the market.



                    </p>



                        <Image className='img-article ' loading='lazy' alt='Screen-printed pH electrode working principle/disposable salt bridge reference electrode/calibration-free disposable micro pH electrode/Humming Probe - UltraE' loader={myLoader07} src='article02-3.png' width={400} placeholder='empty' height={400}  ></Image>







                        <h2 className='article-h2'>What is the difference between glass pH electrode and micro strip pH electrode in use and maintenance?</h2>


                        <h3 className='article-h3'>Traditional glass pH electrodes- need calibration

</h3>
                        <p>After a period of use, the membrane of the pH glass electrode may be block or be scratched or aging. These will cause the potential shifting, so you need to calibrate the pH system according to the user guide by use frequency and accuracy requirement. Although there are many types of pH meters, most of their calibration methods use a two-point calibration method. Two-point calibration method need two standard pH buffer, one is pH7 standard buffer, the second one is pH10 standard buffer or pH4 standard buffer. First, we use pH7 standard buffer to get first calibaration point. And then the second standard buffer is selected according to the sample you will test later. If the sample is acidic, the second standard buffer solution should be pH 4. If the sample is alkaline, choose the standard buffer pH10 to get second calibration point.



</p>

                        <h3 className='article-h3'>How to use pH glass electrode:

</h3>
<ul>
                            <li>1. Remove the pH glass electrode from the storage solution, and check whether there is scratch or bubbles on the surface or in the electrode. If the appearance is OK, wash the salt from the electrode surface with distilled water or the sample liquid, and then blot it dry.
</li>
                            <li>2. Make two-point calibration for the pH electrode according to the instructions.

</li>
                            <li>3.Immerse the glass pH electrode and the temperature sensing electrode completely in test liquid , which usually requires 5-20mL of sample.

</li>
                            <li>4. Gently shake the beaker so that the liquid can fully contact the surface of the whole glass pH electrode.

</li>
                            <li>5. If the pH meter has the function of automatic displaying the result, you can get the result when meter show the test is finished. If the meter does not have this function, read the value about 1 minute after the displayed result does not change.



</li>
</ul>
                        <h2 className='article-h2 '>How to maintain and store glass pH electrode:

</h2>
<ul>
                            <li>1. Do not touch the glass electrode surface with your hand. The oil film or scratches on the surface will affect the accuracy of the measurement. The electrode surface should be checked if the surface is scratched or the electrode wire is damaged or not every time before using the glass electrode.
</li>
                            <li>2. Before use, the glass electrode should be thoroughly cleaned with deionized water. Do not wipe the electrode with toilet paper or swab paper, which will cause electrode scratches.

</li>
                            <li>3. The electrodes should be covered and kept moist when you are not using it. It can be stored in saturated potassium chloride solution

</li>
                            <li>4. When glass electrode bulb is contaminated and cause the response time of the electrode get longer. At this time, CCl4 or soap can be used to remove the dirt, and then immersed in distilled water for a day and night for continue use. When the pollution is serious, it can be soaked in 5% HF solution for 10-20 minutes, immediately washed with water, and then continue to immerse it in 0.1 mol/L HCl solution for a day and night.

</li>
</ul>



                        <Image className='img-articel02 rounded-xl mt-4' alt='Maintenance and storage methods of glass pH electrodes/Humming Probe - UltraE' loading='lazy' placeholder='empty' src='傳統pH校正液 1920X1080.webp' width={1000} height={600} loader={myLoader}></Image>

                        <h3 className='article-h3'>Micro strip pH electrodes - calibration free

</h3>
                        <p>Because of the different principle, the solid electrode is used as reference electrode of strip pH electrode. So the test potential will be stable and be affected by the electrolyte concentration . Therefore, manufacturer can calibrate the strip pH electrode in the factory and then stored in the drying vials for preservation. When you want to use, just take it out of the vial and use directly without calibration. Because of the disposable design, there is also no need to worry about contamination of the electrodes.</p>

                        <a href="">Recommended reading: Never need to calibarate your pH electrode after reading this article</a>

                        <h3 className='article-h3'>How to use pH strip electrode?

</h3>
                        <p>It is very simple to use the strip electrode to measure pH. Take out the strip from the vial and you can choose following ways to use:



</p>

<ul>
                            <li>Method 1: Insert strip pH electrode into the meter, drop sample on the strip.</li>

                            <li>Method 2: Use strip to dip in the sample, and then take it out, insert into the meter and start test.

</li>
                            <li>Method 3: Use cable to connect strip electrode and meter, insert the strip into the port and have a continues test.

</li>

</ul>
{/* 
                    <p>使用者可以根據使用情境及方便性，選擇其中一種方式。使用之後試片可以直接丟棄。

</p> */}

                        <Image src='5.1-en.webp' loading='lazy' alt='Usage methods of calibration-free disposable pH electrodes/Humming Probe - UltraE' placeholder='empty' loader={myLoader} width={600} height={300}></Image>
                    {/* <span>試片可通過沾取樣品、滴入樣品以及浸泡於樣品中等模式，在不同樣品體積下準確量測pH值
</span> */}

                        <h3 className='article-h3'>How to maintain and store strip pH electrode?

</h3>
                        <p>This single-use pH strip electrode could be discard after each test and no need to clean and maintaine. Just place the unused electrode in the vial and keep dry.

</p>

                    <Image className='img-articel02' placeholder='empty' loading='lazy' loader={myLoader} src='便於攜帶和保存-1920x1080.webp' width={1000 } height={600}></Image>

                    {/* <div className='recommed-section mt-[30px] py-[50px] px-[30px] bg-gray-100 border rounded-2xl'>


                        <div className="txt flex justify-center items-center flex-col ">
                            <h4 className='font-extrabold text-gray-800 text-[32px]'>覺得這篇文章不錯嘛？
                            </h4>

                            <p>瞭解更多我們的產品

                            </p>
                            <p></p>



                            <Image loader={myLoader05} height={300} placeholder='empty' loading='lazy' width={500} className="mx-auto mt-4 rounded-xl" src='UX200-07-手持拍照-720x540.webp' alt='內置鏡頭'></Image>


                            <a href="UX200.html" className='text-[14px] mt-4 text-center py-3 w-[200px] text-white border rounded-[40px] bg-[#4ba6db]'>Go Product</a>

                        </div>
                    </div> */}

                   


                

                </div>
                <br></br>



                <div className="right sticky h-screen   py-[100px] sm:px-[0px] 2xl:px-[60px]  w-full md:w-[35%] ">




                    <div className="wrap">
                        <div className="top p-6">
                                <a href="https://www.ultraehp.com/hummingprobe/en/UH2.html">
                                <Image src='UH2-banner-1024x576.webp' width={600} height={330} fetchPriority='height' className='' loading='eager' placeholder='empty' loader={myLoader01} />
                            </a>
                                <a href="https://www.ultraehp.com/hummingprobe/en/UH1.html">   <Image src='UH1-banner-1024x576.jpg' width={600} height={330} fetchPriority='height' className='mt-4' loading='eager' placeholder='empty' loader={myLoader02} /></a>
                                <a href="https://www.ultraehp.com/hummingprobe/en/UH2-GAS.html">
                                <Image src='UH2GAS-banner-m.jpg' width={600} height={330} fetchPriority='height' className='mt-4' loading='eager' placeholder='empty' loader={myLoader03} />
                            </a>



                        </div>


                            <div className="bottom  lg:p-6">
                                <a href="https://www.ultraehp.com/images/DM/UH2-GAS單張DM-v1-OUT.jpeg" download="https://www.ultraehp.com/images/DM/UH2-GAS單張DM-v1-OUT.jpeg">
                                    <Card className="py-[40px] mt-[100px]   bg-gray-100 px-[20px] justify-center items-center">
                                        <CardHeader className="pb-0 justify-center pt-2 px-4  flex-col items-center md:items-start">
                                            <p className="text-tiny uppercase font-bold">Humming Probe UX100</p>
                                        <small className="text-default-500">CALIBRATION-FREE pH METER

                                            </small>
                                            <h4 className=" text-[30px] font-black">pH meter</h4>
                                        </CardHeader>
                                        <CardBody className="overflow-visible py-2">
                                            <Image
                                                loading='lazy'
                                                loader={myLoader04}
                                                alt="Card background"
                                                className="mx-auto object-cover rounded-xl"
                                                src="UX100.webp"
                                                width={270}
                                                height={270}
                                            />
                                            <p className='mx-auto'>PDF Download</p>
                                        </CardBody>
                                    </Card>
                                </a>
                            </div>
                     

                            <div>
                               
                               
                            </div>

                     

                    </div>

                </div>

            </section>
           
            
            
         
          

        </div>
        
            <div className=" mt-[350px] md:mt-0">
                <ArticleBottomSection />

            </div>
         </div>
               
    )
}
