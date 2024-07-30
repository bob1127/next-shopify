"use client"

import styles from './styles.module.css'
import Image from 'next/image';
import Link from 'next/link';
import ReactSlick from '../../components/ReactSlick/ImageSlider.jsx'

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
        <div className='selection:bg-[#ffe637]'>
            {/* <div className='h-[100vh] items-center flex justify-center bg-black'>
               
            </div> */}
          
            {/* <p>{ProductPost.description}</p>
            <p className="hidden">Date Published: {ProductPost.datePublished}</p>
           
            <img src={ProductPost.image} alt={ProductPost.title} /> */}

            {/* JSON-LD for Blog Post */}

            {/* 結構化資料 UH1 */}
            <section >
                <div className='py-[10px] flex flex-col lg:flex-row '>
                     <div className="title w-full lg:w-1/2  p-[50px] mt-[100px]">
                    <b> <span className='text-[30px] font-bold text-[#6fcfeb]'>BE</span>  <span className='text-[30px] font-bold text-[#eb5c01]'>FES!!</span>  <span className='text-[30px] font-bold text-[#6fcfeb]'>TOKYO</span> </b>
                    <h4 className=' font-bold text-[62px]'>GO TO!! SHOP LIST</h4>
                    <p className='text-[16px]'>東京のあの店をお得に楽しめる!?

</p>
                    
                 </div>
                 <div className="bottom-wrap flex  flex-col justify-center items-center mt-[65px] p-[50px] w-full lg:w-1/2">
                  <div className=''>
                      <b className='font-bold text-left'>各都市で展開されるオリジナルコンテンツにも注目!!</b>
                    <p className='font-normal  w-2/3 text-[12px] text-gray-800'>フェスが行われる各会場内や周辺施設、周辺エリアのビームスなどで、都市ごとに趣向をこらしたオリジナルのイベントコンテンツを展開します!! 各都市共通で行われる大抽選会もお楽しみに!!
※全イベントは新型コロナウイルス感染症の感染拡大の状況により、予告なく内容を変更・中止とさせていただく場合がございます。</p>
                  </div>
                 </div>
                </div>
                <div className='flex flex-wrap'>
                    <div className="article-wrap   pl-[60px] py-[40px]">
                        <div className="card">
                            <div className="title flex items-center mb-[20px]">
                                <div className="circle bg-[#eb5c01] text-white justify-center w-[60px] h-[60px] flex items-center  p-3 rounded-full">
                                    No1

                                </div>
                                <b className='ml-[15px] text-[20px] font-bold'>Baccaiun</b>
                                
                            </div>
                            <div className="content flex overflow-hidden w-[600px] ">
                                <div className="left w-1/2">
                                    <ReactSlick/>
                                </div>
                                <div className="right  p-6 bg-[#eb5c01] w-1/2 py-[0px]">
                                    

                                    <div className="img mx-auto border-2 rounded-full border-white w-[70px] my-[20px] h-[70px]">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="txt">
                                        <b className='text-white text-[14px] text-center'>ビームス クリエイティブ

井手 美月</b>
                                        <p className='text-white font-normal text-[12px] text-center'>
                                    laboriosam doloribus molestias iusto impedit delectus eius dicta provident vero. Repudiandae.

                                        </p>
                                    </div>

                                </div>




                                
                            </div>
                        </div>
                        <div className="text-content mt-[50px] w-full lg:w-[600px]">
                            <b className='text-[18px] font-bold mb-3'>オーダー自転車を手にいれる。</b>
                            <p className='text-[12px] lg:w-full w-3/4 font-bold'>“一生を共にできる自転車を作る"という1976年の創業当時から変わらぬ想いを貫いている自転車屋。現在二代目。お客様の要望に合わせて国内のフレームビルダーにて制作されるクロモリフレームは、まさに一生物です。“日本製のオーダー自転車を手の届く価格で提供したい"という店主の想いも嬉しい。自転車を“移動の手段"から“人生を楽しむため"のものへ。世界でたった一台、あなただけの自転車を是非手に入れてください。

</p>
                        </div>
                    </div>







                     <div className="article-wrap   pl-[60px] py-[40px]">
                        <div className="card">
                            <div className="title flex items-center mb-[20px]">
                                <div className="circle bg-[#eb5c01] text-white justify-center w-[60px] h-[60px] flex items-center  p-3 rounded-full">
                                    No1

                                </div>
                                <b className='ml-[15px] text-[20px] font-bold'>Baccaiun</b>
                                
                            </div>
                            <div className="content flex overflow-hidden w-[600px]">
                                <div className="left w-1/2">
                                    <ReactSlick/>
                                </div>
                                <div className="right  p-6 bg-[#eb5c01] w-1/2 py-[0px]">
                                    

                                    <div className="img mx-auto border-2 rounded-full border-white w-[70px] my-[20px] h-[70px]">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="txt">
                                        <b className='text-white text-[14px] text-center'>ビームス クリエイティブ

井手 美月</b>
                                        <p className='text-white font-normal text-[12px] text-center'>
                                    laboriosam doloribus molestias iusto impedit delectus eius dicta provident vero. Repudiandae.

                                        </p>
                                    </div>

                                </div>




                                
                            </div>
                        </div>
                        <div className="text-content mt-[50px] w-full lg:w-[600px]">
                            <b className='text-[18px] font-bold mb-3'>オーダー自転車を手にいれる。</b>
                            <p className='text-[12px] lg:w-full w-3/4 font-bold'>“一生を共にできる自転車を作る"という1976年の創業当時から変わらぬ想いを貫いている自転車屋。現在二代目。お客様の要望に合わせて国内のフレームビルダーにて制作されるクロモリフレームは、まさに一生物です。“日本製のオーダー自転車を手の届く価格で提供したい"という店主の想いも嬉しい。自転車を“移動の手段"から“人生を楽しむため"のものへ。世界でたった一台、あなただけの自転車を是非手に入れてください。

</p>
                        </div>
                        <div className="footer mt-5 p-2 w-full bg-[#d1e5ec] rounded-[40px]">
                            <div className="left flex flex-col justify-center items-center   rounded-[40px] p-0 w-[22%] bg-[#2e9ac1]">
                                <Link href='/BlogInner'>


                                    <span className='text-white m-1 text-center text-[13px]'> Discount<br></br> 特典內容
                                </span> 
                                
                                
                                
                                </Link>
                           
                                
                                
                                
                                
                            </div>
                            <div className="right">

                            </div>
                            
                        </div>
                    </div>







                     <div className="article-wrap   pl-[60px] py-[40px]">
                        <div className="card">
                            <div className="title flex items-center mb-[20px]">
                                <div className="circle bg-[#eb5c01] text-white justify-center w-[60px] h-[60px] flex items-center  p-3 rounded-full">
                                    No1

                                </div>
                                <b className='ml-[15px] text-[20px] font-bold'>Baccaiun</b>
                                
                            </div>
                            <div className="content flex overflow-hidden w-[600px]">
                                <div className="left w-1/2">
                                    <ReactSlick/>
                                </div>
                                <div className="right  p-6 bg-[#eb5c01] w-1/2 py-[0px]">
                                    

                                    <div className="img mx-auto border-2 rounded-full border-white w-[70px] my-[20px] h-[70px]">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="txt">
                                        <b className='text-white text-[14px] text-center'>ビームス クリエイティブ

井手 美月</b>
                                        <p className='text-white font-normal text-[12px] text-center'>
                                    laboriosam doloribus molestias iusto impedit delectus eius dicta provident vero. Repudiandae.

                                        </p>
                                    </div>

                                </div>




                                
                            </div>
                        </div>
                        <div className="text-content mt-[50px] w-full lg:w-[600px]">
                            <b className='text-[18px] font-bold mb-3'>オーダー自転車を手にいれる。</b>
                            <p className='text-[12px] lg:w-full w-3/4 font-bold'>“一生を共にできる自転車を作る"という1976年の創業当時から変わらぬ想いを貫いている自転車屋。現在二代目。お客様の要望に合わせて国内のフレームビルダーにて制作されるクロモリフレームは、まさに一生物です。“日本製のオーダー自転車を手の届く価格で提供したい"という店主の想いも嬉しい。自転車を“移動の手段"から“人生を楽しむため"のものへ。世界でたった一台、あなただけの自転車を是非手に入れてください。

</p>
                        </div>
                        <div className="footer mt-5 p-2 w-full bg-[#d1e5ec] rounded-[40px]">
                            <div className="left flex flex-col justify-center items-center   rounded-[40px] p-0 w-[22%] bg-[#2e9ac1]">
                                <Link href='/BlogInner'>


                                    <span className='text-white m-1 text-center text-[13px]'> Discount<br></br> 特典內容
                                </span> 
                                
                                
                                
                                </Link>
                           
                                
                                
                                
                                
                            </div>
                            <div className="right">

                            </div>
                            
                        </div>
                    </div>





                     <div className="article-wrap   pl-[60px] py-[40px]">
                        <div className="card">
                            <div className="title flex items-center mb-[20px]">
                                <div className="circle bg-[#eb5c01] text-white justify-center w-[60px] h-[60px] flex items-center  p-3 rounded-full">
                                    No1

                                </div>
                                <b className='ml-[15px] text-[20px] font-bold'>Baccaiun</b>
                                
                            </div>
                            <div className="content flex overflow-hidden w-[600px]">
                                <div className="left w-1/2">
                                    <ReactSlick/>
                                </div>
                                <div className="right  p-6 bg-[#eb5c01] w-1/2 py-[0px]">
                                    

                                    <div className="img mx-auto border-2 rounded-full border-white w-[70px] my-[20px] h-[70px]">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="txt">
                                        <b className='text-white text-[14px] text-center'>ビームス クリエイティブ

井手 美月</b>
                                        <p className='text-white font-normal text-[12px] text-center'>
                                    laboriosam doloribus molestias iusto impedit delectus eius dicta provident vero. Repudiandae.

                                        </p>
                                    </div>

                                </div>




                                
                            </div>
                        </div>
                        <div className="text-content mt-[50px] w-full lg:w-[600px]">
                            <b className='text-[18px] font-bold mb-3'>オーダー自転車を手にいれる。</b>
                            <p className='text-[12px] lg:w-full w-3/4 font-bold'>“一生を共にできる自転車を作る"という1976年の創業当時から変わらぬ想いを貫いている自転車屋。現在二代目。お客様の要望に合わせて国内のフレームビルダーにて制作されるクロモリフレームは、まさに一生物です。“日本製のオーダー自転車を手の届く価格で提供したい"という店主の想いも嬉しい。自転車を“移動の手段"から“人生を楽しむため"のものへ。世界でたった一台、あなただけの自転車を是非手に入れてください。

</p>
                        </div>
                        <div className="footer mt-5 p-2 w-full bg-[#d1e5ec] rounded-[40px]">
                            <div className="left flex flex-col justify-center items-center   rounded-[40px] p-0 w-[22%] bg-[#2e9ac1]">
                                <Link href='/BlogInner'>


                                    <span className='text-white m-1 text-center text-[13px]'> Discount<br></br> 特典內容
                                </span> 
                                
                                
                                
                                </Link>
                           
                                
                                
                                
                                
                            </div>
                            <div className="right">

                            </div>
                            
                        </div>
                    </div>
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
