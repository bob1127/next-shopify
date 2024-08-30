"use client";

// import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import SwiperCarousel from "../../components/SwiperCarouselFood/index.jsx";
const backgroundImage =
  "https://concept-theme-tech.myshopify.com/cdn/shop/files/home-countdown.webp?v=1708878029&width=2200";
import ShiftDrop from "../../components/ShiftingDropDown/index.jsx";
import SwiperCarouselFood from "../../components/SwiperCarouselFood/index.jsx";
// import CarouselSlider from '../../components/Carousel/Carousel.tsx'

import Marquee from "react-fast-marquee";

const myLoader = ({ src, width, quality, placeholder }) => {
  return `https://cdn.prod.website-files.com/6177739448baa66404ce1d9c/${src}?w=${width}?p=${placeholder}`;
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
  <div className="relative">
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

    <div>
      <h1>title</h1>

      <div className="cards flex justify-center py-[100px] mt-[100px] bg-gray-300">
        <Link href="/ToysInner-01">
          <div
            data-aos="fade-up "
            className="card p-5 m-3 flex-wrap flex flex-col "
          >
            <div className="card-body rounded-md border-2 border-gray-200  w-[380px] bg-white relative">
              <div className="img">
                <img
                  className="w-full"
                  src="https://store.bearbrick.audio/cdn/shop/files/edition--black-42445bc6.png?height=2046&v=1700091429&width=750"
                  alt=""
                />
              </div>
              <div className="mark absolute top-0 left-0 z-999999]">
                <div className="border border-black ">
                  <p className="font-normal text-[16px]">Black</p>
                </div>
              </div>
              <div className="marquee z-[9999] absolute top-1/2 left-0  bg-[#f6571d]">
                <Marquee>
                  <p className="text-black text-[16px] font-normal ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nihil voluptates maiores soluta totam consequuntur, dolorem
                    quidem quod omnis, illo, quia cumque a corporis quos ea
                    debitis ducimus repudiandae molestias minus?
                  </p>
                </Marquee>
              </div>
              <div className="text">
                <p>title</p>
              </div>
            </div>
            <div className="card-footer border border-black flex flex-row justify-between p-4 w-full">
              <div className="flex flex-col">
                <b className="text-gray-500 font-light text-[14px]">BB4C1</b>

                <b className="text-[14px]">50$</b>
              </div>
              <div className="border-2 font-bold hover:bg-black hover:text-white duration-400 px-4 py-2 border-black  rounded-[50px]">
                Notify Me
              </div>
            </div>
          </div>
        </Link>
        <Link href="/ToysInner-01">
          <div
            data-aos="fade-up "
            className="card m-3 flex-wrap flex flex-col "
          >
            <div className="card-body rounded-[20px] border border-black w-[380px] bg-white relative">
              <div className="img">
                <img
                  className="w-full"
                  src="https://store.bearbrick.audio/cdn/shop/files/edition--black-42445bc6.png?height=2046&v=1700091429&width=750"
                  alt=""
                />
              </div>
              <div className="mark absolute top-0 left-0 z-999999]">
                <div className="border border-black ">
                  <p className="font-normal text-[16px]">Black</p>
                </div>
              </div>
              <div className="marquee z-[9999] absolute top-1/2 left-0  bg-[#f6571d]">
                <Marquee>
                  <p className="text-black text-[13px] font-normal ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nihil voluptates maiores soluta totam consequuntur, dolorem
                    quidem quod omnis, illo, quia cumque a corporis quos ea
                    debitis ducimus repudiandae molestias minus?
                  </p>
                </Marquee>
              </div>
              <div className="text">
                <p>title</p>
              </div>
            </div>
            <div className="card-footer border border-black flex flex-row justify-between p-4 w-full">
              <div className="flex flex-col">
                <b className="text-gray-500 font-light text-[14px]">BB4C1</b>

                <b className="text-[14px]">50$</b>
              </div>
              <div className="border-2 font-bold hover:bg-black hover:text-white duration-400 px-4 py-2 border-black  rounded-[50px]">
                Notify Me
              </div>
            </div>
          </div>
        </Link>
        <Link href="/ToysInner-01">
          <div
            data-aos="zoom-in "
            className="card m-3 flex-wrap flex flex-col "
          >
            <div className="card-body rounded-[20px] border border-black w-[380px] bg-white relative">
              <div className="img">
                <img
                  className="w-full"
                  src="https://store.bearbrick.audio/cdn/shop/files/edition--black-42445bc6.png?height=2046&v=1700091429&width=750"
                  alt=""
                />
              </div>
              <div className="mark absolute top-0 left-0 z-999999]">
                <div className="border border-black ">
                  <p className="font-normal text-[16px]">Black</p>
                </div>
              </div>
              <div className="marquee z-[9999] absolute top-1/2 left-0  bg-[#f6571d]">
                <Marquee>
                  <p className="text-black text-[13px] font-normal ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Nihil voluptates maiores soluta totam consequuntur, dolorem
                    quidem quod omnis, illo, quia cumque a corporis quos ea
                    debitis ducimus repudiandae molestias minus?
                  </p>
                </Marquee>
              </div>
              <div className="text">
                <p>title</p>
              </div>
            </div>
            <div className="card-footer border border-black flex flex-row justify-between p-4 w-full">
              <div className="flex flex-col">
                <b className="text-gray-500 font-light text-[14px]">BB4C1</b>

                <b className="text-[14px]">50$</b>
              </div>
              <div className="border-2 font-bold hover:bg-black hover:text-white duration-400 px-4 py-2 border-black  rounded-[50px]">
                Notify Me
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default Product;
