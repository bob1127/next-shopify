
"use client"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';

export default () => {
    return (
        <Swiper
            // install Swiper modules
            breakpoints={{
                0: {
                    width: 0,
                    slidesPerView: 3,
                },
                768: {
                    width: 1568,
                    slidesPerView: 5,
                },
                1200: {
                    width: 2000,
                    slidesPerView: 5,
                },
            }}
            className='h-[100vh]'
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            // slidesPerView={2}
            navigation
            
            pagination={{ clickable: true }}
            scrollbar={{ draggable: false }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <a href="www.google.com">
                      <div
                    className="flex flex-col h-[300px] xl:h-[500px] py-[5px]"
                    style={{
                        boxShadow:
                            "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                    }}
                >
                     <img
                            draggable="false"
                            alt="Investing"
                            className=" w-1/2 lg:w-full   h-full right-0 top-0 object-cover object-left-top"
                            src="https://www.beams.co.jp//special/bmingbybeams/citydwellers/assets/img/index/case02-item02-sp.jpg"
                        />



                        <div className='flex flex-col mt-[50px]   justify-center items-center'>
                             <b className='text-center text-[14px]'>〈UNIVERSAL OVERALL × B:MING by BEAMS〉</b>
                             <p className='text-center text-[13px]'>WOOL LIKE JACKET</p>
                          

                      
                        </div>
                       
                    
                </div>
                </a>

            </SwiperSlide>
            <SwiperSlide>
                <div
                    className="flex flex-col h-[300px] xl:h-[500px] py-[5px]"
                    style={{
                        boxShadow:
                            "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                    }}
                >
                     <img
                            draggable="false"
                            alt="Investing"
                            className=" w-1/2 lg:w-full   h-full right-0 top-0 object-cover object-left-top"
                            src="https://www.beams.co.jp//special/bmingbybeams/citydwellers/assets/img/index/case02-item02-sp.jpg"
                        />



                        <div className='flex flex-col mt-[50px]   justify-center items-center'>
                             <b className='text-center text-[14px]'>〈UNIVERSAL OVERALL × B:MING by BEAMS〉</b>
                             <p className='text-center text-[13px]'>WOOL LIKE JACKET</p>
                          

                      
                        </div>
                       
                    
                </div>
            </SwiperSlide>

              <SwiperSlide>
                <div
                    className="flex flex-col h-[300px] xl:h-[500px] py-[5px]"
                    style={{
                        boxShadow:
                            "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                    }}
                >
                     <img
                            draggable="false"
                            alt="Investing"
                            className=" w-1/2 lg:w-full   h-full right-0 top-0 object-cover object-left-top"
                            src="https://www.beams.co.jp//special/bmingbybeams/citydwellers/assets/img/index/case02-item02-sp.jpg"
                        />



                        <div className='flex flex-col mt-[50px]   justify-center items-center'>
                             <b className='text-center text-[14px]'>〈UNIVERSAL OVERALL × B:MING by BEAMS〉</b>
                             <p className='text-center text-[13px]'>WOOL LIKE JACKET</p>
                          

                      
                        </div>
                       
                    
                </div>
            </SwiperSlide>
            <SwiperSlide>
               <div
                    className="flex flex-col h-[300px] xl:h-[500px] py-[5px]"
                    style={{
                        boxShadow:
                            "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                    }}
                >
                     <img
                            draggable="false"
                            alt="Investing"
                            className=" w-1/2 lg:w-full   h-full right-0 top-0 object-cover object-left-top"
                            src="https://www.beams.co.jp//special/bmingbybeams/citydwellers/assets/img/index/case02-item02-sp.jpg"
                        />



                        <div className='flex flex-col mt-[50px ]   justify-center items-center'>
                             <b className='text-center text-[14px]'>〈UNIVERSAL OVERALL × B:MING by BEAMS〉</b>
                             <p className='text-center text-[13px]'>WOOL LIKE JACKET</p>
                          

                      
                        </div>
                       
                    
                </div>

            </SwiperSlide>
            <SwiperSlide>
              <div
                    className="flex flex-col h-[300px] xl:h-[500px] py-[5px]"
                    style={{
                        boxShadow:
                            "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                    }}
                >
                     <img
                            draggable="false"
                            alt="Investing"
                            className=" w-1/2 lg:w-full   h-full right-0 top-0 object-cover object-left-top"
                            src="https://www.beams.co.jp//special/bmingbybeams/citydwellers/assets/img/index/case02-item02-sp.jpg"
                        />



                        <div className='flex flex-col mt-[50px]   justify-center items-center'>
                             <b className='text-center text-[14px]'>〈UNIVERSAL OVERALL × B:MING by BEAMS〉</b>
                             <p className='text-center text-[13px]'>WOOL LIKE JACKET</p>
                          

                      
                        </div>
                       
                    
                </div>
            </SwiperSlide>
              <SwiperSlide>
              <div
                    className="flex flex-col h-[300px] xl:h-[500px] py-[5px]"
                    style={{
                        boxShadow:
                            "rgba(194, 194, 194, 0.01) 0px 168px 67px, rgba(194, 194, 194, 0.05) 0px 94px 57px, rgba(194, 194, 194, 0.09) 0px 42px 42px, rgba(194, 194, 194, 0.1) 0px 10px 23px, rgba(194, 194, 194, 0.1) 0px 0px 0px"
                    }}
                >
                     <img
                            draggable="false"
                            alt="Investing"
                            className=" w-1/2 lg:w-full   h-full right-0 top-0 object-cover object-left-top"
                            src="https://www.beams.co.jp//special/bmingbybeams/citydwellers/assets/img/index/case02-item02-sp.jpg"
                        />



                        <div className='flex flex-col mt-[50px]   justify-center items-center'>
                             <b className='text-center text-[14px]'>〈UNIVERSAL OVERALL × B:MING by BEAMS〉</b>
                             <p className='text-center text-[13px]'>WOOL LIKE JACKET</p>
                          

                      
                        </div>
                       
                    
                </div>
            </SwiperSlide>
            ...
        </Swiper>
    );
};