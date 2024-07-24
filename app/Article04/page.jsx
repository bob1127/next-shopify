
"use client"
import Hero from '@/components/hero'
import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import OthersProducts from '../../components/ReactSlick/ImageSlider2.jsx'
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


const myLoader = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/能斯特方程式截圖/${src}?w=${width}?p=${placeholder}`
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
const myLoader06 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Article/${src}?w=${width}?p=${placeholder}`
}
const myLoader07 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/blog/${src}?w=${width}?p=${placeholder}`
}
const myLoader09 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/能斯特方程式截圖/${src}?w=${width}?p=${placeholder}`
}


const myLoader001 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}?p=${placeholder}`
}






export default function Home() {

   
    return (
        <div className=' px-0 md:px-[30px]  2xl:px-[150px]'>
        

            {/* metadata */}
            <title>Relation between Nernst equation and the pH meter

-UltraE
            </title>
            <link rel="alternate" href="https://www.ultraehp.com/Article04.html" hreflang="zh-Hant" />
            <link rel="alternate" href="https://www.ultraehp.com/en/Article04.html" hreflang="en" />

            <meta key="description" name="description" content="免校正酸鹼試片，藉由試片表面薄膜的氧化還原反應，測量試片表面產生的電位，透過能斯特方程式計算出電位與pH值的關係" />
            <meta name='keywords' content='酸鹼測試/電極pH電極/酸鹼度計/酸鹼測試/pH測試/氣體酸鹼值連續檢測/尾氣廢氣檢測/氨氣+二氧化硫濃度檢測' />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {/* OG metadata */}
            <meta property="og:url" content="https://www.ultraehp.com/en/Article04.html" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="
Relation between Nernst equation and the pH meter
-UltraE
" />
            <meta property="og:description" content="免校正酸鹼試片，藉由試片表面薄膜的氧化還原反應，測量試片表面產生的電位，透過能斯特方程式計算出電位與pH值的關係
" />
            <meta property="og:image" content="https://ultraehp.com/images/能斯特方程式截圖/010.png" />



            <div className="fixed mobile-lang w-full top-[10px] pr-6 md:hidden flex justify-end mx-auto z-[99999] bg-white ">
                <a href="https://www.ultraehp.com/Article04.html">
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
                            <a className='w-full block' href="https://ultraehp.com/en/Article04.html">English</a>
                        </DropdownItem>
                        <DropdownItem key="new">
                            <a className='w-full block' href="https://ultraehp.com/Article04.html ">繁體中文</a>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>


            </div>

            <a href="https://www.ultraehp.com/en"><Image loader={myLoader001} src='Ultrae-logo.png' width={80} loading='lazy' placeholder='empty' className="fixed mt-2 ml-[40px] md:ml-[130px] z-50 top-[65px] left-15" alt='Ultrae-logo' height={40}></Image> </a>

            <div className="content-wrap bg-white flex md:flex-row flex-col w-full mx-auto ">
                <div className="left w-full lg:w-[65%]">
                    <section className='section section-01 flex flex-col pt-[80px]'>
                        <div className="navgation ">
                            <a href="https://www.ultraehp.com/en/" className='text-gray-500 hover:font-black font-bold hover:text-black'>Home</a> / 
                            <a href="https://www.ultraehp.com/en/ArticleList.html" className='text-gray-500 hover:font-black font-bold hover:text-black'>Article List</a> /
                            <a href="/" className='text-gray-500 hover:font-black font-bold hover:text-black'>Nernst equation</a>
                        </div>


                        <Image src='傳統電極圖_工作區域 1.jpg' alt='Working principle of pH electrode - potential difference generated by ion exchange inside and outside the glass membrane E1 & E2/calibration-free disposable micro pH electrode/Humming Probe - UltraE' fetchPriority='high' priority={true} width={1200} className='rounded-xl mt-5 ' placeholder='empty' height={500} loading='eager' loader={myLoader07}></Image>
                    </section>



                    
                 
                    <section >
                        <div className=' inline-block  p-5 w-full'>
                            <p>According to Nernst Equation, in a chemical reaction

                            </p>
                            <Image src='001.png' width={220} loading='lazy' loader={myLoader} height={50} />

                            <p>The potential of this reaction is given by the equation


</p>
                            <Image src='002.png' width={220} height={50} fetchPriority='height' loading='eager' placeholder='empty' loader={myLoader} />

                            <p>Diagram of the glass electrode can be represented as:
</p>
                            <Image src='003.png' width={320} height={50} fetchPriority='height' loading='eager' placeholder='empty' loader={myLoader} />
                            <p>The H+ ion exchange with the glass membrane to produce the inner and outer potential E1 & E2
</p>
                            <Image src='004.png' width={520} height={50} fetchPriority='height' loading='eager' placeholder='empty' loader={myLoader} />
                         
                            <p className='my-3'>By measuring the boundary potential (Eb) the relation between Eb and pH is:</p>
                            <Image src='005.png' width={520} height={50} fetchPriority='height' loading='eager' placeholder='empty' loader={myLoader} />
                            <p>Which E10, E20 are the formal potential, the [H+]Glass is constant and the inner proton ion concentration [H+]2 is invariable as constant. The equation can be expressed as:</p>
                            <Image src='006.png' width={500} height={40} loader={myLoader} placeholder='empty' loading='lazy'/>

                            <p>Due to the proton ion at the glass membrane and the inner proton ion concentration will change after measuring, the 𝐸𝑘′ will be changed. So the glass electrode needs to be calibrated before use.</p>
                            <Image src='011-en.png' width={1000} height={1000} fetchPriority='height' loading='eager' placeholder='empty' loader={myLoader09} />


                            <p>According to Nernst Equation, in a chemical reaction
                            </p>  
                            <Image src='001.png' width={320} height={50} fetchPriority='height' loading='eager' placeholder='empty' loader={myLoader} />

                            <p>The potential of this reaction is given by the equation
                            </p>
                            <Image src='007.png' width={320} height={50} fetchPriority='height' loading='eager' placeholder='empty' loader={myLoader} />

                            <p>Humming Probe strip electrode modify the proton ion selective membrane at the electrode surface which having the redox reaction with proton ion, the diagram can be represented as:
                            </p>
                            <Image src='008.png' width={420} height={50} fetchPriority='height' loading='eager' placeholder='empty' loader={myLoader} />

                            <p>According to Nernst Equation, the electrode potential is
                            </p>
                            <Image src='009.png' width={420} height={50} fetchPriority='height' loading='eager' placeholder='empty' loader={myLoader} />

                            <p>Due to the precision and the consistency of the strip electrode, the 𝐸0 are the same for every electrode. And the strip electrode need not to be calibrated.</p>


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
                    </section>
                   
                </div>

                <div className="right h-full py-[100px] sm:px-[0px] overflow-hidden 2xl:px-[60px]  w-full md:w-[35%]">
                 
                    
                  
                    <div className="wrap">
                        <div className="top p-6">
                            <a href="https://www.ultraehp.com/hummingprobe/en/UH2.html">
                                <Image src='UH2-banner-1024x576.webp' width={600} height={330} fetchPriority='height' alt='UH2蜂鳥探針 ' className='' loading='eager' placeholder='empty' loader={myLoader01} />
                            </a>
                            <a href="https://www.ultraehp.com/hummingprobe/en/UH1.html">   <Image src='UH1-banner-1024x576.webp' alt='The appearance of the calibration-free micro disposable pH electrode/Humming Probe UH1/UltraE   ' width={600} height={330} fetchPriority='height' className='mt-4' loading='eager' placeholder='empty' loader={myLoader02} /></a>
                            <a href="https://www.ultraehp.com/hummingprobe/en/UH2-GAS.html">
                                <Image src='UH2GAS-banner-m.webp' width={600} height={330} fetchPriority='height' alt='UH2-Gas' className='mt-4' loading='eager' placeholder='empty' loader={myLoader03} />
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
            </div>

            <div className=" ">
                <ArticleBottomSection />

            </div>
            
        </div>
    )
}
