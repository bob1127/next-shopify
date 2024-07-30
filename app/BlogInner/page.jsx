"use client"


import Image from 'next/image';

import { StickyContainer, Sticky } from 'react-sticky';
import ReactSlick from '../../components/ReactSlick/ImageSlider3.jsx'





const backgroundImage = 'https://concept-theme-tech.myshopify.com/cdn/shop/files/home-countdown.webp?v=1708878029&width=2200';


    

const myLoader = ({ src, width, quality, placeholder }) => {
    return `https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/${src}?w=${width}?p=${placeholder}`
}





const ProductPost = {
    title: 'Humming Probe UH1',
    description: "The world's pioneer for calibration - free pH measurement, innovatively integrating the principle of electrode measurement on a single test strip electrode for pH measuring",
    image: "https://www.ultraehp.com/images/Products-Detail-Img/UH-1/UH1-02.webp",
    positive01:"Accurate, calibration-free, ready-to-use",
    positive02: "Accuracy can reach ±0.1 pH",
    positive03: "Disposable to avoid sample cross-contamination",
    LogoImg:"https://www.ultraehp.com/images/Products-Detail-Img/UP100/company-logo-mobile.webp",
    BrandName: "UltraE",
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": ""
    }
};









// const { onOpen, onOpenChange } = useDisclosure();
const Product = props => (


    <div className="relative">


        {/* 結構化資料  */}
        


        <link rel="alternate" href="https://www.ultraehp.com/hummingprobe/UH1.html" hreflang="zh-Hant" />
        <link rel="alternate" href="https://www.ultraehp.com/hummingprobe/en/UH1.html" hreflang="en" />

        {/* meta seo tag */}   
        <title>Food
        </title>
        <meta key="description" name="description" content="Calibration-free micro disposable pH electrode/Humming Probe UH1 pH electrode has a disposable design that does not require pH calibration solution.  Ready to use ,ultra small sample requirement ,suitable for precious samples and easily contaminated or passivated pH electrode surfaces and special samples.There is no need to use electrode preservation solution, portable and suitable for outdoor use without power supply. Acid-base test electrode/pH electrode/pH meter/acid-base test/pH test/pH measurement/pH calibration solution" />
        <meta name='keywords' content='pH electrode/pH meter/acid-base test/pH test/pH measurement/pH calibration solution' />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />


     
        {/* OG metadata */}
        <meta property="og:url" content="https://www.ultraehp.com/hummingprobe/UH1.html" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="
Calibration-free micro disposable pH electrode｜Humming Probe UH1 pH electrode
" />
        <meta property="og:description" content="Calibration-free micro disposable pH electrode/Humming Probe UH1 pH electrode has a disposable design that does not require pH calibration solution.  Ready to use ,ultra small sample requirement ,suitable for precious samples and easily contaminated or passivated pH electrode surfaces and special samples.There is no need to use electrode preservation solution, portable and suitable for outdoor use without power supply. Acid-base test electrode/pH electrode/pH meter/acid-base test/pH test/pH measurement/pH calibration solution
" />
        <meta property="og:image" content="https://ultraehp.com/images/Ultra Video/UH1/中文版/YouTube-UH1-中文.jpg" />







        {/*

{/*
        <AnimatedTabs /> */}
        <div className='selection:bg-[#ffe637] h-[300vh]'>
            {/* <div className='h-[100vh] items-center flex justify-center bg-black'>
               
            </div> */}
          
            {/* <p>{ProductPost.description}</p>
            <p className="hidden">Date Published: {ProductPost.datePublished}</p>
           
            <img src={ProductPost.image} alt={ProductPost.title} /> */}

            {/* JSON-LD for Blog Post */}

            {/* 結構化資料 UH1 */}
            <section className='lg:w-full xl:w-[1300px] mt-[200px] flex justify-center items-center overflow-hidden md:px-[0px] px-[20px] sm:px-[50px] h-[700px] border-3 border-red-500 flex-col sm:flex-col xl:flex-row   mx-auto'>
                <div className="left p-8 border bg-[#c9b1df] border-black w-full md:w-1/3">
                      <b className='text-[20px] font-bold flex justify-center text-center '>FAMILY SNAP</b>
                     <p className='text-[12px] text-center '>ファミリースナップ</p>
                    <ReactSlick/>
                </div>
                <div className="middle  border-4 border-orange-500 overflow-scroll p-[30px] w-full md:w-1/3">
                 <b className='text-[20px] font-bold flex justify-center text-center '>FAMILY SNAP</b>
                      <div className='py-[30px]'>
                     <p className='text-[12px] text-center '>ファミリースナップ</p>
                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque dolorum sequi rem, accusamus aliquid laudantium quos quas, ipsa officiis asperiores earum ab soluta nobis dolorem exercitationem magni, deleniti pariatur nihil.</p>
                     <img className='w-full mt-4  h-auto border-2 border-gray-700 rounded-xl' src="https://cdn.shopify.com/s/files/1/0517/6767/3016/files/Group_1312316875_3078x.png?v=1721380132" alt="" />
                     </div>


                     <div className='py-[30px]'>
                        
                          <p className='text-[12px] text-center '>ファミリースナップ</p>
                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque dolorum sequi rem, accusamus aliquid laudantium quos quas, ipsa officiis asperiores earum ab soluta nobis dolorem exercitationem magni, deleniti pariatur nihil.</p>
                     <img className='w-full mt-4  h-auto border-2 border-gray-700 rounded-xl' src="https://cdn.shopify.com/s/files/1/0517/6767/3016/files/Group_1312316875_3078x.png?v=1721380132" alt="" />
                     </div>




                    
                    {/* <div className='h-[4000px] overflow-y-scroll'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sapiente vitae eos deleniti itaque soluta id voluptas hic corrupti deserunt maxime necessitatibus inventore, distinctio officia asperiores non veniam nulla exercitationem.</p>
                    <img src="https://cdn.shopify.com/s/files/1/0517/6767/3016/files/A83b6_01_v1_1_3078x.png?v=1720665516" alt="" className='w-full h-auto' />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sapiente vitae eos deleniti itaque soluta id voluptas hic corrupti deserunt maxime necessitatibus inventore, distinctio officia asperiores non veniam nulla exercitationem.</p>
                    <img src="https://cdn.shopify.com/s/files/1/0517/6767/3016/files/A83b6_01_v1_1_3078x.png?v=1720665516" alt="" className='w-full h-auto' />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sapiente vitae eos deleniti itaque soluta id voluptas hic corrupti deserunt maxime necessitatibus inventore, distinctio officia asperiores non veniam nulla exercitationem.</p>
                    <img src="https://cdn.shopify.com/s/files/1/0517/6767/3016/files/A83b6_01_v1_1_3078x.png?v=1720665516" alt="" className='w-full h-auto' />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sapiente vitae eos deleniti itaque soluta id voluptas hic corrupti deserunt maxime necessitatibus inventore, distinctio officia asperiores non veniam nulla exercitationem.</p>
                    <img src="https://cdn.shopify.com/s/files/1/0517/6767/3016/files/A83b6_01_v1_1_3078x.png?v=1720665516" alt="" className='w-full h-auto' />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sapiente vitae eos deleniti itaque soluta id voluptas hic corrupti deserunt maxime necessitatibus inventore, distinctio officia asperiores non veniam nulla exercitationem.</p>
                    <img src="https://cdn.shopify.com/s/files/1/0517/6767/3016/files/A83b6_01_v1_1_3078x.png?v=1720665516" alt="" className='w-full h-auto' />
                    </div> */}
                    
                </div>
                      <div className="left p-8 border bg-[#c9b1df] border-black w-full md:w-1/3">
                      <b className='text-[14px] font-bold'>title</b>
 <ReactSlick/>
                
                </div>
            </section>
           


            <div className="bg-[#f1f0ee] ">
              
              
</div>

</div >

<div className="bg-[#f1f0ee] py-[100px]">
         <section>
            <h1 className='text-[50px] text-black font-extrabold'>BLOG title</h1>
         </section>



</div>


    </div>

);




export default Product;
