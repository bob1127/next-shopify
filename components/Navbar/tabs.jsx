// Import necessary modules and components


"use client"
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Logo from './Logo.jsx'
import Link from "next/link.js";
import MobileMenu from '../mobileMenu/index.jsx'
import Marquee from 'react-fast-marquee'
// Define SlideTabsExample component
export const SlideTabsExample = () => {
  return (
    <div className="bg-[#2b72e5] border-3 border-black  pt-8 pb-6 flex mx-auto left-[40%] justify-center items-center fixed w-[100vw] z-[999999]">
      <div className="marquee fixed bg-white notice-modal mx-auto w-[100vw] rounded-[5px] border-black border  flex flex-row p-1 bg-whote  top-0">
        <img className="w-[25px] bg-white border rounded-full h-[25px]" src="https://www.nikoand.jp/wp-content/uploads/2024/03/teraai.png" alt="" />
        <Marquee>
            <div className='w-[100px]'>
              <p>PLAY ⚾️</p>
            </div>
            <div className='w-[100px]'>
              <p>PLAY ⚾️</p>
            </div>
            <div className='w-[100px]'>
              <p>PLAY ⚾️</p>
            </div>
            <div className='w-[100px]'>
              <p>PLAY ⚾️</p>
            </div>
            <div className='w-[100px]'>
              <p>PLAY ⚾️</p>
            </div>
            <div className='w-[100px]'>
              <p>PLAY ⚾️</p>
            </div>
            <div className='w-[100px]'>
              <p>PLAY ⚾️</p>
            </div>
             <div className='w-[100px]'>
              <p>PLAY ⚾️</p>
            </div>
            <div className='w-[100px]'>
              <p>PLAY ⚾️</p>
            </div>
            <div className='w-[100px]'>
              <p>PLAY ⚾️</p>
            </div>
            <div className='w-[100px]'>
              <p>PLAY ⚾️</p>
            </div>
            <div className='w-[100px]'>
              <p>PLAY ⚾️</p>
            </div>
            <div className='w-[100px]'>
              <p>PLAY ⚾️</p>
            </div>
            <div className='w-[100px]'>
              <p>PLAY ⚾️</p>
            </div>
        </Marquee>
        
      </div>
      <div className="Logo-section w-[20%] border-black border-1 flex justify-center">
        <Logo/>
      </div>
      <div className="Logo-section w-[60%] border-black border-1">
         <SlideTabs />
      </div>
      <div className="Logo-section w-[20%] border-black border-1">
<MobileMenu/>
      </div>
     
    </div>
  );
};

// Define SlideTabs component
const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((prevPosition) => ({
          ...prevPosition,
          opacity: 0,
        }));
      }}
      className="relative mx-auto flex w-fit rounded-full border-2 border-black  bg-white p-1"
    >
      {/* Render each tab with dynamic properties */}

      <Link href='/'>   <Tab setPosition={setPosition}> <b className="font-extrabold ">首頁</b> Home</Tab></Link>
   
      <Tab setPosition={setPosition}><b className="font-extrabold ">食品</b> Foods</Tab>
          <Link href="/Clothes" className="cursor-pointer">
      <Tab setPosition={setPosition}><b className="font-extrabold ">服飾</b> Clothes</Tab></Link>

      <Link href="/toys" className="cursor-pointer">
      <Tab setPosition={setPosition}><b className="font-extrabold cursor-pointer" >       玩具 </b> Toys </Tab></Link>
      <Tab setPosition={setPosition}><b className="font-extrabold ">文章</b> Blog</Tab>

      {/* Render the cursor with its position animated */}
      <Cursor position={position} />
    </ul>
  );
};

// Define Tab component
const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (ref.current) {
          const { width } = ref.current.getBoundingClientRect();
          setPosition({
            left: ref.current.offsetLeft,
            width,
            opacity: 1,
          });
        }
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-[13.8px] uppercase text-white mix-blend-difference md:px-5 md:py-1 "
    >
      {children}
    </li>
  );
};

// Define Cursor component
const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-3 rounded-full bg-black md:h-7"
    />
  );
};
