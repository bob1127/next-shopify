"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import Head from "next/head";
// import ToyHeroCarousel from "../../components/ToyHeroCarousel/page";
// import Inner from "../components/Inner/index.jsx";
import Script from "next/script";
// import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { NextUIProvider } from "@nextui-org/react";
// import Navbar from "../components/sideTabs/index.jsx";
// import Footer from "../components/Footer/index.jsx";
// import Marquee from "react-fast-marquee";
import AOS from "aos";
import { NextSeo } from "next-seo";
import Carousel from "../../components/EmblaCarousel08/index";
import Marquee from "react-fast-marquee";
// import Nav from "../components/Navbar/page.jsx";
import { useEffect } from "react";
import Emblacarousel from "../../components/EmblaCarousel01/EmblaCarousel.jsx";
import "aos/dist/aos.css"; // 导入 AOS 的 CSS 文件
export default function Blog() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 延遲 300ms 來啟動動畫
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    // 清除計時器
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="bg-[#f0f2f3] overflow-hidden py-[200px] h-[400vh]">
      <section className="section-hero-img px-[15px]">
        <div className="play-card overflow-hidden items-center  relative  mt-[160px] p-[100px] bg-[#ec6759] flex justify-center flex-col  rounded-2xl">
          <div className="left-hold absolute z-[999] left-0 top-0">
            <img
              className="w-[400px]"
              src="/images/switch-hold-left.png"
              alt=""
            />
          </div>
          <div className="right-hold absolute z-[999] right-0 top-0">
            <img
              className="w-[400px]"
              src="/images/switch-hold-right.png"
              alt=""
            />
          </div>
          <h1 className="text-white text-[60px] font-bold">Enjoy the Home</h1>
          <h1 className="text-white text-[60px] font-bold">Console Gamming</h1>
          <h1 className="text-white text-[60px] font-bold">Experience</h1>
          <a
            className="bg-pink-400 mt-[50px] border border-white rounded-[10px] inline-block text-center px-4 py-1 text-white text-[18px] font-bold"
            href=""
          >
            {" "}
            Buy Now
          </a>
        </div>
      </section>
      <section className="section-feature-game h-auto py-[200px] bg-white px-[100px]">
        <div className="txt border flex items-start flex-col border-black   justify-start">
          <h2 className="text-[46px] text-rose-500 font-black">
            Feature <span className="text-black text-[46px]">Games</span>
          </h2>
          <div className="carousel">
            <Carousel />
          </div>
        </div>
      </section>
      <section className="section-machine px-[15px] rounded-2xl bg-[#ec6759]">
        <div className="top">
          <div className="left w-1/2"></div>
          <div className="right w-1/2">
            <img src="" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

// reportWebVitals();
