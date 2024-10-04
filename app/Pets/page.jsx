"use client";

// import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
// import SwiperCarousel from "../../components/SwiperCarouselFood/index.jsx";
// import ParallaxCarousel from '../../components/ParrallaxCaorousel/page.jsx'
import HeroSlider from "../../components/HeroSlider/page";
const backgroundImage =
  "https://concept-theme-tech.myshopify.com/cdn/shop/files/home-countdown.webp?v=1708878029&width=2200";
import Marquee from "react-fast-marquee";
import ShiftDrop from "../../components/ShiftingDropDown/index.jsx";
import SwiperCarouselFood from "../../components/SwiperCarouselFood/index.jsx";
// import CarouselSlider from '../../components/Carousel/Carousel.tsx'

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

    {/*

{/*
        <AnimatedTabs /> */}
    <div className="bg-[url('')] bg-cover bg-no-repeat">
      <div className="h bg-[#ede3da] py-[100px]">
        {/* <HeroSlider /> */}
        <img
          className="w-full bg-attache"
          src="https://uniam.jp/cdn/shop/files/lifestyle_teaser_kv_1_pc.png?v=1725251315&width=2880
        "
          alt=""
        />

        <section className="HotSale-section bg-[#d2b9de] pt-[40px]">
          <div className="flex flex-col  px-[50px] justify-center items-center">
            <div className="title flex justify-center items-center flex-col">
              <h2 className="text-[30px] font-bold  text-center">HOT SALE</h2>
              <p className="mt-2">熱銷商品</p>
            </div>
            <div className="flex justify-center flex-wrap items-center   w-full  py-[40px] ">
              <div className="hot-item  ">
                <img
                  className="w-[300px] h-[300px] border border-black m-3"
                  src="https://uniam.jp/cdn/shop/files/nekogurui-sticker-main.png?v=1720572069&width=500"
                  alt=""
                />
                <p className="item-title">ねこ狂いステッカー</p>
                <b className="tiem-type bg-white rounded-[20px] px-3 text-[12px]">
                  ポスト投函
                </b>
                <p className="item-price text-[14px] font-normal">
                  ¥ 480/税込〜
                </p>
                <a
                  href=""
                  className="border bg-white mt-3 text-center p-2 w-[140px] border-black"
                >
                  BUY NOW
                </a>
              </div>
              <div className="hot-item  ">
                <img
                  className="w-[300px] h-[300px] border border-black m-3"
                  src="https://uniam.jp/cdn/shop/files/top_lineup_puree.png?v=1718847937&width=500"
                  alt=""
                />
                <p className="item-title">ねこ狂いステッカー</p>
                <b className="tiem-type bg-white rounded-[20px] px-3 text-[12px]">
                  ポスト投函
                </b>
                <p className="item-price text-[14px] font-normal">
                  ¥ 480/税込〜
                </p>
                <a
                  href=""
                  className="border bg-white mt-3 text-center p-2 w-[140px] border-black"
                >
                  BUY NOW
                </a>
              </div>
              <div className="hot-item relative ">
                <div className="circle absolute top-[20px] border border-black w-[40px] rounded-full bg-[#fad711] z-[99999] flex justify-center items-center h-[40px] right-[20px] ">
                  NEW
                </div>
                <img
                  className="w-[300px] h-[300px] border border-black m-3"
                  src="https://uniam.jp/cdn/shop/files/kakurega_main_2.png?v=1720442397&width=500"
                  alt=""
                />
                <p className="item-title">ねこ狂いステッカー</p>
                <b className="tiem-type bg-white rounded-[20px] px-3 text-[12px]">
                  ポスト投函
                </b>
                <p className="item-price mb-5 text-[14px] font-normal">
                  ¥ 480/税込〜
                </p>
                <a
                  href=""
                  className="border bg-white mt-3 text-center p-2 w-[140px] border-black"
                >
                  BUY NOW
                </a>
              </div>
              <div className="hot-item  relative p-0 m-0 ">
                <div className="circle absolute top-[20px] border border-black w-[40px] rounded-full bg-[#fad711] z-[99999] h-[40px] text-[14px] flex justify-center items-center right-[20px] ">
                  NEW
                </div>
                <div className="bg-white">
                  <img
                    className="w-[300px]  h-[300px] border border-black m-3"
                    src="https://uniam.jp/cdn/shop/files/wildsnack-set_main_transparent.png?v=1720571939&width=500"
                    alt=""
                  />
                </div>

                <p className="item-title">ねこ狂いステッカー</p>
                <b className="tiem-type bg-white rounded-[20px] px-3 text-[12px]">
                  ポスト投函
                </b>
                <p className="item-price text-[14px] font-normal">
                  ¥ 480/税込〜
                </p>
                <a
                  href=""
                  className="border bg-white mt-3 text-center p-2 w-[140px] border-black"
                >
                  BUY NOW
                </a>
              </div>
            </div>
            <div className="footer-txt w-full flex justify-start flex-col items-start">
              <b className="text-[24px] text-left font-bold">Newsletter</b>
              <p className="text-[16px] w-1/2 mt-5">
                LINEで友だち登録をすると、送料無料クーポンをプレゼント！
                限定クーポンや新商品のご案内など、おトクな情報を発信していきます。
              </p>
            </div>
          </div>
          <a
            href="#"
            className="contact-btn inline-block  mx-auto w-[200px] border bg-white border-black p-3  items-center flex justify-center"
          >
            Line btn
          </a>
        </section>
        <section className="section-marquee py-[50px]">
          <Marquee>
            <div className="flex justify-center">
              <img
                className="border w-[270px] mx-5  border-black"
                src="https://uniam.jp/cdn/shop/files/catsloop_line2_3.png?v=1718827097&width=300 "
                alt=""
              />
              <img
                className="border w-[270px] mx-5  border-black"
                src="https://uniam.jp/cdn/shop/files/catsloop_line2_6.png?v=1718827097&width=300"
                alt=""
              />
              <img
                className="border w-[270px] mx-5  border-black"
                src="https://uniam.jp/cdn/shop/files/catsloop_line2_1.png?v=1718827097&width=300 "
                alt=""
              />
              <img
                className="border w-[270px] mx-5  border-black"
                src="https://uniam.jp/cdn/shop/files/catsloop_line1_6.png?v=1718827097&width=300 "
                alt=""
              />
              <img
                className="border w-[270px] mx-5  border-black"
                src="https://uniam.jp/cdn/shop/files/catsloop_line1_5.png?v=1718827097&width=300"
                alt=""
              />
              <img
                className="border w-[270px] mx-5  border-black"
                src="https://uniam.jp/cdn/shop/files/catsloop_line1_3.png?v=1718827097&width=300"
                alt=""
              />
            </div>
          </Marquee>
          <Marquee>
            <div className="flex justify-center">
              <img
                className="border w-[270px] mx-5  border-black"
                src="https://uniam.jp/cdn/shop/files/catsloop_line2_3.png?v=1718827097&width=300 "
                alt=""
              />
              <img
                className="border w-[270px] mx-5  border-black"
                src="https://uniam.jp/cdn/shop/files/catsloop_line2_6.png?v=1718827097&width=300"
                alt=""
              />
              <img
                className="border w-[270px] mx-5  border-black"
                src="https://uniam.jp/cdn/shop/files/catsloop_line2_1.png?v=1718827097&width=300 "
                alt=""
              />
              <img
                className="border w-[270px] mx-5  border-black"
                src="https://uniam.jp/cdn/shop/files/catsloop_line1_6.png?v=1718827097&width=300 "
                alt=""
              />
              <img
                className="border w-[270px] mx-5  border-black"
                src="https://uniam.jp/cdn/shop/files/catsloop_line1_5.png?v=1718827097&width=300"
                alt=""
              />
              <img
                className="border w-[270px] mx-5  border-black"
                src="https://uniam.jp/cdn/shop/files/catsloop_line1_3.png?v=1718827097&width=300"
                alt=""
              />
            </div>
          </Marquee>
        </section>
        <section className="section-blog py-[50px] bg-[#faf4dd]">
          <div className="top-section relative flex">
            <div className="left  h-[500px] absolute top-0 left-0 bg-[url('https://uniam.jp/cdn/shop/files/feature_foodforcats_main.png?v=11537227399702081125')] w-full bg-cover bg-no-repeat"></div>
            <div className="txt absolute top-[100px] left-[200px]">
              <h3 className="text-black  text-[26px]font-normal mb-3">
                ユニアムの「3つの特徴」
              </h3>
              <p> ねこ専門のユニアムだから、 ねこの幸せだけをとことん追求。</p>
            </div>
          </div>
        </section>
        {/* <section className="section-blog">
          <div className="blog flex relative justify-center items-center  flex-row">
            <div className="w-[300px] h-[300px]">
              <div className="img">
                <img
                  className="w-full"
                  src="https://uniam.jp/cdn/shop/files/top_brand_3.png?v=939677700641855174"
                  alt=""
                />
              </div>
              <div className="txt">
                <b className="text-[22px]">
                  ねこ狂いが生み出す ユニアムクオリティ
                </b>
                <p className="text-[14px] mt-3">
                  深いねこ愛が、ユニアム最大のリソース。ねこの幸せを一番に考え、試作とねこによる厳しいテストを何度も重ねながら、アイディアを形にしています。ねこ狂いしかいないチームだからこそ、ねこのためには時間も手間も惜しみません。
                </p>
              </div>
            </div>
          </div>
        </section> */}
      </div>
      {/* <div className='h-[100vh] items-center flex justify-center bg-black'>
               
            </div> */}

      {/* <p>{ProductPost.description}</p>
            <p className="hidden">Date Published: {ProductPost.datePublished}</p>
           
            <img src={ProductPost.image} alt={ProductPost.title} /> */}

      {/* JSON-LD for Blog Post */}

      {/* 結構化資料 UH1 */}

      <div className="bg-[#f1f0ee] ">{/* <ParallaxCarousel/> */}</div>
      <h1 className="text-[50px] font-bold text-center">Make Up</h1>
    </div>
  </div>
);

export default Product;
