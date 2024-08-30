  
  
  
  
"use client"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const myLoader01 = ({ src, width, quality, placeholder }) => {
    return `https://www.danone.co.jp/oikos/assets/renewal/img/${src}?w=${width}?p=${placeholder}`
}

export default () => {
    // const sliderRef = useRef(null);
    // const handlePrev = useCallback(() => {
    //     if (!sliderRef.current) return;
    //     sliderRef.current.swiper.slidePrev();
    // }, []);

    // const handleNext = useCallback(() => {
    //     if (!sliderRef.current) return;
    //     sliderRef.current.swiper.slideNext();
    // }, []);

    return (
        <div className='flex flex-col justify-center items-center'>
        <div className='w-[470px] md:w-[600px] xl:w-[1300px] lg:w-[800px] relative  m-0 p-0'>
            {/* <div className='modal01 inline w-[400px]  absolute z-[9999999] top-0 right-[170px]'>
                <div className="close absolute right-2 top-3 border-2 border-black bg-black z-[9999999] rounded-full w-[40px] h-[40px] border-green">
                    

                </div>
                <div className="wrap shadow-2xl w-[400px] rounded-xl h-[250px] bg-gray-100 flex justify-center items-center">
                     <div className="txt">
                        <p className='text-[#212121] text-[32px] '>還有更多商品！！</p>
                        <b>點我繼續選購→</b>
                     </div>
                </div>
            </div> */}
            <Swiper
            data-aos="zoom-in-up" data-aos-duration="750" data-aos-delay="450"
            
               
             
                // install Swiper modules
              
  
  breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                modules={[Navigation, Pagination,  A11y]}
                spaceBetween={1}
                className='m-0 p-0'
              

                navigation
                pagination={{ clickable: false }}
           
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >

                <SwiperSlide className=' w-full  ' >



                            <Card className="pt-4 bg-white p-0 m-0 shadow-none">
                                <CardHeader className="bg-[#ed3254]">
                                  <div className="txt text-white text-center  p-4">
                                 高タンパク質 ゴールデンパイナ
                                  </div>
                                </CardHeader>
                              <CardBody className=" p-[40px] ">
                                    <Image
                                        loading='lazy'
                                        alt="Card background"
                                        className="rounded-xl mb-[30px]"
                                        src="OIKOS_Blueberry_01.png"
                                        loader={myLoader01}
                                        width={500}
                                        height={500}
                                        
                                    />
                                       <div className="description">
                                        <b className='text-black'>Price: $250</b>
                                        <p className='text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, illum?</p>
                                        <a href="" className='border border-black text-black p-2 text-[12px] font-bold rounded-[30px] w-[190px]'>BUY NOW</a>
                                    </div>
                                </CardBody>
                            </Card>
                      

                  

               
                </SwiperSlide>
                       <SwiperSlide className=' w-full  ' >



                            <Card className="pt-4 bg-white p-0 m-0 shadow-none">
                                <CardHeader className="bg-[#ed3254]">
                                  <div className="txt text-white text-center  p-4">
                                 高タンパク質 プレーン・加糖
                                  </div>
                                </CardHeader>
                              <CardBody className=" p-[40px] ">
                                    <Image
                                        loading='lazy'
                                        alt="Card background"
                                        className="rounded-xl mb-[30px]"
                                        src="OIKOS_goldenpineapple.png"
                                        loader={myLoader01}
                                        width={500}
                                        height={500}
                                        
                                    />
                                       <div className="description">
                                        <b className='text-black'>Price: $250</b>
                                        <p className='text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, illum?</p>
                                        <a href="" className='border border-black text-black p-2 text-[12px] font-bold rounded-[30px] w-[190px]'>BUY NOW</a>
                                    </div>
                                </CardBody>
                            </Card>
                      

                  

               
                </SwiperSlide>
                 <SwiperSlide className=' w-full  ' >



                            <Card className="pt-4 bg-white p-0 m-0 shadow-none">
                                <CardHeader className="bg-[#ed3254]">
                                  <div className="txt text-white text-center  p-4">
                                  高タンパク質 ストロベリー
                                  </div>
                                </CardHeader>
                              <CardBody className=" p-[40px] ">
                                    <Image
                                        loading='lazy'
                                        alt="Card background"
                                        className="rounded-xl mb-[30px]"
                                        src="OIKOS_Plain_NS_01.png"
                                        loader={myLoader01}
                                        width={500}
                                        height={500}
                                        
                                    />
                                       <div className="description">
                                        <b className='text-black'>Price: $250</b>
                                        <p className='text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, illum?</p>
                                        <a href="" className='border border-black text-black p-2 text-[12px] font-bold rounded-[30px] w-[190px]'>BUY NOW</a>
                                    </div>
                                </CardBody>
                            </Card>
                      

                  

               
                </SwiperSlide>
                 <SwiperSlide className=' w-full  ' >



                            <Card className="pt-4 bg-white p-0 m-0 shadow-none">
                                <CardHeader className="bg-[#ed3254]">
                                  <div className="txt text-white text-center  p-4">
                               中容量 プレーン・砂糖不使用
                                  </div>
                                </CardHeader>
                              <CardBody className=" p-[40px] ">
                                    <Image
                                        loading='lazy'
                                        alt="Card background"
                                        className="rounded-xl mb-[30px]"
                                        src="OIKOS_Plain_01.png"
                                        loader={myLoader01}
                                        width={500}
                                        height={500}
                                        
                                    />
                                       <div className="description">
                                        <b className='text-black'>Price: $250</b>
                                        <p className='text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, illum?</p>
                                        <a href="" className='border border-black text-black p-2 text-[12px] font-bold rounded-[30px] w-[190px]'>BUY NOW</a>
                                    </div>
                                </CardBody>
                            </Card>
                      

                  

               
                </SwiperSlide>
                 <SwiperSlide className=' w-full  ' >



                            <Card className="pt-4 bg-white p-0 m-0 shadow-none">
                                <CardHeader className="bg-[#ed3254]">
                                  <div className="txt text-white text-center  p-4">
                                   高タンパク質 ゴールデンパイナップル
                                  </div>
                                </CardHeader>
                              <CardBody className=" p-[40px] ">
                                    <Image
                                        loading='lazy'
                                        alt="Card background"
                                        className="rounded-xl mb-[30px]"
                                        src="OIKOS_Strawberry_01.png"
                                        loader={myLoader01}
                                        width={500}
                                        height={500}
                                        
                                    />
                                       <div className="description">
                                        <b className='text-black'>Price: $250</b>
                                        <p className='text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, illum?</p>
                                        <a href="" className='border border-black text-black p-2 text-[12px] font-bold rounded-[30px] w-[190px]'>BUY NOW</a>
                                    </div>
                                </CardBody>
                            </Card>
                      

                  

               
                </SwiperSlide>
                 <SwiperSlide className=' w-full  ' >



                            <Card className="pt-4 bg-white p-0 m-0 shadow-none">
                                <CardHeader className="bg-[#ed3254]">
                                  <div className="txt text-white text-center  p-4">
                                   高吸収タンパク質
                                  </div>
                                </CardHeader>
                              <CardBody className=" p-[40px] ">
                                    <Image
                                        loading='lazy'
                                        alt="Card background"
                                        className="rounded-xl mb-[30px]"
                                        src="OIKOS_Blueberry_01.png"
                                        loader={myLoader01}
                                        width={500}
                                        height={500}
                                        
                                    />
                                       <div className="description">
                                        <b className='text-black'>Price: $250</b>
                                        <p className='text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, illum?</p>
                                        <a href="" className='border border-black text-black p-2 text-[12px] font-bold rounded-[30px] w-[190px]'>BUY NOW</a>
                                    </div>
                                </CardBody>
                            </Card>
                      

                  

               
                </SwiperSlide>         
            </Swiper>
            {/* <div className="prev-arrow" onClick={handlePrev} />
            <div className="next-arrow" onClick={handleNext} /> */}
        </div>
         <div className="bg-white w-full min-h-[200px] flex items-center justify-center">
      <button className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
        選購更多商品！！！
      </button>
    </div>
</div>

        
    );
};
  
  
  
  
  
  