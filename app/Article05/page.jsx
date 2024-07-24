
"use client"
import Hero from '@/components/hero'
import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
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
import ArticleBottomSection from '../../components/ArticleBottomSection.jsx'
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
    return `https://www.ultraehp.com/images/blog/${src}?w=${width}?p=${placeholder}`
}
const myLoader07 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Article/${src}?w=${width}?p=${placeholder}`
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

const myLoader09 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/Index/${src}?w=${width}?p=${placeholder}`
}

const myLoader001 = ({ src, width, quality, placeholder }) => {
    return `https://www.ultraehp.com/images/Products-Detail-Img/UP100/${src}?w=${width}?p=${placeholder}`
}









export default function Home() {


    return (
        <div className=' px-0 md:px-[30px]  2xl:px-[150px]'>




            {/* metadata */}
            <title>Testing and control pH value of water based UL Varnishes
            </title>
            <link rel="alternate" href="https://www.ultraehp.com/Article05.html" hreflang="zh-Hant" />
            <link rel="alternate" href="https://www.ultraehp.com/en/Article05.html" hreflang="en" />

            <meta key="description" name="description" content="" />
            <meta name='keywords' content='Varnish is resin. What we want to talk about in this article is the vanish which is applied in insulating processes. Varnish is widely used in electrical equipment, such as motors, transformers, coil immersion, etc., to provide insulation, moisture, corrosion protection, fixation, and even heat dissipation. According to the scope and methods of operation, it can be classified by impregnating, covering, silicon steel sheet, anti-corona.

' />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {/* OG metadata */}
            <meta property="og:url" content="https://www.ultraehp.com/en/Article05.html" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="
水性絕緣凡立水/絕緣漆/絕緣材料之pH值測試及控制｜文章|超極生技UltraE
" />
            <meta property="og:description" content="Varnish is resin. What we want to talk about in this article is the vanish which is applied in insulating processes. Varnish is widely used in electrical equipment, such as motors, transformers, coil immersion, etc., to provide insulation, moisture, corrosion protection, fixation, and even heat dissipation. According to the scope and methods of operation, it can be classified by impregnating, covering, silicon steel sheet, anti-corona.


" />
            <meta property="og:image" content="https://ultraehp.com/images/blog/UH1沾凡立水02-1920x1080.jpg" />


            <div className="fixed mobile-lang w-full top-[10px] pr-6 md:hidden flex justify-end mx-auto z-[99999] ">
                <a href="https://www.ultraehp.com/Article05.html">
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
                            <Image  className='mb-3 pr-20' src='earth.png' loader={myLoader03} loading='lazy' placeholder='empty' alt='language-switch' width={33} height={33} />
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions">
                        <DropdownItem key="new">
                            <a className='w-full block' href="https://ultraehp.com/en/Article05.html">English</a>
                        </DropdownItem>
                        <DropdownItem key="new">
                            <a className='w-full block' href="https://ultraehp.com/Article05.html ">繁體中文</a>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>


            </div>
            <a href='https://www.ultraehp.com/en/'><Image loader={myLoader001} src='Ultrae-logo.png' width={100} loading='lazy' placeholder='empty' className="fixed mt-2 ml-[40px] md:ml-[130px] z-50 top-[65px] left-15" alt='UltraP-logo' height={40}></Image></a> 


            <div className="content-wrap bg-white flex md:flex-row flex-col w-full mx-auto ">


                <div className="left w-full lg:w-[65%]">

                    <section className='section section-01 flex flex-col pt-[80px]'>
                        <div className="navgation ">
                            <a href="https://www.ultraehp.com/en/" className='text-gray-500 hover:font-black font-bold hover:text-black'>Home</a>  / 
                            <a href="https://www.ultraehp.com/en/ArticleList.html" className='text-gray-500 hover:font-black font-bold hover:text-black'>Article List</a> / 
                            <a href="/" className='text-gray-500 hover:font-black font-bold hover:text-black'>Testing and Control pH Value of water based UL Varnishes</a>
                        </div>
                      

                        <Image fetchPriority='high' priority={true} src='UH1沾凡立水02-1920x1080.webp' width={1200} className='rounded-xl mt-5 ' alt='Control of pH value in water-based varnish using Humming Probe - UltraE' placeholder='empty' height={500} loading='eager' loader={myLoader03}></Image>
                    </section>
                    <section >
                        <div className=' inline-block p-5 w-full'>
                            <h1 className='article-title font-light'>Testing and Control pH Value of water based UL Varnishes </h1>



                            <h2 className='article-h2'>What is Varnish？

</h2> 
                            <p>Varnish is resin. What we want to talk about in this article is the vanish which is applied in insulating processes. Varnish is widely used in electrical equipment, such as motors, transformers, coil immersion, etc., to provide insulation, moisture, corrosion protection, fixation, and even heat dissipation. According to the scope and methods of operation, it can be classified by impregnating, covering, silicon steel sheet, anti-corona.</p>

                            <h2 className='article-h2'>Classification and characteristics of Varnish, how to select the appropriate Varnish?

</h2>

                            <p>We can choose suitable varnish the characteristics of usage, process mode, environment friendly, regulations requirement, safety certification and etc.

</p>
<ul>
                                <li>1. According to the material, varnish can be roughly divided into the following categories: alkyd resin, epoxy resin, SilicoNe

</li>
                                <li>2. According to the diluent, varnish can be roughly divided into the following categories: solvent, no solvent, water-based

</li>
                                <li>3. According to the drying process, varnish can be divided into : baking and air drying.

</li>
    
</ul>

                            <p>The most used of the above classifications is by solvent form. Here's a look at the characteristics of different solvent categories:



</p>

                            <div className='mt-5'>
                                <b
                                    className='mt-5 text-[20px]'>Water soluble:

                                </b>
                                <p>Water-based insulating varnish having excellent bonding characteristics and chemical resistances. It is environment friendly, low organic volatile matter (VOC), no air pollution, meet the requirement of the United States clean air standard. Water soluble insulation vanish need to be diluted with RO water/ water according to the appropriate proportion after stirring, in 20 to 30% resin solid composition. Dip tank pH should be maintained around 8, and must often check the viscosity and pH value of vanishes.

                                </p>
                            </div>

                            <div className='mt-5'>
                                <b
                                    className='mt-5 text-[20px]'>Solventless varnish:


                            </b>
                                <p>Compared with solvent-based varnish, non-solvent varnish has the advantages of Flexible for excellent noise suppression, rapid drying, low volatilization, environmental protection, low baking temperature, convenient storage and so on. However, non-solvent varnish should be used with curing agent (initiator). How to choose the appropriate proportion of curing agent is the key point to improve the production efficiency. Under normal situation, the amount of curing agent added is about 1%~3% of varnish. The more curing agent added, the faster the reaction is, the better efficiency I’s. But at the same time the stress becomes higher, and the cost is slightly higher. But the smell of non-solvent varnish is stronger than that of solvent varnish. However, because of the low volatilization of the non-solvent varnish, the odor will not harmful to the human body.</p>

                            </div>


                            <div className='mt-5'>
                                <b 
                                    className='mt-5 text-[20px]'>Solvent varnish:



                            </b>

                                <p>The solvent - based varnish contains lower solid content and higher organic solvent content. Although the solvent type used is less odorant than the non-solvent type, but most of the volatile gas has a certain toxicity. But because of the simple use, and some other unique characteristic and related low cost. Solvent varnish still has some market share.</p>
                            </div>

                            <Image width={800} loading='lazy' alt='What is water-based varnish and how to quickly control its pH value using disposable pH electrodes - Humming Probe - UltraE' placeholder='empty' height={500} src='油漆+UH1-英文1280x720.webp' loader={myLoader09}></Image>

                            <h2 className='article-h2'>How to use and the how to measure and control pH values of water soluble varnish?

</h2>



                            <div className='mt-5'>
                                <b
                                    className='mt-5 text-[20px]'>How to use and preserve water based varnish：




                                </b>

                                <p>The range of water-based varnishes was developed to meet the ever-more urgent requirements to reduce emissions into the atmosphere and safety in the workplace; without forgetting the growing need to improve mechanical bonding and insulation of the latest generation motors and transformers.</p>
                                <p className='mt-3'>At present, almost water based insulating varnish used in motors and transformers may control the pH value of the dip tank. Take ElantAS 1000-70 as an example, usually after opening tank: the pH value of water based varnish should be controlled between 8.0-9.0. It is easy to preserve water-based varnish when the viscosity and pH of the water are checked frequently at all times. If the water-based varnish becomes thick or opaque, it needs to be adjusted immediately. By adding water, the viscosity usually returns to normal. Or add small amount of DMEA, pH agent can improve the pH value of varnish.</p>
                            </div>

                            <div className='mt-5'>
                                <b
                                    className='mt-5 text-[20px]'>Water soluble varnish water pH value detection method:




                                </b>

                                <p>Generally, there are two methods to detect the pH value of water soluble varnish, colorimetric method and potentiometric method which based on Nernst equation.

</p>
                            </div>

                            <div className='mt-5'>
                                <b
                                    className='mt-5 text-[20px]'>The advantages and disadvantages of colorimetric method to measure the pH value of water based varnish:



                                </b>
                                <p className='font-bold text-orange-500 mt-5'>pH test paper for water soluble varnish pH value measurement:

</p>

                                <p>Firstly, make sure test range of your pH test paper meet you requirement. Take a test paper from the case and put in on the surface of glass piece, and use a clean glass rod dipped in the vanish can and drop in the middle of the pH test paper. Observe the change of color after stability as user guide. Match the colour reading against the indicator chart in the pH test strips’ packaging. Water-based Vanli water state is similar to glue, high viscosity (gel), not easy to be absorbed by dry pH test paper, and some models of water-based Varnish will have a light-yellow color. It will affect the final color of the pH paper display. According to the instructions of water-based varnish , pH should be controlled in the range of 8.0-9.0 pH. So it is not easy to get the correct result by using of pH test paper.

</p>
                                <p className='font-bold text-orange-500 mt-5'>Potentiometric measurement -pH glass electrode measurement of water based varnish:

                                </p>
                                <p className='font-bold text-black'>Potentiometric measurement of pH value can achieve accurate result. The most commonly used pH electrode in laboratory is pH glass electrodes. Following is the user guide for pH glass electrode:

</p>

<ul>
                                    <li>1. Remove the pH glass electrode from the storage solution, and check whether there is scratch or bubbles on the surface of the electrode. If the appearance is OK, rinse the salt from the electrode surface with distilled water or the sample liquid, and then blot it dry.
</li>
                                    <li>2. Make two-point calibration for the pH electrode according to the instructions.

</li>
                                    <li>3.Immerse the glass pH electrode and the temperature sensing electrode completely in test liquid , which usually requires 5-20mL of sample.

</li>
                                    <li>4. Gently shake the beaker so that the liquid can fully contact the surface of the whole glass pH electrode

</li>
                                    <li>5. If the pH meter has the function of automatic displaying the result when it reach the stable state. You can get the result when meter show test finished. If the instrument does not have the function of automatically determining the result, read the value about 1 minute after the displayed result does not change.

                                    </li>
</ul>


                                <p className='mt-5 font-bold'>The following points need to be pay attention, when the glass pH electrode is used to test the pH value of water based Varnish:





                                </p>

                                <ul>
                                    <li>• In order to obtain the acuurate detection value, the user needs to be trained for using the pH glass electrode, including electrode maintenance and calibration.

</li>
                                    <li>• Water based varnish is viscous sample. After use each time, it is necessary to carefully clean the electrode surface to prevent the glass electrode and other part from being blocked or polluted. This situation will make glass electrode cannot work normally. Pay attention, do not use wiping paper or clothe to wipe the electrode, which will cause electrode scratches. Gently blot the electrode with softer wiping paper.


                                    </li>
                                    <li>• The electrodes should be preserved in saturated potassium chloride solution which will kept moisture and make electrode can be ready to use

                                    </li>
                                 
                                </ul>


<p></p>

                                <Image src='UH1-14-拋棄試1920x1080.webp' alt='Why glass electrodes cannot be used for pH detection in viscous liquids and how to solve it - Humming Probe - UltraE' loading='lazy' className='mt-5' loader={myLoader03} placeholder='empty' width={800} height={400}></Image>






                                <p className='font-bold text-orange-500 mt-5'>Test pH value with Humming probe pH strip：


                                </p>
                                <p className=''>Each test strip of humming probe has been calibrated and verified using NIST traceability standards before leaving the factory, so you can simply take the test strip out of the vial and test pH directly. Each batch of calibration information is printed as QR code on the cap of the vial. Scan the QR Code when using the strip for the first time to load the technical parameter of the pH strip into the meter, and then the pH measurement can be performed directly. Unlike traditional glass electric appliances, the Humming Probe is extremely convenient, not requiring traditional and complicated calibration steps. Additionally，Additionally, disposable design and single use pH sensor is very suitable for test water based varnish. A brand-new test strip can used for each use and requires no time-consuming cleaning or maintenance after testing. For viscous or easily adsorbed samples or in combination with various special treatments, it breaks through the limitations of traditional glass electrodes and provides you with more applications.


                                </p>
                            

                                <Image src='5.1-en.png' alt='How to use calibration-free disposable pH electrodes to control the pH of varnish - Humming Probe - UltraE' className='mt-5' height={350} width={600} loading='lazy' placeholder='empty' loader={myLoader07}></Image>





                            </div>





                            










                        </div>
                    </section>





                
                    <p>In the table below, we compare the performance of each of the above three pH measurement methods in terms of ease of operation, accuracy, calibration, sample requirement, storage and maintenance, price, and sample cross-contamination

</p>
                    <div class="overflow-x-auto w-[95%] mt-[50px]  mx-auto md:w-full  sm:mx-0.5 lg:mx-0.5">
                        <div class="py-2 inline-block md:w-full sm:px-6 lg:px-8 ">
                            <div class="overflow-hidden">
                                <table class="min-w-full rounded-2xl">
                                    <thead class="bg-gray-800 rounded-2xl border-b">
                                        <tr>
                                            <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                                                
                                            </th>
                                            <th scope="col" class="text-sm font-medium text-white px-6 py-4 text-left">
                                                Glass electrode	
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

                                                item</td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <Image src='table compare-01.webp' loading='lazy' placeholder='empty' alt='Specifications, prices, advantages, and disadvantages of traditional glass pH electrodes/different brand pH detection systems comparison/Humming Probe - UltraE' loader={myLoader07} width={180} height={180}></Image>
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <Image src='table compare-02.webp' loading='lazy' placeholder='empty' alt='Specifications, prices, advantages, and disadvantages of traditional glass pH electrodes/different brand pH detection systems comparison/Humming Probe - UltraE' loader={myLoader07} width={180} height={180}></Image>
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                <Image src='table compare-03.webp' loading='lazy' placeholder='empty' alt='Specifications, prices, advantages, and disadvantages of traditional glass pH electrodes/different brand pH detection systems comparison/Humming Probe - UltraE' loader={myLoader07} width={180} height={180}></Image>
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Operability	</td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Difficult
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Easy
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                              Easy                                             </td>
                                        </tr>
                                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Accuracy	</td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                High
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                High
                                            </td>

                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Low                             </td>
                                        </tr>









                                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">calibration		</td>
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
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Sample volume		</td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                More(5~10 mL )	
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Less(1~20 μL)	
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Less(50~100 μL)

                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Maintenance			</td>
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
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Price	</td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                High
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Low
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Low
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Cross-contamination			</td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Possible
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Disposable
                                            </td>
                                            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                Disposable
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>


                   


                </div>

                <div className="right  h-full py-[100px] sm:px-[0px] overflow-hidden 2xl:px-[60px]  w-full md:w-[35%]">



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


                            <div className="bottom  px-[20px]  lg:p-6">
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
