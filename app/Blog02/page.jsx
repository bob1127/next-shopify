"use client";

// import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import Track from "../../components/Trackeye/page.jsx";
import ReactSlick from "../../components/ReactSlick/ImageSlider.jsx";
import emblaCarousel from "../../components/EmblaCarousel/EmblaCarousel.jsx";

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

      {/* <Track /> */}

      {/* <div className="bg-[#f1f0ee] "></div> */}
    </div>

    <section className="section-blog-inner p-10 pt-[200px] px-[90px]">
      <div className="flex xl:flex-row justify-center xl:items-start items-center flex-col">
        <div className="w-full sm:w-[70%]  xl:w-[60%]">
          <div className="title bg-[#61b0f2] border-b-none border border-black  w-full py-[10px]">
            <div className="date   flex justify-center">
              <p className="text-black text-[20px]">2024.8.30 Friday</p>
            </div>
          </div>
          <div className="title border p-5 border-black">
            <p className="text-[22px] font-normal text-center">
              「niko and
              ...」がアメコミ風のポップなテーマで海外アイテムを集めた『TOY！TOY！JOY！』を8月30日（金）より開催！
            </p>
          </div>
          <div className="content p-5 border border-black">
            <div className="p-3">
              <p>
                niko and
                ...（ニコアンド）は、アメコミ風のポップなテーマで海外アイテムを集めた『TOY！TOY！JOY！』を、8月30日（金）より一部店舗で開催します。
              </p>
            </div>
            <img
              className="w-full"
              src="https://www.nikoand.jp/wp-content/uploads/2024/08/banner_1080x10801.jpg"
              alt=""
            />
            <div className="p-10">
              <b>
                懐かしさを感じるアメリカ雑貨やキャラクターグッズ、そしてSNSで話題のグミなど、今人気のあるお菓子を幅広く展開いたします。アメリカンヴィンテージの雰囲気が漂う雑貨や、ポップなキャラクターアイテムは、見ているだけで楽しくなるようなラインアップです。
              </b>
              <p className="w-1/2">
                懐かしい！かわいい♡ おもちゃを見ると、
                いまだに心がおどってしまうのはなんでだろう。
                眺めているだけでハッピーになれる、 それって実はすごいこと。
                おもちゃのある生活、もう一度はじめませんか？
              </p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-[70%] xl:w-[40%]">
          <div className="flex mb-4  justify-between">
            <div className="w-1/2"></div>
            <div className="w-1/2 flex justify-end">
              <img
                className="w-[340px]"
                src="https://www.nikoand.jp/wp-content/uploads/2024/08/0902billy_banner_base.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-start ">
            <div className="title p-2 border-black border bg-[#61b0f2]">
              <p className="font-bold">RELATED POSTS 関連度の高いお知らせ</p>
            </div>
            <div className="items flex flex-col justify-center items-center">
              <div className="item flex mt-4 p-5" data-aos="fade-up">
                <div className="product-img w-1/2 p-4">
                  <img
                    className="w-[80%] mx-auto"
                    src="https://www.nikoand.jp/wp-content/uploads/2024/06/S__114442265-300x300.jpg"
                    alt=""
                  />
                </div>
                <div className="txt border-b-2 border-black  justify-between items-between flex flex-col  py-4 w-1/2">
                  <p className="text-[14px]">
                    「niko and
                    ...」が純喫茶・銭湯・町中華で過ごす休日をイメージした店舗限定・特集企画「下町ルネッサンス」を2024年6月21日（金）スタート！
                  </p>
                  <b className="date-inner text-[12px]">2024.05.94</b>
                </div>
              </div>
              <div className="item flex mt-4 p-5" data-aos="fade-up">
                <div className="product-img w-1/2 p-4">
                  <img
                    className="w-[80%] mx-auto"
                    src="https://www.nikoand.jp/wp-content/uploads/2024/06/S__114442265-300x300.jpg"
                    alt=""
                  />
                </div>
                <div className="txt border-b-2 border-black  justify-between items-between flex flex-col  py-4 w-1/2">
                  <p className="text-[14px]">
                    「niko and
                    ...」が純喫茶・銭湯・町中華で過ごす休日をイメージした店舗限定・特集企画「下町ルネッサンス」を2024年6月21日（金）スタート！
                  </p>
                  <b className="date-inner text-[12px]">2024.05.94</b>
                </div>
              </div>
              <div className="item flex mt-4 p-5" data-aos="fade-up">
                <div className="product-img w-1/2 p-4">
                  <img
                    className="w-[80%] mx-auto"
                    src="https://www.nikoand.jp/wp-content/uploads/2024/06/S__114442265-300x300.jpg"
                    alt=""
                  />
                </div>
                <div className="txt border-b-2 border-black  justify-between items-between flex flex-col  py-4 w-1/2">
                  <p className="text-[14px]">
                    「niko and
                    ...」が純喫茶・銭湯・町中華で過ごす休日をイメージした店舗限定・特集企画「下町ルネッサンス」を2024年6月21日（金）スタート！
                  </p>
                  <b className="date-inner text-[12px]">2024.05.94</b>
                </div>
              </div>
              <div className="item flex mt-4 p-5" data-aos="fade-up">
                <div className="product-img w-1/2 p-4">
                  <img
                    className="w-[80%] mx-auto"
                    src="https://www.nikoand.jp/wp-content/uploads/2024/06/S__114442265-300x300.jpg"
                    alt=""
                  />
                </div>
                <div className="txt border-b-2 border-black  justify-between items-between flex flex-col  py-4 w-1/2">
                  <p className="text-[14px]">
                    「niko and
                    ...」が純喫茶・銭湯・町中華で過ごす休日をイメージした店舗限定・特集企画「下町ルネッサンス」を2024年6月21日（金）スタート！
                  </p>
                  <b className="date-inner text-[12px]">2024.05.94</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <emblaCarousel />
      </div>
    </section>
  </div>
);

export default Product;
