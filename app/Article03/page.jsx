
"use client"
import Hero from '@/components/hero'
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem,Button } from "@nextui-org/react";
import Script from 'next/script'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import Style from '../../styles/additional-styles/range-slider.css'
import Image from 'next/image'
import Sticky from 'react-sticky-el';
import ArticleBottomSection from '../../components/ArticleBottomSection'


// import SomeChild from '../../components/'


// import { StickyContainer, Sticky } from 'react-sticky';

// import OthersProducts from '../../components/ReactSlick/ImageSlider2.jsx'

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
            <title>You don’t need to calibarate your pH meter any more after you read this article
|超極生技-UltraE
            </title>
            <link rel="alternate" href="https://www.ultraehp.com/Article04.html" hreflang="zh-Hant" />
            <link rel="alternate" href="https://www.ultraehp.com/en/Article03.html" hreflang="en" />

            <meta key="description" name="description" content="這篇文章提供了對 pH計/酸鹼檢測儀校正的深入了解。無論您是專業用戶還是初學者，了解為什麼需要校正以及校正的原理和步驟都是至關重要的。如果您希望減少校正的頻率，可以考慮使用免校正的酸鹼檢測系統（H3），這將為您提供更大的方便性和精確性。該系統使用試片型電極，不僅方便使用，而且價格更經濟實惠。無論您選擇哪種方式來測量 pH 值，這篇文章都提供了詳盡的比較，以幫助您做出明智的選擇。
" />
            <meta name='keywords' content='酸鹼測試/電極pH電極/酸鹼度計/酸鹼測試/pH測試/氣體酸鹼值連續檢測/尾氣廢氣檢測/氨氣+二氧化硫濃度檢測' />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {/* OG metadata */}
            <meta property="og:url" content="https://www.ultraehp.com/en/Article03.html" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="
看完這一篇再也不用校正pH計/酸鹼檢測儀|超極生技-UltraE
" />
            <meta property="og:description" content="這篇文章提供了對 pH計/酸鹼檢測儀校正的深入了解。無論您是專業用戶還是初學者，了解為什麼需要校正以及校正的原理和步驟都是至關重要的。如果您希望減少校正的頻率，可以考慮使用免校正的酸鹼檢測系統（H3），這將為您提供更大的方便性和精確性。該系統使用試片型電極，不僅方便使用，而且價格更經濟實惠。無論您選擇哪種方式來測量 pH 值，這篇文章都提供了詳盡的比較，以幫助您做出明智的選擇。

" />
            <meta property="og:image" content="https://ultraehp.com/images/blog/傳統pH校正液 1920X1080.jpg" />







        <div className='flex bg-white  pt-[100px] px-[15px] md:px-[60px]  justify-center  items-start  dark:bg-gray-200'>

                <div className="fixed mobile-lang w-full top-[10px] pr-6 md:hidden flex justify-end mx-auto z-[99999] ">
                    <a href="https://www.ultraehp.com/Article03.html">
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
                                <a className='w-full block' href="https://ultraehp.com/en/Article03.html">English</a>
                            </DropdownItem>
                            <DropdownItem key="new">
                                <a className='w-full block' href="https://ultraehp.com/Article03.html ">繁體中文</a>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>


                </div>
              


                <a href="https://www.ultraehp.com/en"><Image loader={myLoader001} src='Ultrae-logo.png' width={80} loading='lazy' placeholder='empty' className="fixed mt-2 ml-[40px] md:ml-[130px] z-50 top-[65px] left-15" alt='Ultrae-logo' height={40}></Image> </a>

            <section className='flex   flex-col  lg:flex-row w-full section-article'>
                <div className="left px-0 md:px-[30px] py-[30px]  rounded-m pr-0 md:pr-10 md:w-full  lg:w-2/3">
                        

                        <section className=' section-01 flex flex-col pt-[20px]'>
                            <div className="navgation ">
                                <a href="https://www.ultraehp.com/en/" className='text-gray-500 hover:font-black font-bold hover:text-black'>Home</a> /  <a href="https://www.ultraehp.com/en/ArticleList.html" className='text-gray-500 hover:font-black font-bold hover:text-black'>Article List</a> /
                                <a href="/" className='text-gray-500 hover:font-black font-bold hover:text-black'>You don’t need to calibarate your pH meter any more after you read this article</a>
                            </div>

                            {/* <Image 
                                fetchPriority='high' priority={true} src='You-don’t-need-to-calibarate-your-pH-meter.webp' width={1000} className='rounded-xl mt-5 ' placeholder='empty' loader={myLoader} loading='eager' height={500} ></Image> */}
                            <Image fetchPriority='high' alt='Comparison of maintenance and calibration of glass pH electrodes & calibration-free disposable pH electrodes & pH test strips/Humming Probe - UltraE' src='pH酸鹼方式en 1920X1080.jpg' width={1000} className='rounded-xl mt-5 ' placeholder='empty' loader={myLoader} height={500} loading='eager' priority={true}></Image>
                        </section>

                
                        <h1 className='article-title mt-5'>You don’t need to calibarate your pH meter any more after you read this article



                    </h1>
                        <h2 className='article-h2'>When do you need to calibrate your pH meter?


                    </h2>

                        <p>The precision and the lifetime of the pH meter depends on the pH electrode. Sometimes, the pH measurement is inaccurate when using inappropriately. After a period of use, the membrane of the pH glass electrode may be block or be scratched, causing the potential to shift, and needed to be calibrated for each time of use. In addition, the pH glass electrode needs to be calibrated for the following situations: </p>
                    <ul>
                            <li>1.Change a new pH glass electrode.
</li>
                            <li>2. After measuring the strong acid (pH &lt; 2) or a strong alkaline (pH&gt;12) solution.

</li>
                            <li>3.After measuring the sample contain Fluoride or organic compound.
</li>
                            <li>4.The temperature different between the sample solution and the room temperature or the standard solution is too much.
</li>
                       

                    </ul>



                   

                        <h2 className='article-h2'>The principle and the procedure of pH meter calibration


                    </h2>
                        <p>pH value test is the measurement of the concentration of the activity of the hydrogen ion which lead to acid, base or neutral of the solution. pH test Using potentiometry to measure the pH value, pH glass electrode is constructed with the glass working electrode and the reference electrode. The glass working electrode is sensitive in potential toward pH value while the reference electrode provides a stable reference potential. By combining these two electrodes together and immersing into the solution, the potential output of the electrode is linear to the pH value at the consistent temperature. Because the situation mentioned above can cause bias of the linearity, the glass electrode needs to be calibrated with standard solution after using a period.</p>
               

                        <h2 className='article-h2'>Two-point or three-point method for pH meter and eletrode calibration?

</h2>

                        <p>- Two-point, which include pH 4 and pH 7.


</p>
                        <p>- Three-point, which include pH 4, pH 7 and pH 10.
</p>
                        <p>Both these two types of calibration need to start from pH 7 to make the zero potential calibration. Two-point type calibration is sufficient for most situation and three-point type calibration is for more precise measurement.

</p>

                        <Image src='傳統pH校正液 1920X1080.webp' className='mt-5' alt='How often do glass pH electrodes need calibration? Should calibration be done using the two-point method or the three-point method?/Humming Probe - UltraE' loading='lazy' placeholder='empty' loader={myLoader} width={1000} height={500}></Image>

                        <h2 className='article-h2 w-3/4'>If you don’t want to calibarate pH meter, maybe you can choose calibration-free pH measurement system.


</h2>

                        <p>For precise pH measurement everyday or having no standard solution, there are calibration-free type pH electrode available. The principle of calibration-free pH measurement system is similar to pH glass electrode. By measuring the potential different, the concentration of the hydrogen ion can be measured and transfer to pH value via Nernst Equation. Another feature of calibration-free system is disposable, no cross-contamination for the sample. Through seriously controlling the process of auto manufacturing, the strip electrodes have been calibrated in the factory and the information of calibration is labelled on the package. User only needs to input the information to the pH meter for the first time and needs no calibration afterward. Moreover, strip electrode only needs micro-volume sample to perform the measurement due to its microfluidic design. Many experiments, which have limited amount of sample, can use directly without other procedure, especially in bio-experiment. And the sample will not be contaminated by other sample due to the disposable design. For an outdoor experiment, only the meter and the strip are needed, which is more convenient to operate without carrying the standard solution and other component.

</p>

                        <Image src='UH1不怕汙染 1920x1080.webp' alt='Disposable micro pH electrodes can be used directly without calibration/Humming Probe - UltraE' loader={myLoader} loading='lazy' placeholder='empty' className='mt-4' width={1000} height={500}></Image>

                        <h2 className='article-h2'>Comparison of pH test paper, glass electrode and calibration-free Humming Probe strip electrode

</h2>
                        <h3 className='article-h3'>1.pH test paper

</h3>
                        <p>There are different chemical reagents, like Methyl red, change at the range of pH 4.2 (red) – pH 6.2 (yellow), Bromocresol green, change at the range of pH 3.6 (yellow) – pH 5.4 (green), and Thymol blue, change at the range of pH 6.7 (yellow) – pH 7.5 (blue), have different color at different pH range. Immersing white paper into the solution that have a proper ratio of these reagents, the pH test paper is produced. The pH test paper is more convenient to use and the price is lower compare to the glass electrode. But the pH test paper use visualize color to measure the pH which is not accurate because of the personal error. And pH test paper can not be used to constantly monitor and record pH value change .
</p>


                
                        <Image width={800} height={500} alt='pH values of common liquid foods/Humming Probe - UltraE' className='mt-5' src='pH酸鹼數值 1920X1080.webp' loading='lazy' loader={myLoader} placeholder='empty'></Image>





                        <h3 className='article-h3'>2. pH glass electrode


                    </h3>
                        <p>The pH glass electrode performs an accurate measurement. Because of the character of the glass electrode, it needs to be calibrated with pH 4, 7, 10 standard solution every time before use. The calibration, which takes 5 – 10 minutes, is complicate and needs to be operated with cautions. To maintain the glass electrode, the electrode should be cleaned and dried tenderly and kept in the stock solution after using. Any incorrect operatione can cause the glass membrane being scratched and damaged . In addition, the maintenance and preservation of the glass electrode also has many points need to be noticed. You should avoide the pH glass electrode membrane from dryness. So the pH glass electrode needs to be properly stored in preserving fluid, otherwise it will affect the accuracy and precision of pH test. According to all the procedures mentioned above, the pH glass electrode should be used carfully with the person who has been professionally trained . Moreover, the price of pH glass electrode is between 100 – 1,000 USD, which is higher than other pH measurement method.
                    </p>



                        <Image width={800} height={500} className='mt-3' alt='Traditional glass pH electrodes (Metrohm/Mettler-Toledo/Leici/Humming Probe - UltraE' src='傳統電極儀器-1920x1080.webp' loading='lazy' loader={myLoader} placeholder='empty'></Image>
                    {/* <table class="table-auto border border-green-500 mb-[400px]">
                        <thead>
                            <tr>
                                <th>Song</th>
                                <th>Artist</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                <td>Malcolm Lockyer</td>
                                <td>1961</td>
                            </tr>
                            <tr>
                                <td>Witchy Woman</td>
                                <td>The Eagles</td>
                                <td>1972</td>
                            </tr>
                            <tr>
                                <td>Shining Star</td>
                                <td>Earth, Wind, and Fire</td>
                                <td>1975</td>
                            </tr>
                        </tbody>
                    </table> */}
                        <h2 className='article-h2' >3.Micro disposable Calibration-free Humming Probe strip pH electrode

                    </h2>
                        <p>The Humming Probe pH measurement system provides by UltraE Co., Ltd. gives user a convenient way to measure and monitor pH value. User only needs to take out the strip electrode from the vial and just few procedures to measure the pH value without calibration and maintaining the electrode. The principle of calibration-free pH measurement system is similar to pH glass electrode. By measuring the potential different, the concentration of the hydrogen ion can be measured and transfer to pH value via Nernst Equation. The feature of calibration-free system is disposable, no cross-contamination for the sample. Through seriously controlling the process of auto manufacturing, the strip electrode is calibrated within the factory and the information of calibration is labelled on the package. User only needs to input the information via the QR code to the meter for the first time and needs no calibration afterward. Moreover, strip electrode only needs micro-volume sample to perform the measurement due to its microfluidic design. Many experiments, which have limited amount of sample, can use directly without other procedure, especially in bio-experiment. And the sample will not be contaminated by other sample due to the disposable design. For an outdoor experiment, only the meter and the strip are needed, which is more convenient to operate without carrying the standard solution and other component. Moreover, the price of the stripe is around 1 USD, much lower than the glass electrode.</p>


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
                                                        <Image src='table compare-01.jpg' alt='Specifications, prices, advantages, and disadvantages of traditional glass pH electrodes/different brand pH detection systems comparison/Humming Probe - UltraE' placeholder='empty' loading='lazy' loader={myLoader07} width={180} height={180}></Image>
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        <Image src='table compare-02.jpg' loader={myLoader07} width={180} height={180} alt='Specifications, prices, advantages, and disadvantages of traditional glass pH electrodes/different brand pH detection systems comparison/Humming Probe - UltraE' placeholder='empty' loading='lazy'></Image>
                                                    </td>
                                                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                        <Image src='table compare-03.jpg' placeholder='empty' loading='lazy' alt='Specifications, prices, advantages, and disadvantages of traditional glass pH electrodes/different brand pH detection systems comparison/Humming Probe - UltraE' loader={myLoader07} width={180} height={180}></Image>
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



{/* 
                        <div className='recommed-section mt-[30px] py-[50px] px-[30px] bg-gray-100  rounded-2xl'>


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

               
                <div className="right  py-[100px] sm:px-[0px] 2xl:px-[60px]  w-full md:w-[35%]">



                    <div className="wrap">
                        <div className="top p-6">
                                <a href="https://www.ultraehp.com/hummingprobe/en/UH2.html">
                                    <Image src='UH2-banner-1024x576.webp' width={600} height={330} fetchPriority='height' alt='UH2' className='' loading='eager' placeholder='empty' loader={myLoader01} />
                                </a>
                                <a href="https://www.ultraehp.com/hummingprobe/en/UH1.html">   <Image src='UH1-banner-1024x576.webp' alt='UH1' width={600} height={330} fetchPriority='height' className='mt-4' loading='eager' placeholder='empty' loader={myLoader02} /></a>
                                <a href="https://www.ultraehp.com/hummingprobe/en/UH2-GAS.html">
                                    <Image src='UH2GAS-banner-m.webp' width={600} height={330} fetchPriority='height' alt='UH2-GAS' className='mt-4' loading='eager' placeholder='empty' loader={myLoader03} />
                                </a>



                        </div>


                     
                            <div className="bottom px-[20px] lg:p-6">
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


                       

                    </div>

                </div>

            </section>
            <section>
                {/* <ReactSlick/> */}
            </section>

            





        </div>

        <div className=" ">
                <ArticleBottomSection />
                
        </div>


</div>
    )
}
