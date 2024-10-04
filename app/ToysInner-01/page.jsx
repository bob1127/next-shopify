"use client";

// import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import SwiperCarousel from "../../components/SwiperCarouselFood/index.jsx";
const backgroundImage =
  "https://concept-theme-tech.myshopify.com/cdn/shop/files/home-countdown.webp?v=1708878029&width=2200";
import emblaCarousel02 from "../../components/EmblaCarousel02/EmblaCarousel.jsx";
import ScrollTrigger from "../../components/ScrollTrigger/page.jsx";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import ShiftDrop from "../../components/ShiftingDropDown/index.jsx";
import SwiperCarouselFood from "../../components/SwiperCarouselFood/index.jsx";

// import CarouselSlider from '../../components/Carousel/Carousel.tsx'

import Marquee from "react-fast-marquee";
const defaultContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const myLoader = ({ src, width, quality, placeholder }) => {
  return `https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/${src}?w=${width}?p=${placeholder}`;
};
const customTitleStyle = {
  fontSize: "30px",
  fontWeight: "500",
  color: "white",
};

const ProductPost = {
  title: "Humming Probe UH1",
  description:
    "The world's pioneer for calibration - free pH measurement, innovatively integrating the principle of electrode measurement on a single test strip electrode for pH measuring",
  image: "https://www.ultraehp.com/images/Products-Detail-Img/UH-1/UH1-02.webp",
  positive01: "Accurate, calibration-free, ready-to-use",
  positive02: "Accuracy can reach ±0.1 pH",
  positive03: "Disposable to avoid sample cross-contamination",
  LogoImg:
    "https://www.ultraehp.com/images/Products-Detail-Img/UP100/company-logo-mobile.webp",
  BrandName: "UltraE",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "",
  },
};

// const { onOpen, onOpenChange } = useDisclosure();
const Product = (props) => (
  <div className="relative ">
    {/* 結構化資料  */}

    <link
      rel="alternate"
      href="https://www.ultraehp.com/hummingprobe/UH1.html"
      hreflang="zh-Hant"
    />
    <link
      rel="alternate"
      href="https://www.ultraehp.com/hummingprobe/en/UH1.html"
      hreflang="en"
    />

    {/* meta seo tag */}
    <title>Food</title>
    <meta key="description" name="description" content="" />
    <meta
      name="keywords"
      content="pH electrode/pH meter/acid-base test/pH test/pH measurement/pH calibration solution"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    {/* OG metadata */}
    <meta
      property="og:url"
      content="https://www.ultraehp.com/hummingprobe/UH1.html"
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content="
Calibration-free micro disposable pH electrode｜Humming Probe UH1 pH electrode
"
    />
    <meta
      property="og:description"
      content="
"
    />
    <meta
      property="og:image"
      content="https://ultraehp.com/images/Ultra Video/UH1/中文版/YouTube-UH1-中文.jpg"
    />

    <div
      data-aos="fade-up"
      data-aos-delay="400"
      className="w-full  fixed bottom-[20px] left-0 flex justify-center"
    >
      <div className="flex flex-col">
        <div className="bottom-navgation z-[999999999999] border-2 py-2 w-[400px] border-gray-300  left-[90%g] rounded-[12px] m-1 bg-white flex px-3 justify-between">
          <div className="logo h-full flex justify-center items-center">
            <img
              className="w-[120px]"
              src="https://store.bearbrick.audio/cdn/shop/t/5/assets/logo-bearbrick.svg?v=133382835392020353321700190326"
              alt=""
            />
          </div>
          <div className="store border-3 rounded-[50px] border-gray-900 duration-300 w-[120px] text-[16px] py-1 hover:bg-black hover:text-white px-3 font-bold text-center">
            Store
          </div>
        </div>
        <div>
          <p className="text-[8px] mx-auto text-[#656565]">
            BE@RBRICK TM & © 2001-2024 MEDICOM TOY CORPORATION. All rights
            reserved.
          </p>
        </div>
      </div>
      <Link
        href="/ToysInner"
        className="contact-icon border-gray-200 border-2 flex ml-1 w-[60px] h-[60px] rounded-[12px] bg-white  justify-center  items-center"
      >
        <p>CART</p>
      </Link>
    </div>
    <div className="nav mx-auto hidden md:flex shadow-md z-[9999999] px-[30px] fixed top-0 left-[30%] w-[80%] bg-white py-[20px] border border-t-none border-[#a1a1a1] flex justify-center rounded-b-[20px]">
      <div className="logo w-[20%] ">
        <img
          className="w-[300px]"
          src="https://gacha-lab.tech/assets/img/common/logo.svg"
          alt=""
        />
      </div>
      <div className="links items-center w-[80%] justify-end flex">
        <a href="" className="font-bold mx-2 text-[14px]">
          自慢のプロダクト
        </a>
        <a href="" className="font-bold mx-2 text-[14px]">
          自慢のプロダクト
        </a>
        <a href="" className="font-bold mx-2 text-[14px]">
          自慢のプロダクト
        </a>
        <a
          href=""
          className="bg-[#db4c4c] inline-block flex justify-center items-center mx-1 py-2 text-white border-2 rounded-[40px] border-black px-3"
        >
          最新情報
        </a>
        <a
          href=""
          className="bg-[#343434] inline-block flex justify-center items-center mx-1 py-2 text-white border-2 rounded-[40px] border-black px-3"
        >
          お問い合わせ
        </a>
      </div>
    </div>
    <section
      data-aos="fade-up"
      className="  justify-center py-[100px] px-[20px] sm:px-[40px] flex flex-col  lg:flex-row section-hero-part  lg:px-[0px] my-[100px]"
    >
      <div className="left  w-full lg:w-[25%] ">
        <div className="top  rounded-md p-10  bg-[#f46229] flex flex-col justify-between h-[220px]">
          <div className="border-3 border-black rounded-[50px] w-[150px] text-center inline-block px-3 py-1">
            <p className="text-[40px]">AUDIO</p>
          </div>
          <div className="txt text-[40px] font-bold">BLACK</div>
        </div>
        <div className="middle rounded-xl mt-1 bg-black py-[60px] px-[20px] flex justify-center items-center">
          <p className="font-bold  rounded-[40px] py-2 border-2 text-center text-white w-full border-white ">
            <p></p> Notification Me Stock
          </p>
        </div>
        <div className="middle rounded-xl mt-1 bg-black py-[50px]">
          <div className="txt p-[25px]">
            <p className="text-[14px] text-white">BB4C1</p>
            <p className="text-white text-[12px] mt-[30px]">
              The stealth looking 'Matt Black' edition of the BE@RBRICK AUDIO
              400% Portable Bluetooth Speaker looks and sounds great wherever
              you put it.
            </p>
          </div>
          <Accordion className="p-6">
            <AccordionItem
              key="1"
              className="text-white "
              aria-label="Accordion 1"
              title={<span style={customTitleStyle}>產品描述</span>}
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              key="2"
              className="text-white"
              aria-label="Accordion 2"
              title={<span style={customTitleStyle}>詳細資訊</span>}
            >
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </div>
        <div className="bottom"></div>
      </div>

      <div className="right border border-black w-full lg:w-[65%]">
        <div className="img">
          <img
            src="https://bearbrick.audio/assets/twist-bear-bc1a3300.png"
            alt=""
            className="w-[80%] mx-auto"
          />
        </div>
      </div>
    </section>
    <section className="others-product py-[100px] bg-[#d7d7d7] rounded-[12px] m-1 ">
      <div className="title flex justify-center">
        <h2 className="text-[50px]">Related</h2>
      </div>
      <div className="others">
        <div
          data-aos="fade-up"
          className="cards flex flex-col md:flex-row justify-start items-center "
        >
          <div className="card-wrap m-3 flex  flex-col">
            <div className="card border border-[#9d9d9d] bg-white p-[30px] rounded-[20px]">
              <div className="img ">
                <img
                  src="https://store.bearbrick.audio/cdn/shop/files/edition--smoke-6a615636.png?height=2046&v=1700091447&width=750"
                  className="w-full lg:w-[360px]"
                  alt=""
                />
              </div>
              <div className="txt"></div>
            </div>
            <div className="bottom w-full flex justify-between py-2">
              <div className="txt">
                <p className="text-[12px] text-[#3a3a3a]">
                  BB400_A/2023-003-MTTD
                </p>
                <p className="text-[12px] text-[#3a3a3a]"> $1,000,000.00</p>
              </div>
              <div className="add border px-4 py-2 bg-black font-bold text-white rounded-[40px] border-black">
                Quikly Add
              </div>
            </div>
          </div>

          <div className="card-wrap m-3 flex flex-col">
            <div className="card border border-[#9d9d9d] bg-white p-[30px] rounded-[20px]">
              <div className="img ">
                <img
                  src="https://store.bearbrick.audio/cdn/shop/files/edition--smoke-6a615636.png?height=2046&v=1700091447&width=750"
                  className="w-full lg:w-[360px]"
                  alt=""
                />
              </div>
              <div className="txt"></div>
            </div>
            <div className="bottom w-full flex justify-between py-2">
              <div className="txt">
                <p className="text-[12px] text-[#3a3a3a]">
                  BB400_A/2023-003-MTTD
                </p>
                <p className="text-[12px] text-[#3a3a3a]"> $1,000,000.00</p>
              </div>
              <div className="add border px-4 py-2 bg-black font-bold text-white rounded-[40px] border-black">
                Quikly Add
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-Never flex flex-col lg:flex-row mt-1 bg-[#d7d7d7] rounded-[12px] m-1">
      <div className="left w-full lg:w-1/2">
        <div className="txt p-10 border">
          <p className="text-[70px] font-light w-1/2 leading-[75px]">
            Never miss a beat.
          </p>
          <p className="text-[14px] mt-[40px] w-1/2 ">
            Join our newsletter to get the latest updates and releases straight
            to your inbox.
          </p>
          <div className="flex ">
            <a
              href=""
              className="border mt-[80px] bg-black px-3 py-1  text-center  text-[16px] text-white border-black w-[200px] rounded-[40px]"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
      <div className="right w-full  lg:w-1/2">
        <div className="logo ">
          <div className="company-logo-wrap flex flex-wrap  p-5">
            <div className="logo border border-black w-[200px] p-4 ">
              公司名稱-1
            </div>
            <div className="logo border border-black w-[200px] p-4 ">
              公司名稱-2
            </div>
            <div className="log border border-black w-[200px] p-4 ">
              {" "}
              公司名稱-3
            </div>
            <div className="logo border border-black w-[200px] p-4 ">
              公司名稱-4
            </div>
            <div className="logo border border-black w-[200px] p-4 ">
              公司名稱-5
            </div>
            <div className="logo border border-black w-[200px] p-4 ">
              公司名稱-6
            </div>
            <div className="logo border border-black w-[200px] p-4 ">
              公司名稱-1
            </div>
            <div className="logo border border-black w-[200px] p-4 ">
              公司名稱-1
            </div>
            <div className="logo border border-black w-[200px] p-4 ">
              公司名稱-1
            </div>
          </div>
        </div>
      </div>
    </section>

    <section
      data-aos="fade-up"
      className="section-section-footer rounded-[10px] m-1  py-[30px] flex flex-row w-[99.5%] z-1 bg-[#b3f136] relative border "
    >
      <div className="left w-1/5"></div>
      <div className="middle flex justify-center  w-3/5">
        <div className="link-wrap flex">
          <a href="" className="text-[14px] mx-[10px]">
            Shipping
          </a>
          <a href="" className="text-[14px] mx-[10px]">
            產品外觀和購買
          </a>
          <a href="" className="text-[14px] mx-[10px]">
            產品外觀和購買
          </a>
          <a href="" className="text-[14px] duration-300   mx-[10px]">
            產品外觀和購買
          </a>
          <a href="" className="text-[14px] mx-[10px]">
            產品
          </a>
        </div>
      </div>
      <div className="right w-1/5"></div>
    </section>
    <section className="h-auto py-[100px]">
      <ScrollTrigger />
    </section>
    <section className="section-gallery ">
      {/* <p>toys inner01</p> */}
      <emblaCarousel02 />
    </section>
  </div>
);

export default Product;
