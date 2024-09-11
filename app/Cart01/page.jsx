"use client";

import Image from "next/image";

import { StickyContainer, Sticky } from "react-sticky";
import ReactSlick from "../../components/ReactSlick/ImageSlider3.jsx";

import Marquee from "react-fast-marquee";

const backgroundImage =
  "https://concept-theme-tech.myshopify.com/cdn/shop/files/home-countdown.webp?v=1708878029&width=2200";

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
    <meta
      key="description"
      name="description"
      content="Calibration-free micro disposable pH electrode/Humming Probe UH1 pH electrode has a disposable design that does not require pH calibration solution.  Ready to use ,ultra small sample requirement ,suitable for precious samples and easily contaminated or passivated pH electrode surfaces and special samples.There is no need to use electrode preservation solution, portable and suitable for outdoor use without power supply. Acid-base test electrode/pH electrode/pH meter/acid-base test/pH test/pH measurement/pH calibration solution"
    />
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
      content="Calibration-free micro disposable pH electrode/Humming Probe UH1 pH electrode has a disposable design that does not require pH calibration solution.  Ready to use ,ultra small sample requirement ,suitable for precious samples and easily contaminated or passivated pH electrode surfaces and special samples.There is no need to use electrode preservation solution, portable and suitable for outdoor use without power supply. Acid-base test electrode/pH electrode/pH meter/acid-base test/pH test/pH measurement/pH calibration solution
"
    />
    <meta
      property="og:image"
      content="https://ultraehp.com/images/Ultra Video/UH1/中文版/YouTube-UH1-中文.jpg"
    />

    {/*

{/*
        <AnimatedTabs /> */}
    <div className="selection:bg-[#ffe637]">
      {/* <div className='h-[100vh] items-center flex justify-center bg-black'>
               
            </div> */}

      {/* <p>{ProductPost.description}</p>
            <p className="hidden">Date Published: {ProductPost.datePublished}</p>
           
            <img src={ProductPost.image} alt={ProductPost.title} /> */}

      {/* JSON-LD for Blog Post */}

      {/* 結構化資料 UH1 */}
      <section className="lg:w-full xl:w-[1300px] mt-[200px] flex justify-center items-center overflow-hidden md:px-[0px] px-[15px] sm:px-[50px] border-3 border-red-500 flex-col sm:flex-col xl:flex-row   mx-auto">
        <div className="left  border bg-[#c9b1df] border-black w-full md:w-[3/4] xl:w-1/3">
          <b className="text-[14px] py-[50px] font-bold text-black mt-[30px] text-center  ">
            季節の工作をつくろう！
          </b>
          <div className="line bg-black h-[2px] w-full "></div>
          <div className="items-wrap w-1/2 grid grid-cols-2">
            <div className="flex flex-row justify-center">
              <img
                src="https://hugmug.jp/themes/hugmug/common/images/ph_footer_visual.svg"
                className="icon w-1/2"
                alt=""
              />
            </div>
            <div></div>
          </div>
        </div>
        <div className="middle  border-4 border-orange-500 overflow-scroll p-[0px] lg:p-[30px] w-full md:w-[3/4] xl:w-1/3">
          <b className="text-[20px] font-bold flex justify-center text-center ">
            FAMILY SNAP
          </b>
          <div className="py-[30px]">
            <p className="text-[12px] text-center ">ファミリースナップ</p>
            <img
              className="w-full"
              src="https://www.haruta-shoes.co.jp/catalog/ss2024/_astro/img_model_05_1.4QlxG1uu_Z1OcJfJ.webp"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
              dolorum sequi rem, accusamus aliquid laudantium quos quas, ipsa
              officiis asperiores earum ab soluta nobis dolorem exercitationem
              magni, deleniti pariatur nihil.
            </p>

            <a
              href=""
              className="border p-2 w-[100px] text-[14px] mt-3 border-black mt-3 rounded-[30px] text-center inline-block mx-auto"
            >
              Buy now
            </a>
          </div>

          <div className="py-[30px]"></div>

          <div className="bottom-div bg-[#c9b1df] p-[40px]">
            <div className="img bg-white border border-black w-full rounded-[7px]">
              <div className="txt p-10 relative">
                <p className="text-[20px] txet-center font-bold">
                  LINEお友だち会員募集中！
                </p>

                <div className="py-6">
                  <img
                    src="https://hugmug.jp/themes/hugmug/common/images/ph_footer_visual.svg"
                    className="w-[280px]"
                    alt=""
                  />
                </div>
                <div className="login-button bg-black text-[#c9b1df] absolute bottom-[-20px] left-[26%] text-center  boder border-white font-extrabold px-4 rounded-[8px] py-1 w-[150px]">
                  LOG IN
                </div>
              </div>
            </div>
            <div className="list grid mt-[50px] grid-cols-2">
              <div>
                <p className="txet-[8px] text-black">編集部からのお知らせ</p>
              </div>
              <div className="p-2">
                <p className="txet-[8px] text-black">- 編集部からのお知らせ</p>
              </div>
              <div className="p-2">
                <p className="txet-[8px] text-black">- 編集部からのお知らせ</p>
              </div>
              <div className="p-2">
                <p className="txet-[8px] text-black">- 編集部からのお知らせ</p>
              </div>
              <div className="p-2">
                <p className="txet-[8px] text-black">編集部からのお知らせ</p>
              </div>
              <div className="p-2">
                <p className="txet-[8px] text-black">編集部からのお知らせ</p>
              </div>
              <div className="p-2">
                <p className="txet-[8px] text-black">編集部からのお知らせ</p>
              </div>
              <div className="p-2">
                <p className="txet-[8px] text-white">編集部からのお知らせ</p>
              </div>
            </div>
            <b className="text-[10px] inline  mx-auto  w-full text-center">
              © 2022 CCG TO Co.Ltd All rights reserved.
            </b>
          </div>
        </div>
        <div className="left p-8 border bg-[#c9b1df] border-black w-full md:w-[3/4] xl:w-1/3">
          <b className="text-[14px] font-bold">title</b>
          <ReactSlick />
          <div>
            <h3 className="text-[20px] text-white text-center font-bold mb-4">
              TREND WORD
            </h3>
          </div>
          <div className="flex justify-center items-center flex-wrap border-t-1 border-b-1 py-[40px] border-black">
            <a
              href=""
              className="border text-black rounded-[30px] border-black text-[16px] bg-fuchsia-200 px-[20px] py-[.5px] mx-1 my-1 flex justify-center items-center"
            >
              選購資訊與蝦皮賣場
            </a>
            <a
              href=""
              className="border text-black rounded-[30px] border-black text-[16px] bg-fuchsia-200 px-[20px] py-[.5px] mx-1 my-1 flex justify-center items-center"
            >
              寵物飼養教學
            </a>
            <a
              href=""
              className="border text-black rounded-[30px] border-black text-[16px] bg-fuchsia-200 px-[20px] py-[.5px] mx-1 my-1 flex justify-center items-center"
            >
              居家整理
            </a>
            <a
              href=""
              className="border text-black rounded-[30px] border-black text-[16px] bg-fuchsia-200 px-[20px] py-[.5px] mx-1 my-1 flex justify-center items-center"
            >
              其他項目{" "}
            </a>
          </div>
          <img
            src="https://hugmug.jp/uploads/2024/06/LINE2407_present_side-banner.jpg.webp"
            className="w-full"
            alt=""
          />
        </div>
      </section>
      <section className="marquee_section mt-[60px] bg-gray-50 mt-[70px] lg">
        <div className="title">
          <h2 className="text-[32px]  mt-[30px] font-bold">Marquee Scroll</h2>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="w-[15%]">
            <p>Lorem ipsum, dolor sit amet consectetur</p>
          </div>

          <div className="w-[60%] flex justify-center">
            <div className="line-verticle rotate-[-90deg] h-[2px] mt-[40px]  w-[70px] bg-black "></div>
          </div>

          <div className="w-[15%] ">
            <p>Lorem ipsum, dolor sit </p>
          </div>
        </div>

        <Marquee
          pauseOnHover
          className="wrap py-[50px] mt-6 w-[80%] overflow-hidden"
        >
          <div>
            <div className="border flex justify-center items-center hover:bg-[#c9b1df] duration-100 border-black w-[400px] p-6 rounded-[65px] mx-3">
              <img
                src="https://www.nikoand.jp/wp-content/uploads/2024/07/bnr_town_guide_tokai_a_1080_1080.jpg"
                className="border-3 rounded-full border-black w-[70px] h-[70px]"
                alt=""
              />
              <a href="" className="text-[12px] hover:font-bold ml-4">
                「niko and ...」発のフェミニン雑貨ブランド「tiny
                tiny」の2号店が「ルミネ大宮」に8月8日(木)NEWオープン
              </a>
            </div>
          </div>
          <div>
            <div className="border flex justify-center items-center hover:bg-[#c9b1df] duration-100 border-black w-[400px] p-6 rounded-[65px] mx-3">
              <img
                src="https://www.nikoand.jp/wp-content/uploads/2024/07/bnr_town_guide_tokai_a_1080_1080.jpg"
                className="border-3 rounded-full border-black w-[70px] h-[70px]"
                alt=""
              />
              <a href="" className="text-[12px] hover:font-bold ml-4">
                「niko and ...」発のフェミニン雑貨ブランド「tiny
                tiny」の2号店が「ルミネ大宮」に8月8日(木)NEWオープン
              </a>
            </div>
          </div>
          <div>
            <div className="border flex justify-center items-center hover:bg-[#c9b1df] duration-100 border-black w-[400px] p-6 rounded-[65px] mx-3">
              <img
                src="https://www.nikoand.jp/wp-content/uploads/2024/07/bnr_town_guide_tokai_a_1080_1080.jpg"
                className="border-3 rounded-full border-black w-[70px] h-[70px]"
                alt=""
              />
              <a href="" className="text-[12px] hover:font-bold ml-4">
                「niko and ...」発のフェミニン雑貨ブランド「tiny
                tiny」の2号店が「ルミネ大宮」に8月8日(木)NEWオープン
              </a>
            </div>
          </div>
          <div>
            <div className="border flex justify-center items-center hover:bg-[#c9b1df] duration-100 border-black w-[400px] p-6 rounded-[65px] mx-3">
              <img
                src="https://www.nikoand.jp/wp-content/uploads/2024/07/bnr_town_guide_tokai_a_1080_1080.jpg"
                className="border-3 rounded-full border-black w-[70px] h-[70px]"
                alt=""
              />
              <a href="" className="text-[12px] hover:font-bold ml-4">
                「niko and ...」発のフェミニン雑貨ブランド「tiny
                tiny」の2号店が「ルミネ大宮」に8月8日(木)NEWオープン
              </a>
            </div>
          </div>
          <div>
            <div className="border flex justify-center items-center hover:bg-[#c9b1df] duration-100 border-black w-[400px] p-6 rounded-[65px] mx-3">
              <img
                src="https://www.nikoand.jp/wp-content/uploads/2024/07/bnr_town_guide_tokai_a_1080_1080.jpg"
                className="border-3 rounded-full border-black w-[70px] h-[70px]"
                alt=""
              />
              <a href="" className="text-[12px] hover:font-bold ml-4">
                「niko and ...」発のフェミニン雑貨ブランド「tiny
                tiny」の2号店が「ルミネ大宮」に8月8日(木)NEWオープン
              </a>
            </div>
          </div>
          <div>
            <div className="border flex justify-center items-center hover:bg-[#c9b1df] duration-100 border-black w-[400px] p-6 rounded-[65px] mx-3">
              <img
                src="https://www.nikoand.jp/wp-content/uploads/2024/07/bnr_town_guide_tokai_a_1080_1080.jpg"
                className="border-3 rounded-full border-black w-[70px] h-[70px]"
                alt=""
              />
              <a href="" className="text-[12px] hover:font-bold ml-4">
                「niko and ...」発のフェミニン雑貨ブランド「tiny
                tiny」の2号店が「ルミネ大宮」に8月8日(木)NEWオープン
              </a>
            </div>
          </div>
        </Marquee>
      </section>

      <section className="bg-[#333] h-[80vh]"></section>

      <div className="bg-[#f1f0ee] "></div>
    </div>

    <div className="bg-[#f1f0ee] py-[100px]">
      <section>
        <h1 className="text-[50px] text-black font-extrabold">BLOG title</h1>
        {/* <SwiperCard/> */}
      </section>
    </div>
  </div>
);

export default Product;
