"use client"

import styles from './styles.module.css'
import Image from 'next/image';

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
        <div>
            {/* <div className='h-[100vh] items-center flex justify-center bg-black'>
               
            </div> */}
          
            {/* <p>{ProductPost.description}</p>
            <p className="hidden">Date Published: {ProductPost.datePublished}</p>
           
            <img src={ProductPost.image} alt={ProductPost.title} /> */}

            {/* JSON-LD for Blog Post */}

            {/* 結構化資料 UH1 */}


            <div className="bg-[#f1f0ee] ">
              
              
</div>

</div >

<div className="bg-[#f1f0ee] py-[100px]">





     <h1 className='text-[50px] text-black font-extrabold text-center'>Blog</h1>


      <section className='h-full  bg-white border-3 border-gray-200 rounded-2xl m-7 py-[80px]'>
        <div className="txt border border-gray-400">
            {/* <h1 className='w-2/3 text-[35px] font-bold'>Website Design and Built Fast With AI</h1> */}
            <div className="wrap flex-col flex lg:flex-row justify-center items-center ">
                <div className="left ml-0 bg-fixed bg-contain lg:ml-[-100px] w-full lg:w-[50%] delay-75 duration-300 hover:scale-[1.15] bg-[url('https://www.nikoand.jp/wp-content/uploads/2024/07/bnr_town_guide_tokai_a_1080_1080.jpg')] hover:w-[70%] bg-gray-500 rounded-2xl h-[450px]">

                    
                    
                </div>
                <div className="right pl-[40px] flex w-full justify-center items-center lg:w-[60%]">
                    <div className="txt w-[70%] py-[50px]">
                        <h3 className='text-[30px] text-gray-500'>SiteMap to</h3>
                        <h4 className='text-[60px] font-extrabold'>WIRE FRAME</h4>
                        <p className='w-full'>Achieve your first draft in the first minute. Sit back and watch AI magically turn your Sitemap into wireframes in one click generating real components un-styled with copy. Getting sign off has never been so easy.
                            
                        </p>
                        <div className='grid mt-4  grid-cols-2'>
                            <div className='border  p-[15px] border-black'>
                                <div className="txt">
                                    <div className="img border-2 border-black rounded-full my-[10px] w-[40px] h-[40px]">
                                        <img src="" alt="" />
                                        <div className="txt">
                                            <h4 className='bg-gradient-to-b from-transparent via-green-500 to-transparent'>Dream Amiのクリスマス。</h4>
                                        </div>

                                    </div>
                                  
                                </div>
                            </div>
                          <div className='border  p-[15px] border-black'>
                                <div className="txt">
                                    <div className="img border-2 border-black rounded-full my-[10px] w-[40px] h-[40px]">
                                        <img src="" alt="" />
                                        <div className="txt">
                                            <h4 className=''></h4>
                                        </div>

                                    </div>
                                 
                                </div>
                            </div>
                             <div className='border  p-[15px] border-black'>
                                <div className="txt">
                                    <div className="img border-2 border-black rounded-full my-[10px] w-[40px] h-[40px]">

                                    </div>
                                    <b>No1</b>
                                    <p className='text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere maxime alias officia sunt, ipsam unde</p>
                                </div>
                            </div>
                             <div className='border  p-[15px] border-black'>
                                <div className="txt">
                                    <div className="img border-2 border-black rounded-full my-[10px] w-[40px] h-[40px]">

                                    </div>
                                    <b>No1</b>
                                    <p className='text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere maxime alias officia sunt, ipsam unde</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
      </section>

      <section>
        <div className="top-wrap border w-[500px] py-[50px] mx-auto border-black  bg-white rounded-xl">
            <div className="wrap">
                <h2 className='text-[32px] font-extrabold text-center'>
                    The Food Time
                </h2>
                
            </div>
        </div>
        <div className="wrap w-full justify-center items-center flex-wrap px-[20px] md:px-[50px] lg:px-[110px] flex flex-row">
            <div className='border duration-750 overflow-hidden hover:bg-[#dfcee9]   data-aos="fade-right" data-aos-delay="450"  m-[10px] w-full md:w-[360px] border-black bg-white rounded-xl'>
                <div className="txt py-[15px]">
                    <h4 className='text-[32px] text-center'>UI STYLE GUID</h4>
                    <p className='text-[13px] data-aos="fade-right" data-aos-delay="450"  text-center w-2/3 mx-auto'>    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dignissimos quos voluptate aut eos? Vitae repudiandae et ullam quasi omnis optio eos enim non, natus soluta eum, inventore praesentium. Mollitia.
</p>
                
                </div>
                <div className="img">
                    <Image  data-aos="zoom-in-up" data-aos-delay="450"  loader={myLoader} className='mb-[-130px] ml-[-140px] scale-[0.75]' width={800} height={500} src='658e3bcd32cb3de9f0460562_Styled%20Wireframe%20Image%202.svg'></Image>
                </div>
                
            </div>
               <div className='border  overflow-hidden hover:bg-[#dfcee9]  delay-75 m-[10px] w-full md:w-[360px] border-black  bg-white rounded-xl'>
                <div className="txt py-[15px]">
                    <h4 className='text-[32px] text-center'>UI STYLE GUID</h4>
                    <p className='text-[13px] text-center w-2/3 mx-auto'>    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dignissimos quos voluptate aut eos? Vitae repudiandae et ullam quasi omnis optio eos enim non, natus soluta eum, inventore praesentium. Mollitia.
</p>
                
                </div>
                <div className="img">
                    <Image loader={myLoader}  data-aos="zoom-in-up" data-aos-delay="450" className='mb-[-130px] ml-[-140px] scale-[0.75]' width={800} height={500} src='658e3bcd32cb3de9f0460562_Styled%20Wireframe%20Image%202.svg'></Image>
                </div>
                
            </div>
              <div className='border duration-750 overflow-hidden hover:bg-[#dfcee9] delay-75 m-[10px] w-full md:w-[360px] border-black bg-white rounded-xl'>
                <div className="txt py-[15px]">
                    <h4 className='text-[32px] text-center'>UI STYLE GUID</h4>
                    <p className='text-[13px] text-center w-2/3 mx-auto'>    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dignissimos quos voluptate aut eos? Vitae repudiandae et ullam quasi omnis optio eos enim non, natus soluta eum, inventore praesentium. Mollitia.
</p>
                
                </div>
                <div className="img">
                    <Image loader={myLoader} data-aos="zoom-in-up" data-aos-delay="450"  className='mb-[-130px] ml-[-140px] scale-[0.75]' width={800} height={500} src='658e3bcd32cb3de9f0460562_Styled%20Wireframe%20Image%202.svg'></Image>
                </div>
                
            </div>
        </div>
      </section>

         
</div>


    </div>

);




export default Product;
